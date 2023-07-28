---
sidebar_position: 4
---
# VM Execution Flowgraph
We can also get the VM instructions flowgraph, which is a visual representation of the instruction flow.

The `Start` (in green) and `End` (in red) node in the graph represents the start and end point of execution.
They are not instructions, just markers.

The conditional instructions are diamond shaped, with the `"YES"` branch in green and the `"NO"` branch in red.
The push and pop evironment pairs match colors and are connected by a dotted line.

You can use the `--flowgraph` (or `--flowgraph=mermaid` for [mermaid][mermaid] format) flag which outputs
[graphviz][graphviz] format by default, and pipe it to `dot` (from the `graphviz` package which is installed
on most linux distros by default) or use an online editor like: <https://dreampuf.github.io/GraphvizOnline> to
view the graph.

```bash
cargo run -- test.js --flowgraph | dot -Tpng > test.png
```

You can specify the `-Tsvg` to generate a `svg` instead of a `png` file.

![Graphviz flowgraph](../../static/doc-img/graphviz_flowgraph.svg)

Mermaid graphs can be displayed on github [natively without third-party programs][gihub-mermaid].
By using a `mermaid` block as seen below.

````
```mermaid
// graph contents here...
```
````

Additiona/ly you can specify the direction of "flow" by using the `--flowgraph-direction` cli option,
for example `--flowgraph-direction=left-to-right`, the default is `top-to-bottom`.

[mermaid]: https://mermaid-js.github.io/
[gihub-mermaid]: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams
[graphviz]: https://graphviz.org/