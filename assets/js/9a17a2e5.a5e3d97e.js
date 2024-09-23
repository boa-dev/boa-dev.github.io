"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[6826],{

/***/ 3235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ThemedImage/index.js + 2 modules
var ThemedImage = __webpack_require__(1122);
;// CONCATENATED MODULE: ./blog/2021-01-14-boa-release-11/conformance_light.png
/* harmony default export */ const conformance_light = (__webpack_require__.p + "assets/images/conformance_light-3c218c4c96d333a7307e622bb81b9524.png");
;// CONCATENATED MODULE: ./blog/2021-01-14-boa-release-11/conformance_dark.png
/* harmony default export */ const conformance_dark = (__webpack_require__.p + "assets/images/conformance_dark-aac8804eda4cf61ed855b1881622bd44.png");
;// CONCATENATED MODULE: ./blog/2021-01-14-boa-release-11/regex-bench-white.png
/* harmony default export */ const regex_bench_white = (__webpack_require__.p + "assets/images/regex-bench-white-fb2dce206a98ce8731b6360d183a9f02.png");
;// CONCATENATED MODULE: ./blog/2021-01-14-boa-release-11/regex-bench-dark.png
/* harmony default export */ const regex_bench_dark = (__webpack_require__.p + "assets/images/regex-bench-dark-1cd027462942e18479a8d7306ed89802.png");
;// CONCATENATED MODULE: ./blog/2021-01-14-boa-release-11/index.mdx


const frontMatter = {
	layout: 'post',
	tags: [
		'post'
	],
	title: 'Boa release v0.11',
	authors: 'boa-dev'
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/blog/2021/01/14/boa-release-11",
  "source": "@site/blog/2021-01-14-boa-release-11/index.mdx",
  "title": "Boa release v0.11",
  "description": "Boa has reached a new release. v0.11, our biggest one yet!",
  "date": "2021-01-14T00:00:00.000Z",
  "tags": [
    {
      "inline": true,
      "label": "post",
      "permalink": "/blog/tags/post"
    }
  ],
  "readingTime": 4.85,
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "Boa Developers",
      "url": "https://github.com/boa-dev",
      "key": "boa-dev",
      "page": null
    }
  ],
  "frontMatter": {
    "layout": "post",
    "tags": [
      "post"
    ],
    "title": "Boa release v0.11",
    "authors": "boa-dev"
  },
  "unlisted": false,
  "prevItem": {
    "title": "Boa release v0.12",
    "permalink": "/blog/2021/06/07/boa-release-12"
  },
  "nextItem": {
    "title": "Boa release v0.10",
    "permalink": "/blog/2020/10/02/boa-release-10"
  }
};
const assets = {
"authorsImageUrls": [undefined],
};








const toc = [{
  "value": "Test 262",
  "id": "test-262",
  "level": 2
}, {
  "value": "Regress",
  "id": "regress",
  "level": 2
}, {
  "value": "Iterating over bytes",
  "id": "iterating-over-bytes",
  "level": 2
}, {
  "value": "Embedding examples",
  "id": "embedding-examples",
  "level": 2
}, {
  "value": "Generating bytecode",
  "id": "generating-bytecode",
  "level": 2
}, {
  "value": "Thank You",
  "id": "thank-you",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    del: "del",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Boa has reached a new release. v0.11, our biggest one yet!"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Since v0.10 we've closed 77 issues and merged 129 pull requests. The engine has been faster and more compliant to the spec. Below are some of the highlights but please see the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/CHANGELOG.md#0110-2021-01-14",
        children: "changelog"
      }), " for more information."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["What is Boa? See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/about",
        children: "About"
      }), " page for more info."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "test-262",
      children: "Test 262"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Test262 is the implementation conformance test suite maintained by TC39. It's used by nearly all engines to measure how conformant they are to the specification. Boa pulls the tests in-tree and runs them against all PRs. You can find more about Test262 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/tc39/test262",
        children: "here"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since v0.10 we have almost doubled on spec conformance, and reduced panics. A year ago Boa didn't even track itself against Test262 so it was difficult to know how compliant we were to the spec, today not only do we track all changes against Test262 but we can see progress on a PR to PR basis."
    }), "\n", "\n", (0,jsx_runtime.jsx)(ThemedImage/* default */.A, {
      alt: "Conformance graph",
      sources: {
        light: conformance_light,
        dark: conformance_dark
      }
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Previously many tests failed to run as the test-runner was still being worked on. Those issues have been fixed and our tests jumped from 38k to 78K which is why the graph flips up above. Boa should never panic, however we've had many tests reveal areas where panics happen, this has helped us identify and apply correct fixes, to the point where our panics have gone from hundreds to under 50 (the graph above shows the dark red diminishing)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For live tracking of conformance tests you can check ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://boa-dev.github.io/boa/test262/",
        children: "here"
      }), ". Below is a snapshot of the previous version and today."]
    }), "\n", (0,jsx_runtime.jsxs)("div", {
      className: "row",
      style: {
        display: "flex",
        justifyContent: "space-around"
      },
      children: [(0,jsx_runtime.jsx)("section", {
        className: "col-md-4",
        id: "version-latest",
        children: (0,jsx_runtime.jsx)("div", {
          className: "card",
          children: (0,jsx_runtime.jsxs)("div", {
            className: "card-body",
            style: {
              padding: "10px"
            },
            children: [(0,jsx_runtime.jsx)("h3", {
              children: "v0.10:"
            }), (0,jsx_runtime.jsxs)("ul", {
              className: "list-group list-group-flush",
              children: [(0,jsx_runtime.jsx)("li", {
                className: "list-group-item",
                children: (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Total tests: ", (0,jsx_runtime.jsx)("span", {
                    className: "total-tests",
                    children: "38,706"
                  })]
                })
              }), (0,jsx_runtime.jsx)("li", {
                className: "list-group-item",
                children: (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Passed tests: ", (0,jsx_runtime.jsx)("span", {
                    className: "passed-tests",
                    children: "6,960"
                  })]
                })
              }), (0,jsx_runtime.jsx)("li", {
                className: "list-group-item",
                children: (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Ignored tests: ", (0,jsx_runtime.jsx)("span", {
                    className: "ignored-tests",
                    children: "5,748"
                  })]
                })
              }), (0,jsx_runtime.jsx)("li", {
                className: "list-group-item",
                children: (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Failed tests: ", (0,jsx_runtime.jsx)("span", {
                    className: "failed-tests",
                    children: "25,998"
                  })]
                })
              }), (0,jsx_runtime.jsx)("li", {
                className: "list-group-item",
                children: (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Conformance: ", (0,jsx_runtime.jsx)("b", {
                    children: "17.98%"
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)("div", {
              className: "info-link",
              children: (0,jsx_runtime.jsx)("a", {
                className: "card-link",
                href: "#",
                children: (0,jsx_runtime.jsx)("span", {
                  className: "info-link"
                })
              })
            })]
          })
        })
      }), (0,jsx_runtime.jsx)("section", {
        className: "col-md-4",
        id: "master-latest",
        children: (0,jsx_runtime.jsx)("div", {
          className: "card",
          children: (0,jsx_runtime.jsxs)("div", {
            className: "card-body",
            style: {
              padding: "10px"
            },
            children: [(0,jsx_runtime.jsx)("h3", {
              children: "v0.11:"
            }), (0,jsx_runtime.jsxs)("ul", {
              className: "list-group list-group-flush",
              children: [(0,jsx_runtime.jsx)("li", {
                className: "list-group-item",
                children: (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Total tests: ", (0,jsx_runtime.jsx)("span", {
                    className: "total-tests",
                    children: "78,497"
                  })]
                })
              }), (0,jsx_runtime.jsx)("li", {
                className: "list-group-item",
                children: (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Passed tests: ", (0,jsx_runtime.jsx)("span", {
                    className: "passed-tests",
                    children: "24,550"
                  })]
                })
              }), (0,jsx_runtime.jsx)("li", {
                className: "list-group-item",
                children: (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Ignored tests: ", (0,jsx_runtime.jsx)("span", {
                    className: "ignored-tests",
                    children: "15,585"
                  })]
                })
              }), (0,jsx_runtime.jsx)("li", {
                className: "list-group-item",
                children: (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Failed tests: ", (0,jsx_runtime.jsx)("span", {
                    className: "failed-tests",
                    children: "38,362 (24 ⚠)"
                  })]
                })
              }), (0,jsx_runtime.jsx)("li", {
                className: "list-group-item",
                children: (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Conformance: ", (0,jsx_runtime.jsx)("b", {
                    children: "31.28%"
                  })]
                })
              })]
            }), (0,jsx_runtime.jsx)("div", {
              className: "info-link",
              children: (0,jsx_runtime.jsx)("a", {
                className: "card-link",
                href: "#",
                children: (0,jsx_runtime.jsx)("span", {
                  className: "info-link"
                })
              })
            })]
          })
        })
      }), (0,jsx_runtime.jsx)("section", {
        className: "col-md-4",
        style: {
          display: "none"
        },
        id: "old-versions"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "regress",
      children: "Regress"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In this release Boa switched from its own implementation (wrapping ", (0,jsx_runtime.jsx)(_components.code, {
        children: "regex"
      }), ") to the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/ridiculousfish/regress",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "regress"
        })
      }), " engine for regular expressions. Regress is a crate aiming to implement ECMAScript compliant regular expressions and Boa makes use of (and contributes back to) that."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["While Regress is not 100% spec compliant this is something which is being worked on, also the switch gave us quite a performance boost in our ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://boa-dev.github.io/boa/dev/bench/",
        children: "benchmarks"
      }), " we're seeing almost 6X faster execution."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(ThemedImage/* default */.A, {
      alt: "Conformance graph",
      sources: {
        light: regex_bench_white,
        dark: regex_bench_dark
      }
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The above image shows a big drop in the middle of the graph, above ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fb1b8d5"
      }), " is where we switched over. Conformance went from 19.01% to 18.99% and introduced some panics, however many of those have since been fixed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "iterating-over-bytes",
      children: "Iterating over bytes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Previously the lexer iterated over unicode chars (u32 code points), this wasn't strictly neccesary for Boa and we have instead changed the lexer to work over bytes (u8). Iterating over bytes rather than chars is inherently much faster, non-ascii UTF8 bytes are all >=128, and we might only really care about those being correct when parsing idents. This is standard practise amongs lexical analyzers and even browsers read source code byte-by-byte, using the rules of the language's syntax to convert the source text into tokens."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This was worked on by @jevancc and his ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/915/files",
        children: "changes"
      }), " have improved performance overall."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "embedding-examples",
      children: "Embedding examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We are still working on what the public API should look like, some of these decisions are driven by feedback and the ever-changing way which Boa works.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Not only you can run Boa against javascript today you can also embed your own objects and classes into the engine before it's ran."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We've offered an ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/boa/examples/classes.rs",
        children: "example"
      }), " to show how a class can be constructed in Rust then added to the environment before executing your scripts.\nThis should offer a great insight into how you can interop Rust with JavaScript by using Boa."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below are some of the more recent functions available from the Context object for you to add your own functionality."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-rust",
        children: "// Rust implementation of a function injected into the environment\nContext::register_global_function(),\n// Rust implementation of a class injected into the environment\nContext::register_global_class(),\n// Rust implementation of a property injected into the environment\nContext::register_global_property()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If there are any examples you would like added, please raise an issue on the main repository."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generating-bytecode",
      children: "Generating bytecode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Today Boa walks the tree of the AST, although easy to implement it's not ideal for performance.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "We are looking to do code generation which can then be interpreted. This gradual process may happen over many releases until at some point we can switch implementations under the hood. Our steps are:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.del, {
          children: "Experiment with VM Path on isolated branch"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.del, {
          children: "Experiment with generating more simpler instructions"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build up parity with current implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run test suite over VM path including conformance tests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Switch over once performance is steady"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimize code generation and intreperter"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thank-you",
      children: "Thank You"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Everything in this release has been such a huge effort, we want to thank all the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/graphs/contributors?from=2020-10-02&to=2021-01-12&type=c",
        children: "contributors"
      }), " in this release, whether it was features, fixes or raising bugs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you're interested in contributing to Boa, we have some ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22",
        children: "\"good first issues\""
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22",
        children: "\"issues where help is wanted\""
      }), "."]
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
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
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
 * @returns {JSX.Element}
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