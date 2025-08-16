"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[6183],{

/***/ 5035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_debugging_debug_object_md_015_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-debugging-debug-object-md-015.json
const site_docs_debugging_debug_object_md_015_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"debugging/debug_object","title":"Boa Debug Object","description":"Certain debugging actions in JavaScript land can be difficult to impossible to complete.","source":"@site/docs/debugging/debug_object.md","sourceDirName":"debugging","slug":"/debugging/debug_object","permalink":"/docs/debugging/debug_object","draft":false,"unlisted":false,"editUrl":"https://github.com/boa-dev/boa-dev.github.io/tree/main/docs/docs/debugging/debug_object.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"infoSidebar","previous":{"title":"VM Execution Flowgraph","permalink":"/docs/debugging/debug_flowgraph"},"next":{"title":"Debuggers","permalink":"/docs/debugging/debug_other"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/debugging/debug_object.md


const frontMatter = {
	sidebar_position: 5
};
const contentTitle = 'Boa Debug Object';

const assets = {

};



const toc = [{
  "value": "<code>$boa.gc</code>",
  "id": "boagc",
  "level": 2
}, {
  "value": "Function <code>$boa.gc.collect()</code>",
  "id": "function-boagccollect",
  "level": 3
}, {
  "value": "Args (0): none",
  "id": "args-0-none",
  "level": 4
}, {
  "value": "<code>$boa.function</code>",
  "id": "boafunction",
  "level": 2
}, {
  "value": "Function <code>$boa.function.bytecode()</code>",
  "id": "function-boafunctionbytecode",
  "level": 3
}, {
  "value": "Args (1): target (function)",
  "id": "args-1-target-function",
  "level": 4
}, {
  "value": "Function <code>$boa.function.trace()</code>",
  "id": "function-boafunctiontrace",
  "level": 3
}, {
  "value": "Args (3): target (function), this (value), ...args (target&#39;s args values)",
  "id": "args-3-target-function-this-value-args-targets-args-values",
  "level": 4
}, {
  "value": "Function <code>$boa.function.traceable()</code>",
  "id": "function-boafunctiontraceable",
  "level": 3
}, {
  "value": "Args (2): target (function), should_trace (bool)",
  "id": "args-2-target-function-should_trace-bool",
  "level": 4
}, {
  "value": "Input",
  "id": "input",
  "level": 4
}, {
  "value": "Output",
  "id": "output",
  "level": 4
}, {
  "value": "Function <code>$boa.function.flowgraph()</code>",
  "id": "function-boafunctionflowgraph",
  "level": 3
}, {
  "value": "Args (2): target (function), options (object | string)",
  "id": "args-2-target-function-options-object--string",
  "level": 4
}, {
  "value": "<code>$boa.object</code>",
  "id": "boaobject",
  "level": 2
}, {
  "value": "Function <code>$boa.object.id()</code>",
  "id": "function-boaobjectid",
  "level": 3
}, {
  "value": "Args (1): target (object)",
  "id": "args-1-target-object",
  "level": 4
}, {
  "value": "<code>$boa.optimizer</code>",
  "id": "boaoptimizer",
  "level": 2
}, {
  "value": "Accessor <code>$boa.optimizer.constantFolding</code>",
  "id": "accessor-boaoptimizerconstantfolding",
  "level": 3
}, {
  "value": "Accessor <code>$boa.optimizer.statistics</code>",
  "id": "accessor-boaoptimizerstatistics",
  "level": 3
}, {
  "value": "<code>$boa.realm</code>",
  "id": "boarealm",
  "level": 2
}, {
  "value": "Function <code>$boa.realm.create</code>",
  "id": "function-boarealmcreate",
  "level": 3
}, {
  "value": "Args (0)",
  "id": "args-0",
  "level": 4
}, {
  "value": "<code>$boa.shape</code>",
  "id": "boashape",
  "level": 2
}, {
  "value": "Function <code>$boa.shape.id()</code>",
  "id": "function-boashapeid",
  "level": 3
}, {
  "value": "Args (1): id_target (object)",
  "id": "args-1-id_target-object",
  "level": 4
}, {
  "value": "Function <code>$boa.shape.type()</code>",
  "id": "function-boashapetype",
  "level": 3
}, {
  "value": "Args (1): type_target (object)",
  "id": "args-1-type_target-object",
  "level": 4
}, {
  "value": "Function <code>$boa.shape.same()</code>",
  "id": "function-boashapesame",
  "level": 3
}, {
  "value": "Args (2): one (object), two (object)",
  "id": "args-2-one-object-two-object",
  "level": 4
}, {
  "value": "<code>$boa.limits</code>",
  "id": "boalimits",
  "level": 2
}, {
  "value": "Accessor <code>$boa.limits.loop</code>",
  "id": "accessor-boalimitsloop",
  "level": 3
}, {
  "value": "Accessor <code>$boa.limits.recursion</code>",
  "id": "accessor-boalimitsrecursion",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "boa-debug-object",
        children: "Boa Debug Object"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Certain debugging actions in JavaScript land can be difficult to impossible to complete."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For these debugging purposes, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "boa_cli"
      }), " comes with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa"
      }), " object that contains useful utilities that can be used for inline debugging\nof ECMAScript source code evaluated by Boa via the CLI."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To use the debug object, simply run any target source code with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--debug-object"
      }), " CLI flag as shown below."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cargo run -- ./your_target_source_code.js --debug-object\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Providing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--debug-object"
      }), " tells ", (0,jsx_runtime.jsx)(_components.code, {
        children: "boa_cli"
      }), " to inject the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa"
      }), " debug object into the context as a global variable, making\nit accessible to Boa when the source code is executed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The debug object currently has the below modules implemented:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./debug_object#boagc",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "gc"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./debug_object#boafunction",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./debug_object#boaobject",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "object"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./debug_object#boaoptimizer",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "optimizer"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./debug_object#boarealm",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "realm"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./debug_object#boashape",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "shape"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "./debug_object#boalimits",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "limits"
          })
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If there is any functionality currently missing that you think may be helpful, please feel free to submit an issue or Pull Request!"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "boagc",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.gc"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This module contains functions that are related the garbage collector."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "function-boagccollect",
      children: ["Function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.gc.collect()"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "args-0-none",
      children: "Args (0): none"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This function triggers the GC to scan the heap and collect garbage."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-JavaScript",
        children: "$boa.gc.collect()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "boafunction",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.function"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this module are untility functions related to execution and debugging function."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "function-boafunctionbytecode",
      children: ["Function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.function.bytecode()"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "args-1-target-function",
      children: "Args (1): target (function)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This function returns the compiled bytecode of a function as a string,"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-JavaScript",
        children: ">> function add(x, y) {\n  return x + y\n}\n>> $boa.function.bytecode(add)\n\"\n------------------------Compiled Output: 'add'------------------------\nLocation  Count   Opcode                     Operands\n\n000000    0000    DefInitArg                 0000: 'a'\n000005    0001    DefInitArg                 0001: 'b'\n000010    0002    RestParameterPop\n000011    0003    GetName                    0000: 'a'\n000016    0004    GetName                    0001: 'b'\n000021    0005    Add\n000022    0006    Return\n000023    0007    PushUndefined\n000024    0008    Return\n\nLiterals:\n    <empty>\n\nBindings:\n    0000: a\n    0001: b\n\nFunctions:\n    <empty>\n\"\n>>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "function-boafunctiontrace",
      children: ["Function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.function.trace()"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "args-3-target-function-this-value-args-targets-args-values",
      children: "Args (3): target (function), this (value), ...args (target's args values)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "trace()"
      }), " takes a target function, a this value, and the function's args and runs only that\nfunction as a trace."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is perfect for isolating and tracing a single function. If the specified function calls other\nfunctions, their instructions aren't traced."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-JavaScript",
        children: ">> const add = (a, b) => a + b\n>> $boa.function.trace(add, undefined, 1, 2)\n5μs           DefInitArg                 0000: 'a'                  2\n4μs           DefInitArg                 0001: 'b'                  <empty>\n0μs           RestParameterPop                                      <empty>\n3μs           GetName                    0000: 'a'                  1\n1μs           GetName                    0001: 'b'                  2\n2μs           Add                                                   3\n1μs           Return                                                3\n3\n>>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " value can be changed as well as the arguments that are passed to the function."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "function-boafunctiontraceable",
      children: ["Function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.function.traceable()"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "args-2-target-function-should_trace-bool",
      children: "Args (2): target (function), should_trace (bool)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Marks a single function as traceable on all future executions of the function. Both useful to mark\nseveral functions as traceable and to trace functions that suspend their execution (async functions,\ngenerators, async generators)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "input",
      children: "Input"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-Javascript",
        children: "function* g() {\n    yield 1;\n    yield 2;\n    yield 3;\n}\n$boa.function.traceable(g, true);\nvar iter = g();\niter.next();\niter.next();\niter.next();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "output",
      children: "Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "1μs           RestParameterPop                                      <empty>\n1μs           PushUndefined                                         undefined\n2μs           Yield                                                 undefined\n4μs           GetName                    0000: 'a'                  1\n0μs           Yield                                                 1\n1μs           GeneratorNext                                         undefined\n1μs           Pop                                                   <empty>\n15μs          GetName                    0001: 'b'                  2\n1μs           Yield                                                 2\n1μs           GeneratorNext                                         undefined\n1μs           Pop                                                   <empty>\n4μs           GetName                    0002: 'c'                  3\n1μs           Yield                                                 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "function-boafunctionflowgraph",
      children: ["Function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.function.flowgraph()"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "args-2-target-function-options-object--string",
      children: "Args (2): target (function), options (object | string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It can be used to get the instruction flowgraph, like the command-line flag.\nThis works on the function level, allows getting the flow graph without\nquiting the boa shell and adding the specified flags."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Besides the function it also takes an argument that, can be a string or an object.\nIf it is a string it represets the flowgraph format, otherwire if it's an object:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-JavaScript",
        children: "// These are the defaults, if not specified.\n{\n    format: 'mermaid'\n    direction: 'LeftRight' // or 'LR' shorthand.\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-JavaScript",
        children: "$boa.function.flowgraph(func, 'graphviz')\n$boa.function.flowgraph(func, { format: 'mermaid', direction: 'TopBottom' })\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "boaobject",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.object"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contains utility functions for getting internal information about an object."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "function-boaobjectid",
      children: ["Function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.object.id()"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "args-1-target-object",
      children: "Args (1): target (object)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This function returns memory address of the given object, as a string."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-JavaScript",
        children: "let o = { x: 10, y: 20 }\n$boa.object.id(o)    // '0x7F5B3251B718'\n\n// Geting the address of the $boa object in memory\n$boa.object.id($boa) // '0x7F5B3251B5D8'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "boaoptimizer",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.optimizer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This modules contains getters and setters for enabling and disabling optimizations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "accessor-boaoptimizerconstantfolding",
      children: ["Accessor ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.optimizer.constantFolding"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is and accessor property on the module, its getter returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), " if enabled or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), " otherwise.\nIts setter can be used to enable/disable the constant folding optimization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-JavaScript",
        children: "$boa.optimizer.constantFolding = true\n$boa.optimizer.constantFolding // true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "accessor-boaoptimizerstatistics",
      children: ["Accessor ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.optimizer.statistics"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is an accessor property on the module, its getter returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), " if enabled or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), " otherwise.\nIts setter can be used to enable/disable optimization statistics, which are printed to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stdout"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-JavaScript",
        children: ">> $boa.optimizer.constantFolding = true\n>> $boa.optimizer.statistics = true\n>> 1 + 1\nOptimizer {\n    constant folding: 1 run(s), 2 pass(es) (1 mutating, 1 checking)\n}\n\n2\n>>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "boarealm",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.realm"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This module contains realm utilities to test cross-realm behaviour."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "function-boarealmcreate",
      children: ["Function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.realm.create"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "args-0",
      children: "Args (0)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Creates a new realm with a new set of builtins and returns its global object."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "let global = $boa.realm.create();\n\nObject != global.Object; // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "boashape",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.shape"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This module contains helpful functions for getting information about a shape of an object."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "function-boashapeid",
      children: ["Function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.shape.id()"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "args-1-id_target-object",
      children: "Args (1): id_target (object)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns the pointer of the object's shape in memory as a string encoded in hexadecimal format."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-JavaScript",
        children: "$boa.shape.id(Number) // '0x7FC35A073868'\n$boa.shape.id({}) // '0x7FC35A046258'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "function-boashapetype",
      children: ["Function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.shape.type()"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "args-1-type_target-object",
      children: "Args (1): type_target (object)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Returns the object's shape type."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-JavaScript",
        children: "$boa.shape.type({x: 3}) // 'shared'\n$boa.shape.type(Number) // 'unique'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "function-boashapesame",
      children: ["Function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.shape.same()"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "args-2-one-object-two-object",
      children: "Args (2): one (object), two (object)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), " if both objects have the same shape."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-JavaScript",
        children: "// The values of the properties are not important!\nlet o1 = { x: 10 }\nlet o2 = {}\n$boa.shape.same(o1, o2) // false\n\no2.x = 20\n$boa.shape.same(o1, o2) // true\n\no2.y = 200\n$boa.shape.same(o1, o2) // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "boalimits",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.limits"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This module contains utilities for changing runtime limits."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "accessor-boalimitsloop",
      children: ["Accessor ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.limits.loop"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is an accessor property on the module, its getter returns the loop iteration limit before an error is thrown.\nIts setter can be used to set the loop iteration limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "$boa.limits.loop = 10;\n\nwhile (true) {} // RuntimeLimit: Maximum loop iteration limit 10 exceeded\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "accessor-boalimitsrecursion",
      children: ["Accessor ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$boa.limits.recursion"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is an accessor property on the module, its getter returns the recursion limit before an error is thrown.\nIts setter can be used to set the recursion limit."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "$boa.limits.recursion = 100;\n\nfunction x() {\n  return x();\n}\nx(); // RuntimeLimit: Maximum recursion limit 100 exceeded\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);