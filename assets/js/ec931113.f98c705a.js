"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[5845],{

/***/ 6948:
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
	title: 'Boa release v0.17',
	authors: 'boa-dev'
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/blog/2023/07/08/boa-release-17",
  "source": "@site/blog/2023-07-08-boa-release-17.md",
  "title": "Boa release v0.17",
  "description": "Summary",
  "date": "2023-07-08T00:00:00.000Z",
  "tags": [
    {
      "inline": true,
      "label": "post",
      "permalink": "/blog/tags/post"
    }
  ],
  "readingTime": 11.33,
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
    "title": "Boa release v0.17",
    "authors": "boa-dev"
  },
  "unlisted": false,
  "prevItem": {
    "title": "Boa release v0.18",
    "permalink": "/blog/2024/03/07/boa-release-18"
  },
  "nextItem": {
    "title": "Adding a JavaScript interpreter to your Rust project",
    "permalink": "/blog/2022/10/24/boa-usage"
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
  "value": "Highlights",
  "id": "highlights",
  "level": 2
}, {
  "value": "Modules",
  "id": "modules",
  "level": 3
}, {
  "value": "Spec Version Conformance",
  "id": "spec-version-conformance",
  "level": 3
}, {
  "value": "Optimizations",
  "id": "optimizations",
  "level": 3
}, {
  "value": "Constant folding optimization",
  "id": "constant-folding-optimization",
  "level": 4
}, {
  "value": "Object Shapes (Hidden classes)",
  "id": "object-shapes-hidden-classes",
  "level": 4
}, {
  "value": "Debug object",
  "id": "debug-object",
  "level": 3
}, {
  "value": "New APIs",
  "id": "new-apis",
  "level": 3
}, {
  "value": "Source API",
  "id": "source-api",
  "level": 4
}, {
  "value": "Hooks and Job Queues",
  "id": "hooks-and-job-queues",
  "level": 4
}, {
  "value": "New Builtins",
  "id": "new-builtins",
  "level": 3
}, {
  "value": "<code>Intl</code>",
  "id": "intl",
  "level": 4
}, {
  "value": "<code>WeakRef</code>, <code>WeakSet</code> and <code>WeakMap</code>",
  "id": "weakref-weakset-and-weakmap",
  "level": 4
}, {
  "value": "Fuzzing",
  "id": "fuzzing",
  "level": 3
}, {
  "value": "New Crates",
  "id": "new-crates",
  "level": 3
}, {
  "value": "boa_parser",
  "id": "boa_parser",
  "level": 4
}, {
  "value": "boa_ast",
  "id": "boa_ast",
  "level": 4
}, {
  "value": "boa_runtime",
  "id": "boa_runtime",
  "level": 4
}, {
  "value": "Other internal enhancements",
  "id": "other-internal-enhancements",
  "level": 3
}, {
  "value": "Split Node into Statement / Declaration / Expression",
  "id": "split-node-into-statement--declaration--expression",
  "level": 4
}, {
  "value": "UTF-16 strings",
  "id": "utf-16-strings",
  "level": 4
}, {
  "value": "Conclusions",
  "id": "conclusions",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa v0.17 is now available! This is one of the biggest Boa releases since the project started, and after around 7 months\nof development, we are very happy to present you the latest release of the Boa JavaScript engine. Boa makes it easy to\nembed a JS engine in your projects, and you can even use it from WebAssembly. See the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/about",
        children: "about"
      }), " page for more info."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In this release, our conformance has grown from 74.53% to 78.74% in the official ECMAScript Test Suite (Test262). While\nthis might look as a small increase, we now pass ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "6,079"
      }), " more tests than in the previous version. In any case, the big\nchanges in this release are not related to conformance, but to huge internal enhancements and new APIs that you will be\nable to use."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can check the full list of changes ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/v0.17/CHANGELOG.md",
        children: "here"
      }), ", and the full information on conformance ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://boajs.dev/boa/test262/",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Moreover, this big release was partly possible thanks to a grant by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://litprotocol.com/",
        children: "Lit Protocol"
      }), ". Thanks to\nthis grant, we were able to remunerate 2 team members for their 20h/week work each during three and a half months. If\nyou wish to sponsor Boa, you can do so by donating to our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://opencollective.com/boa",
        children: "open collective"
      }), ". You can also check\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3AE-Easy",
        children: "easy"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22",
        children: "good first issues"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Furthermore, we now have a new domain for Boa, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://boajs.dev",
        children: "boajs.dev"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "highlights",
      children: "Highlights"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "modules",
      children: "Modules"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa finally has a module system! This implementation tries to closely follow ECMAScript's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://tc39.es/ecma262/#sec-modules",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Modules"
        })
      }), "\nspecification which includes some useful hooks to customize module loading, making it possible to load modules from\nseveral sources, fetch modules from an URL and even asynchronously load and parse them to avoid blocking execution; see\nthe ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.17.0/boa_engine/module/trait.ModuleLoader.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ModuleLoader"
        })
      }), " for more information."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We also implemented a simple loader (currently the default module loader), which should fulfill most of the simpler use cases:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "// Creates a new module loader that uses the current directory to resolve module imports.\nlet loader = &SimpleModuleLoader::new(Path::new(\".\")).unwrap();\n\n// Need to convert it to either a `&dyn ModuleLoader` or a `Rc<dyn ModuleLoader>` in order\n// to pass it to the context.\nlet dyn_loader: &dyn ModuleLoader = loader;\nlet mut context = &mut Context::builder().module_loader(dyn_loader).build().unwrap();\n\nlet source = Source::from_bytes(\"1 + 3\");\n\nlet module = Module::parse(source, None, context).unwrap();\n\n// `main.mjs` or any of its imports could import `main.mjs` itself, so we\n// insert it into the loader for good measure.\nloader.insert(Path::new(\"main.mjs\").to_path_buf(), module.clone());\n\n// All modules use promises to signal completion of its lifecycle.\n// The utility method `load_link_evaluate` calls `load`, then `link` and\n// finally `evaluate`, returning an error if any call fails.\nlet promise = module.load_link_evaluate(context).unwrap();\n\n// Important to push the job queue forward! Otherwise, the modules won't progress\n// on their lifecycle.\ncontext.run_jobs();\n\n// All modules return `undefined` if they're successfully evaluated.\nassert_eq!(promise.state().unwrap(), PromiseState::Fulfilled(JsValue::undefined()));\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For a more extensive, descriptive example that uses a real directory, you can check out ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/v0.17/boa_examples/src/bin/modules.rs",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "boa_examples"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "spec-version-conformance",
      children: "Spec Version Conformance"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Something we get asked a lot is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "\"Do you support ES5 or ES6\""
      }), "? or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "\"How far away are you from supporting ESX\""
      }), "?\nWe're pleased to say we've updated our conformance board to show you how we're doing across ES versions."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Just navigate to our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://boajs.dev/boa/test262/",
        children: "Test262 Dashboard"
      }), ", select \"Test Results\" on our main branch, and\nthen you can use the dropdown underneath to see how we're doing on each version. ES5 and ES6 are very close, you can see\nwe're only a few tests away from them being fully implemented."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "optimizations",
      children: "Optimizations"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "constant-folding-optimization",
      children: "Constant folding optimization"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Constant folding expression is a powerful compiler optimization technique that significantly enhances the efficiency and\nperformance of compiled programs. This optimization, now incorporated in the latest release, aims to reduce runtime\noverhead by evaluating constant expressions at compile-time."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "With constant folding expression optimization, the compiler analyzes expressions involving constants and replaces them\nwith their computed results. This process allows the compiler to transform arithmetic operations, comparisons, and\nlogical expressions into simplified forms, removing unnecessary runtime computations. By eliminating these computations,\nthe optimized program benefits from reduced execution time and improved overall performance."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "object-shapes-hidden-classes",
      children: "Object Shapes (Hidden classes)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Hidden Classes (called \"Shapes\" internally to avoid confusion with JavaScript classes) are an alternative way to\nstructure objects that stores the property keys (string or symbol) (i.e. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "object.propertyName"
      }), ") and its attributes\n(writable, enumerable, configurable) as transitions from a root shape, and the values as a dense array. This is\ndifferent from the traditional way of storing properties as a hashmap from property keys to values."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The shapes create a transition tree, where the transitions are property names and prototype changes starting from a root\nshape (no properties, no prototype)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javascript",
        children: "let o = {} // Shape 1: prototype `Object.prototype` and properties: empty\no.a = 10   // Shape 2: prototype `Object.prototype` and properties: 'a'\no.b = 20   // Shape 3: prototype `Object.prototype` and properties: 'a', 'b'\n\nlet o2 = { a: 30; } // Shape 2: prototype `Object.prototype` and properties: 'a'\no2.d = 50           // Shape 4: prototype `Object.prototype` and properties: 'a', 'd' -- fork from shape 2\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This separation of property keys and values allows for objects with the same property names to share the same shape,\nwhich reduces memory consumption and unlocks the possibility for other optimizations such as inline caching."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Note: When creating objects with the same property keys, it's best to create them in the same order, this ensures that\nthe objects share the same shape."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For a more in depth explanation of how shared shapes work in boa see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "shapes.md"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/v0.17/docs/shapes.md",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "debug-object",
      children: "Debug object"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "$boa"
      }), " debug object has been implemented for convenient JavaScript debugging using Boa's CLI interface. If you want\nto use it, you will need to run the Boa CLI / REPL with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "--debug-object"
      }), " command line flag."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "$boa"
      }), " debug object is divided into modules, so that you can trigger the garbage collection with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "$boa.gc.collect()"
      }), ",\nor get the bytecode of a function by running ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "$boa.function.bytecode(fn_name)"
      }), ". You can also trace function invocations,\nhandle compiler optimizations, set runtime limits and inspect object shapes."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can find all the documentation ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/v0.17/docs/boa_object.md",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "new-apis",
      children: "New APIs"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We have added new built-in object wrappers, such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.17.0/boa_engine/object/builtins/struct.JsPromise.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "JsPromise"
        })
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.17.0/boa_engine/object/builtins/struct.JsRegExp.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "JsRegExp"
        })
      }), ",\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.17.0/boa_engine/object/builtins/struct.JsGenerator.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "JsGenerator"
        })
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.17.0/boa_engine/object/builtins/struct.JsDate.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "JsDate"
        })
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.17.0/boa_engine/object/builtins/struct.JsDataView.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "JsDataView"
        })
      }), ". You can check all of them\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.17.0/boa_engine/object/builtins/index.html",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We also want to present you a new trait that we have developed to make it easier for you to interoperate between Rust\nand JavaScript: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.17.0/boa_engine/value/trait.TryFromJs.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "TryFromJs"
        })
      }), ". All built-ins and Rust basic types that exist in JavaScript implement this\ntrait, and it adds a new static method to them that allows you to convert a [", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsValue"
      }), "][js_value] into a Rust structure.\nYou can also convert any ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsValue"
      }), " to a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TryFromJs"
      }), " Rust type with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.17.0/boa_engine/enum.JsValue.html#method.try_js_into",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "JsValue::try_js_into()"
        })
      }), " function."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "let js_str = r#\"\nlet x = /[a-z0-9]@[a-z0-9]/;\nx;\n\"#;\n\nlet js = Source::from_bytes(js_str);\nlet mut context = Context::default();\nlet res = context.eval(js).unwrap();\n\nlet rs_regexp: JsRegExp = res.try_js_into(context).unwrap();\n\nlet test_result = rs_regexp.test(\"hello@domain\", context)?;\nassert!(test_result);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Moreover, you can derive ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TryFromJs"
      }), " for any Rust structure, and in the case that you want to manually convert some of\nthe struct attributes, you can override it:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "/// Converts the value lossly.\nfn lossy_conversion(value: &JsValue, _context: &mut Context) -> JsResult<i16> {\n    match value {\n        JsValue::Rational(r) => Ok(r.round() as i16),\n        JsValue::Integer(i) => Ok(*i as i16),\n        _ => Err(JsNativeError::typ().with_message(\"cannot convert value to an i16\").into()),\n    }\n}\n\n#[derive(Debug, TryFromJs)]\nstruct TestStruct {\n    inner: bool,\n    hello: String,\n    // You can override the conversion of an attribute.\n    #[boa(from_js_with = \"lossy_conversion\")]\n    my_float: i16,\n}\n\nlet js_str = r#\"\nlet x = {\n    inner: false,\n    hello: \"World\",\n    my_float: 2.9,\n};\nx;\n\"#;\nlet context = &mut Context::default();\nlet result = context.eval(Source::from_bytes(js_str))?;\nlet str = TestStruct::try_from_js(&result, context)?;\n\nprintln!(\"{str:?}\");\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "source-api",
      children: "Source API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We have introduced a new ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Source API"
      }), " to Boa. The new API represents JavaScript stored from a path or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "None"
      }), " if it's\ncoming from a plain string."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This change improves the display of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "boa_tester"
      }), " to show the path of the tests being run. It also enables hyperlinks to\ndirectly jump to the tested file from the VS terminal. This will further help with error displays and debugging in the\nfuture."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "use boa_engine::{Context, Source};\n\nfn main() {\n    let js_file_path = \"./scripts/helloworld.js\";\n\n    match Source::from_filepath(Path::new(js_file_path)) {\n    ...\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["See Boa's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/tree/v0.17/boa_examples/src/bin",
        children: "examples"
      }), " for more examples on how its used."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "hooks-and-job-queues",
      children: "Hooks and Job Queues"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In this release we have added ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "HostHooks"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JobQueue"
      }), " traits to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Context"
      }), ". This will allow hosts to implement custom\nevent loops and other host specific functionality. This makes Boa more configurable for users and any future runtimes\nwhich need to add a more complex event loop, such as Tokio or Mio."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As a result of this change, Boa's CLI will run all jobs until the queue is empty, even if a Job returns an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Err"
      }), ".`"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "new-builtins",
      children: "New Builtins"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "intl",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Intl"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa now has internationalization support! Although we are still working on full compliance with the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.a, {
        href: "https://tc39.es/ecma402/",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ecma402"
        }), " specification"]
      }), ", we have a couple of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Intl"
      }), " utilities in place:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Intl.Collator"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Intl.ListFormat"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Intl.Locale"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Intl.Segmenter"
          })
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Internationalization data can be pretty expensive at times: the default data included by Boa is 10.6 MB, which is why\nwe allow customizing the data provider used by the engine with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ContextBuilder::icu_provider"
      }), " hook.\nFor more information on how to generate custom internationalization data, you can check out the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/unicode-org/icu4x/blob/main/docs/tutorials/data_management.md#data-management-in-icu4x",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "data management tutorial"
        })
      }), " from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/unicode-org/icu4x",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "icu4x"
        })
      }), ", the internationalization library used in Boa. Shoutout to the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "icu4x"
      }), " team, who are the ones that made all of this possible!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Additionally, we added an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "intl"
      }), " feature flag, which is enabled by default but can be disabled to reduce Boa's binary\nsize."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h4, {
      id: "weakref-weakset-and-weakmap",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WeakRef"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WeakSet"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "WeakMap"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We've implemented support for weak references to garbage collected objects. This allowed us to implement some builtins\nlike ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WeakRef"
        })
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WeakSet"
        })
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "WeakMap"
        })
      }), ". However, garbage collectors are unpredictable! A garbage\ncollector could collect at unexpected moments, extend the lifetime of unreachable objects and even leak, which is why\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#avoid_where_possible",
        children: "mozilla recommends avoiding using those builtins where possible"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "fuzzing",
      children: "Fuzzing"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This release of Boa contains new functionalities in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "boa_ast"
      }), " crate to support grammar aware fuzzing. The visitor\npattern that is implemented for the AST makes it easy to traverse the AST and either collect information or apply\nmodifications. In addition to the fuzzer, we also use the visitor pattern in multiple syntax directed operations. The\nAST now implements the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Arbitrary"
      }), " trait from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/arbitrary/latest/arbitrary/",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Arbitrary"
        })
      }), " crate to generate inputs for fuzzers. Based\non these features we currently have three fuzzers targeting the parser, bytecompiler and vm. The fuzzers have already\nhelped us finding multiple panics that we previously had no tests for."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We want to extend a huge thanks to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/addisoncrump",
        children: "@addisoncrump"
      }), " as they have contributed not only\nthe fuzzers but also the visitor pattern implementation and the additional bits needed to successfully fuzz Boa."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "new-crates",
      children: "New Crates"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This release of Boa will also mark the release of some new boa crates that contain various aspects of Boa's ECMAScript\nimplementation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "boa_parser",
      children: "boa_parser"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "boa_parser"
      }), " crate contains a lexer and parser that targets the latest ECMAScript language specification."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "boa_ast",
      children: "boa_ast"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "boa_ast"
      }), " crate contains an ECMAScript abstract syntax tree implementation of Declaration, Statement, and\nExpression Parse Nodes."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "boa_runtime",
      children: "boa_runtime"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "boa_runtime"
      }), " crate contains an example runtime along with basic runtime features and functionality for runtime\nimplementors. Note: this crate will contain any WEB API feature implementations or APIs that are not designated by the\nECMAScript specification."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "other-internal-enhancements",
      children: "Other internal enhancements"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "There have also been a various number of other internal enhancements made."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "split-node-into-statement--declaration--expression",
      children: "Split Node into Statement / Declaration / Expression"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In the last release, Boa's AST used a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Node"
      }), " enum to represent both the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Statement"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Declaration"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Expression"
      }), "\nparse nodes. One of the large internal improvements made for this release was to split ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Node"
      }), " into ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Statement"
      }), ",\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Declaration"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Expression"
      }), " nodes. This refactor involved not only large changes to the AST but also further changes\nto the bytecompiler and parser. The split also brings us closer in line with the ECMAScript specification."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "utf-16-strings",
      children: "UTF-16 strings"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["With this release, Boa's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsString"
      }), "s are now implemented as utf-16 encoded strings. Along with the new ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsString"
      }), ", there\nare two provided macros: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "js_string!"
      }), " for creating a new ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsString"
      }), " from a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "&str"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "utf16!"
      }), " for creating a utf-16\narray literal from a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "&str"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can create a utf-16 array literal from any utf-8 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "str"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "const HELLO: &[u16] = utf16!(\"Hi! :)\");\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsString"
      }), " from a string literal with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "js_string"
      }), " macro."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "let hw = js_string!(\"Hello, world!\");\nassert_eq!(&hw, utf16!(\"Hello, world!\"));\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can also pass any number of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "&[u16]"
      }), " string values as arguments to create a new ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsString"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "const NAME: &[u16]  = utf16!(\"human! \");\nlet greeting = js_string!(\"Hello, \");\nlet msg = js_string!(&greeting, &NAME, utf16!(\"Nice to meet you!\"));\n\nassert_eq!(&msg, utf16!(\"Hello, human! Nice to meet you!\"));\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "conclusions",
      children: "Conclusions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you reached so far, you probably understand how big this release was, and you can find even more changes in the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/v0.17/CHANGELOG.md",
        children: "full changelog"
      }), ". Boa is now becoming a real option for many projects, which shows with the amount of\nfinancial support we have received these last months. Nevertheless, going forward, we need your help to get to a 1.0\nversion. Whether you are good with Rust, JavaScript, documentation or development, we have multiple\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22",
        children: "good first issues"
      }), ", and places where we ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22",
        children: "need help"
      }), ", both in Boa's\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa",
        children: "main repository"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev",
        children: "others"
      }), " around it."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Once again, big thanks to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/graphs/contributors?from=2022-10-24&to=2023-07-05&type=c",
        children: "all the contributors"
      }), " of this release!!"]
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