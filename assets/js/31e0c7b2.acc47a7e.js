"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[8534],{

/***/ 9997:
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
	title: 'Boa release v0.13',
	author: 'Boa Developers',
	permalink: '2021/09/30/boa-release-13.html'
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/blog/2021/09/30/boa-release-13",
  "source": "@site/blog/2021-09-30-boa-release-13.md",
  "title": "Boa release v0.13",
  "description": "Boa v0.13 is here! Boa is a JavaScript engine written in the Rust programming language. It makes it easy to embed a JS engine in your projects, and you can even use it from webassembly. See the about page for more info.",
  "date": "2021-09-30T00:00:00.000Z",
  "formattedDate": "September 30, 2021",
  "tags": [
    {
      "label": "post",
      "permalink": "/blog/tags/post"
    }
  ],
  "readingTime": 4.13,
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
    "title": "Boa release v0.13",
    "author": "Boa Developers",
    "permalink": "2021/09/30/boa-release-13.html"
  },
  "unlisted": false,
  "prevItem": {
    "title": "Boa release v0.14",
    "permalink": "/blog/2022/03/15/boa-release-14"
  },
  "nextItem": {
    "title": "Boa release v0.12",
    "permalink": "/blog/2021/06/07/boa-release-12"
  }
};
const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "ECMAScript language features",
  "id": "ecmascript-language-features",
  "level": 2
}, {
  "value": "Boa API",
  "id": "boa-api",
  "level": 2
}, {
  "value": "Calling Rust closures from JavaScript",
  "id": "calling-rust-closures-from-javascript",
  "level": 3
}, {
  "value": "Boa prelude",
  "id": "boa-prelude",
  "level": 3
}, {
  "value": "Test 262",
  "id": "test-262",
  "level": 2
}, {
  "value": "Keeping up with Rust",
  "id": "keeping-up-with-rust",
  "level": 2
}, {
  "value": "Keeping things in order",
  "id": "keeping-things-in-order",
  "level": 2
}, {
  "value": "VM",
  "id": "vm",
  "level": 2
}, {
  "value": "Opening up the discussion",
  "id": "opening-up-the-discussion",
  "level": 2
}, {
  "value": "Thank You",
  "id": "thank-you",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa v0.13 is here! Boa is a JavaScript engine written in the Rust programming language. It makes it easy to embed a JS engine in your projects, and you can even use it from webassembly. See the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/about",
        children: "about"
      }), " page for more info."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We currently support part of the language. In this release, our conformance has grown to 41.97% of the official ECMAScript Test Suite (Test262). We have closed 40 issues and merged 105 pull requests. You can check the full list of changes ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/v0.13/CHANGELOG.md",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This release brings some new features, such as support for calling Rust closures from JavaScript to improve better interopability between JS and Rust."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "ecmascript-language-features",
      children: "ECMAScript language features"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges",
        children: "named capture groups"
      }), " are now implemented and enabled."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javascript",
        children: "const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;\n\nconst matchObj = RE_DATE.exec(\"1999-12-31\");\nconst year = matchObj.groups.year; // 1999\nconst month = matchObj.groups.month; // 12\nconst day = matchObj.groups.day; // 31\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This release brings support for the relative indexing method ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at",
        children: "String.prototype.at()"
      }), ". This makes it easier to fetch values at the end of an array or string instead of doing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "str[str.length - 1]"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javascript",
        children: "const sentence = \"The quick brown fox jumps over the lazy dog.\";\nlet index = 5;\nconsole.log(\n  `Using an index of ${index} the character returned is ${sentence.at(index)}`,\n);\n// expected output: \"Using an index of 5 the character returned is u\"\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Other implemented language features include destructoring assignments, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "replaceAll()"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Object.values()"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Object.keys()"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Object.preventExtensions()"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "splice()"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "sort()"
      }), ", spreading objects and more."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "boa-api",
      children: "Boa API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "calling-rust-closures-from-javascript",
      children: "Calling Rust closures from JavaScript"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In addition to registering Rust functions as global JavaScript functions, our API has been expanded to register Rust closures. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/Boa/0.13.0/boa/context/struct.Context.html#method.register_global_closure",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "register_global_closure"
        })
      }), " allows to capture variables in closures that can be called from javascript:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "let mut context = Context::new();\nlet add_value = 1.0;\ncontext.register_global_closure(\"addOne\", 1, move |_, args, _| {\n    let argument = args.get(0).unwrap().as_number().unwrap();\n    Ok(JsValue::new(argument + add_value))\n})?;\nassert_eq!(context.eval(\"addOne(41)\")?, 42.into());\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To see the full capabilities of this feature, take a look at our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/boa/examples/closures.rs",
        children: "examples"
      }), ". Thanks to @HalidOdat and @jedel1043 for their work on this."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "boa-prelude",
      children: "Boa prelude"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This release exposes a prelude of useful things that are already imported. This should make it more ergonomic to work with."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "use boa::prelude::*; // This would import all the commonly-used things\n\nfn main() {\n\tlet number = JSValue::number(3.1415);\n\tlet realm = Realm::create();\n\tlet mut engine = Interpreter::new(realm);\n\tlet result = forward(&mut engine, \"Math.PI\");\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "test-262",
      children: "Test 262"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Test262 is the implementation conformance test suite maintained by TC39. It's used by nearly all engines to measure how conformant they are to the specification. Boa pulls the tests in-tree and runs them against all PRs."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Since v0.12 we have managed to pass 6391 more tests and are 7% more conformant. This has been great progress by all involved and we hope this continues to improve. Most of these new passes have come from refactors across the codebase which have had little impact on performance, in fact, v0.13 is much faster than v0.12."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can track Boa's conformance to the specification ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://boa-dev.github.io/boa/test262/#",
        children: "here"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "keeping-up-with-rust",
      children: "Keeping up with Rust"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Rust is changing underneath us. This means we need to make sure our code is conforming the latest standards and we're taking advantage of the best optimizations the language can provide. In order to do this we rely on Clippy, this is Rust's in-house linter. We updated our code to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/1352",
        children: "respect the latest Rust version"
      }), " and updated ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/1356",
        children: "formatting"
      }), ". Often a nice bonus of doing this is getting performance improvements for free as Clippy gets more \"smarter\". Thanks to @neeldug and @RageKnify for the work in this area."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "keeping-things-in-order",
      children: "Keeping things in order"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Previously object properties were stored using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/rustc-hash/1.1.0/rustc_hash/type.FxHashMap.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "FxHashMap"
        })
      }), ". Despite being very fast it didn't offer any guarantees about the order. Properties need to retain the same order they were entered. In order to achieve this we switched over to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/indexmap/1.7.0/indexmap/",
        children: "IndexMap"
      }), ". Traits in Rust make this easy as IndexMap was designed to be a drop-in replacement for other HashMap implementations by following the same Trait. Thanks to IndexMap offering the possibility to use alternative hashing algorithms, we could continue using the fast ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/rustc-hash/1.1.0/rustc_hash/struct.FxHasher.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "FxHasher"
        })
      }), " algorithm from rustc. Performance losses were minimal on some benchmarks and we actually made some gains in others. Thanks to @raskad for their work on this"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "vm",
      children: "VM"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["There is still on-going work to utilise a VM, this is happening ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/docs/vm.md#state-of-play",
        children: "alongside"
      }), " how Boa runs today. Although its not exposed yet there has been plenty of refactorings to the VM in order to make it performant. Hopefully we can talk about this in more detail soon."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "opening-up-the-discussion",
      children: "Opening up the discussion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As of this release Boa has begun to utilise Github's Discussions feature. You can catch more long-ranging projects ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/discussions",
        children: "here"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "thank-you",
      children: "Thank You"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This has been the biggest release yet, there have been many features and fixes. We want to thank all the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/graphs/contributors?from=2021-06-01&to=2021-09-26&type=c",
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