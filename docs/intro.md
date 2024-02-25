---
sidebar_position: 1
---

# Welcome to Boa

Boa is an experimental Javascript lexer, parser and compiler written in Rust. Currently, it has support for some of the language. It can be embedded in Rust projects fairly easily and also used from the command line.

Boa also exists to serve as a Rust implementation of the EcmaScript specification, there will be areas where we can utilise Rust and its fantastic ecosystem to make a fast, concurrent and safe engine.

Boa currently publishes the following crates:

- boa_ast - Boa’s ECMAScript Abstract Syntax Tree.
- boa_engine - Boa’s implementation of ECMAScript builtin objects and execution.
- boa_gc - Boa’s garbage collector.
- boa_interner - Boa’s string interner.
- boa_parser - Boa’s lexer and parser.
- boa_profiler - Boa’s code profiler.
- boa_icu_provider - Boa’s ICU4X data provider.
- boa_runtime - Boa’s WebAPI features.

The goal of the following documentation is to provide a reference guide for the current design of Boa and it's most current features.

New to Rust or JavaScript interpreters? Feel free to check out some resources [here](./resources)
