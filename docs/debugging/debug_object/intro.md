---
sidebar_position: 1
---

# Introduction

Certain debugging actions in JavaScript land are difficult to impossible, like triggering a GC collect.

For such purposes we have the `$boa` object that contains useful utilities that can be used to debug JavaScript in JavaScript.
The debug object becomes available with the `--debug-object` cli flag, It injects the `$boa` debug object in the context as global variable,
the object is separated into modules `gc`, `function`, `object`, etc.

We can now do `$boa.gc.collect()`, which force triggers a GC collect.

If you want to trace only a particular function (without being flodded by the `--trace` flag, that traces everything),
for that we have the `$boa.function.trace(func, this, ...args)`.
