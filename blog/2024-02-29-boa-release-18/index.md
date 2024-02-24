---
layout: post
tags: [post]
title: "Boa release v0.18"
author: Boa Developers
---

## Summary

Boa v0.18 is now available! After 7 months of development we are very happy to present you the latest release of the Boa JavaScript engine. Boa makes it easy to
embed a JS engine in your projects, and you can even use it from WebAssembly. See the [about](/about) page for more info.

In this release, our conformance has grown from 78.74% to 84.64% in the official ECMAScript Test Suite (Test262). While
this might look as a small increase, we now pass **6,079** more tests than in the previous version. In any case, the big
changes in this release are not related to conformance, but to huge internal enhancements and new APIs that you will be
able to use.

You can check the full list of changes [here][changelog], and the full information on conformance [here][conformance].

Moreover, this big release was partly possible thanks to a grant by [Lit Protocol](https://litprotocol.com/). Thanks to
this grant, we were able to remunerate 2 team members for their 20h/week work each during three and a half months. If
you wish to sponsor Boa, you can do so by donating to our [open collective][collective]. You can also check
[easy][easy_issues] or [good first issues][first_issues].

Furthermore, we now have a new domain for Boa, [boajs.dev][boajs].

[changelog]: https://github.com/boa-dev/boa/blob/v0.17/CHANGELOG.md
[conformance]: https://boajs.dev/boa/test262/
[collective]: https://opencollective.com/boa
[easy_issues]: https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3AE-Easy
[first_issues]: https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22
[boajs]: https://boajs.dev

## Highlights

### We're on [test262.fyi](https://test262.fyi/)!

Thanks to the amazing work of [CanadaHonk](https://twitter.com/CanadaHonk), Boa is now listed on [test262.fyi](https://test262.fyi/). This is a great achievement for us and we are very proud to be listed alongside other major JavaScript engines. It should be much easier for users to compare Boa's conformance tests with other engines.

<div class="conformance_set">

![conformance](./conformance_dark.png)
![conformance_time](./conformance_time_dark.png)

</div>

### Modules

Boa finally has a module system! This implementation tries to closely follow ECMAScript's [**Modules**][modules]
specification which includes some useful hooks to customize module loading, making it possible to load modules from
several sources, fetch modules from an URL and even asynchronously load and parse them to avoid blocking execution; see
the [`ModuleLoader`][mod_loader] for more information.

We also implemented a simple loader (currently the default module loader), which should fulfill most of the simpler use cases:

```rust
// Creates a new module loader that uses the current directory to resolve module imports.
let loader = &SimpleModuleLoader::new(Path::new(".")).unwrap();

// Need to convert it to either a `&dyn ModuleLoader` or a `Rc<dyn ModuleLoader>` in order
// to pass it to the context.
let dyn_loader: &dyn ModuleLoader = loader;
let mut context = &mut Context::builder().module_loader(dyn_loader).build().unwrap();

let source = Source::from_bytes("1 + 3");

let module = Module::parse(source, None, context).unwrap();

// `main.mjs` or any of its imports could import `main.mjs` itself, so we
// insert it into the loader for good measure.
loader.insert(Path::new("main.mjs").to_path_buf(), module.clone());

// All modules use promises to signal completion of its lifecycle.
// The utility method `load_link_evaluate` calls `load`, then `link` and
// finally `evaluate`, returning an error if any call fails.
let promise = module.load_link_evaluate(context).unwrap();

// Important to push the job queue forward! Otherwise, the modules won't progress
// on their lifecycle.
context.run_jobs();

// All modules return `undefined` if they're successfully evaluated.
assert_eq!(promise.state().unwrap(), PromiseState::Fulfilled(JsValue::undefined()));
```

For a more extensive, descriptive example that uses a real directory, you can check out [**boa_examples**][mod_example].

[modules]: https://tc39.es/ecma262/#sec-modules
[mod_loader]: https://docs.rs/boa_engine/0.17.0/boa_engine/module/trait.ModuleLoader.html
[mod_example]: https://github.com/boa-dev/boa/blob/v0.17/boa_examples/src/bin/modules.rs

### Spec Version Conformance

Something we get asked a lot is _"Do you support ES5 or ES6"_? or _"How far away are you from supporting ESX"_?
We're pleased to say we've updated our conformance board to show you how we're doing across ES versions.

Just navigate to our [Test262 Dashboard][conformance], select "Test Results" on our main branch, and
then you can use the dropdown underneath to see how we're doing on each version. ES5 and ES6 are very close, you can see
we're only a few tests away from them being fully implemented.

### Optimizations

#### Constant folding optimization

Constant folding expression is a powerful compiler optimization technique that significantly enhances the efficiency and
performance of compiled programs. This optimization, now incorporated in the latest release, aims to reduce runtime
overhead by evaluating constant expressions at compile-time.

With constant folding expression optimization, the compiler analyzes expressions involving constants and replaces them
with their computed results. This process allows the compiler to transform arithmetic operations, comparisons, and
logical expressions into simplified forms, removing unnecessary runtime computations. By eliminating these computations,
the optimized program benefits from reduced execution time and improved overall performance.

#### Object Shapes (Hidden classes)

Hidden Classes (called "Shapes" internally to avoid confusion with JavaScript classes) are an alternative way to
structure objects that stores the property keys (string or symbol) (i.e. `object.propertyName`) and its attributes
(writable, enumerable, configurable) as transitions from a root shape, and the values as a dense array. This is
different from the traditional way of storing properties as a hashmap from property keys to values.

The shapes create a transition tree, where the transitions are property names and prototype changes starting from a root
shape (no properties, no prototype).

```javascript
let o = {} // Shape 1: prototype `Object.prototype` and properties: empty
o.a = 10   // Shape 2: prototype `Object.prototype` and properties: 'a'
o.b = 20   // Shape 3: prototype `Object.prototype` and properties: 'a', 'b'

let o2 = { a: 30; } // Shape 2: prototype `Object.prototype` and properties: 'a'
o2.d = 50           // Shape 4: prototype `Object.prototype` and properties: 'a', 'd' -- fork from shape 2
```

This separation of property keys and values allows for objects with the same property names to share the same shape,
which reduces memory consumption and unlocks the possibility for other optimizations such as inline caching.

Note: When creating objects with the same property keys, it's best to create them in the same order, this ensures that
the objects share the same shape.

For a more in depth explanation of how shared shapes work in boa see `shapes.md`
[here](https://github.com/boa-dev/boa/blob/v0.17/docs/shapes.md).

### Debug object

The `$boa` debug object has been implemented for convenient JavaScript debugging using Boa's CLI interface. If you want
to use it, you will need to run the Boa CLI / REPL with the `--debug-object` command line flag.

The `$boa` debug object is divided into modules, so that you can trigger the garbage collection with `$boa.gc.collect()`,
or get the bytecode of a function by running `$boa.function.bytecode(fn_name)`. You can also trace function invocations,
handle compiler optimizations, set runtime limits and inspect object shapes.

You can find all the documentation [here][debug_object].

[debug_object]: https://github.com/boa-dev/boa/blob/v0.17/docs/boa_object.md

### New APIs

We have added new built-in object wrappers, such as [`JsPromise`][js_promise], [`JsRegExp`][js_regexp],
[`JsGenerator`][js_generator], [`JsDate`][js_date] and [`JsDataView`][js_data_view]. You can check all of them
[here][wrappers].

We also want to present you a new trait that we have developed to make it easier for you to interoperate between Rust
and JavaScript: [`TryFromJs`][try_from_js]. All built-ins and Rust basic types that exist in JavaScript implement this
trait, and it adds a new static method to them that allows you to convert a [`JsValue`][js_value] into a Rust structure.
You can also convert any `JsValue` to a `TryFromJs` Rust type with [`JsValue::try_js_into()`][try_js_into] function.

```rust
let js_str = r#"
let x = /[a-z0-9]@[a-z0-9]/;
x;
"#;

let js = Source::from_bytes(js_str);
let mut context = Context::default();
let res = context.eval(js).unwrap();

let rs_regexp: JsRegExp = res.try_js_into(context).unwrap();

let test_result = rs_regexp.test("hello@domain", context)?;
assert!(test_result);
```

Moreover, you can derive `TryFromJs` for any Rust structure, and in the case that you want to manually convert some of
the struct attributes, you can override it:

```rust
/// Converts the value lossly.
fn lossy_conversion(value: &JsValue, _context: &mut Context) -> JsResult<i16> {
    match value {
        JsValue::Rational(r) => Ok(r.round() as i16),
        JsValue::Integer(i) => Ok(*i as i16),
        _ => Err(JsNativeError::typ().with_message("cannot convert value to an i16").into()),
    }
}

#[derive(Debug, TryFromJs)]
struct TestStruct {
    inner: bool,
    hello: String,
    // You can override the conversion of an attribute.
    #[boa(from_js_with = "lossy_conversion")]
    my_float: i16,
}

let js_str = r#"
let x = {
    inner: false,
    hello: "World",
    my_float: 2.9,
};
x;
"#;
let context = &mut Context::default();
let result = context.eval(Source::from_bytes(js_str))?;
let str = TestStruct::try_from_js(&result, context)?;

println!("{str:?}");
```

#### Source API

We have introduced a new `Source API` to Boa. The new API represents JavaScript stored from a path or `None` if it's
coming from a plain string.

This change improves the display of `boa_tester` to show the path of the tests being run. It also enables hyperlinks to
directly jump to the tested file from the VS terminal. This will further help with error displays and debugging in the
future.

```rust
use boa_engine::{Context, Source};

fn main() {
    let js_file_path = "./scripts/helloworld.js";

    match Source::from_filepath(Path::new(js_file_path)) {
    ...
```

See Boa's [examples](https://github.com/boa-dev/boa/tree/v0.17/boa_examples/src/bin) for more examples on how its used.

#### Hooks and Job Queues

In this release we have added `HostHooks` and `JobQueue` traits to `Context`. This will allow hosts to implement custom
event loops and other host specific functionality. This makes Boa more configurable for users and any future runtimes
which need to add a more complex event loop, such as Tokio or Mio.

As a result of this change, Boa's CLI will run all jobs until the queue is empty, even if a Job returns an `Err`.`

[js_promise]: https://docs.rs/boa_engine/0.17.0/boa_engine/object/builtins/struct.JsPromise.html
[js_regexp]: https://docs.rs/boa_engine/0.17.0/boa_engine/object/builtins/struct.JsRegExp.html
[js_generator]: https://docs.rs/boa_engine/0.17.0/boa_engine/object/builtins/struct.JsGenerator.html
[js_date]: https://docs.rs/boa_engine/0.17.0/boa_engine/object/builtins/struct.JsDate.html
[js_data_view]: https://docs.rs/boa_engine/0.17.0/boa_engine/object/builtins/struct.JsDataView.html
[wrappers]: https://docs.rs/boa_engine/0.17.0/boa_engine/object/builtins/index.html
[try_from_js]: https://docs.rs/boa_engine/0.17.0/boa_engine/value/trait.TryFromJs.html
[try_js_into]: https://docs.rs/boa_engine/0.17.0/boa_engine/enum.JsValue.html#method.try_js_into

### New Builtins

#### `Intl`

Boa now has internationalization support! Although we are still working on full compliance with the
[`ecma402` specification][402], we have a couple of `Intl` utilities in place:

- [`Intl.Collator`][collator]
- [`Intl.ListFormat`][list]
- [`Intl.Locale`][locale]
- [`Intl.Segmenter`][segmenter]

Internationalization data can be pretty expensive at times: the default data included by Boa is 10.6 MB, which is why
we allow customizing the data provider used by the engine with the [`ContextBuilder::icu_provider`][ctx_provider] hook.
For more information on how to generate custom internationalization data, you can check out the
[**data management tutorial**][data] from [`icu4x`], the internationalization library used in Boa. Shoutout to the
`icu4x` team, who are the ones that made all of this possible!

Additionally, we added an `intl` feature flag, which is enabled by default but can be disabled to reduce Boa's binary
size.

[402]: https://tc39.es/ecma402/
[collator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator
[list]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
[locale]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator
[segmenter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
[provider]: https://boajs.dev/boa/doc/boa_engine/context/enum.BoaProvider.html
[ctx_provider]: https://boajs.dev/boa/doc/boa_engine/context/struct.ContextBuilder.html#method.icu_provider
[data]: https://github.com/unicode-org/icu4x/blob/main/docs/tutorials/data_management.md#data-management-in-icu4x
[`icu4x`]: https://github.com/unicode-org/icu4x

#### `WeakRef`, `WeakSet` and `WeakMap`

We've implemented support for weak references to garbage collected objects. This allowed us to implement some builtins
like [`WeakRef`][wr], [`WeakSet`][ws] and [`WeakMap`][wm]. However, garbage collectors are unpredictable! A garbage
collector could collect at unexpected moments, extend the lifetime of unreachable objects and even leak, which is why
[mozilla recommends avoiding using those builtins where possible][moz].

[wr]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef
[ws]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
[wm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
[moz]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible

### Fuzzing

This release of Boa contains new functionalities in the `boa_ast` crate to support grammar aware fuzzing. The visitor
pattern that is implemented for the AST makes it easy to traverse the AST and either collect information or apply
modifications. In addition to the fuzzer, we also use the visitor pattern in multiple syntax directed operations. The
AST now implements the `Arbitrary` trait from the [`Arbitrary`][arbitrary] crate to generate inputs for fuzzers. Based
on these features we currently have three fuzzers targeting the parser, bytecompiler and vm. The fuzzers have already
helped us finding multiple panics that we previously had no tests for.

We want to extend a huge thanks to [@addisoncrump](https://github.com/addisoncrump) as they have contributed not only
the fuzzers but also the visitor pattern implementation and the additional bits needed to successfully fuzz Boa.

[arbitrary]: https://docs.rs/arbitrary/latest/arbitrary/

### New Crates

This release of Boa will also mark the release of some new boa crates that contain various aspects of Boa's ECMAScript
implementation.

#### boa_parser

Boa's `boa_parser` crate contains a lexer and parser that targets the latest ECMAScript language specification.

#### boa_ast

Boa's `boa_ast` crate contains an ECMAScript abstract syntax tree implementation of Declaration, Statement, and
Expression Parse Nodes.

#### boa_runtime

Boa's `boa_runtime` crate contains an example runtime along with basic runtime features and functionality for runtime
implementors. Note: this crate will contain any WEB API feature implementations or APIs that are not designated by the
ECMAScript specification.

### Other internal enhancements

There have also been a various number of other internal enhancements made.

#### Split Node into Statement / Declaration / Expression

In the last release, Boa's AST used a `Node` enum to represent both the `Statement`, `Declaration` and `Expression`
parse nodes. One of the large internal improvements made for this release was to split `Node` into `Statement`,
`Declaration`, and `Expression` nodes. This refactor involved not only large changes to the AST but also further changes
to the bytecompiler and parser. The split also brings us closer in line with the ECMAScript specification.

#### UTF-16 strings

With this release, Boa's `JsString`s are now implemented as utf-16 encoded strings. Along with the new `JsString`, there
are two provided macros: `js_string!` for creating a new `JsString` from a `&str`, and `utf16!` for creating a utf-16
array literal from a `&str`.

You can create a utf-16 array literal from any utf-8 `str`.

```rust
const HELLO: &[u16] = utf16!("Hi! :)");
```

You can create a `JsString` from a string literal with the `js_string` macro.

```rust
let hw = js_string!("Hello, world!");
assert_eq!(&hw, utf16!("Hello, world!"));
```

You can also pass any number of `&[u16]` string values as arguments to create a new `JsString`.

```rust
const NAME: &[u16]  = utf16!("human! ");
let greeting = js_string!("Hello, ");
let msg = js_string!(&greeting, &NAME, utf16!("Nice to meet you!"));

assert_eq!(&msg, utf16!("Hello, human! Nice to meet you!"));
```

## Conclusions

If you reached so far, you probably understand how big this release was, and you can find even more changes in the
[full changelog][changelog]. Boa is now becoming a real option for many projects, which shows with the amount of
financial support we have received these last months. Nevertheless, going forward, we need your help to get to a 1.0
version. Whether you are good with Rust, JavaScript, documentation or development, we have multiple
[good first issues][first_issues], and places where we [need help][help_wanted], both in Boa's
[main repository][boa_engine] and [others][boa_org] around it.

Once again, big thanks to [all the contributors][contributors] of this release!!

[help_wanted]: https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22
[boa_engine]: https://github.com/boa-dev/boa
[boa_org]: https://github.com/boa-dev
[contributors]: https://github.com/boa-dev/boa/graphs/contributors?from=2022-10-24&to=2023-07-05&type=c
