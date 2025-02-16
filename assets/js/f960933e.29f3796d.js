"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[1454],{

/***/ 7524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_debugging_debug_trace_md_f96_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-debugging-debug-trace-md-f96.json
const site_docs_debugging_debug_trace_md_f96_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"debugging/debug_trace","title":"Tracing Boa\'s Virtual Machine","description":"Please note: to run trace, boa needs to have the \\"trace\\" feature flag.","source":"@site/docs/debugging/debug_trace.md","sourceDirName":"debugging","slug":"/debugging/debug_trace","permalink":"/docs/debugging/debug_trace","draft":false,"unlisted":false,"editUrl":"https://github.com/boa-dev/boa-dev.github.io/tree/main/docs/docs/debugging/debug_trace.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"infoSidebar","previous":{"title":"Debugging Tokens and AST nodes","permalink":"/docs/debugging/debug_tokens_ast"},"next":{"title":"VM Execution Flowgraph","permalink":"/docs/debugging/debug_flowgraph"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/debugging/debug_trace.md


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = 'Tracing Boa\'s Virtual Machine';

const assets = {

};



const toc = [{
  "value": "Understanding Boa&#39;s Trace Output",
  "id": "understanding-boas-trace-output",
  "level": 2
}, {
  "value": "Comparing Trace Output",
  "id": "comparing-trace-output",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "tracing-boas-virtual-machine",
        children: "Tracing Boa's Virtual Machine"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Please note: to run trace, boa needs to have the \"trace\" feature flag."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once the AST has been generated, boa will compile it into bytecode, which is then executed by the VM.\nYou can print the bytecode and the executed instructions with the command-line flag ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--trace"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "understanding-boas-trace-output",
      children: "Understanding Boa's Trace Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once you have boa installed or setup with the \"trace\" feature flag, try some simple ECMAScript/JS in a test file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let's walkthrough an example of how to trace from a cloned boa repo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add the below code into a \"test.js\" file in the project root."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        metastring: "title=\"test.js\"",
        children: "//\nlet a = 1;\nlet b = 2;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Then run the below command-line:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "cargo run -- --test.js --trace\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Boa will now compile and run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test.js"
      }), ", which will output the below trace to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stdout"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "----------------------Compiled Output: '<main>'-----------------------\nLocation  Count   Opcode                     Operands\n\n000001    0000    PushOne\n000006    0001    DefInitLet                 0000: 'a'\n000008    0002    PushInt8                   2\n000013    0003    DefInitLet                 0001: 'b'\n\nLiterals:\n    <empty>\n\nBindings:\n    0000: a\n    0001: b\n\nFunctions:\n    <empty>\n\n\n------------------------------------------ VM Start ------------------------------------------\nTime          Opcode                     Operands                   Top Of Stack\n\n386μs         PushOne                                               1\n6μs           DefInitLet                 0000: 'a'                  <empty>\n1μs           PushInt8                   2                          2\n2μs           DefInitLet                 0001: 'b'                  <empty>\n\nStack:\n    <empty>\n\n\nundefined\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The above output contains the following information:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The bytecode and properties of the function that will be executed", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Compiled Output"
            }), ": The bytecode.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "Location"
                }), ": Location of the instruction (instructions are not the same size)."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "Count"
                }), ": Instruction count."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "Opcode"
                }), ": Opcode name."]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "Operands"
                }), ": The operands of the opcode."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Literals"
            }), ": The literals used by the bytecode (like strings)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Bindings"
            }), ": Binding names used by the bytecode."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Functions"
            }), ": Function names use by the bytecode."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The code being executed (marked by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Vm Start"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Call Frame"
        }), ").", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Time"
            }), ": The amount of time that instruction took to execute."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Opcode"
            }), ": Opcode name."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Operands"
            }), ": The operands of the opcode."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Top Of Stack"
            }), ": The top element of the stack ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "after"
            }), " execution of instruction."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Stack"
        }), ": The trace of the stack after execution ends."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The result of the execution (The top element of the stack, if the stack is empty then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "undefined"
        }), " is returned)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparing-trace-output",
      children: "Comparing Trace Output"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you wanted another engine's bytecode output for the same JS, SpiderMonkey's bytecode output is the best to use. You can follow the setup ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://udn.realityripple.com/docs/Mozilla/Projects/SpiderMonkey/Introduction_to_the_JavaScript_shell",
        children: "here"
      }), ". You will need to build from source because the pre-built binarys don't include the debugging utilities which we need."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["NOTE: The binary was renamed as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "js_shell"
      }), " due to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "js"
      }), " conflicting with NodeJS."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once up and running you should be able to use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "js_shell -f tests/js/test.js"
      }), ". You will get no output to begin with, this is because you need to run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dis()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dis([func])"
      }), " in the code. Once you've done that you should get some output like so:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "loc     op\n-----   --\n00000:  GlobalOrEvalDeclInstantiation 0 #\nmain:\n00005:  One                             # 1\n00006:  InitGLexical \"a\"                # 1\n00011:  Pop                             #\n00012:  Int8 2                          # 2\n00014:  InitGLexical \"b\"                # 2\n00019:  Pop                             #\n00020:  GetGName \"dis\"                  # dis\n"
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