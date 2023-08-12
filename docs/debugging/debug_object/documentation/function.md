---
sidebar_position: 2
---

# `$boa.function`

In this module are untility functions related to execution and debugging function.

## Function `$boa.function.bytecode(func)`

This function returns the compiled bytecode of a function as a string,

```JavaScript
>> function add(x, y) {
  return x + y
}
>> $boa.function.bytecode(add)
"
------------------------Compiled Output: 'add'------------------------
Location  Count   Opcode                     Operands

000000    0000    DefInitArg                 0000: 'a'
000005    0001    DefInitArg                 0001: 'b'
000010    0002    RestParameterPop
000011    0003    GetName                    0000: 'a'
000016    0004    GetName                    0001: 'b'
000021    0005    Add
000022    0006    Return
000023    0007    PushUndefined
000024    0008    Return

Literals:
    <empty>

Bindings:
    0000: a
    0001: b

Functions:
    <empty>
"
>>
```

## Function `$boa.function.trace(func, this, ...args)`

It only traces the specified function. If the specified function calls other functions,
their instructions aren't traced.

```JavaScript
>> const add = (a, b) => a + b
>> $boa.function.trace(add, undefined, 1, 2)
5μs           DefInitArg                 0000: 'a'                  2
4μs           DefInitArg                 0001: 'b'                  <empty>
0μs           RestParameterPop                                      <empty>
3μs           GetName                    0000: 'a'                  1
1μs           GetName                    0001: 'b'                  2
2μs           Add                                                   3
1μs           Return                                                3
3
>>
```

The `this` value can be changed as well as the arguments that are passed to the function.

## Function `$boa.function.traceable(func, mode)`

Marks a single function as traceable on all future executions of the function. Both useful to mark
several functions as traceable and to trace functions that suspend their execution (async functions,
generators, async generators).

### Input

```Javascript
function* g() {
    yield 1;
    yield 2;
    yield 3;
}
$boa.function.traceable(g, true);
var iter = g();
iter.next();
iter.next();
iter.next();
```

### Output

```bash
1μs           RestParameterPop                                      <empty>
1μs           PushUndefined                                         undefined
2μs           Yield                                                 undefined
4μs           GetName                    0000: 'a'                  1
0μs           Yield                                                 1
1μs           GeneratorNext                                         undefined
1μs           Pop                                                   <empty>
15μs          GetName                    0001: 'b'                  2
1μs           Yield                                                 2
1μs           GeneratorNext                                         undefined
1μs           Pop                                                   <empty>
4μs           GetName                    0002: 'c'                  3
1μs           Yield                                                 3
```

## Function `$boa.function.flowgraph(func, options)`

It can be used to get the instruction flowgraph, like the command-line flag.
This works on the function level, allows getting the flow graph without
quiting the boa shell and adding the specified flags.

Besides the function it also takes an argument that, can be a string or an object.
If it is a string it represets the flowgraph format, otherwire if it's an object:

```JavaScript
// These are the defaults, if not specified.
{
    format: 'mermaid'
    direction: 'LeftRight' // or 'LR' shorthand.
}
```

Example:

```JavaScript
$boa.function.flowgraph(func, 'graphviz')
$boa.function.flowgraph(func, { format: 'mermaid', direction: 'TopBottom' })
```
