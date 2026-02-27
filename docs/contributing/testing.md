---
sidebar_position: 2
---

# Testing

Boa provides its own test suite, and can also run the official ECMAScript test suite. To run the Boa test
suite, you can just run the normal `cargo test`, and to run the full ECMAScript test suite, you can run it
with this command:

```shell
cargo run --release --bin boa_tester -- run -v 2> error.log
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

To save test results for later comparison, use the `-o` flag to specify an output directory:

```shell
cargo run --release --bin boa_tester -- run -o ./test-results
```

## Comparing Test Results

You can compare two test suite runs to see what changed:

```shell
cargo run --release --bin boa_tester -- compare <base-results> <new-results>
```

Both arguments can be either result files (e.g., `latest.json`) or directories containing test results.
When directories are provided, the tester automatically uses the `latest.json` file from each directory.

For example:

```shell
# Compare using directories
cargo run --release --bin boa_tester -- compare ./test-results-main ./test-results-feature

# Compare using explicit files
cargo run --release --bin boa_tester -- compare ./test-results-main/latest.json ./test-results-feature/latest.json
```
