---
sidebar_position: 2
---

# Testing

Boa provides its own test suite, as well as a way to run the official ECMAScript conformance test suite.

## Boa's tests suite

Boa's test suite is implemented in the various `tests.rs` files throughout the project and driven by Rust's
testing capabilities. So to run the Boa test suite, you can just run the normal `cargo test`.

## ECMAScript's `test262` Conformance Test Suite

The ECMAScript test262 is a git submodule of tc39's current version of the test suite and represents the implementation
conformance.

To run the full ECMAScript test suite, you can use the below command in Boa's root directory:

```shell
cargo run --release --bin boa_tester -- run -v 2> error.log
```

Note that this requires the `test262` submodule to be checked out, so you will need to run the following first:

```shell
git submodule init && git submodule update
```

This will run the test suite in verbose mode (you can remove the `-v` part to run it in non-verbose mode),
and output nice colorings in the terminal. It will also output any panic information into the `error.log` file.

You can get some more verbose information that tells you the exact name of each test that is being run, useful
for debugging purposes by setting up the verbose flag twice, for example `-vv`. If you want to know the output of
each test that is executed, you can use the triple verbose (`-vvv`) flag.

If you want to only run one sub-suite or even one test (to just check if you fixed/broke something specific),
you can do it with the `-s` parameter, and then passing the path to the sub-suite or test that you want to run. Note
that the `-s` parameter value should be a path relative to the `test262` directory. For example, to run the number
type tests, use `-s test/language/types/number`.

Finally, if you're using the verbose flag and running a sub suite with a small number of tests, then the output will
be more readable if you disable parallelism with the `-d` flag. All together it might look something like:

```shell
cargo run --release --bin boa_tester -- run -vv -d -s test/language/types/number 2> error.log
```
