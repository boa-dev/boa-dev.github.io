---
layout: post
tags: [post, internals]
title: "How ECMAScript Engines Optimize Your Variables"
authors: boa-dev
---

In this post, we will dive into how ECMAScript engines store variables, 
go over storage optimizations, and learn about scope analysis.
If you are an ECMAScript developer, you will get some practical tips to improve the performance of your code.
If you write your own ECMAScript engine or any interpreter or compiler you might get some implementation ideas.

<!--truncate-->

Before we start, let's get some disclaimers out of the way:

- This post is written about optimizations in the Boa ECMAScript engine.
  Other engines might do things different, so take everything with a grain of salt.
- This post omits some implementation details to focus on the most relevant parts.
- This post contains data structures written in pseudo Rust.
  These are only for visualization, and you do not need to understand Rust.

## Scopes and Variables

To start us off, let's refresh our understanding of variables and scopes in ECMAScript.
Variables are identifiers in our code that we can use to store and retrieve values.
Scopes describe the areas of code in which variables are visible.
You might associate scopes with curly braces.

Let's look at an example to visualize scopes:

```js
const a = 1;
console.log(a); // 1

{ // <- start of a block scope
    const a = 2;
    console.log(a); // 2
} // <- end of a block scope
```

We declare and initialize two variables with the identifier `a`.
Even though both have the same identifier, they are different variables.
The variable with the value `1` is declared in the global scope.
The variable with the value `2` is declared in a block scope.

In this example we always find the variable that we want to access in the current scope.
But what when the variable we access in not declared in the current scope?

Let's modify our example to see what happens in that case:

```js
const a = 1;

{
    const b = 2;
    console.log(a); // 1
    console.log(b); // 2
}
```

In this example our two variables have different identifiers.
Notice that when we access the variable `a` from the block scope, its value is resolved as expected.
This is because scopes are nested.
When we cannot find a variable in the current scope, we look for the same identifier in the outer scope.
In this case we have to look for `a` in the block scope and then in the global scope.

Let's look at a more complex example:

```js
const a = 1;
console.log(a); // 1

function f() { // <- start of a function scope
    var a = 2;
    console.log(a); // 2

    { // <- start of a block scope
        let a = 3;
        console.log(a); // 3
    } // <- end of a block scope

    console.log(a); // 2
} // <- end of a function scope

f();

console.log(a); // 1
```

You can see that variables are tied to their scopes.
All three variables `a` never change their values.
They just exist in their respective scopes and as soon as the scope has ended they are no longer accessible.
Instead, the previous outer scope returns to being the current scope and its variables are accessible.

You can see that in addition to blocks, functions also have scopes.
There are some more details to function scopes and how `let`, `const` and `var` differ.
For our proposes we will only work with `let` and `const` and skip those details for now.

## Storing Variables

### The Naive Approach

When developing an ECMAScript engine we have to think about how we store and access scopes and variables.
Take a look at the requirements we have for that storage data structure:

* A variable maps an identifier to a value.
* A scope can have multiple variables with unique identifiers.
* A scope may have an outer scope.

The variables in a scope fit a typical key-value store, like a hashmap.
The hashmap stores our variable identifiers as keys and the variable values as corresponding values:

```rust
struct Scope {
    variables: HashMap<Identifier, Value>,
}
```

This is a nice and easy data structure for our variables.
And because most languages come with a hashmap built-in, we do not have implement much!

Let's add the ability to nest our scopes.
Since all scopes are the same, we can just build a self-referential data structure:

```rust
struct Scope {
    variables: HashMap<Identifier, Value>,
    outer: Scope,
}
```

This solution works and is easy to reason about.
The data structures map very well on our mental model of variables and scopes.
This was the approach we used in Boa before we switched to a different implementation over two years ago (https://github.com/boa-dev/boa/pull/1829).

### Fixed Locations

You may already have spotted some performance issues with this data structure.
Consider that accessing variables is one of the things happening all the time in most languages.
Therefore, the runtime performance of variable access operations should be highly optimized.
With this current data structure we have to perform at least one hashmap lookup per variable access.
Most hashmap implementations will incur significant cost compared to accessing a fixed location in memory.
This problem gets worse when the variable we want to access is not in our current scope.
In the worst case, we have to traverse all the scopes until we arrived at the global scope.

How would you optimize this data structure for runtime performance?
Can you find a way to locate each variable without accessing multiple hashmaps?

When we read code, we can use our mental model of variables and scopes to see how each variable is unique.
We just have to apply that knowledge to our data structure.
In practice, we can assign each variable two indices that make it unique and give it a defined location in memory:

- `scope index`: The index of the scope that the variable is declared in.
- `variable index`: The index of the variable in its scope.

Let's visualize this in an example:

```js
const a = 1; // scope index: 0; variable index: 0
{
    const b = 2; // scope index: 1; variable index: 0
    const c = 3; // scope index: 1; variable index: 1
}
```

You can see how each variable has a set of two unique indices.
The scope index increases with each nested scope.
The variable index increases with each variable in one specific scope.

Let's explore how unique these indices have to be:

```js
{
    const a = 1; // scope index: 1; variable index: 0
}
{
    const b = 2; // scope index: 1; variable index: 0
}
```

As you can see, both `a` and `b` have a scope index of `1` and a variable index of `0`.
This works for us, because variables do not have to be unique for the whole program.
They just have to be unique in their current nested tree of scopes.

With all of this in mind, we can build a data structure that allows us to access variables just based on these two indices.
It might look something like this:

```rust
struct Scopes {
    scopes: Array<Scope>,
}

struct Scope {
    variables: Array<Value>,
}
```

Instead of having a self-referential data structure, we now have a two-dimensional array.

While this is our runtime data structure, we still have to calculate the variable indices before running the code.
For that we can use our previous approach with some slight modifications.
Instead of storing the value of the variable, we just store its index.
Additionally, we store an index in every scope to easily access our scope indices:

```rust
struct Scope {
    index: u32,
    variables: HashMap<Identifier, Variable>,
    outer: Scope,
}

struct Variable {
    index: u32,
}
```

While this data structure still works based on self-referential hashmaps, we only need it before running code.
Instead of doing a lookup on every variable access at runtime, we just have to do it once.

## Local Variables

Our previous optimization changed the data structure for our variables and scopes.
But we can come up with further optimizations if we look at the usage of variables in the code.

Let's take a look at this example:

```js
function addOne(a) {
    const one = 1;
    return one + a;
}
addOne(2);
```

Currently, we store `a` and `one` in our scopes and access them when performing the addition.
But why do we need the special data structure for variables and scopes at all?
What if we could just store the variables directly where we need them?

A typical ECMAScript engine uses a virtual machine (VM) to execute your code.
VMs use dedicated memory for values they operate on; a stack or registers.
For the purpose of this post, we use registers, but the stack would work in the same way.
Let's try to use registers to store variables.
While compiling the ECMAScript code into operations for our VM we assign each variable to a register.
Then we modify our variable operations to use registers instead of scopes to access variables.

When we test our example from above, it works fine with these changes.
Let's write down what exactly happens:

1. The function `addOne` is called. Registers for `a` and `one` are allocated.
2. The first function argument with the value `2` is written to the register for `a`.
3. The value `1` is written to the register for `one`.
4. The values from the registers `a` and `one` are read and added together.

### Nested Functions

When testing some more complex code we will quickly see that something does not work as expected.

Let's look at this example:

```js
function addOneBuilder() {
    const one = 1;
    return (a) => {
        return one + a;
    };
}
const addOne = addOneBuilder();
addOne(2);
```

While running the code, depending on the implementation, we might get a panic, a wrong result or even an unsafe memory access.
Let's try to understand what is going on here:

1. The function `addOneBuilder` is called. A register for `one` is allocated.
2. The value `1` is written to the register for `one`.
3. The function `addOneBuilder` returns the arrow function bound to `addOne`.
4. The function `addOne` is called. A register for `a` is allocated.
5. The first function argument with the value `2` is written to the register for `a`.
6. The VM tries to access the register for `one`. This is the point where our things go wrong.

Registers in a VM are local to a specific function.
In our example this means that the variable `one` can only be accessed successfully in the function `addOneBuilder`.
As soon as we try to access it from `addOne`, the register we assigned during compilation does not hold the correct value anymore.
This is why this optimization can be referred to as `local variables` or `function local variables`.

We now know that variables that are used in nested functions cannot be used as local variables.
But this should not stop us from using the optimization.
We just have to find all the variables that cannot be optimized.
Then we can use our existing scopes to store those, while optimizing all the other ones.

## Scope Analysis

### Finding Variables accessed by other Functions

To determine which variables can be stored in registers, we analyze them prior to code execution.
We can reuse our previously established scope structure based on hashmaps.
It just needs some additional information to make our analysis work.
Each scope needs to be flagged to indicate if it is a function scope.
This is important, because we have to track if a variable is ever accessed from a nested function.
Additionally, each variable needs a flag to indicate if it can be a local variable.

Our adjusted scope structure looks like this:

```rust
struct Scope {
    index: u32,
    function: bool, // <- This field is new
    variables: HashMap<Identifier, Variable>,
    outer: Scope,
}

struct Variable {
    index: u32,
    local: bool, // <- This field is new
}
```

We set the `function` flag on each scope when it is created.
The `local` flag on the variables is `true` by default.
After creating all the scopes and filling them with their variables, we traverse the ECMAScript code.
Every time we find a variable access, we check which variable in which scope is being accessed.
If a variable is not in the current scope we go to the `outer` scope.
If any of the scopes we see until we find the variable is a function scope, we set the `local` flag to `false`.

Let's visualize the scope analysis by writing out the scopes for this example:

```js
function addOneBuilder() {
    const one = 1;
    return (a) => {
        return one + a;
    };
}
```

These are our scopes before the scope analysis.
Notice that we start from the scope of the arrow function, since we work our way out from the most nested scope:

```rust
Scope {
    function: true
    variables: [
        "a": {
            index: 0,
            local: true,
        }
    ]
    outer: Scope {
        function: true
        variables: [
            "one": {
                index: 0,
                local: true,
            }
        ]
    }
}
```

Now we apply our scope analysis.
During the access to variable `one` in the arrow function, we pass the function scope of the arrow function.
This indicates, that this variable cannot be local:

```rust
Scope {
    function: true
    variables: [
        "a": {
            index: 0,
            local: true, // <- Still `true`
        }
    ]
    outer: Scope {
        function: true
        variables: [
            "one": {
                index: 0,
                local: false, // <- Set to `false`
            }
        ]
    }
}
```

After the scope analysis is finished we compile our code for the VM.
When we encounter a variable that can be local, we assign it a register.
When we encounter a variable that cannot be local, we use or old VM operations for our scopes storage.

### Other Exceptions

There are some more situations that prevent us from using local variables.
We have to account for every case where a variable might be accessed from outside its function.
Without going into detail on each of these cases, we can find all of them via scope analysis.

Here is a quick overview:

- Non `strict` functions create a mapped `arguments` object.
    The mapped `arguments` object can be used to read and write function arguments without using their identifiers.
    The reads and writes are kept in sync with the values of the argument variables.
    This means that we cannot determine if the argument variables are accessed from outside the function.

    An example of such a situation would be this code:

    ```js
    function f(a) {
        console.log(a); // initial
        (() => {
            arguments[0] = "modified";
        })()
        console.log(a); // modified
    }
    f("initial");
    ```

    The solution here is to mark every argument variable that might be accessed through a mapped `arguments` object as non-local.

- Direct calls to `eval` allow potential variable access.
    Direct calls to `eval` have access to the current variables.
    Since any code could be executed in `eval` we cannot do proper scope analysis on any variables in such cases.

    An example of direct `eval` usage would be this:

    ```js
    function f() {
        const a = 1;
        eval("function nested() {console.log(a)}; nested();");
    }
    f();
    ```

    Our solution is this case is to mark every variable in the scopes where the direct `eval` call is as non-local.

- Usage of the `with` statement.
    Variable identifiers inside a `with` statement are not static.
    A variable identifier could be the access to a variable, but it also could be the access to an object property.

    See this example:

    ```js
    function f() {
        const a1 = 1;
        for (let i = 0; i < 2; i++) {
            with ({ [`a${i}`]: 2 }) {
                console.log(a1);
            }
        }
    }
    f();
    ```

    In the first loop execution `a1` is the variable.
    In the second loop execution `a1` is the object property.
    As a result of this behavior, every variable accessed inside a `with` statement cannot be local.

## Conclusion

After implementing local variables in Boa we saw significant performance improvements in our benchmarks.
Our overall benchmark scope improved by more than 25%.
In one specific benchmark the scope increased by over 70%.
Notice that Boa is not the most performant engine yet. 
There are probably other optimizations relating to variable storage that we have not implemented yet.

You might have already picked up some practical tips to potentially improve to performance of your ECMAScript code.
Here are our observations that might help performance:

- Avoid accessing variables across functions.
  This might just help the ECMAScript engine to optimize your code better.
- Always use `strict` mode.
- [Never use direct `eval`!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_direct_eval!)
- Never use the `with` statement.
