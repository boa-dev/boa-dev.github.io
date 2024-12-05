"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[2803],{

/***/ 9553:
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
;// ./blog/2024-12-05-boa-release-020/img/perf-changes-light.png
/* harmony default export */ const perf_changes_light = (__webpack_require__.p + "assets/images/perf-changes-light-099c86677eb6f3d219e5d5109a08f31c.png");
;// ./blog/2024-12-05-boa-release-020/img/perf-changes-dark.png
/* harmony default export */ const perf_changes_dark = (__webpack_require__.p + "assets/images/perf-changes-dark-d41115ecdf7ac0cf260ad1ab4f823585.png");
;// ./blog/2024-12-05-boa-release-020/index.mdx


const frontMatter = {
	layout: 'post',
	tags: [
		'post'
	],
	title: 'Boa release v0.20',
	description: 'Boa release v0.20',
	authors: 'boa-dev'
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/blog/2024/12/05/boa-release-020",
  "source": "@site/blog/2024-12-05-boa-release-020/index.mdx",
  "title": "Boa release v0.20",
  "description": "Boa release v0.20",
  "date": "2024-12-05T00:00:00.000Z",
  "tags": [
    {
      "inline": true,
      "label": "post",
      "permalink": "/blog/tags/post"
    }
  ],
  "readingTime": 7.745,
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
    "title": "Boa release v0.20",
    "description": "Boa release v0.20",
    "authors": "boa-dev"
  },
  "unlisted": false,
  "nextItem": {
    "title": "Boa release v0.19",
    "permalink": "/blog/2024/07/09/boa-release-19"
  }
};
const assets = {
"authorsImageUrls": [undefined],
};






const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Feature Highlights",
  "id": "feature-highlights",
  "level": 2
}, {
  "value": "Temporal",
  "id": "temporal",
  "level": 3
}, {
  "value": "Nightlies",
  "id": "nightlies",
  "level": 3
}, {
  "value": "Atomics.pause",
  "id": "atomicspause",
  "level": 3
}, {
  "value": "Getters and Setters in the js_class! macro",
  "id": "getters-and-setters-in-the-js_class-macro",
  "level": 3
}, {
  "value": "Implement your own native Errors",
  "id": "implement-your-own-native-errors",
  "level": 3
}, {
  "value": "Boa Runtime",
  "id": "boa-runtime",
  "level": 2
}, {
  "value": "Additional APIs",
  "id": "additional-apis",
  "level": 3
}, {
  "value": "Console Improvements",
  "id": "console-improvements",
  "level": 3
}, {
  "value": "Performance",
  "id": "performance",
  "level": 2
}, {
  "value": "Escape Analysis and local variables",
  "id": "escape-analysis-and-local-variables",
  "level": 3
}, {
  "value": "Error optimizations",
  "id": "error-optimizations",
  "level": 3
}, {
  "value": "String optimizations",
  "id": "string-optimizations",
  "level": 3
}, {
  "value": "Lazy loading of ICU data",
  "id": "lazy-loading-of-icu-data",
  "level": 3
}, {
  "value": "New Contributors",
  "id": "new-contributors",
  "level": 2
}, {
  "value": "Looking Forward",
  "id": "looking-forward",
  "level": 2
}, {
  "value": "Register VM",
  "id": "register-vm",
  "level": 3
}, {
  "value": "Lazy Built-ins",
  "id": "lazy-built-ins",
  "level": 3
}, {
  "value": "How can you support Boa?",
  "id": "how-can-you-support-boa",
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
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Boa v0.20 is now available! After 5 months of development we are very happy to present you the latest\nrelease of the Boa JavaScript engine. Boa makes it easy to embed a JS engine in your projects, and\nyou can even use it from WebAssembly. See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/about",
        children: "about"
      }), " page for more info."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this release, our conformance has grown from 87.3% to 89.92% in the official ECMAScript Test Suite\n(Test262). This small jump is expected as we're shifting most of our focus to performance as the majority of the engine is now conformant. We will continue to implement more of the specification as we go along but we expect these changes to be much smaller than we've been used to."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can check the full list of changes ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/v0.19/CHANGELOG.md",
        children: "here"
      }), ", and the full information on conformance\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://boajs.dev/boa/test262/",
        children: "here"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "feature-highlights",
      children: "Feature Highlights"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "temporal",
      children: "Temporal"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Boa is continuing to progress on ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/tc39/proposal-temporal",
        children: "Temporal"
      }), ". The Temporal API is a new\nset of built-in objects and functions that is designed to be a more modern replacement for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Date"
      }), "\nobject, providing a more feature-rich and flexible API for working with dates and times."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It is currently a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://tc39.es/proposal-temporal/docs/",
        children: "stage 3 proposal"
      }), " and we are working\nalongside the TC39 champions to put together a solid Rust implementation. Since Temporal is such an\nextensive specification, we have done most of the work outside of Boa so that it can be used in other\nprojects. This work can be found in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/temporal/",
        children: "temporal_rs"
      }), " repository."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We hope to release a full blog post on Temporal in the future, but for now you can see the previous release notes for some examples on how to use it.\nYou can also look at the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://tc39.es/proposal-temporal/docs/cookbook.html",
        children: "Temporal Cook Book"
      }), " for some examples too!"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you're interested in learning more or want to contribute to the native Rust implementation of\nTemporal, feel free to check out ", (0,jsx_runtime.jsx)(_components.code, {
        children: "temporal_rs"
      }), "'s ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/temporal/issues",
        children: "issues"
      }), "!"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Boa's conformance on the Temporal test suite has grown from 24.61% to 40.67% in this release."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nightlies",
      children: "Nightlies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Boa now supports nightly releases, this was originally created to aid with the testing of conformance for test262.fyi. This is a great way to see the latest changes and help offer feedback on new features or just to see the latest changes in the engine. You can find the nightly releases ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/releases/tag/nightly",
        children: "here"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "atomicspause",
      children: "Atomics.pause"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Boa has added support for the ", (0,jsx_runtime.jsxs)(_components.a, {
        href: "https://github.com/tc39/proposal-atomics-microwait",
        children: ["stage 3 proposal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Atomics.pause"
        })]
      }), ". This function is used to pause the execution of a thread for a specified amount of time. This function is useful for implementing spinlocks and other synchronization primitives in JavaScript."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "getters-and-setters-in-the-js_class-macro",
      children: "Getters and Setters in the js_class! macro"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can now add getters and setters to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "js_class!"
      }), " macro. This allows you to define getters and setters on your JavaScript classes in Rust. This is a feature that has been requested by many users of Boa, and thanks to @hansl we now have it!"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-rust",
        children: "#[derive(Clone, Default, Trace, Finalize, JsData)]\npub struct Game {\n    score: u32,\n}\n\njs_class! {\n    class Game {\n        property score {\n            get(this: JsClass<Game>) -> u32 {\n                this.borrow().score\n            }\n\n            set(this: JsClass<Game>, new_value: u32) {\n                this.borrow_mut().score = new_value;\n            }\n        }\n\n        constructor() {\n            Ok(Game::default())\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implement-your-own-native-errors",
      children: "Implement your own native Errors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Embedders can now create native errors in Rust and pass them into the JavaScript environment.\nThe below example creates a new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JsError"
      }), " from a Rust standard error ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://doc.rust-lang.org/std/error/trait.Error.html",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "err"
        })
      }), ". This will create a new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JsNativeError"
      }), " with the message of the standard error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-rust",
        children: "use boa_engine::JsError;\n\nlet error = std::io::Error::new(std::io::ErrorKind::Other, \"oh no!\");\nlet js_error: JsError = JsError::from_rust(error);\n\nassert_eq!(js_error.as_native().unwrap().message(), \"oh no!\");\nassert!(js_error.as_native().unwrap().cause().is_none());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "boa-runtime",
      children: "Boa Runtime"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Boa’s boa_runtime crate contains an example runtime and basic runtime features and functionality for the boa_engine crate for runtime implementors.\nShout out to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/hansl",
        children: "@hansl"
      }), " for their work on the additional features of the Boa runtime crate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-apis",
      children: "Additional APIs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Additional APIs added the the Runtime crate include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "TextDecoder"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "TextEncoder"
          })
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/URL",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "URL"
          })
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams",
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "URLSearchParams"
          })
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "console-improvements",
      children: "Console Improvements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["There is also ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/4005",
        children: "context added"
      }), " to the console's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Logger"
      }), " trait. This change modifiers the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Logger"
      }), " trait to accept ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConsoleState"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Context"
      }), " paramters. This allows the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Logger"
      }), " to be aware of the context in which it is being called, and to log messages accordingly. This is useful for debugging and logging in Boa."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["See ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docs.rs/boa_runtime/latest/boa_runtime/index.html",
        children: "here"
      }), " for more information on Boa runtime."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "performance",
      children: "Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "escape-analysis-and-local-variables",
      children: "Escape Analysis and local variables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thanks to @raskad who has been ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3988",
        children: "working on improving scope analysis"
      }), " in the engine's AST. There has been so much improvement we plan to release a blog post shortly after detailing the changes and how they have improved the engine's performance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Most of the changes in the AST are the addition of ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/1c4f455554b4140910241e86f90474ae3ff9f095/core/ast/src/scope.rs#L19-L25",
        children: "Scopes"
      }), " to relevant AST nodes like ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/core/ast/src/function/arrow_function.rs#L33",
        children: "functions"
      }), " or ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/1c4f455554b4140910241e86f90474ae3ff9f095/core/ast/src/statement/block.rs#L47-L53",
        children: "blocks"
      }), ".\nScopes contain bindings, that we previously created during bytecode compilation.\nNow they are added to the AST after parsing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The scope analyzer contains new visitor code that creates bindings and looks for bindings that escape their function scope. This allows us to only visit the scope environment for variables that are used outside of their scope, whilst keeping local variables on the stack. This is a big performance improvement as we no longer need to visit the entire scope environment for every variable in the function."
    }), "\n", "\n", (0,jsx_runtime.jsx)(ThemedImage/* default */.A, {
      alt: "Performance changes in the benchmarks",
      sources: {
        light: perf_changes_light,
        dark: perf_changes_dark
      }
    }), "\n", (0,jsx_runtime.jsx)("center", {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "V8 Benchmark overall score, higher is better..."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-optimizations",
      children: "Error optimizations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Thanks to the work from ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/CrazyboyQCD",
        children: "@CrazyboyQCD"
      }), " we have improved performance on the Error messages and native errors. Error messages now use Rust's ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://doc.rust-lang.org/std/borrow/enum.Cow.html",
        children: "Cow"
      }), " type to avoid unnecessary allocations. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JSNativeError"
      }), " constructors are also now marked as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " which means much fewer instructions generated when creating a new error. See the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/4020",
        children: "PR"
      }), " plus the changes in godbolt ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://godbolt.org/z/YEq4hW49n",
        children: "here"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "string-optimizations",
      children: "String optimizations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Our string representation was refactored by ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/CrazyboyQCD",
        children: "@CrazyboyQCD"
      }), ".\nThanks to the changes, string literals can now be created without heap allocations.\nBuilding on these changes, ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/CrazyboyQCD",
        children: "@CrazyboyQCD"
      }), " also adjusted all places in our crates where this new capability could be applied."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can find the details in the relevant PRs ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3935",
        children: "3935"
      }), " and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/4030",
        children: "4030"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lazy-loading-of-icu-data",
      children: "Lazy loading of ICU data"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Boa now lazily loads ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://icu.unicode.org/design/cldr-support",
        children: "ICU"
      }), " data on demand instead of during startup, this is a big performance improvement as we no longer need to load all the ICU data which can be quite large. This code change includes the addition of a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/1c4f455554b4140910241e86f90474ae3ff9f095/core/icu_provider/src/lib.rs#L32-L40",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "LazyBufferProvider"
        })
      }), " which lazily deserializes the ICU data when first called upon."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On top of this we have also broken up the ICU data into smaller chunks called postcards (datetime, plurals, segmenters, decimals), this means we can load only the data we need when we need it."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can see more details on the changes in the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3948",
        children: "PR"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "new-contributors",
      children: "New Contributors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thank you to the new contributors to Boa for this release, you can find their contributions below:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/@magic-akari",
          children: "@magic-akari"
        }), " made their first contribution in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/3916",
          children: "https://github.com/boa-dev/boa/pull/3916"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/@shurizzle",
          children: "@shurizzle"
        }), " made their first contribution in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/3976",
          children: "https://github.com/boa-dev/boa/pull/3976"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/@it-a-me",
          children: "@it-a-me"
        }), " made their first contribution in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4007",
          children: "https://github.com/boa-dev/boa/pull/4007"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/@Nikita-str",
          children: "@Nikita-str"
        }), " made their first contribution in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4010",
          children: "https://github.com/boa-dev/boa/pull/4010"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/@4yman-0",
          children: "@4yman-0"
        }), " made their first contribution in ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4046/",
          children: "https://github.com/boa-dev/boa/pull/4046/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "looking-forward",
      children: "Looking Forward"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "register-vm",
      children: "Register VM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now that we ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3942",
        children: "have register"
      }), " allocation merged @HalidOdat has been working on migrating from a Stack VM to a Register VM, the register VM should mean less accesses to the heap as we utilize register allocation more. Secondly, by resembling the lower level architecture (in terms of low-level operations), we can compile down to efficient machine languauge easier in future when looking into JIT compilation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lazy-built-ins",
      children: "Lazy Built-ins"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["All builtins are eagerly initialized when the engine starts up, this is not ideal as it can slow down the startup time of the engine. We are looking to change this so that builtins are lazily initialized when they are first accessed. This should improve the startup time of the engine and reduce the memory footprint. You can follow the progress of this work ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3973",
        children: "here"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-can-you-support-boa",
      children: "How can you support Boa?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Boa is an independent JavaScript engine implementing the ECMAScript specification, and we rely on the\nsupport of the community to keep it going. If you want to support us, you can do so by donating to\nour ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://opencollective.com/boa",
        children: "open collective"
      }), ". Proceeeds here go towards this very website, the domain name, and remunerating\nmembers of the team who have worked on the features released."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If financial contribution is not your strength, you can contribute by asking to be assigned to one of\nour ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+no%3Aassignee",
        children: "open issues"
      }), ", and asking for mentoring if you don't know your way around the engine. Our\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/CONTRIBUTING.md",
        children: "contribution guide"
      }), " should help you here. If you are more used to working with JavaScript or frontend\nweb development, we also welcome help to improve our web presence, either in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa-dev.github.io",
        children: "our website"
      }), ", or in our\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues/820",
        children: "testing representation"
      }), " page or benchmarks page. You can also contribute to our Criterion benchmark\ncomparison GitHub ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/criterion-compare-action",
        children: "action"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["We are also looking to improve the documentation of the engine, both for developers of the engine\nitself and for users of the engine. Feel free to contact us in ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://matrix.to/#/#boa:matrix.org",
        children: "Matrix"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thank-you",
      children: "Thank You"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Once again, big thanks to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/graphs/contributors?from=2024-03-05&to=2024-07-11&type=c",
        children: "all the contributors"
      }), " of this release!!"]
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