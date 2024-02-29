---
layout: post
tags: [post]
title: "Boa release v0.18"
author: Boa Developers
---

## Summary

Boa v0.18 is now available! After 7 months of development we are very happy to present you the latest
release of the Boa JavaScript engine. Boa makes it easy to embed a JS engine in your projects, and
you can even use it from WebAssembly. See the [about](/about) page for more info.

In this release, our conformance has grown from 79.36% to 85.03% in the official ECMAScript Test Suite
(Test262). This means we now pass **3,550** more tests than in the previous version. Moreover, our
amount of ignored tests decreased from **9,496** to **1,391** thanks to all the new builtins we have
implemented for this release.

You can check the full list of changes [here][changelog], and the full information on conformance
[here][conformance].

This big release was partly possible thanks to those who have [supported us](https://opencollective.com/boa).
Thanks to funds we've received we have been able to renew our domain name, remunerate members of the
team who have worked on the features released, and discuss the possibility of using dedicated servers
for benchmarking. If you wish to sponsor Boa, you can do so by donating to our [open collective][collective].
You can also check [easy][easy_issues] or [good first issues][first_issues] if you want to contribute
some code instead.

[changelog]: https://github.com/boa-dev/boa/blob/v0.18/CHANGELOG.md
[conformance]: https://boajs.dev/boa/test262/
[collective]: https://opencollective.com/boa
[easy_issues]: https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3AE-Easy
[first_issues]: https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22

## Highlights

### We're on [test262.fyi](https://test262.fyi/)!

Thanks to the amazing work of [CanadaHonk](https://twitter.com/CanadaHonk), Boa is now listed on
[test262.fyi](https://test262.fyi/)! This is a daily runner of the official test262 test suite that
runs a nightly build of Boa, along with other engines, and updates the results every day. This is
using the tip of the main branch of Boa alongside the [latest test262](https://github.com/tc39/test262)
changes pushed to their main branch.

This is a great achievement for us and we are very proud to be listed alongside other major JavaScript
engines. It should be much easier for users to compare Boa's conformance tests with other engines.

Below is a screenshot showing Boa being 83% conformance with the latest tests and to the right
statistics on the time taken to performa a full test run in comparison to other engines.

![img](./conformance_dark.webp)

### Temporal

A lot of work has been put over the past few months on the Temporal API. The Temporal API is a new
set of built-in objects and functions that is designed to be a more modern replacement for the `Date`
object, providing a more feature-rich and flexible API for working with dates and times.

It is currently a [stage 3 proposal](https://tc39.es/proposal-temporal/docs/) and we are working
alongside the TC39 champions to put together a solid implementation. Since Temporal is such an
extensive specification, we have done most of the work outside of Boa so that it can be used in other
projects. This work can be found in the [temporal_rs](https://github.com/boa-dev/temporal/) repository.


We hope to release a full blog post on Temporal in the future, but for now, here is a couple small
examples of Temporal in JavaScript and Rust:

<!-- TODO: Adjust below date to the release date. -->

```javascript
// JavaScript's Temporal built-in object.

// For example, you can customize you're own calendar implementations!
class CustomCalendar extends Temporal.Calendar {
  constructor() {
    super("iso8601");
  }
  inLeapYear(dateLike) {
    messageInACalendar = "It's a message in a Calendar!";
    return dateLike.daysInYear === 366;
  }
}

let messageInACalendar;
// Construct the CustomCalendar.
const calendar = new CustomCalendar();

const boaReleaseDay = new Temporal.PlainDate(2024, 3, 1, calendar);
const leap = boaReleaseDay.inLeapYear;

messageInACalendar;
// Outputs: "It's a message in a Calendar!"
```

```rust
// Rust's `temporal_rs` crate
use temporal_rs::{components::{calendar::CalendarSlot, Date}, options::ArithmeticOverflow };
use std::str::FromStr;

// Create a Calendar slot value from a string
let calendar = CalendarSlot::<()>::from_str("iso8601").unwrap();

// Create a date. The date can be made to either reject or constrain the input.
let date = Date::<()>::new(2024, 3, 1, calendar, ArithmeticOverflow::Reject).unwrap();

assert_eq!(date.iso_year(), date.year().unwrap());

```

If you're interested in learning more or you want to contribute to Temporal, feel free to check out
[`temporal_rs`](https://github.com/boa-dev/temporal/)'s issues!

## RegExp

Over the past 7 months there has been some effort poured into an improved implementation of RegExp.

Thanks to [@dirkdev98](https://github.com/dirkdev98) who added support for
[RegExp.prototype.hasIndices][has_indices]. On top of this there have been some changes by our core
developers to make the engine adhere to the specification more. This involves other new features
such as support for Unicode sets with the `v` flag, proper support for UTF-16 searches, and fixes
around the `RegExp()`, `RegExp.toString()` and `RegExp.match()` methods

Here is a table showing the progress of RegExp between v0.17 and v0.18:

| Test262 | v0.17 (July 2023) | v0.18 (Feb 2024) |
|---------|-------------------|------------------|
| Total   | 1,915             | 1,920            |
| Pass    | 1,071             | 1,878            |
| Fail    | 132               | 2                |
| Skipped | 712               | 40               |

That's a whopping 807 more tests passed!
We only have two failing tests left and both are caused by the lack of Unicode 15.1 support.
The remaining skipped tests are all related to stage 3 proposals.

[has_indices]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices

## Shared Array Buffer + Atomics

The [SharedArrayBuffer] and [Atomics] builtins have been implemented in this release.
This means embedders can now orchestrate `Context`s running on separate threads to execute
shared work between them.

The `Atomics` builtin object contains several static methods that allow executing atomic operations
on shared memory. In addition to that, it also contains the `wait()` and `notify()` methods, which
offers the same functionality as Linux futexes for JS's worker threads:

```js
// On the main thread
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
send(worker1, int32);
send(worker2, int32);

// On worker1
int32 = receive();
Atomics.wait(int32, 0, 0);
console.log(int32[0]) // 123

// On worker2
int32 = receive();
console.log(int32[0]); // 0
Atomics.store(int32, 0 , 123);
Atomics.notify(int32, 0, 1);
```

[SharedArrayBuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
[Atomics]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics

## Intl updates

We're keeping the good progress on our `Intl` implementation, and now we have the [`Intl.PluralRules`]
builtin and (a first prototype of) the [`Intl.NumberFormat`] builtin in place.

As mentioned by the [Mozilla docs][description]:

> Languages use different patterns for expressing both plural numbers of items (cardinal numbers) and
> for expressing the order of items (ordinal numbers). English has two forms for expressing cardinal
> numbers: one for the singular "item" (1 hour, 1 dog, 1 fish) and the other for zero or any other
> number of "items" (0 hours, 2 lemmings, 100000.5 fish), while Chinese has only one form, and Arabic
> has six! Similarly, English has four forms for expressing ordinal numbers: "th", "st", "nd", "rd",
> giving the sequence: 0th, 1st, 2nd, 3rd, 4th, 5th, ..., 21st, 22nd, 23rd, 24th, 25th, and so on,
> while both Chinese and Arabic only have one form for ordinal numbers.

This variation between languages makes it really hard to properly localize a cardinal or ordinal number.
To fix this, the CLDR (Common Locale Data Repository) project has been collecting information about
the "plural category" of certain numeric patterns on many languages, and `Intl.PluralRules` objects
are the builtin objects that enable obtaining this information in an easy way:

```js
const pr = new Intl.PluralRules("en-US", { type: "ordinal" });

const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);

const getSuffix = (n) => {
  return suffixes.get(pr.select(n))
}

console.log(getSuffix(0)) // "th"
console.log(getSuffix(1)) // "st"
console.log(getSuffix(2)) // "nd"
console.log(getSuffix(3)) // "rd"
console.log(getSuffix(4)) // "th"

console.log(getSuffix(21)) // "st"
console.log(getSuffix(42)) // "nd"
console.log(getSuffix(73)) // "th"
```

On the same vein, [`Intl.NumberFormat`] objects can format numbers in a language-sensitive way:

```js
const nf = new Intl.NumberFormat("bn", {
    useGrouping: "min2",
    minimumSignificantDigits: 3,
    maximumSignificantDigits: 7
});

console.log(nf.format(10003.1234)) // ১০,০০৩.১২
```

However, we need to mention that `Intl.NumberFormat` is NOT feature complete at the moment, since it
only allows formatting numbers in the standard notation with no currencies or units. We're still
working on adding the missing features, but we hope that this initial prototype is at least useful
for some use cases.

[`Intl.PluralRules`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
[`Intl.NumberFormat`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
[description]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules#description

## Builtins updates

// TODO

## Miscellaneous updates

// TODO

## Optimizations

The following benchmarks are taken from the v8 benchmark suite:

| Boa Version | Richards | DeltaBlue | Crypto | RayTrace | EarleyBoyer | Splay | NavierStokes | Total |
|-------------|----------|-----------|--------|----------|-------------|-------|--------------|-------|
| v0.16       | 29.0     | 29.2      | 42.1   | 107      | 105         | 111   | 15.4         | 49.1  |
| v0.17       | 34.3     | 39.1      | 49.1   | 134      | 119         | 141   | 11.9         | 56.2  |
| v0.18       | 49.8     | 53.9      | 52.1   | 161      | 152         | 154   | 102          | 91.5  |

### Inline Caching

With the implementation of the Hidden Maps (object shapes) in version `v0.17`, we are able to implement inline caching, the concept is based on the observations that the objects that occur at a particular property access are often of the same object shape. In those cases, performance can be greatly increased by storing the result of a property lookup "inline" directly at the property access bytecode. To facilitate this process, property accesses are assigned different states. Initially, a property access is considered to be uninitialized.

Once we reach a particular uninitialized property access, it performs the dynamic lookup, stores the result and changes its state to be a weak reference to the objects shape. If we reach the same property access again, it retrieves the stored shape and directly accesses the objects dense storagi, without doing a property lookup.

Currently we do eager monomorphic inline caching, so there is plently of room for improvement, which we plan to do for future releases!

## Conclusions


