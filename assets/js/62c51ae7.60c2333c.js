"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[2101],{

/***/ 6298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_contributing_testing_md_62c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-contributing-testing-md-62c.json
const site_docs_contributing_testing_md_62c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"contributing/testing","title":"Testing","description":"Boa provides its own test suite, and can also run the official ECMAScript test suite. To run the Boa test","source":"@site/docs/contributing/testing.md","sourceDirName":"contributing","slug":"/contributing/testing","permalink":"/docs/contributing/testing","draft":false,"unlisted":false,"editUrl":"https://github.com/boa-dev/boa-dev.github.io/tree/main/docs/docs/contributing/testing.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"infoSidebar","previous":{"title":"Contributing to Boa","permalink":"/docs/contributing/"},"next":{"title":"Understanding the ECMAScript Specification","permalink":"/docs/contributing/ecmascript"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/contributing/testing.md


const frontMatter = {
	sidebar_position: 2
};
const contentTitle = 'Testing';

const assets = {

};



const toc = [{
  "value": "Comparing Test Results",
  "id": "comparing-test-results",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "testing",
        children: "Testing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Boa provides its own test suite, and can also run the official ECMAScript test suite. To run the Boa test\nsuite, you can just run the normal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cargo test"
      }), ", and to run the full ECMAScript test suite, you can run it\nwith this command:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "cargo run --release --bin boa_tester -- run -v 2> error.log\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This will run the test suite in verbose mode (you can remove the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-v"
      }), " part to run it in non-verbose mode),\nand output nice colorings in the terminal. It will also output any panic information into the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "error.log"
      }), " file."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can get some more verbose information that tells you the exact name of each test that is being run, useful\nfor debugging purposes by setting up the verbose flag twice, for example ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-vv"
      }), ". If you want to know the output of\neach test that is executed, you can use the triple verbose (", (0,jsx_runtime.jsx)(_components.code, {
        children: "-vvv"
      }), ") flag."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you want to only run one sub-suite or even one test (to just check if you fixed/broke something specific),\nyou can do it with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-s"
      }), " parameter, and then passing the path to the sub-suite or test that you want to run. Note\nthat the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-s"
      }), " parameter value should be a path relative to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "test262"
      }), " directory. For example, to run the number\ntype tests, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-s test/language/types/number"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Finally, if you're using the verbose flag and running a sub suite with a small number of tests, then the output will\nbe more readable if you disable parallelism with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-d"
      }), " flag. All together it might look something like:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "cargo run --release --bin boa_tester -- run -vv -d -s test/language/types/number 2> error.log\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To save test results for later comparison, use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-o"
      }), " flag to specify an output directory:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "cargo run --release --bin boa_tester -- run -o ./test-results\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comparing-test-results",
      children: "Comparing Test Results"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You can compare two test suite runs to see what changed:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "cargo run --release --bin boa_tester -- compare <base-results> <new-results>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Both arguments can be either result files (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "latest.json"
      }), ") or directories containing test results.\nWhen directories are provided, the tester automatically uses the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "latest.json"
      }), " file from each directory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "# Compare using directories\ncargo run --release --bin boa_tester -- compare ./test-results-main ./test-results-feature\n\n# Compare using explicit files\ncargo run --release --bin boa_tester -- compare ./test-results-main/latest.json ./test-results-feature/latest.json\n"
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