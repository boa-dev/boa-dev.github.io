"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[2271],{

/***/ 2811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8453);


const frontMatter = {
	layout: 'post',
	tags: [
		'post'
	],
	title: 'Boa release v0.12',
	author: 'Boa Developers'
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/blog/2021/06/07/boa-release-12",
  "source": "@site/blog/2021-06-07-boa-release-12.md",
  "title": "Boa release v0.12",
  "description": "Boa v0.12 is here! Boa is a JavaScript parser, compiler and executor written in the Rust programming language. It makes it easy to embed a JS engine in your projects, and you can even use it from webassembly. See the About page for more info.",
  "date": "2021-06-07T00:00:00.000Z",
  "tags": [
    {
      "inline": true,
      "label": "post",
      "permalink": "/blog/tags/post"
    }
  ],
  "readingTime": 2.17,
  "hasTruncateMarker": false,
  "authors": [
    {
      "name": "Boa Developers"
    }
  ],
  "frontMatter": {
    "layout": "post",
    "tags": [
      "post"
    ],
    "title": "Boa release v0.12",
    "author": "Boa Developers"
  },
  "unlisted": false,
  "prevItem": {
    "title": "Boa release v0.13",
    "permalink": "/blog/2021/09/30/boa-release-13"
  },
  "nextItem": {
    "title": "Boa release v0.11",
    "permalink": "/blog/2021/01/14/boa-release-11"
  }
};
const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Panic-free",
  "id": "panic-free",
  "level": 2
}, {
  "value": "Conformance increase",
  "id": "conformance-increase",
  "level": 2
}, {
  "value": "New built-in objects, <code>string</code> improvements and <code>@@ToStringTag</code>",
  "id": "new-built-in-objects-string-improvements-and-tostringtag",
  "level": 2
}, {
  "value": "Thank you",
  "id": "thank-you",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa v0.12 is here! Boa is a JavaScript parser, compiler and executor written in the Rust programming language. It makes it easy to embed a JS engine in your projects, and you can even use it from webassembly. See the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/about",
        children: "About"
      }), " page for more info."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We currently support part of the language. In this release, our conformance has grown to 33.97% of the official ECMAScript Test Suite (Test262). In this release, we have closed 19 issues and merged 69 pull requests. You can check the full list of changes ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/v0.12/CHANGELOG.md",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Let's dive into the most relevant changes of this release."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "panic-free",
      children: "Panic-free"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa now doesn't panic in any of the Test262 tests. This is a huge milestone, since it means that the engine itself can handle all of the edge cases. At least those proposed by the official ECMAScript test suite. We still recommend using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://doc.rust-lang.org/stable/std/panic/fn.catch_unwind.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "std::panic::catch_unwind()"
        })
      }), " to execute arbitrary code, though."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "conformance-increase",
      children: "Conformance increase"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In version 0.11 we were passing 31.59% of the Test262 suite. In this version, we have increased that coverage to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "33.97%"
      }), ". The increase might not seem much, but we now pass 1,924 new tests."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Our conformance tester has also been improved, and thanks to the new APIs available in the engine, we were able to add complex functionality such as \"realm\" creation, cross-real symbols and overall, the inclusion of a partially complete ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "$262"
      }), " object, ready for some testing."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We have also added some useful lists of \"fixed\", \"broken\", \"ignored\" and \"fixed panics\" tests for each pull request. This will allow us to directly check individual tests on each PR and only re-run the new tests that are failing/panicking in order to properly fix them."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "new-built-in-objects-string-improvements-and-tostringtag",
      children: ["New built-in objects, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "string"
      }), " improvements and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@@ToStringTag"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa now has support for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Reflect"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Set"
      }), " built-in objects. This grows the posibilities of the engine to be used in more real-world projects. On the same lines, we have added support for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "GetOwnProperty"
      }), " for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "string"
      }), ". This means that we can use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "[{index}]"
      }), " to get the characters of a string. For example, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "\"hello\"[0]"
      }), " will return ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "\"h\""
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We have also added the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "@@ToStringTag"
      }), " well known symbol to most of the built-in objects. You can now run the following code, for example, and get the expected result:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javascript",
        children: "let result = new Map()[Symbol.toStringTag];\n\nconsole.log(result); // Returns \"Map\"\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "thank-you",
      children: "Thank you"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Everything in this release has been such a huge effort, we want to thank all the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/graphs/contributors?from=2021-01-12&to=2021-06-07&type=c",
        children: "contributors"
      }), " in this release, whether it was features, fixes or raising bugs."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you're interested in contributing to Boa, we have some ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22",
        children: "\"good first issues\""
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22",
        children: "\"issues where help is wanted\""
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
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