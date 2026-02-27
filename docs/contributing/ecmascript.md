---
sidebar_position: 3
---

# Understanding the ECMAScript Specification

Many contributions to Boa involve implementing parts of the [ECMAScript
Language Specification](https://tc39.es/ecma262/), which defines how JavaScript
behaves. At first, the spec can seem intimidating, but it quickly becomes
easier to follow once you get familiar with its structure and notation.

The specification is written in a pseudo-language designed to describe behavior
without being tied to any particular programming language. It introduces some
important concepts:

- **Abstract operations** – general algorithms (i.e. [`IsCallable`](https://tc39.es/ecma262/#sec-iscallable)),
  which usually map to Rust functions or methods.
- **Internal slots** – hidden object fields like
  [`[[Prototype]]`](https://tc39.es/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots)
  that correspond to private struct or enum fields in Rust, not accessible to
  JavaScript.
- **Completion records** – describe how values or exceptions are returned
  ([link](https://tc39.es/ecma262/#sec-completion-record-specification-type)),
  and typically map to `JsResult` types in Rust.
- **Symbols `?` and `!`** – `? Foo(...)` propagates exceptions mapped to
  propagate `?` operator in rust, while `! Foo(...)` are infallible operations
  and are usually mapped to
  [`Result::expect()`](https://doc.rust-lang.org/std/result/enum.Result.html#method.expect)
  call.

For an in-depth introduction to these concepts and more, check out [V8’s “Understanding
the ECMAScript spec”
series](https://v8.dev/blog/tags/understanding-ecmascript), starting with [Part
1](https://v8.dev/blog/understanding-ecmascript-part-1).

When implementing the spec in Boa, try to map your code to the corresponding
spec steps whenever possible, and indicate in comments which steps are implemented.
This makes the code easier to understand, ensures it aligns with the
specification, and helps reviewers and future contributors follow the logic.

If a spec step does not map directly because of Rust limitations or performance
reasons, just add a note in the code explaining the difference. Being clear
about these cases helps others understand your implementation while still
following the spec as closely as possible.

For examples of how to implement the specification, check out the built-in
implementations in Boa
[here](https://github.com/boa-dev/boa/tree/main/core/engine/src/builtins).

If anything in the specification is confusing, don’t hesitate to ask in the
[Boa Matrix](https://matrix.to/#/#boa:matrix.org) channel.
