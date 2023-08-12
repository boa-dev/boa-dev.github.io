---
sidebar_position: 1
---

# Introduction

Certain debugging actions in JavaScript land can be difficult to impossible to complete.

For these debugging purposes, `boa_cli` comes with a `$boa` object that contains useful utilities that can be used for inline debugging
of ECMAScript source code evaluated by Boa via the CLI.

To use the debug object, simply run any target source code with the `--debug-object` CLI flag as shown below.

```bash
cargo run -- ./your_target_source_code.js --debug-object
```

Providing `--debug-object` tells `boa_cli` to inject the `$boa` debug object into the context as a global variable, making
it accessible to Boa when the source code is executed.

The debug object currently has the below modules implemented:
 - `gc`
 - `function`
 - `object`
 - `optimizer`
 - `realm`
 - `shape`
 - `limits`

If there is any functionality currently missing that you think may be helpful, please feel free to submit a Pull Request!

TODO: Determine the fate of the below.

We can now do `$boa.gc.collect()`, which force triggers a GC collect.

If you want to trace only a particular function (without being flodded by the `--trace` flag, that traces everything),
for that we have the `$boa.function.trace(func, this, ...args)`.
