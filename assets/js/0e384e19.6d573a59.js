"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[3976],{

/***/ 7879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_intro_md_0e3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-intro-md-0e3.json
const site_docs_intro_md_0e3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"intro","title":"Welcome to Boa","description":"Boa is an experimental Javascript lexer, parser and compiler written in Rust. Currently, it has support for some of the language. It can be embedded in Rust projects fairly easily and also used from the command line.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/boa-dev/boa-dev.github.io/tree/main/docs/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"infoSidebar","next":{"title":"Contributing","permalink":"/docs/category/contributing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/intro.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'Welcome to Boa';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "welcome-to-boa",
        children: "Welcome to Boa"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Boa is an experimental Javascript lexer, parser and compiler written in Rust. Currently, it has support for some of the language. It can be embedded in Rust projects fairly easily and also used from the command line."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Boa also exists to serve as a Rust implementation of the EcmaScript specification, there will be areas where we can utilise Rust and its fantastic ecosystem to make a fast, concurrent and safe engine."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Boa currently publishes the following crates:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "boa_ast - Boa’s ECMAScript Abstract Syntax Tree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "boa_engine - Boa’s implementation of ECMAScript builtin objects and execution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "boa_gc - Boa’s garbage collector."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "boa_interner - Boa’s string interner."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "boa_parser - Boa’s lexer and parser."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "boa_profiler - Boa’s code profiler."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "boa_icu_provider - Boa’s ICU4X data provider."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "boa_runtime - Boa’s WebAPI features."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The goal of the following documentation is to provide a reference guide for the current design of Boa and it's most current features."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["New to Rust or JavaScript interpreters? Feel free to check out some resources ", (0,jsx_runtime.jsx)(_components.a, {
        href: "./resources",
        children: "here"
      })]
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