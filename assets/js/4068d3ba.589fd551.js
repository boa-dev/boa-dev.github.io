"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[9797],{

/***/ 4767:
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
	sidebar_position: 7
};
const contentTitle = 'Profiling';
const metadata = {
  "id": "profiling",
  "title": "Profiling",
  "description": "Example",
  "source": "@site/docs/profiling.md",
  "sourceDirName": ".",
  "slug": "/profiling",
  "permalink": "/docs/profiling",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/boa-dev/boa-dev.github.io/tree/main/docs/docs/profiling.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 7,
  "frontMatter": {
    "sidebar_position": 7
  },
  "sidebar": "infoSidebar",
  "previous": {
    "title": "Shapes (Hidden Classes)",
    "permalink": "/docs/optimizations/shapes"
  },
  "next": {
    "title": "Resources",
    "permalink": "/docs/resources"
  }
};
const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "How To Use",
  "id": "how-to-use",
  "level": 2
}, {
  "value": "Summarize",
  "id": "summarize",
  "level": 3
}, {
  "value": "More Information",
  "id": "more-information",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
      id: "profiling",
      children: "Profiling"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "Example",
        src: (__webpack_require__(3265)/* ["default"] */ .A) + "",
        width: "3133",
        height: "766"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "It's possible to get a full profile of Boa in action.\nSometimes this is needed to figure out where it is spending most of it's time."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We use a crate called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/rust-lang/measureme",
        children: "measureme"
      }), ", which helps us keep track of timing functions during runtime."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "When the \"profiler\" flag is enabled, you compile with the profiler and it is called throughout the interpreter.\nwhen the feature flag is not enabled, you have an empty dummy implementation that is just no ops. rustc should completely optimize that away. So there should be no performance downgrade from these changes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Before continuing, please make sure the below prerequisites have been met."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/rust-lang/measureme/blob/master/crox/README.md",
          children: "Crox"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/rust-lang/measureme/blob/master/summarize/README.md",
          children: "summarize (Optional)"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "how-to-use",
      children: "How To Use"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can run boa using the \"profiler\" feature flag to enable profiling. Seeing as you'll most likely be using boa_cli you can pass this through, like so:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "cargo run --release --features boa_engine/profiler ../tests/js/test.js"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Once finished you should see some trace files left in the directory (boa_cli in this case).\nIn the same directory as the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: ".events, string_data, string_index"
      }), " files run ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "crox my_trace"
      }), " or whatever the name of the files are. This will generate a chrome_profiler.json file, you can load this into Chrome Dev tools."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "summarize",
      children: "Summarize"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you just want a summary of what functions were ran the most or where the most time was spent you can run ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "summarize"
      }), ".\nThis is the same as above except instead of calling ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "$ crox my_trace"
      }), " you call ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "$ summarize summarize my_trace"
      }), ". This will generate something like below:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-md",
        children: "+---------------------------------------+-----------+-----------------+----------+------------+\n| Item | Self time | % of total time | Time | Item count |\n+---------------------------------------+-----------+-----------------+----------+------------+\n| From<Object> | 1.04ms | 14.776 | 1.04ms | 146 |\n+---------------------------------------+-----------+-----------------+----------+------------+\n| new_object | 356.50µs | 5.082 | 533.50µs | 18 |\n+---------------------------------------+-----------+-----------------+----------+------------+\n| create_instrinsics | 263.50µs | 3.756 | 6.38ms | 1 |\n+---------------------------------------+-----------+-----------------+----------+------------+\n| make_builtin_fn: toString | 218.50µs | 3.114 | 290.50µs | 12 |\n+---------------------------------------+-----------+-----------------+----------+------------+\n| Value::get_field | 178.60µs | 2.546 | 340.20µs | 60 |\n+---------------------------------------+-----------+-----------------+----------+------------+\n| Value::get_property | 161.60µs | 2.303 | 161.60µs | 60 |\n+---------------------------------------+-----------+-----------------+----------+------------+\n| lex | 135.60µs | 1.933 | 135.60µs | 1 |\n+---------------------------------------+-----------+-----------------+----------+------------+\n| math:create | 125.40µs | 1.787 | 1.11ms | 1 |\n+---------------------------------------+-----------+-----------------+----------+------------+\n| Value::set_field | 100.20µs | 1.428 | 262.80µs | 8 |\n+---------------------------------------+-----------+-----------------+----------+------------+\n| function::builtin | 82.40µs | 1.175 | 82.40µs | 146 |\n+---------------------------------------+-----------+-----------------+----------+------------+\n| String | 81.60µs | 1.163 | 961.60µs | 1 |\n+---------------------------------------+-----------+-----------------+----------+------------+\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "more-information",
      children: "More Information"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For more information, please see the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "./resources#profiling",
        children: "profiling resources"
      })]
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

/***/ 3265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/profiler-1f1dba01fd288dcff446cc6a3cb42038.png");

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