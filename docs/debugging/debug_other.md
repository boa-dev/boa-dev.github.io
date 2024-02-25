---
sidebar_position: 6
---

# Debuggers

There are also other methods of debugging listed below.

## VS Code Debugger

The quickest way to get debugging is to use the CodeLLDB plugin and add breakpoints. You can get
more information [here][blog_debugging].

## LLDB Manual debugging

You can also use rust-lldb. The `Dockerfile` already has this enabled, you
should be able to use that environment to run your code.

```
rust-lldb ./target/debug/boa [arguments]
```

[remote_containers]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
[blog_debugging]: https://jason-williams.co.uk/debugging-rust-in-vscode
