---
sidebar_position: 1
---

# Contributing to Boa

Boa welcomes contribution from everyone. Here are the guidelines if you are
thinking of helping out:

## Contributions

Contributions to Boa or its dependencies should be made in the form of GitHub
pull requests. Each pull request will be reviewed by a core contributor
(someone with permission to land patches) and either landed in the main tree or
given feedback for changes that would be required. All contributions should
follow this format.

Should you wish to work on an issue, please claim it first by commenting on
the GitHub issue that you want to work on it. This is to prevent duplicated
efforts from contributors on the same issue.

Head over to [issues][issues] and check for "good first issue" labels to find
good tasks to start with. If you come across words or jargon that do not make
sense, please ask!

If you don't already have Rust installed [_rustup_][rustup] is the recommended
tool to use. It will install Rust and allow you to switch between _nightly_,
_stable_ and _beta_. You can also install additional components. In Linux, you
can run:

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Then simply clone this project and `cargo build`.

## Running the compiler

You can execute a Boa console by running `cargo run`, and you can compile a list
of JavaScript files by running `cargo run -- file1.js file2.js` and so on.

## Building the docs

To build the development documentation, run:

```shell
cargo doc --all-features --document-private-items --workspace
```

This will also document all the dependencies on the workspace, which could be
heavier in size. To only generate documentation for the workspace members, just
add the `--no-deps` flag:

```shell
cargo doc --all-features --document-private-items --workspace --no-deps
```

## Debugging

Knowing how to debug the interpreter should help you resolve problems quite quickly.
See [Debugging](docs/category/debugging).

## IDE Setup

You can work on Boa with any text editor capable of editing Rust and Javascript code.
An easy way of getting started is to use [Visual Studio Code](https://code.visualstudio.com/)
with the [Rust Analyzer][rust-analyzer_vscode] extension.

## AI

We are usually not against using AI tools. However, their
general availability makes it much easier to fill our review capacity with
low-effort contributions. Therefore, every contributor must adhere to the following
rules:
- No spamming PRs. This includes the use of AI agents to open multiple PRs in
  succession.
- No PRs with massive line changes (5k+) without prior discussion and acknowledgement.
- All PR authors must be able to explain what their contribution does in detail.

The maintainers reserve the right to closing any PRs that do not follow these rules,
and recurrent offenses will result in a global ban from contributing to all
Boa-related projects.

## Communication

Most of our communication happens in Matrix, feel free to ask questions in our
[Boa space][matrix].

[issues]: https://github.com/boa-dev/boa/issues
[rustup]: https://rustup.rs/
[rust-analyzer_vscode]: https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer
[matrix]: https://matrix.to/#/#boa:matrix.org
