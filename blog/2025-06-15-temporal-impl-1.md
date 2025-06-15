---
layout: post
tags: [post]
title:
  Implementing Temporal, the new date/time API for JavaScript (and
  Rust!)
metadata: ["temporal", "temporal_rs", "boa", "date/time"]
description:
  A blog post about the temporal_rs Rust crate that implements
  JavaScript's Temporal API and how temporal_rs supports implementing
  Temporal in JavaScript engines.
authors: boa-dev
---

This will be a series of posts primarily about implementing a new
JavaScript feature in Rust, specifically the new date/time built-in:
Temporal. We'll be going over general lessons and interesting design choices we've
stumbled upon, as well as the crates supporting that implementation.

Why should you care? Well we are not only implementing it for
JavaScript, but Rust as well ... more on that in a bit.

First, an aside!

## What even is Temporal?

Temporal is a modern API for handling date/time in a calendar and time
zone aware manner that includes nine objects with over 200+ methods.

In JavaScript, Temporal is a global built-in namespace object that
includes each of these nine built-ins:

- `Temporal.Now`
- `Temporal.PlainDate`
- `Temporal.PlainTime`
- `Temporal.PlainDateTime`
- `Temporal.ZonedDateTime`
- `Temporal.Duration`
- `Temporal.Instant`
- `Temporal.PlainYearMonth`
- `Temporal.PlainMonthDay`

But to be honest, this post isn't meant to give an overview of Temporal
and its general API. If Temporal is news to you and you are interested
in learning more, feel free to check out the phenomenal [MDN
documentation][mdn-temporal].

## Back on track

Being Boa a JavaScript engine / interpreter, developing a correct
implementation of the ECMAScript specification is our raison d'être.
This, in consequence, makes implementing Temporal one of our most
important goals, since it represents roughly 7-8% of the
current conformance test suite (~4000 of the ~50,000 tests).

When the PR of the first prototype of Temporal for Boa was submitted, a
few things became evident:

1. Date/Time is a complicated beast (duh)
2. There's room for optimization and improvement
3. This would be handy to have in Rust

So after the prototype was merged, we pulled it out of Boa's
internal builtins and externalized into its own crate,
[`temporal_rs`][temporal-rs-repo], which then first landed behind an
experimental flag in Boa v0.18.

After over a year and a half of development, Boa now sits at a conformance
of about 90% for Temporal (and growing), with the entire implementation
being backed by `temporal_rs`.

For its part, `temporal_rs` is shaping up to be a proper Rust date/time
library that can be used to implement temporal in a JavaScript engine or
for general usage purposes.

Let's take a look at Temporal: it's JavaScript API, it's Rust API in
`temporal_rs`, and how `temporal_rs` supports implementing the
specification.

## Important core differences

Let's briefly talk about JavaScript values (`JsValue`). This is
functionally the core `any` value type of JavaScript. A `JsValue` could
be a number represented as a 64 bit floating point, a string, a boolean,
or an object. Not only is it an `any`, but `JsValue` is ultimately engine
defined with various implementations existing across engines.

While this is handy for a dynamically typed language like JavaScript, it
is not ideal for implementing deep language specifications where an
object or string may need to be cloned. Furthermore, it's just not great
for an API in a typed language like Rust.

To work around this, we routinely use `FromStr` and a `FiniteF64` custom
primitive to handle casting and constraining, respectively, which
glues dynamic types like `JsValue` with a typed API.

For instance, in Boa, we heavily lean into using the below patterns:

```rust
// (Note: this is abridged for readability)

// FiniteF64 usage
let number: f64 = js_value.to_number(context)?;
let finite_f64: FiniteF64 = FiniteF64::try_from(number)?;
let year: i32 = finite_f64.as_integer_with_truncation::<i32>();

// FromStr usage with `get_option`
let options_obj: &JsObject = get_options_object(&js_value)?;
let overflow: Option<ArithmeticOverflow> = get_option::<ArithmeticOverflow>(
    &options_obj,
    js_string!("overflow"),
    context
)?;
```

This is the core glue between Boa and the `temporal_rs` API that we will
be going over below.

## Implementing constructors

There are a variety of ways to construct a core component like
`PlainDate`, and that stems from the core constructor for each of the
core components: `new_with_overflow`.

```rust
impl PlainDate {
    pub fn new_with_overflow(year: i32, month: u8, day: u8, calendar: Calendar, overflow: ArithmeticOverflow) -> Result<Self> {
        // Create PlainDate
    }
}
```

This function supports the baseline construction of Temporal builtins,
which takes the usual year, month, day, alongside a calendar and also an
overflow option to constrain or reject based on whether the provided
values are in an expected range.

However, we can better express this in Rust with common `try_` prefix
notation.

```rust
impl PlainDate {
    pub fn new(year: i32, month: u8, day: u8, calendar: Calendar) -> Result<Self> {
        Self::new_with_overflow(year, month, day, calendar, ArithmeticOverflow::Constrain)
    }

    pub fn try_new(year: i32, month: u8, day: u8, calendar: Calendar) -> Result<Self> {
        Self::new_with_overflow(year, month, day, calendar, ArithmeticOverflow::Reject)
    }
}
```

These three constructors, `new_with_overflow`, `try_new`, and `new`, are
fairly flexible and provide full coverage of the Temporal specification.

For instance, take the below snippet:

```js
const plainDate = new Temporal.PlainDate(2025, 6, 9);
```

This code can easily be translated to Rust as:

```rust
use temporal_rs::PlainDate;
let plain_date = PlainDate::try_new(2025, 6, 9, Calendar::default())?;
```

Furthermore, we actually learn some interesting things about the
JavaScript API from looking at the `temporal_rs` API:

1. `Temporal.PlainDate` constructor can throw.
2. When the calendar is omitted, the default calendar is used (this will
   default to the `iso8601` calendar)

Of course, if you somewhat prefer the brevity of the JavaScript API and
don't want to list the default `Calendar`, `temporal_rs` provides the
additional constructors `new_iso` and `try_new_iso`.

```rust
use temporal_rs::PlainDate;
let plain_date = PlainDate::try_new_iso(2025, 6, 9)?;
```

Interestingly enough, the `_iso` constructors are actually extensions of
Temporal specification to provide a similar API in Rust. This is because
the `_iso` constructors are assumed to exist due to resolving an
`undefined` calendar to the default ISO calendar.

## Let's discuss `Now`

> Colonel Sandurz: Now. You're looking at now, sir. Everything that
> happens now, is happening now.<br></br> Dark Helmet: What happened to
> then?<br></br> Colonel Sandurz: We passed then.<br></br> Dark Helmet:
> When?<br></br> Colonel Sandurz: Just now. We're at now now.<br></br>
> Dark Helmet: Go back to then.<br></br> Colonel Sandurz: When?<br></br>
> Dark Helmet: Now.<br></br> Colonel Sandurz: Now?<br></br> Dark Helmet:
> Now.<br></br> Colonel Sandurz: I can't.<br></br> Dark Helmet:
> Why?<br></br> Colonel Sandurz: We missed it.<br></br> Dark Helmet:
> When?<br></br> Colonel Sandurz: Just now.<br></br> Dark Helmet: When
> will then be now?<br></br> -- <cite>Spaceballs, 1987</cite>

`Temporal.Now` is an incredibly strange type, yet nevertheless
important. It is the object from which the current instant can be
measured and mapped into any of the Temporal components.

In JavaScript, this type has no `[[Construct]]` or `[[Call]]` internal
method, which is a fancy way to say that Now has no constructor and
cannot be called directly.

Instead, Now is used primarily as a namespace for its methods.

And this was reflected in early adaptions of Now, which looked more or
less like the below:

```rust
struct Now;

impl Now {
    pub fn instant() -> Instant;

    pub fn zoned_date_time_iso() -> ZonedDateTime;
}
```

Interestingly enough, the above implementation is incorrect, or at the
very least not ideal.

Hidden in the specification steps for Now are some very tricky steps
invoking the abstract operations: `SystemTimeZoneIdentifier` and
`SystemUtcEpochNanoseconds`. That's great, let's just use the usual
suspects `SystemTime` and `iana-time-zone`, merge it, and call it a day
on the implementation, right?

Except the core purpose of `temporal_rs` is that it can be used in any
engine implementation, and accessing a system clock and system time zone
is sometimes difficult for engines that support targets like embedded systems.
Thus, this functionality must be delegated to the engine or runtime ... somehow.

So how did we end up implementing Now if we have no access to the system
clock or time zone? Well, a builder pattern of course!

```rust
#[derive(Default)]
pub struct NowBuilder {
    clock: Option<EpochNanoseconds>,
    zone: Option<TimeZone>,
}

impl NowBuilder {
    pub fn with_system_nanoseconds(mut self, nanoseconds: EpochNanoseconds) -> Self {
        self.clock = Some(nanoseconds);
        self
    }

    pub fn with_system_zone(mut self, zone: TimeZone) -> Self {
        self.zone = Some(zone);
        self
    }

    pub fn build(self) -> Now {
        Now {
            clock: self.clock,
            zone: self.zone.unwrap_or_default(),
        }
    }
}

pub struct Now {
    clock: Option<EpochNanoseconds>,
    zone: TimeZone,
}
```

Once we've constructed `Now`, then we are off to the races!

The nice part about this approach is that it also allows a `std`
implementation that can be feature gated for general users that are not
concerned with `no_std`.

```rust
    // Available with the `sys` feature flag
    use temporal_rs::Temporal;
    let now = Temporal::now().instant();
```

## Partial API

There's an interesting method on each of the Temporal built-ins that I'd
assume most people who have used Rust would be familiar with: `from`. But
this isn't Rust's friendly `From` trait. No, this `from` is a behemoth
method that takes a `JsValue` and automagically gives you back the
built-in that you'd like or throws. That's right! Give it a string, give
it a property bag, give it another built-in; `from` will figure it out
for you!

Simple, right?

Well we're pleased to announce that `temporal_rs` won't be supporting
that! ... At least in one method.

Again, the goal of `temporal_rs` is to implement the specification to
the highest degree possible and where it can't implement the
specification like in the case of a `from<JsValue>`, it provides methods
to support the implementation of Temporal in engines.

Let's take a look at some valid uses of `from` in JavaScript to
construct a `PlainDate`.

```js
// Create a `PlainDateTime`
const pdt = new Temporal.PlainDateTime(2025, 1, 1);
// We can use the `PlainDateTime` (`ZonedDateTime` / `PlainDate` are also options).
const pd_from_pdt = Temporal.PlainDate.from(pdt);
// We can use a string.
const pd_from_string = Temporal.PlainDate.from("2025-01-01");
// We can use a property bag.
const pd_from_property_bag = Temporal.PlainDate.from({
  year: 2025,
  month: 1,
  day: 1,
});
```

It turns out that the above operations is all that needs to be
implemented by `temporal_rs` in order to support a Temporal
implementation, we just need to implement `From<PlainDateTime>`,
`From<ZonedDateTime>`, `FromStr`, and `From<JsObject>` ... oh. Did I
mention `JsObject`, like `JsValue`, is implementation defined as well?

This is where `temporal_rs`'s Partial API comes in.

It turns out that while property bags in JavaScript can have various
fields set, there is still a general shape for the fields that can be
provided and validated in Temporal.

So in order to support this in `temporal_rs`, a "partial" component
exists for each of the components that can then be provided to that
components `from_partial` method.

With this, we have fully implemented support for the `from` method in
`temporal_rs`:

```rust
use core::str::FromStr;
use temporal_rs::{PlainDate, PlainDateTime, partial::PartialDate};
let pdt = PlainDateTime::try_new_iso(2025, 1, 1)?;
// We can use the `PlainDateTime` (`ZonedDateTime` / `PlainDate` are also options).
let pd_from_pdt = PlainDate::from(pdt);
// We can use a `str`.
let pd_from_string = PlainDate::from_str("2025-01-01")?;
// We can use a `PartialDate`.
let pd_from_partial = PlainDate::from_partial(PartialDate {
    year: Some(2025),
    month: Some(1),
    day: Some(1),
    ..Default::default()
});
```

**NOTE:** there may be updates to `PartialDate` in the future (see
[boa-dev/temporal #349](https://github.com/boa-dev/temporal/issues/349)
for more information).

## Elephant in the room: time zones

So far we have not discussed time zones, and -- surprise! -- we aren't
going to ... yet. It's not because they aren't super cool and
interesting and everyone totally 100% loves them. No, time zones aren't
in this post, because they are still being polished and deserve an
entire post of their own.

So stay tuned for our next post on implementing Temporal! The one where
we'll hopefully go over everyone's favorite subject, time zones; and
answer the question that some of you may have if you happen to take a
glance at `temporal_rs`'s docs or try out our `no_std` support: what in
the world is a provider API?

## Conclusion

In conclusion, we're implementing Temporal in Rust to support engine
implementors as well as to have the API available in native Rust in
general.

Boa currently sits at a [90% conformance rate][boa-test262] for Temporal
completely backed by `temporal_rs` v0.0.8, and we're aiming to be 100%
conformant before the end of the year.

If you're interested in trying Temporal using Boa, you can use it in
Boa's CLI or enable it in `boa_engine` with the `experimental` flag.

Outside of Boa's implementation, `temporal_rs` has implemented or
supports the implementation for a large portion of the Temporal's API in
native Rust.

If you're interested in trying out `temporal_rs`, feel free to add it to
your dependencies with the command:

```bash
cargo add temporal_rs
```

or by adding the below in the `[dependencies]` section of your `Cargo.toml`:

```toml
temporal_rs = "0.0.9"
```

A FFI version of temporal is also available for C and C++ via
`temporal_capi`.

## General note on API stability

While the majority of the APIs discussed above are expected to be mostly
stable. Temporal is still a stage 3 proposal that is not fully accepted
into the ECMAScript specification. Any normative change that may be made
upstream in the ECMAScript or ECMA402 specification will also be
reflected in `temporal_rs`.

There are also a few outstanding issues with changes that may reflect in
the API.

1.  Duration's inner repr and related constructors.
2.  TemporalError's inner repr
3.  Partial objects may need some adjustments to handle differences
    between `from_partial` and `with`
4.  Time zone provider's and the `TimeZoneProvider` trait are still
    largely unstable. Although, the provider APIs that use them are
    expected to be stable (spoilers!)
5.  Era and month code are still be discussed in the intl-era-month-code
    proposal, so some calendars and calendar methods may have varying
    levels of support.

The above issues are considered blocking for a 0.1.0 release.

[mdn-temporal]:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal
[temporal-rs-repo]: https://github.com/boa-dev/temporal
[boa-test262]: https://test262.fyi/#|boa
