"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[7961],{

/***/ 1087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2020_07_03_boa_release_09_index_md_2d0_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2020_07_03_boa_release_09_index_md_2d0_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3329);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	layout: 'post',
	title: 'Boa v0.9: measureme & optimisations',
	authors: 'boa-dev',
	tags: [
		'post'
	],
	permalink: '2020/07/03/boa-release-09.html'
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Better tooling for profiling",
  "id": "better-tooling-for-profiling",
  "level": 2
}, {
  "value": "Object Specialization",
  "id": "object-specialization",
  "level": 2
}, {
  "value": "Optimised Type Comparisons",
  "id": "optimised-type-comparisons",
  "level": 2
}, {
  "value": "JSValue Refactor",
  "id": "jsvalue-refactor",
  "level": 2
}, {
  "value": "Parser rebuild, better code organisation",
  "id": "parser-rebuild-better-code-organisation",
  "level": 2
}, {
  "value": "Roadmap",
  "id": "roadmap",
  "level": 2
}, {
  "value": "<em>How much of the specification is covered?</em>",
  "id": "how-much-of-the-specification-is-covered",
  "level": 3
}, {
  "value": "<em>Public API</em>",
  "id": "public-api",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Hello World!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Boa is an experimental Javascript lexer, parser and compiler written in Rust. It has support for some of the language, can be embedded in Rust projects fairly easily and also used from the command line.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "Boa also exists to serve as a Rust implementation of the EcmaScript specification, there will be areas where we can utilise Rust and its fantastic ecosystem to make a fast, concurrent and safe engine."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Today we're pleased to announce our latest release, version 0.9.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "v0.9 is by far the biggest release we've had since Boa began. You can find the full changes from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/CHANGELOG.md#-090-2020-06-25---move-to-organisation-78-faster-execution-time",
        children: "changelog"
      }), ". The milestone behind this version was further optimisation and an increase in new features. We can show you how we can identify areas that can be optimised."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "better-tooling-for-profiling",
      children: "Better tooling for profiling"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Boa became the first Rust project to make use of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/rust-lang/measureme",
        children: "measureme"
      }), ", a profiling tool built from the ground up for Rust. This was only used by the Rust team themselves to profile the compiler. We managed to work with the compiler team to get the framework in a good enough state to be used by other projects too, and in this release, we gave it a try."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Measure me lets you profile various areas of your choosing, then you can generate a trace file which can be loaded into Chromium or various other tools for analysis.\nWe took it for a spin (which you'll see in Object Specialization)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Below is an example of our trace, this is using a measureme tool called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "summarize"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "+----------------------------+-----------+-----------------+----------+------------+\n| Item                       | Self time | % of total time | Time     | Item count |\n+----------------------------+-----------+-----------------+----------+------------+\n| From<Object>               | 1.04ms    | 14.776          | 1.04ms   | 146        |\n+----------------------------+-----------+-----------------+----------+------------+\n| new_object                 | 356.50µs  | 5.082           | 533.50µs | 18         |\n+----------------------------+-----------+-----------------+----------+------------+\n| create_instrinsics         | 263.50µs  | 3.756           | 6.38ms   | 1          |\n+----------------------------+-----------+-----------------+----------+------------+\n| make_builtin_fn: toString  | 218.50µs  | 3.114           | 290.50µs | 12         |\n+----------------------------+-----------+-----------------+----------+------------+\n| String                     | 81.60µs   | 1.163           | 961.60µs | 1          |\n+----------------------------+-----------+-----------------+----------+------------+\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["You can read more about Rust's usage of measureme ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://blog.rust-lang.org/inside-rust/2020/02/25/intro-rustc-self-profile.html",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "object-specialization",
      children: "Object Specialization"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["In JavaScript internal metadata for objects are stored in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "internal slots"
      }), ". In Boa we stored internal slots as a hashmap tied to the object, with the keys being strings and the values as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/73f65f7800917c92f86134eaa21751c1ca93d986/boa/src/builtins/value/mod.rs#L57-L78",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "JSValues"
        })
      }), ". This meant we needed to constantly unwrap them into a Rust primitive to access the data. Secondly we were restricted as to what type of data we could put in internal slots. For example, lets say we want to implement ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Set"
        })
      }), " by using the native ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://doc.rust-lang.org/std/collections/struct.HashSet.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "HashSet"
        })
      }), " as a backing store, this would not be possible."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "By changing how internal data is handled for some of our builtin objects and removing a whole bunch of redundant access checks, we managed to speed up the interpreter."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Boa would spend a significant amount of time converting back and forth between JS Values and primitive values. We found a huge amount of time was spent in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Value::set_field"
      }), " before any code had even been executed. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "set_field"
      }), " was slow due to the amount of updating of internal slots as part of setting up. Here you can see realm creation takes roughly 60ms (dev build)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.em, {
        children: ["We use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/rust-lang/measureme/blob/main/crox/Readme.md",
          children: "Crox"
        }), " to convert our measureme data into a format Chrome's performance tab understands"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "Before",
        src: (__webpack_require__(3916)/* ["default"] */ .A) + "",
        width: "1279",
        height: "1002"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We refactored many builtins to hold an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ObjectData"
      }), " enum variant instead, some of which can hold a value for the type also.\nThis can be used to both identify objects and to use their internal data.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "Here is an example of our enum."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-rust",
        children: "/// Defines the different types of objects.\n#[derive(Debug, Trace, Finalize, Clone)]\npub enum ObjectData {\n    Array,\n    BigInt(RcBigInt),\n    Boolean(bool),\n    Function(Function),\n    String(RcString),\n    Number(f64),\n    Symbol(RcSymbol),\n    Error,\n    Ordinary,\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "After",
        src: (__webpack_require__(9931)/* ["default"] */ .A) + "",
        width: "1280",
        height: "1005"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This gave us a 70% speedup and reduced startup time by well over half. The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "realm::create"
      }), " function now runs in 13ms instead of 60ms."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "optimised-type-comparisons",
      children: "Optimised Type Comparisons"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["If you've ever called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "typeof"
      }), " in JavaScript, you get a string value describing the primitive type of it's argument. Boa was doing the same internally for comparing (using the \"get_type()\" call), however getting the string value from each primitive then comparing them is not very performant.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "Now, thanks to @Lan2u we have a rust ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/8f8498eac17164c8de2f599bd0b7ba2e8053ec30/boa/src/builtins/value/val_type.rs#L4-L17",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Type"
        })
      }), " enum which makes comparing more efficient and on average brings another 8% performance boost."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "jsvalue-refactor",
      children: "JSValue Refactor"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We have completely refactored how JavaScript values are stored.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/498",
        children: "#498"
      }), " makes values more lightweight by only GC'ing objects and not the primitives. The primitive scalar values are just Rust primitives which implement the Copy trait, so the overhead of moving these around is much lower.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "By decoupling our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Value"
      }), " types and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "GC"
      }), " types we have brought our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Value"
      }), " size from 40 bytes => 24 bytes and an 80% reduction in arithmetic operations!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "parser-rebuild-better-code-organisation",
      children: "Parser rebuild, better code organisation"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Boa was predominantly 3 files. The lexer, parser and interpreter.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "The naive implementation of the parser was a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/c23a7b1f4ac57af6c5f0b9f6c98fbbed7a14c98f/src/lib/syntax/parser.rs",
        children: "single file"
      }), " which had a long match expression for tokens and went through every token figuring out what to do. This did the job but became unmaintainable when adding new features.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "We have been breaking the parser up into separate modules, which represent various expressions and statements that conform to the specification. (more about this in a future post)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "After all the fixes in this release we've seen on average a 70% improvement, we still have areas where we plan to improve. We are currently rebuilding the lexer so it is more broken up like the parser and interpreter, we will blog about this soon in future."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "roadmap",
      children: "Roadmap"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "how-much-of-the-specification-is-covered",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "How much of the specification is covered?"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Our next milestone is to tidy up the lexer so it takes into account ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://tc39.es/ecma262/#sec-context-free-grammars",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "goal symbols"
        })
      }), " then we plan to start running Test 262, the official ECMAScript Test Suite. It has a lot of tests (over 29272 test files) and will tell us in detail which parts of the specification need work.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "There are also large items like classes which are still not covered, however, these should now be easier to implement with parsing broken up."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "public-api",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "Public API"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues/445",
        children: "#445"
      }), " looks to improve the public API too so Rust projects can interactive with Boa more easily.", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.br, {}), "\n", "It should be possible today to just use the lexer, parser or the whole execution path."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We hope to add more detail in future on how some parts of Boa work, make sure you stay tuned for any future posts!"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 3329:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/2020/07/03/boa-release-09","source":"@site/blog/2020-07-03-boa-release-09/index.md","title":"Boa v0.9: measureme & optimisations","description":"Hello World!","date":"2020-07-03T00:00:00.000Z","tags":[{"inline":true,"label":"post","permalink":"/blog/tags/post"}],"readingTime":5.73,"hasTruncateMarker":true,"authors":[{"name":"Boa Developers","url":"https://github.com/boa-dev","key":"boa-dev","page":null}],"frontMatter":{"layout":"post","title":"Boa v0.9: measureme & optimisations","authors":"boa-dev","tags":["post"],"permalink":"2020/07/03/boa-release-09.html"},"unlisted":false,"prevItem":{"title":"Boa release v0.10","permalink":"/blog/2020/10/02/boa-release-10"}}');

/***/ }),

/***/ 3916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/before-b541b61e85c78e35de4900cda09fae1c.png");

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


/***/ }),

/***/ 9931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/after-114754df50c9a05fc0eec4fabcac2bd0.png");

/***/ })

}]);