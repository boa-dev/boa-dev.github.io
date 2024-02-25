---
sidebar_position: 1
---

# Overview

Boa is a compiled and interpretted ECMAScript/JS engine.

The general architecture of Boa is visually represented in the below image. It revolves primarly around
four key components: the lexer, the parser, the bytecompiler, and the virtual machine (bytecompiler interpreter).

![Architecture Overview Image](../../static/doc-img/boa_architecture.drawio.png)

## Lexer

The lexer takes any provided ECMAScript/JS Source Code creates Tokens from the provided source code. These tokens are then passed along to the parser.

Boa's Lexer can be found in the `boa_parser` crate.

## Parser

The parser takes the tokens provided by the lexer and parses those tokens into an Abstract Syntax Tree (AST). The parsed AST is then passed along to the Bytecompiler.

Boa's Parser can be found in the `boa_parser` crate.

## Bytecompiler

The bytecompiler takes a Boa AST and compiles the AST into function Code Blocks, which consist of bytecode and other function attributes. These Code Blocks are passed to
the virtual machine.

Boa's Bytecompiler can be found in the `boa_engine` crate.

## Virtual Machine

The virtual machine executes the bytecode of the provided codeblocks and outputs the result of the execution.

Boa's virtual machine can be found in the `boa_engine` crate.
