---
layout: post
title: "Boa release v0.12"
author: Boa Developers
---

Boa v0.12 is here! Boa is a JavaScript parser, compiler and executor written in the Rust programming language. It makes it easy to embed a JS engine in your projects, and you can even use it from webassembly. See the [About](/about) page for more info. 

We currently support part of the language. In this release, our conformance has grown to 33.87% of the official ECMAScript Test Suite (Test262). In this release, we have closed 18 issues and merged 69 pull requests.

Let's dive into the most relevant changes of this release.

## Panic-free

Boa now doesn't panic in any of the Test262 tests. This is a huge milestone, since it means that the engine itself can handle all of the edge cases. At least those proposed by the official ECMAScript test suite. We still recommend using [`std::panic::catch_unwind()`](https://doc.rust-lang.org/stable/std/panic/fn.catch_unwind.html) to execute arbitrary code, though.

## Conformance increase

In version 0.11 we were passing 31.59% of the Test262 suite. In this version, we have increased that coverage to **33.87%**. The increase might not seem much, but we now pass 1,924 new tests.

Our conformance tester has also been improved, and thanks to the new APIs available in the engine, we were able to add complex functionality such as "realm" creation, cross-real symbols and overall, the inclusion of a partially complete `$262` object, ready for some testing.

We have also added some useful lists of "fixed", "broken", "ignored" and "fixed panics" tests for each pull request. This will allow us to directly check individual tests on each PR and only re-run the new tests that are failing/panicking in order to properly fix them.

## New built-in objects, `string` improvements and `@@ToStringTag`

Boa now has support for the `Reflect` and `Set` built-in objects. This grows the posibilities of the engine to be used in more real-world projects. On the same lines, we have added support for the `GetOwnProperty` for `string`. This means that we can use `[{index}]` to get the characters of a string. For example, `"hello"[0]` will return `"h"`.

We have also added the `@@ToStringTag` well known symbol to most of the built-in objects. You can now run the following code, for example, and get the expected result:

```javascript
let result = (new Map())[Symbol.toStringTag];

console.log(result); // Returns "Map"
```

## Thank you

Everything in this release has been such a huge effort, we want to thank all the [contributors](https://github.com/boa-dev/boa/graphs/contributors?from=2021-01-12&to=2021-06-01&type=c) in this release, whether it was features, fixes or raising bugs.

If you're interested in contributing to Boa, we have some ["good first issues"](https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) and ["issues where help is wanted"](https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22).

