---
sidebar_position: 2
---

# Debugging Tokens and AST nodes

The first thing boa will do is to generate tokens from the source code.
These tokens are then parsed into an abstract syntax tree (AST).
Any syntax errors should be thrown while the AST is generated.

You can use the `boa_cli` command-line flag `--dump-ast` to print the AST.
The flag supports these formats: `Debug`, `Json`, `JsonPretty`. By default
it is the `Debug` format.

Dumping the AST of a file:

```bash
cargo run -- test.js --dump-ast # AST dump format is Debug by default.
```

or with interactive mode (REPL):

```bash
cargo run -- --dump-ast # AST dump format is Debug by default.
```
