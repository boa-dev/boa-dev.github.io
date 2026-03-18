"use strict";
(globalThis["webpackChunkboajs_dev"] = globalThis["webpackChunkboajs_dev"] || []).push([[5042],{

/***/ 71391
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_contributing_contributing_md_f15_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-contributing-contributing-md-f15.json
const site_docs_contributing_contributing_md_f15_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"contributing/contributing","title":"Contributing to Boa","description":"Boa welcomes contribution from everyone. Here are the guidelines if you are","source":"@site/docs/contributing/contributing.md","sourceDirName":"contributing","slug":"/contributing/","permalink":"/docs/contributing/","draft":false,"unlisted":false,"editUrl":"https://github.com/boa-dev/boa-dev.github.io/tree/main/docs/docs/contributing/contributing.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"infoSidebar","previous":{"title":"Contributing","permalink":"/docs/category/contributing"},"next":{"title":"Testing","permalink":"/docs/contributing/testing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/contributing/contributing.md


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = 'Contributing to Boa';

const assets = {

};



const toc = [{
  "value": "Contributions",
  "id": "contributions",
  "level": 2
}, {
  "value": "Running the compiler",
  "id": "running-the-compiler",
  "level": 2
}, {
  "value": "Building the docs",
  "id": "building-the-docs",
  "level": 2
}, {
  "value": "Debugging",
  "id": "debugging",
  "level": 2
}, {
  "value": "IDE Setup",
  "id": "ide-setup",
  "level": 2
}, {
  "value": "AI",
  "id": "ai",
  "level": 2
}, {
  "value": "Communication",
  "id": "communication",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
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
        id: "contributing-to-boa",
        children: "Contributing to Boa"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Boa welcomes contribution from everyone. Here are the guidelines if you are\nthinking of helping out:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "contributions",
      children: "Contributions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contributions to Boa or its dependencies should be made in the form of GitHub\npull requests. Each pull request will be reviewed by a core contributor\n(someone with permission to land patches) and either landed in the main tree or\ngiven feedback for changes that would be required. All contributions should\nfollow this format."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Should you wish to work on an issue, please claim it first by commenting on\nthe GitHub issue that you want to work on it. This is to prevent duplicated\nefforts from contributors on the same issue."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Head over to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues",
        children: "issues"
      }), " and check for \"good first issue\" labels to find\ngood tasks to start with. If you come across words or jargon that do not make\nsense, please ask!"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you don't already have Rust installed ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://rustup.rs/",
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "rustup"
        })
      }), " is the recommended\ntool to use. It will install Rust and allow you to switch between ", (0,jsx_runtime.jsx)(_components.em, {
        children: "nightly"
      }), ",\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "stable"
      }), " and ", (0,jsx_runtime.jsx)(_components.em, {
        children: "beta"
      }), ". You can also install additional components. In Linux, you\ncan run:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Then simply clone this project and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cargo build"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "running-the-compiler",
      children: "Running the compiler"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can execute a Boa console by running ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cargo run"
      }), ", and you can compile a list\nof JavaScript files by running ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cargo run -- file1.js file2.js"
      }), " and so on."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "building-the-docs",
      children: "Building the docs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To build the development documentation, run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "cargo doc --all-features --document-private-items --workspace\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This will also document all the dependencies on the workspace, which could be\nheavier in size. To only generate documentation for the workspace members, just\nadd the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "--no-deps"
      }), " flag:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "cargo doc --all-features --document-private-items --workspace --no-deps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging",
      children: "Debugging"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Knowing how to debug the interpreter should help you resolve problems quite quickly.\nSee ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/docs/category/debugging",
        children: "Debugging"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ide-setup",
      children: "IDE Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can work on Boa with any text editor capable of editing Rust and Javascript code.\nAn easy way of getting started is to use ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://code.visualstudio.com/",
        children: "Visual Studio Code"
      }), "\nwith the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer",
        children: "Rust Analyzer"
      }), " extension."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ai",
      children: "AI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We are usually not against using AI tools. However, their\ngeneral availability makes it much easier to fill our review capacity with\nlow-effort contributions. Therefore, every contributor must adhere to the following\nrules:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No spamming PRs. This includes the use of AI agents to open multiple PRs in\nsuccession."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No PRs with massive line changes (5k+) without prior discussion and acknowledgement."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All PR authors must be able to explain what their contribution does in detail."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The maintainers reserve the right to closing any PRs that do not follow these rules,\nand recurrent offenses will result in a global ban from contributing to all\nBoa-related projects."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "communication",
      children: "Communication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Most of our communication happens in Matrix, feel free to ask questions in our\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://matrix.to/#/#boa:matrix.org",
        children: "Boa space"
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