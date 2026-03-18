"use strict";
(globalThis["webpackChunkboajs_dev"] = globalThis["webpackChunkboajs_dev"] || []).push([[8158],{

/***/ 44067
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_contributing_ecmascript_md_a11_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-contributing-ecmascript-md-a11.json
const site_docs_contributing_ecmascript_md_a11_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"contributing/ecmascript","title":"Understanding the ECMAScript Specification","description":"Many contributions to Boa involve implementing parts of the [ECMAScript","source":"@site/docs/contributing/ecmascript.md","sourceDirName":"contributing","slug":"/contributing/ecmascript","permalink":"/docs/contributing/ecmascript","draft":false,"unlisted":false,"editUrl":"https://github.com/boa-dev/boa-dev.github.io/tree/main/docs/docs/contributing/ecmascript.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"infoSidebar","previous":{"title":"Testing","permalink":"/docs/contributing/testing"},"next":{"title":"Debugging","permalink":"/docs/category/debugging"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/contributing/ecmascript.md


const frontMatter = {
	sidebar_position: 3
};
const contentTitle = 'Understanding the ECMAScript Specification';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "understanding-the-ecmascript-specification",
        children: "Understanding the ECMAScript Specification"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Many contributions to Boa involve implementing parts of the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://tc39.es/ecma262/",
        children: "ECMAScript\nLanguage Specification"
      }), ", which defines how JavaScript\nbehaves. At first, the spec can seem intimidating, but it quickly becomes\neasier to follow once you get familiar with its structure and notation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The specification is written in a pseudo-language designed to describe behavior\nwithout being tied to any particular programming language. It introduces some\nimportant concepts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Abstract operations"
        }), " – general algorithms (i.e. ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://tc39.es/ecma262/#sec-iscallable",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "IsCallable"
          })
        }), "),\nwhich usually map to Rust functions or methods."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Internal slots"
        }), " – hidden object fields like\n", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://tc39.es/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "[[Prototype]]"
          })
        }), "\nthat correspond to private struct or enum fields in Rust, not accessible to\nJavaScript."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Completion records"
        }), " – describe how values or exceptions are returned\n(", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://tc39.es/ecma262/#sec-completion-record-specification-type",
          children: "link"
        }), "),\nand typically map to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JsResult"
        }), " types in Rust."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Symbols ", (0,jsx_runtime.jsx)(_components.code, {
            children: "?"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "!"
          })]
        }), " – ", (0,jsx_runtime.jsx)(_components.code, {
          children: "? Foo(...)"
        }), " propagates exceptions mapped to\npropagate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?"
        }), " operator in rust, while ", (0,jsx_runtime.jsx)(_components.code, {
          children: "! Foo(...)"
        }), " are infallible operations\nand are usually mapped to\n", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://doc.rust-lang.org/std/result/enum.Result.html#method.expect",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Result::expect()"
          })
        }), "\ncall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For an in-depth introduction to these concepts and more, check out ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://v8.dev/blog/tags/understanding-ecmascript",
        children: "V8’s “Understanding\nthe ECMAScript spec”\nseries"
      }), ", starting with ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://v8.dev/blog/understanding-ecmascript-part-1",
        children: "Part\n1"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When implementing the spec in Boa, try to map your code to the corresponding\nspec steps whenever possible, and indicate in comments which steps are implemented.\nThis makes the code easier to understand, ensures it aligns with the\nspecification, and helps reviewers and future contributors follow the logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If a spec step does not map directly because of Rust limitations or performance\nreasons, just add a note in the code explaining the difference. Being clear\nabout these cases helps others understand your implementation while still\nfollowing the spec as closely as possible."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For examples of how to implement the specification, check out the built-in\nimplementations in Boa\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/tree/main/core/engine/src/builtins",
        children: "here"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If anything in the specification is confusing, don’t hesitate to ask in the\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://matrix.to/#/#boa:matrix.org",
        children: "Boa Matrix"
      }), " channel."]
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



/***/ },

/***/ 28453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
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


/***/ }

}]);