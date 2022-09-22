---
layout: post
tags: post
title: "Boa release v0.16"
author: Boa Developers
---

## Summary

Boa v0.16 is now available! After around 3 months of development, we are very happy to present you the newest release of
the Boa JavaScript engine. Boa makes it easy to embed a JS engine in your projects, and you can even use it from
WebAssembly. See the [about](/about) page for more info.

Boa currently supports part of the JavaScript language. In this release, our conformance has grown from 62.29% to 74.53%
in the official ECMAScript Test Suite (Test262). The engine now passes 68,612 tests, coming from 56,372 in Boa 0.15
(21.7% increase), and we have closed 9 issues and merged 55 pull requests. You can check the full list of changes
[here](https://github.com/boa-dev/boa/blob/v0.16/CHANGELOG.md), and the full information on conformance
[here](https://boa-dev.github.io/boa/test262/).

## New ECMAScript features

### Support for Promises

With this new release Boa ships support for ECMAScript Promises. All tests in the 262 test suite `built-ins/Promise` pass.
Promises enable asynchronous operations to be executed via an internal job queue. Starting with our work on Promises,
we have stopped ignoring the 262 tests that are flagged as `async`. We also have enabled our 262 test runner to work
with asynchronous tests. We would like to thank [@aaronmunsters](https://github.com/aaronmunsters) for proposing
the initial PR for Promises ([#1923](https://github.com/boa-dev/boa/pull/1923)) that we then could expand on.

```javascript
// This program will print:
//    1. End of synchronous execution.
//    2. The Promise has been resolved.

let promise = Promise.resolve();

promise.then(() => console.log("2. The Promise has been resolved."));

console.log("1. End of synchronous execution.");
```

### Support for Async/Await

The implementation of Promises has enabled us to implement async functions and the await keyword. The async/await syntax
makes it easier to use Promises within javascript. We have implemented async functions, async generators,
`for await...of` loops and the `await` keyword. While not all tests pass for these features yet, the basic functionality
should work.

## Dense/Packed JavaScript Arrays

JavaScript Arrays are regular objects whose values are stored as indexed properties. Because arrays have no fixed
length, values can be assigned to any possible index without any of the previous indices being used. Due to this
behavior indexed properties are stored in a map instead of in a vector, as the vector would allocate a lot of unused
memory if a high index is used. We have implemented an optimization to make it possible to use optimized vector storage
for array values, as long as indices are not assigned out of order. To learn more about this optimization take a look at
the PR [#2167](https://github.com/boa-dev/boa/pull/2167).

## Support for URI encoding and decoding functions

This version for Boa ships with support for the built-in URI encoding and decoding functions `encodeURI`, `decodeURI`,
`encodeURIComponent` and `decodeURIComponent`. With the exception of UTF-16 related test, all test in the relevant 262
test suites pass for these functions.

## How can you contribute to Boa?

In March, Boa opened financial contributions on its [OpenCollective page](https://opencollective.com/boa).
If financial contribution is not your strength, you can contribute by asking to be assigned to one of our
[open issues](https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+no%3Aassignee), and asking for mentoring if you
don't know your way around the engine. Our [contribution guide](https://github.com/boa-dev/boa/blob/main/CONTRIBUTING.md)
should help you here. If you are more used to working with JavaScript or frontend web development, we also
welcome help to improve our web presence, either in [our website](https://github.com/boa-dev/boa-dev.github.io), or in
our [testing representation](https://github.com/boa-dev/boa/issues/820) page or benchmarks page. You can also contribute to
our Criterion benchmark comparison GitHub [action](https://github.com/boa-dev/criterion-compare-action).

We are also looking to improve the documentation of the engine, both for developers of the engine itself and for users of the
engine. Feel free to contact us in [Discord](https://discord.gg/tUFFk9Y).

### Thank You

Last but certainly not least, a big **Thank You** to
[all the contributors](https://github.com/boa-dev/boa/graphs/contributors?from=2022-06-11&to=2022-09-21&type=c)
of this Boa release. We would like to particularly thank our new contributors:

- [@CYBAI](https://github.com/CYBAI) who made their first contribution in [#2108](https://github.com/boa-dev/boa/pull/2108)
- [@udhaykumarbala](https://github.com/udhaykumarbala) who made their first contribution in [#2245](https://github.com/boa-dev/boa/pull/2245)
- [@tunz](https://github.com/tunz) who made their first contribution in [#2261](https://github.com/boa-dev/boa/pull/2261)
- [@anuvratsingh](https://github.com/anuvratsingh) who made their first contribution in [#2162](https://github.com/boa-dev/boa/pull/2162)
- [@creampnx-x](https://github.com/creampnx-x) who made their first contribution in [#2274](https://github.com/boa-dev/boa/pull/2274)
