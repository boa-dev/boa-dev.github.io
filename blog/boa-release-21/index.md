---
layout: post
tags: [post]
title: "Boa release v0.21"
description: "Boa release v0.21"
authors: boa-dev
---

## Summary

Boa v0.21 is now available! After 9 months of development we are very
happy to present you the latest release of the Boa JavaScript engine.
Boa makes it easy to embed a JS engine in your projects, and you can
even use it from WebAssembly. See the [about](/about) page for more
info.

In this release, our conformance has grown from 89.92% to 93.94% in the
official ECMAScript Test Suite (Test262). Our growth in conformance is
driven by increased conformance for Temporal (discussed further below)
with the rest of the development effort being focused on performance,
internal improvements, and runtime features. We will continue to implement
more of the specification; however, as of the current moment, Boa's conformance
aligns with the major browser engine's conformance, so future increases
in conformance will be minor or bound to the feature size going forward.

You can check the full list of changes [here][changelog], and the full
information on conformance [here][conformance].

<!--truncate-->

## Feature Highlights

### Temporal

There has been a lot of progress made on Temporal, the new Stage 3
date/time proposal. With this release, Boa's conformance on Temporal
grew from 40.67% to ~97%.

The implementation is backed by the `temporal_rs` date/time Rust
library, which we went over briefly in our June
[blog post](./2025-06-15-temporal-impl-1.md) with hopefully another post
in the not too distant future. So far, `temporal_rs` has also been used in
both V8 and Keisel to implement Temporal.

Temporal can be used from `boa_cli` or enabled in `boa_engine` with the
`experimental` or `temporal` feature.

You can also try out Temporal directly in Rust using `temporal_rs`:

```
cargo add temporal_rs
```

#### Special thanks

Special thanks to all the student's from University of Bergen who helped contribute to
`temporal_rs` and Boa, as well as Shane Carr ([@sffc](https://github.com/@sffc)) and
Manish Goregaokar ([@manishearth](https://github.com/@manishearth)) for their contributions
and help with `temporal_rs`.

### Span nodes and error backtraces

We also add support for span nodes in our parser and AST. Span nodes mark the start and
end index in the source code for a specific token.

As a result, this release of Boa supports error backtraces when an exception is thrown
as seen below.

![backtrace-example](./img/backtrace.gif)

This feature will greatly help with debugging errors when using Boa.

### Specification updates

#### Set methods

This release adds support for the new set methods added in ES2025.

The new methods are:

- `Set.prototype.intersection(other)`
- `Set.prototype.union(other)`
- `Set.prototype.difference(other)`
- `Set.prototype.symmetricDifference(other)`
- `Set.prototype.isSubsetOf(other)`
- `Set.prototype.isSupersetOf(other)`
- `Set.prototype.isDisjointFrom(other)`

Thanks to [@Hemenguelbindi](https://github.com/@Hemenguelbindi) for
their work on this feature.

#### Float16 support for TypedArrays, Dataview and Math built-ins

This release adds support for `f16` types for the TypedArray, Dataview, and Math
built-ins.

```javascript
const x = new Float16Array([37, 42.123456]);
console.log(x[1]); // 42.125
```

#### Error.isError

This release adds support for `Error.isError`, which is accepted for ES2026.

```javascript
let check = Error.isError(new Error()); // returns true
```

#### Math.sumPrecise

This release adds support for `Math.sumPrecise`, which is accepted for ES2026.

We've opted for using the new [`xsum`](https://crates.io/crates/xsum) summation algorithm
for the underlying implementation.

```javascript
let sum = Math.sumPrecise([1e20, 0.1, -1e20]);
console.log(sum); // 0.1
```

## Boa Runtime

Work on Boa's runtime crate has continued with additional APIs added.

### Additional APIs

Additional APIs added the the Runtime crate include:

- `fetch`
- `setTimeout`
- `setInterval`
- `clearInterval`
- `queueMicrotask`

### Conformance testing

We've added some support for conformance testing runtime features
against the Web Platform Tests (WPT).

## Performance

### NaN Boxing

With this release, Boa's `JsValue` will use nan-boxing by default. The NaN boxing of `JsValue`
increased memory and runtime performance over the older enum. 

As a note, the current implementation is not compatible with all platforms. While we hope
to address this in the future. The legacy enum JsValue will be available via the `jsvalue-enum`
feature flag.

Unfamiliar with NaN Boxing? We won't go over it in depth here, but we recommend
[this article](https://piotrduperas.com/posts/nan-boxing) to learn more.

### Register VM

Boa's virtual machine (VM) moved from a stack based VM to a register based VM in
[PR #3798](https://github.com/boa-dev/boa/pull/3798).

## New Contributors

TODO

## Looking Forward

### Garbage collector rewrite

This has been long overdue. Boa's garbage collector is a forked and
modified verison of `rust-gc`, and we have long been pushing our forked
gc to its limits.

We have seen plenty of evidence that simply swapping allocators can
increase Boa's performance, and work on this will hopefully resume soon.
If you're interested in garbage collectors and/or would be interested in
helping out, feel free to join our GC room on [Matrix].

### Runtime functionality

The `boa_runtime` crate was initially meant to contain functionality
that was not meant to exist in the core ECMAScript implementation, for instance
the console implementation. Noticeably, we have since added more runtime
features to the crate with even more features expected in the next release.

Our current plan is if there is enough interest and the crate becomes
too large, we will split `boa_runtime` into it's own repository. If you
are interested in implementing any runtime features or contributing to
a runtime, feel free to reach out.

### Continuing improvement of performance

As mentioned on previous release posts, we will continue to further work
on improving Boa's overall performance.

## How can you support Boa?

Boa is an independent JavaScript engine implementing the ECMAScript
specification, and we rely on the support of the community to keep it
going. If you want to support us, you can do so by donating to our [open
collective]. Proceeeds here go towards this very website, the domain
name, and remunerating members of the team who have worked on the
features released.

If financial contribution is not your strength, you can contribute by
asking to be assigned to one of our [open issues], and asking for
mentoring if you don't know your way around the engine. Our
[contribution guide] should help you here. If you are more used to
working with JavaScript or frontend web development, we also welcome
help to improve our web presence, either in [our website], or in our
[testing representation] page or benchmarks page. You can also
contribute to our Criterion benchmark comparison GitHub [action].

We are also looking to improve the documentation of the engine, both for
developers of the engine itself and for users of the engine. Feel free
to contact us in [Matrix].

[open collective]: https://opencollective.com/boa
[open issues]:
  https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+no%3Aassignee
[contribution guide]:
  https://github.com/boa-dev/boa/blob/main/CONTRIBUTING.md
[our website]: https://github.com/boa-dev/boa-dev.github.io
[testing representation]: https://github.com/boa-dev/boa/issues/820
[action]: https://github.com/boa-dev/criterion-compare-action
[Matrix]: https://matrix.to/#/#boa:matrix.org

## Thank You

Once again, big thanks to [all the contributors][contributors] of this
release!!!

[contributors]:
  https://github.com/boa-dev/boa/graphs/contributors?from=2024-12-05&to=2025-08-30&type=c
[changelog]: https://github.com/boa-dev/boa/blob/v0.21/CHANGELOG.md
[conformance]: https://boajs.dev/boa/test262/
[feed]: https://boajs.dev/blog/rss.xml
[collective]: https://opencollective.com/boa
[easy_issues]:
  https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3AE-Easy
[first_issues]:
  https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22
