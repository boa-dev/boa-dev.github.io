---
layout: post
title: "How to implement the ECMA Spec in Boa"
author: Boa Developers
---

Today we're going to look at what it's like to implement some JavaScript in Boa! If you're interested in implementing some of the specification, want to know how an engine can implement some JS, or just want to learn Rust, this is for you.

If you want to follow along im using commit e49be361fa7bc6434f7558ff8da2292f05b83beb to represent the master branch (at the time of writing).

## Implementing the label statement

I noticed that Boa doesn't have suport for [labels](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label). Sometimes in JavaScript a label is used on statements so you can break from the correct loop, lets take a look at an example.

```js
let str = "";

loop1: for (let i = 0; i < 5; i++) {
  loop2: for (let b = 0; b < 5; b++) {
    if (b === 2) {
      break loop1;
    }
    str = str + b;
  }
  console.log("never reaches here");
  str = str + i;
}

console.log(str);
```

In this example we start the outer loop (loop1) which immedietly starts the inner loop (loop2) on invocation of the first iteration. Once the inner loop hits 2 it breaks, but not just the loop itself it also breaks the outer loop too.  
I expect `str` to equal `01` in the above example (you can run this and try it yourself).

If you [try this](https://github.com/boa-dev/boa/blob/master/docs/debugging.md#debugging) in Boa today it won't work, in fact.. let's do that and see what happens.

`Parsing Error: expected token ';', got ':' in expression statement at line 3, col 6`

Yep this is expected, the engine helpfully tells us this is a parsing error, so we know it hasn't even got as far as execution. We can also learn exactly where this error happens by searching for the term _"expression statement"_ which takes us to the [expression parser](https://github.com/boa-dev/boa/blob/d042ddda3fb5239293b28db8383bc54991c039ee/boa/src/syntax/parser/statement/expression/mod.rs#L44).

Because Boa doesn't understand labels yet it is treating the `loop1` on line 3 as an expression, and like all expressions its expecting it to end with a `;` but instead sees a `:`. It stops parsing at this point and emits the error to us.

Whenever I add a new feature, I always start off by seeing how Boa reacts to that feature then working from there. We need to add a parser for Labels.

## Our parsers and the specification

Boa used to have 1 parser, it was quite big and complex, unfortunately this difficult to maintain. Luckily we've managed to refactor the parser into smaller parsers which all parse a subset of the spec then return a node. This way its easy to make changes without disrupting other parts of the engine, and it easier to home-in on problem areas.

Our parsers have a 1:1 mapping with the statements in the spec; so where there's a [break statement](https://tc39.es/ecma262/#prod-BreakStatement) we have a [BreakStatement Parser](https://github.com/boa-dev/boa/blob/d042ddda3fb5239293b28db8383bc54991c039ee/boa/src/syntax/parser/statement/break_stm/mod.rs#L23-L35).

[Statements](https://tc39.es/ecma262/#sec-statements) in the specification also maps to our [Statement](https://github.com/boa-dev/boa/blob/d042ddda3fb5239293b28db8383bc54991c039ee/boa/src/syntax/parser/statement/mod.rs#L92-L172) in Boa. If you notice in the specification Statements has a LabelledStatement, we don't have this yet in our engine, so it seems we need to make a new parser.

## Making a parser
