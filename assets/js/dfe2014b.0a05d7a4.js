"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[2979],{

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/native-backtrace-40dcf10962db4b6360bd6a07c43be444.gif");

/***/ }),

/***/ 134:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/2025/10/22/boa-release-21","source":"@site/blog/2025-10-22-boa-release-21/index.md","title":"Boa release v0.21","description":"Boa release v0.21","date":"2025-10-22T00:00:00.000Z","tags":[{"inline":true,"label":"post","permalink":"/blog/tags/post"}],"readingTime":22.52,"hasTruncateMarker":true,"authors":[{"name":"Boa Developers","url":"https://github.com/boa-dev","key":"boa-dev","page":null}],"frontMatter":{"layout":"post","tags":["post"],"title":"Boa release v0.21","description":"Boa release v0.21","authors":"boa-dev"},"unlisted":false,"nextItem":{"title":"Temporal_rs is here! The datetime library powering Temporal in Boa, Kiesel, and V8","permalink":"/blog/2025/09/24/temporal-release"}}');

/***/ }),

/***/ 2290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/backtrace-e7d4907c722942308a2cc4e0449138e7.gif");

/***/ }),

/***/ 6044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_10_22_boa_release_21_index_md_dfe_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_10_22_boa_release_21_index_md_dfe_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(134);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	layout: 'post',
	tags: [
		'post'
	],
	title: 'Boa release v0.21',
	description: 'Boa release v0.21',
	authors: 'boa-dev'
};
const contentTitle = undefined;

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
  "value": "Span nodes and error backtraces",
  "id": "span-nodes-and-error-backtraces",
  "level": 3
}, {
  "value": "Utility macros",
  "id": "utility-macros",
  "level": 3
}, {
  "value": "js_value",
  "id": "js_value",
  "level": 4
}, {
  "value": "js_object",
  "id": "js_object",
  "level": 4
}, {
  "value": "boa_class",
  "id": "boa_class",
  "level": 4
}, {
  "value": "boa_module",
  "id": "boa_module",
  "level": 4
}, {
  "value": "Async APIs enhancements",
  "id": "async-apis-enhancements",
  "level": 3
}, {
  "value": "Revamped <code>JobQueue</code>",
  "id": "revamped-jobqueue",
  "level": 3
}, {
  "value": "Asyncified <code>ModuleLoader</code>",
  "id": "asyncified-moduleloader",
  "level": 3
}, {
  "value": "Built-ins updates",
  "id": "built-ins-updates",
  "level": 3
}, {
  "value": "Atomics.waitAsync",
  "id": "atomicswaitasync",
  "level": 4
}, {
  "value": "Set methods",
  "id": "set-methods",
  "level": 4
}, {
  "value": "Float16 support for TypedArrays, Dataview and Math built-ins",
  "id": "float16-support-for-typedarrays-dataview-and-math-built-ins",
  "level": 4
}, {
  "value": "Error.isError",
  "id": "erroriserror",
  "level": 4
}, {
  "value": "Math.sumPrecise",
  "id": "mathsumprecise",
  "level": 4
}, {
  "value": "Array.fromAsync",
  "id": "arrayfromasync",
  "level": 4
}, {
  "value": "Boa Runtime",
  "id": "boa-runtime",
  "level": 2
}, {
  "value": "Additional APIs",
  "id": "additional-apis",
  "level": 3
}, {
  "value": "Conformance testing",
  "id": "conformance-testing",
  "level": 3
}, {
  "value": "Performance",
  "id": "performance",
  "level": 2
}, {
  "value": "NaN Boxing",
  "id": "nan-boxing",
  "level": 3
}, {
  "value": "Register VM",
  "id": "register-vm",
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
  "value": "Garbage collector rewrite",
  "id": "garbage-collector-rewrite",
  "level": 3
}, {
  "value": "Runtime functionality",
  "id": "runtime-functionality",
  "level": 3
}, {
  "value": "Continuing performance improvements",
  "id": "continuing-performance-improvements",
  "level": 3
}, {
  "value": "<code>Intl</code> and ECMA402 conformance",
  "id": "intl-and-ecma402-conformance",
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
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Boa v0.21 is now available! After 9 months of development we are very\nhappy to present you the latest release of the Boa JavaScript engine.\nBoa makes it easy to embed a JS engine in your projects, and you can\neven use it from WebAssembly. See the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/about",
        children: "about"
      }), " page for more\ninfo."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "In this release, our conformance has grown from 89.92% to 94.12% in the\nofficial ECMAScript Test Suite (Test262). Our growth in conformance is\ndriven by increased conformance for Temporal (discussed further below)\nwith the rest of the development effort being focused on performance,\ninternal improvements, and runtime features. We will continue to implement\nmore of the specification; however, as of the current moment, Boa's conformance\naligns with the major browser engine's conformance, so future increases\nin conformance will be minor or bound to the feature size going forward."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["You can check the full list of changes ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/v0.21/CHANGELOG.md",
        children: "here"
      }), ", and the full\ninformation on conformance ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://boajs.dev/boa/test262/",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "feature-highlights",
      children: "Feature Highlights"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "temporal",
      children: "Temporal"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["There has been a lot of progress made on Temporal, the new Stage 3\ndate/time proposal. With this release, Boa's conformance on Temporal\ngrew from 40.67% to ~97%. This implementation is backed by the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "temporal_rs"
      }), "\ndate/time Rust library, which we went over in our announcement\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/blog/2025/09/24/temporal-release",
        children: "blog post"
      }), ". Give the post a read if you are\ninterested in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "temporal_rs"
      }), " and its development history."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "span-nodes-and-error-backtraces",
      children: "Span nodes and error backtraces"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We added support for storing spans in our AST nodes, which allows determining the\nexact location of an AST node on its original file. We already kind of\nsupported this feature in our lexer, but we did not store the spans after parsing."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Why is this important? Well, as a direct result from this, Boa now supports error backtraces\nwhen an exception is thrown!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "backtrace-example",
        src: (__webpack_require__(2290)/* ["default"] */ .A) + "",
        width: "1200",
        height: "600"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["As an additional plus, you can enable the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "native-backtrace"
      }), " feature to include\n\"native\" functions on a backtrace."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.img, {
        alt: "native-backtrace-example",
        src: (__webpack_require__(88)/* ["default"] */ .A) + "",
        width: "1200",
        height: "600"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This feature has been one of the most requested ones for years,\nand we hope it will\ngreatly help with debugging errors when using Boa."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "utility-macros",
      children: "Utility macros"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We introduced a new set of proc macros that make it much easier to create ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.21.0/boa_engine/value/struct.JsValue.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "JsValue"
        })
      }), "s,\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.21.0/boa_engine/object/struct.JsObject.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "JsObject"
        })
      }), "s, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.21.0/boa_engine/class/trait.Class.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Class"
        })
      }), "es and even ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.21.0/boa_engine/module/struct.Module.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Module"
        })
      }), "s. Let's see them in action!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "js_value",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.21.0/boa_engine/macro.js_value.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "js_value"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-rust",
        children: "// Simple values can be created without passing the `Context`.\nassert_eq!(js_value!( 1 ), JsValue::from(1));\nassert_eq!(js_value!( false ), JsValue::from(false));\n\n// To create arrays and objects, the context needs to be passed in.\nassert_eq!(js_value!([ 1, 2, 3 ], context).display().to_string(), \"[ 1, 2, 3 ]\");\nassert_eq!(\n  js_value!({\n    // Comments are allowed inside.\n    \"key\": (js_string!(\"value\"))\n  }, context).display().to_string(),\n  \"{\\n    key: \\\"value\\\"\\n}\",\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "js_object",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.21.0/boa_engine/macro.js_object.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "js_object"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-rust",
        children: "let object = js_object!({\n  // Comments are allowed inside. String literals will always be transformed to `JsString`.\n  \"key\": \"value\",\n  // Identifiers will be used as keys, like in JavaScript.\n  alsoKey: 1,\n  // Expressions surrounded by brackets will be expressed, like in JavaScript.\n  // Note that in this case, the unit value is represented by `null`.\n  [1 + 2]: (),\n}, context);\n\nassert_eq!(\n    JsValue::from(object).display().to_string(),\n    \"{\\n    3: null,\\n    key: \\\"value\\\",\\n    alsoKey: 1\\n}\"\n);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "boa_class",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.21.0/boa_engine/attr.boa_class.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "boa_class"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-rust",
        children: "\n// All types that will be part of a class instance need to derive the\n// `Trace` and `Finalize` traits.\n#[derive(Clone, Trace, Finalize, JsData)]\nenum AnimalType {\n    Cat,\n    Dog,\n    Other,\n}\n\n#[derive(Clone, Trace, Finalize, JsData)]\nstruct Animal {\n    ty: AnimalType,\n    age: i32,\n}\n\n#[boa_class]\nimpl Animal {\n\n    // Sets this method as the constructor of the ECMAScript class.\n    #[boa(constructor)]\n    fn new(name: String, age: i32) -> Self {\n        let ty = match name.as_str() {\n            \"cat\" => AnimalType::Cat,\n            \"dog\" => AnimalType::Dog,\n            _ => AnimalType::Other,\n        };\n\n        Self { ty, age }\n    }\n\n    // Any method that takes `&self` will be exposed as an instance method.\n    fn speak(#[boa(error = \"`this` was not an animal\")] &self) -> JsString {\n        match self.ty {\n            AnimalType::Cat => js_string!(\"meow\"),\n            AnimalType::Dog => js_string!(\"woof\"),\n            AnimalType::Other => js_string!(r\"¯\\_(ツ)_/¯\"),\n        }\n    }\n\n    // Force this being a method (instead of a static function) by declaring it\n    // as a method.\n    #[boa(method)]\n    #[boa(length = 11)]\n    fn method(context: &mut Context) -> JsObject {\n        let obj = JsObject::with_null_proto();\n        obj.set(js_string!(\"key\"), 43, false, context).unwrap();\n        obj\n    }\n\n    // You can define getter methods; `animal.age` will automatically call this\n    // on read.\n    #[boa(getter)]\n    fn age(&self) -> i32 {\n        self.age\n    }\n\n    // You can also define setter methods; `animal.age = 5` will automatically call\n    // this on write.\n    #[boa(setter)]\n    #[boa(method)]\n    #[boa(rename = \"age\")]\n    fn set_age(&mut self, age: i32) {\n        self.age = age;\n    }\n\n    // This static method will be callable using the constructor function\n    // (`Animal.marked_static_method()`).\n    #[boa(static)]\n    fn marked_static_method() -> i32 {\n        123\n    }\n\n    // Methods without `&self` are considered static methods.\n    fn static_method() -> i32 {\n        42\n    }\n}\n\nlet mut context = Context::default();\n\n// This registers the newly created class into the `Realm`.\ncontext.register_global_class::<Animal>().unwrap();\n\ncontext\n    .eval(Source::from_bytes(\n        r#\"\n        let pet = new Animal(\"dog\", 3);\n        console.log(pet.age) // 3\n        console.log(Animal.staticMethod()) // 42\n        console.log(Animal.markedStaticMethod()) // 123\n\n        v = pet.method();\n        console.log(v.key) // 43\n\n        pet.age = 4;\n        console.log(pet.age) // 4\n    \"#,\n    )).unwrap();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "boa_module",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.21.0/boa_engine/attr.boa_module.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "boa_module"
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-rust",
        children: "\n#[boa_module]\nmod hello {\n    use boa_engine::{JsString, js_string};\n\n    // Exports a function.\n    fn world() -> JsString {\n        js_string!(\"hello world\")\n    }\n\n    // Exports the `Animal` class. This is the class that we defined in the\n    // previous section.\n    type Animal = super::Animal;\n\n    // Exports a const variable.\n    const SOME_LITERAL_NUMBER: i32 = 1234;\n\n    // You can also rename exports.\n    #[boa(rename = \"this_is_different\")]\n    const SOME_OTHER_LITERAL: i32 = 5678;\n}\n\n// Creates a new `MapModuleLoader` to load our created module into the\n// engine.\nlet module_loader = Rc::new(MapModuleLoader::new());\nlet mut context = Context::builder()\n    .module_loader(module_loader.clone())\n    .build()\n    .unwrap();\n\n// The module will be exposed as `/hello.js`.\nmodule_loader.insert(\"/hello.js\", hello::boa_module(None, &mut context));\n\nlet module = Module::parse(\n    Source::from_bytes(\n        r#\"\n            import * as m from '/hello.js';\n\n            console.log(m.someLiteralNumber) // 1234\n            console.log(m.this_is_different) // 5678\n\n            console.log(m.world()) // \"hello world\"\n\n            let pet = new m.Animal(\"dog\", 8);\n            console.log(pet.age) // 8\n            console.log(pet.speak()) // \"woof\"\n        \"#,\n    ),\n    None,\n    &mut context,\n).unwrap();\n\nlet result = module\n    .load_link_evaluate(&mut context)\n    .await_blocking(&mut context)\n    .unwrap();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "async-apis-enhancements",
      children: "Async APIs enhancements"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Historically, hooking functions returning a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Future"
      }), " into Boa has been one of the\nbiggest pain points of our API. This was mostly caused by how we defined\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.20.0/boa_engine/job/type.FutureJob.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "FutureJob"
        })
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-rust",
        children: "pub struct NativeJob {\n    f: Box<dyn FnOnce(&mut Context) -> JsResult<JsValue>>,\n    realm: Option<Realm>,\n}\n\npub type FutureJob = Pin<Box<dyn Future<Output = NativeJob> + 'static>>;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["With this definition, it was pretty much impossible to capture the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Context"
      }), "\ninside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Future"
      }), ", and functions that needed to interweave engine operations\nwith awaiting ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Future"
      }), "s needed to be split into multiple parts:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-rust",
        children: "let fetch = async move {\n    let body: Result<_, isahc::Error> = async {\n        let mut response = Request::get(&url)\n            .body(())?\n            .send_async()\n            .await?;\n\n        Ok(response.text().await?)\n    }\n    .await;\n\n    // Since the async context cannot take the `context` by ref, we have to continue\n    // parsing inside a new `NativeJob` that will be enqueued into the promise job queue.\n    NativeJob::new(move |context| -> JsResult<JsValue> {\n        parse(body).await;\n\n        // Also needed to match `NativeJob::new`.\n        Ok(JsValue::undefined())\n    })\n};\n\n// Just enqueue the future for now. We'll advance all the enqueued futures inside our custom\n// `JobQueue`.\ncontext\n    .job_queue()\n    .enqueue_future_job(Box::pin(fetch), context);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We wanted to improve this API, and the solution we thought about was to make\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Context"
      }), " shareable by wrapping it using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "RefCell"
      }), ". However, this proved to be\nvery difficult for two reasons:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["We needed to change all definitions to take ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "&RefCell<Context>"
        }), " instead\nof ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "&mut Context"
        }), ", which meant changing pretty much the whole codebase."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["Some of our VM code was reentrant, and that would cause panics in the reentrant\nparts of the code when calling ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "RefCell::borrow_mut"
        }), "; we would need to patch up\nthe engine to remove the reentrancy."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["After putting a lot of thought on this, we came up with a really nice solution;\ninstead of wrapping ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Context"
      }), " with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "RefCell"
      }), ", we would wrap ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "&mut Context"
      }), " with\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "RefCell"
      }), ", and only on the async-related APIs. This would allow not only capturing\nthe context on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Future"
      }), "-related functions, but also doing this without having to\nrefactor big parts of the code. Thus, we ditched ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FutureJob"
      }), " and introduced a new\ntype of job: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.21.0/boa_engine/job/struct.NativeAsyncJob.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "NativeAsyncJob"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-Rust",
        children: "/// An ECMAScript [Job] that can be run asynchronously.\n///\n/// This is an additional type of job that is not defined by the specification, enabling running `Future` tasks\n/// created by ECMAScript code in an easier way.\n#[allow(clippy::type_complexity)]\npub struct NativeAsyncJob {\n    f: Box<dyn for<'a> FnOnce(&'a RefCell<&mut Context>) -> BoxedFuture<'a>>,\n    realm: Option<Realm>,\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["With this change, any API that integrates with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Future"
      }), " can additionally capture\nthe ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "&RefCell<&mut Context>"
      }), " to run engine-related operations after awaiting on\na ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Future"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h3, {
      id: "revamped-jobqueue",
      children: ["Revamped ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "JobQueue"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["After introducing the new job type, changes had to be made on\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.20.0/boa_engine/job/trait.JobQueue.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "JobQueue"
        })
      }), " to better support new types of jobs. Thus, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "JobQueue"
      }), " was revamped and renamed to be the\nnew ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.21.0/boa_engine/job/trait.JobExecutor.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "JobExecutor"
        })
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-rust",
        children: "/// An executor of `ECMAscript` [Jobs].\n///\n/// This is the main API that allows creating custom event loops.\n///\n/// [Jobs]: https://tc39.es/ecma262/#sec-jobs\npub trait JobExecutor: Any {\n    /// Enqueues a `Job` on the executor.\n    ///\n    /// This method combines all the host-defined job enqueueing operations into a single method.\n    /// See the [spec] for more information on the requirements that each operation must follow.\n    ///\n    /// [spec]: https://tc39.es/ecma262/#sec-jobs\n    fn enqueue_job(self: Rc<Self>, job: Job, context: &mut Context);\n\n    /// Runs all jobs in the executor.\n    fn run_jobs(self: Rc<Self>, context: &mut Context) -> JsResult<()>;\n\n    /// Asynchronously runs all jobs in the executor.\n    ///\n    /// By default forwards to [`JobExecutor::run_jobs`]. Implementors using async should override this\n    /// with a proper algorithm to run jobs asynchronously.\n    async fn run_jobs_async(self: Rc<Self>, context: &RefCell<&mut Context>) -> JsResult<()>\n    where\n        Self: Sized,\n    {\n        self.run_jobs(&mut context.borrow_mut())\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["As you can probably tell, we made a lot of changes on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "JobExecutor"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["All methods now take ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Rc<Self>"
        }), " as their receiver, making it consistent with\nhow the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Context"
        }), " itself stores the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "JobExecutor"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://docs.rs/boa_engine/0.20.0/boa_engine/job/trait.JobQueue.html#tymethod.enqueue_promise_job",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "enqueue_promise_job"
          })
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://docs.rs/boa_engine/0.20.0/boa_engine/job/trait.JobQueue.html#tymethod.enqueue_future_job",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "enqueue_future_job"
          })
        }), " now are unified in a single\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://docs.rs/boa_engine/0.21.0/boa_engine/job/trait.JobExecutor.html#tymethod.enqueue_job",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "enqueue_job"
          })
        }), ", where ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://docs.rs/boa_engine/0.21.0/boa_engine/job/enum.Job.html",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "Job"
          })
        }), " is an enum containing the type of job that needs to\nbe scheduled. This makes it much simpler to extend the engine with newer job\ntypes in the future, such as the newly introduced ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "TimeoutJob"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "GenericJob"
        }), "\ntypes."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://docs.rs/boa_engine/0.21.0/boa_engine/job/trait.JobExecutor.html#method.run_jobs_async",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "run_jobs_async"
          })
        }), " was converted to a proper async function, and excluded from\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "JobExecutor"
        }), "'s VTable. Additionally, this method now takes a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "&RefCell<&mut Context>"
        }), "\nas its context, which is the missing piece that enables sharing the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Context"
        }), " between\nmultiple ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Future"
        }), "s at the same time. This, however, means that we cannot provide\na convenient wrapper such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://docs.rs/boa_engine/0.21.0/boa_engine/context/struct.Context.html#method.run_jobs",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "Context::run_jobs"
          })
        }), " for it anymore, which is one of the\nreasons why we decided to exclude that method from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "JobExecutor"
        }), "'s VTable."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["These changes not only made ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "JobExecutor"
      }), " much simpler, but it also expanded\nthe places where we could use its async capabilities to handle \"special\"\nfeatures of ECMAScript that are more suited to an async way of doing things.\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ModuleLoader"
      }), " is one of those places."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h3, {
      id: "asyncified-moduleloader",
      children: ["Asyncified ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ModuleLoader"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Looking at the previous definition of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.20.0/boa_engine/module/trait.ModuleLoader.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ModuleLoader"
        })
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-rust",
        children: "pub trait ModuleLoader {\n    // Required method\n    fn load_imported_module(\n        &self,\n        referrer: Referrer,\n        specifier: JsString,\n        finish_load: Box<dyn FnOnce(JsResult<Module>, &mut Context)>,\n        context: &mut Context,\n    );\n\n    // Provided methods\n    fn register_module(&self, _specifier: JsString, _module: Module) { ... }\n    fn get_module(&self, _specifier: JsString) -> Option<Module> { ... }\n    fn init_import_meta(\n        &self,\n        _import_meta: &JsObject,\n        _module: &Module,\n        _context: &mut Context,\n    ) { ... }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["... the weird ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "finish_load"
      }), " on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "load_imported_module"
      }), " immediately pops up as an anomaly.\nIn this case, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "finish_load"
      }), " is Boa's equivalent to\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://tc39.es/ecma262/#sec-HostLoadImportedModule",
        children: "HostLoadImportedModule ( referrer, moduleRequest, hostDefined, payload )"
      }), ",\nwhich is an abstract operation that is primarily used to define how an application\nwill load and resolve a \"module request\"; think of it as a function that takes\nthe ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "\"module-name\""
      }), " from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "import * as name from \"module-name\""
      }), ", then does\n\"things\" to load the module that corresponds to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "\"module_name\""
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The peculiarity about this abstract operation is that it doesn't return anything!\nInstead, it just has a special requirement:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["The host environment must perform ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "FinishLoadingImportedModule(referrer, moduleRequest, payload, result)"
        }), ",\nwhere result is either a normal completion containing the loaded ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Module Record"
        }), " or a throw completion,\neither synchronously or asynchronously."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Why expose the hook this way? Well, there is a clue in the previous requirement:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "... either synchronously or asynchronously."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Aha! Directly returning from the hook makes it very hard to enable use cases\nwhere an application wants to load multiple modules asynchronously. Thus, the\nspecification instead exposes a hook to pass the name of the module that needs to\nbe loaded, and delegates the task of running the \"post-load\" phase to the host, which\nenables fetching modules synchronously or asynchronously, depending on the specific\nrequirements of each application."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["One downside of this definition, however, is that any data that is required\nby the engine to properly process the returned module would need to be transparently\npassed to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FinishLoadingImportedModule"
      }), " abstract operation, which is why\nthe hook also has an additional requirement:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["The operation must treat ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "payload"
        }), " as an opaque value to be passed through to\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "FinishLoadingImportedModule"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "payload"
      }), " is precisely that data, and it may change depending on how the module\nis imported in the code; ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "import \"module\""
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "import(\"module\")"
      }), " are two examples\nof this."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We could expose this as an opaque ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "*const ()"
      }), " pointer argument and call it a day,\nbut we're using Rust, dang it! and we like statically guaranteed safety!\nSo, instead, we exposed ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "FinishLoadingImportedModule"
      }), " as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "finish_load"
      }), ", which is a\n\"closure\" that captures ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "payload"
      }), " on its stack, and can be called anywhere\n(like inside a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Future"
      }), ") on the application with a proper ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Module"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Context"
      }), "\nto further continue processing the module loaded by the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ModuleLoader"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-rust",
        children: "...\nfinish_load: Box<dyn FnOnce(JsResult<Module>, &mut Context)>,\n...\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Unfortunately, this API has downsides:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["It's possible to forget to call ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "finish_load"
        }), ", which is safer than a dangling ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "*const()"
        }), "\npointer, but still prone to bugs."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["It is also really painful to work with, because you cannot capture the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Context"
        }), "\nto further process the module after loading it. ... Sounds familiar?\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.strong, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
            href: "#async-apis-enhancements",
            children: "The async code snippet we showed before"
          }), " has this exact problem!"]
        }), "\nAnd that snippet is directly taken from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.a, {
          href: "https://github.com/boa-dev/boa/blob/b345775138f56401bd627b1f36daadfc5bf75772/examples/src/bin/module_fetch.rs#L38",
          children: ["one of our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "ModuleLoader"
          }), " implementation examples"]
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Fast forward a couple of years and we're now changing big parts of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "JobExecutor"
      }), ":\nadding new job types, tinkering with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "JobExecutor"
      }), ", changing API signatures, etc.\nThen, while looking at the definition of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ModuleLoader"
      }), ", we thought..."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["Huh, can't we make ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "load_imported_module"
        }), " async now?"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["And that's exactly what we did. Behold, the new ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.20.0/boa_engine/module/trait.ModuleLoader.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "ModuleLoader"
        })
      }), "!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-rust",
        children: "pub trait ModuleLoader: Any {\n    async fn load_imported_module(\n        self: Rc<Self>,\n        referrer: Referrer,\n        specifier: JsString,\n        context: &RefCell<&mut Context>,\n    ) -> JsResult<Module>;\n\n    fn init_import_meta(\n        self: Rc<Self>,\n        _import_meta: &JsObject,\n        _module: &Module,\n        _context: &mut Context,\n    ) {\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Then, the code snippet we mentioned before nicely simplifies to:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-rust",
        children: "async fn load_imported_module(\n    self: Rc<Self>,\n    _referrer: boa_engine::module::Referrer,\n    specifier: JsString,\n    context: &RefCell<&mut Context>,\n) -> JsResult<Module> {\n    let url = specifier.to_std_string_escaped();\n\n    let response = async {\n        let request = Request::get(&url)\n            .redirect_policy(RedirectPolicy::Limit(5))\n            .body(())?;\n        let response = request.send_async().await?.text().await?;\n        Ok(response)\n    }\n    .await\n    .map_err(|err: isahc::Error| JsNativeError::typ().with_message(err.to_string()))?;\n\n    let source = Source::from_bytes(&response);\n\n    Module::parse(source, None, &mut context.borrow_mut())\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
          children: "What about synchronous applications?"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The advantage of having ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "JobExecutor"
      }), " be the main entry point for any Rust\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Future"
      }), "s that are enqueued by the engine is that an application can decide how to\nhandle all ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Future"
      }), "s received by the implementation of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "JobExecutor"
      }), ". Thus, an application\nthat doesn't want to deal with async Rust executors can implement a completely synchronous\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ModuleLoader"
      }), " and poll on all futures received by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "JobExecutor"
      }), " using something like\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/futures-lite/latest/futures_lite/future/fn.poll_once.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "futures_lite::poll_once"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.em, {
          children: ["Why not just block on each ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "Future"
          }), " one by one instead?"]
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Well, there is one new built-in that was introduced on this release which heavily\ndepends on \"properly\" running ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Future"
      }), "s, and by \"properly\" we mean \"not blocking\nthe whole thread waiting on a future to finish\". More on that in a bit."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "built-ins-updates",
      children: "Built-ins updates"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "atomicswaitasync",
      children: "Atomics.waitAsync"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This release adds support for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Atomics.waitAsync"
        })
      }), " method introduced in\nECMAScript's 2024 specification.\nThis method allows doing thread synchronization just like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Atomics.wait"
        })
      }), ", but with\nthe big difference that it will return a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Promise"
      }), " that will resolve when the\nthread gets notified with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/notify",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Atomics.notify"
        })
      }), " method, instead of blocking until\nthat happens."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Given an `Int32Array` shared between two threads:\n\nconst sab = new SharedArrayBuffer(1024);\nconst int32 = new Int32Array(sab);\n\n// Thread 1 runs the following:\n// { async: true, value: Promise {<pending>} }\nconst result = Atomics.waitAsync(int32, 0, 0, 1000);\nresult.value.then(() => console.log(\"waited!\"));\n\n// And thread 2 runs the following after Thread 1:\nAtomics.notify(int32, 0);\n\n// Then, in thread 1 we will (eventually) see \"waited!\" printed.\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Note that this built-in requires having a \"proper\" implementation of a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "JobExecutor"
      }), "; again, \"proper\"\nin the sense of \"not blocking the whole thread waiting on a future to finish\", which can be accomplished\nwith ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/futures-concurrency/latest/futures_concurrency/future/future_group/struct.FutureGroup.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "FutureGroup"
        })
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/futures-lite/latest/futures_lite/future/fn.poll_once.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "futures_lite::poll_once"
        })
      }), " if an async executor is not required\n(see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/0468498b4bb9da31caa20123201e4d8ee132c608/core/engine/src/job.rs#L678",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "SimpleJobExecutor"
        }), "'s implementation"]
      }), ").\nThis is because it heavily relies on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "TimeoutJob"
      }), " to timeout if a notification\ndoesn't arrive, and in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "NativeAsyncJob"
      }), " to communicate with the notifier threads using an\nasync channel. This is the reason why we don't recommend just blocking on each received ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Future"
      }), ";\nthat could cause ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "TimeoutJob"
      }), "s to run much later than required, or even make it so that they don't\nrun at all!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "set-methods",
      children: "Set methods"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This release adds support for the new set methods added in ECMAScript's 2025\nspecification."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The new methods are:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/intersection",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "Set.prototype.intersection(other)"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "Set.prototype.union(other)"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "Set.prototype.difference(other)"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "Set.prototype.symmetricDifference(other)"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "Set.prototype.isSubsetOf(other)"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "Set.prototype.isSupersetOf(other)"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isDisjointFrom",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "Set.prototype.isDisjointFrom(other)"
          })
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Thanks to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/@Hemenguelbindi",
        children: "@Hemenguelbindi"
      }), " for\ntheir work on this feature."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "float16-support-for-typedarrays-dataview-and-math-built-ins",
      children: "Float16 support for TypedArrays, Dataview and Math built-ins"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This release adds support for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float16Array",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "f16"
        }), " types"]
      }), " for the TypedArray, Dataview, and Math\nbuilt-ins."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "const x = new Float16Array([37, 42.123456]);\nconsole.log(x[1]); // 42.125\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "erroriserror",
      children: "Error.isError"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This release adds support for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/isError",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Error.isError"
        })
      }), ", which will be introduced in\nECMAScript's 2026 specification."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "console.log(Error.isError(new Error())); // true\nconsole.log(Error.isError({ __proto__: Error.prototype })); // false\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "mathsumprecise",
      children: "Math.sumPrecise"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This release adds support for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sumPrecise",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Math.sumPrecise"
        })
      }), ", which will be introduced in\nECMAScript's 2026 specification."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We've opted for using the new ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://crates.io/crates/xsum",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "xsum"
        })
      }), " summation algorithm\nfor the underlying implementation."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "let sum = Math.sumPrecise([1e20, 0.1, -1e20]);\nconsole.log(sum); // 0.1\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "arrayfromasync",
      children: "Array.fromAsync"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This release adds support for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fromAsync",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Array.fromAsync"
        })
      }), ", which will be introduced in\nECMAScript's 2026 specification."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Array.fromAsync"
      }), " allows to conveniently create a array from an async iterable by\nawaiting all of the items consecutively."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-javascript",
        children: "// Array.fromAsync is roughly equivalent to:\nasync function toArray(asyncIterator) {\n  const arr = [];\n  for await (const i of asyncIterator) arr.push(i);\n  return arr;\n}\n\nasync function* asyncIterable() {\n  for (let i = 0; i < 5; i++) {\n    await new Promise((resolve) => setTimeout(resolve, 10 * i));\n    yield i;\n  }\n}\n\nArray.fromAsync(asyncIterable()).then((array) => console.log(array));\n// [0, 1, 2, 3, 4]\ntoArray(asyncIterable()).then((array) => console.log(array));\n// [0, 1, 2, 3, 4]\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "boa-runtime",
      children: "Boa Runtime"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Work on Boa's runtime crate has continued with additional APIs added."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "additional-apis",
      children: "Additional APIs"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Additional APIs added the the Runtime crate include:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "fetch"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "setTimeout"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "setInterval"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "clearInterval"
          })
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Window/queueMicrotask",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "queueMicrotask"
          })
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "conformance-testing",
      children: "Conformance testing"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We've added some support for conformance testing runtime features\nagainst the Web Platform Tests (WPT)."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "performance",
      children: "Performance"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "nan-boxing",
      children: "NaN Boxing"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["With this release, Boa's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.21.0/boa_engine/value/struct.JsValue.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "JsValue"
        })
      }), " will use nan-boxing by default. The NaN boxing of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "JsValue"
      }), "\nincreased memory and runtime performance over the older enum."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["As a note, the current implementation is not compatible with all platforms. While we hope\nto address this in the future, the legacy enum JsValue will be available via the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "jsvalue-enum"
      }), "\nfeature flag."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Unfamiliar with NaN Boxing? We won't go over it in depth here, but we recommend\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://piotrduperas.com/posts/nan-boxing",
        children: "this article"
      }), " to learn more."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "register-vm",
      children: "Register VM"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Boa's virtual machine (VM) moved from a stack based VM to a register based VM in\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3798",
        children: "PR #3798"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "new-contributors",
      children: "New Contributors"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@zzzdong made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4058",
          children: "https://github.com/boa-dev/boa/pull/4058"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@albertleigh made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4097",
          children: "https://github.com/boa-dev/boa/pull/4097"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@heygsc made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4124",
          children: "https://github.com/boa-dev/boa/pull/4124"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@jamesthurley made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4155",
          children: "https://github.com/boa-dev/boa/pull/4155"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@lockels made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4189",
          children: "https://github.com/boa-dev/boa/pull/4189"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@changhc made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4176",
          children: "https://github.com/boa-dev/boa/pull/4176"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@created-by-varun made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4198",
          children: "https://github.com/boa-dev/boa/pull/4198"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@tomoverlund made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4254",
          children: "https://github.com/boa-dev/boa/pull/4254"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@Hemenguelbindi made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4145",
          children: "https://github.com/boa-dev/boa/pull/4145"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@Timkarx made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4276",
          children: "https://github.com/boa-dev/boa/pull/4276"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@Rafferty97 made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4303",
          children: "https://github.com/boa-dev/boa/pull/4303"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@cijiugechu made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4307",
          children: "https://github.com/boa-dev/boa/pull/4307"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@countradooku made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4214",
          children: "https://github.com/boa-dev/boa/pull/4214"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@xubaiwang made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4381",
          children: "https://github.com/boa-dev/boa/pull/4381"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@hamflx made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4405",
          children: "https://github.com/boa-dev/boa/pull/4405"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@BDeuDev made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4419",
          children: "https://github.com/boa-dev/boa/pull/4419"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@jasonmilad made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4430",
          children: "https://github.com/boa-dev/boa/pull/4430"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@hpp2334 made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4453",
          children: "https://github.com/boa-dev/boa/pull/4453"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@Gumichocopengin8 made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4462",
          children: "https://github.com/boa-dev/boa/pull/4462"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@mdrokz made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4466",
          children: "https://github.com/boa-dev/boa/pull/4466"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: ["@rrogerc made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/4459",
          children: "https://github.com/boa-dev/boa/pull/4459"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "looking-forward",
      children: "Looking Forward"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "garbage-collector-rewrite",
      children: "Garbage collector rewrite"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This has been long overdue. Boa's garbage collector is a forked and\nmodified version of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/Manishearth/rust-gc",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "rust-gc"
        })
      }), ", and we have long\nbeen pushing our forked gc to its limits."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We have seen some evidence from previous pull requests that simply swapping\nallocators from Rust's global allocator can increase Boa's performance, and\nwork on this will hopefully resume soon. If you're interested in garbage\ncollectors and/or would be interested in helping out, feel free to join our\nGC room on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://matrix.to/#/#boa:matrix.org",
        children: "Matrix"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "runtime-functionality",
      children: "Runtime functionality"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://crates.io/crates/boa_runtime",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "boa_runtime"
        })
      }), " crate was initially meant\nto contain functionality that was not meant to exist in the core ECMAScript implementation,\nfor instance the console implementation. Noticeably, we have since added more runtime\nfeatures to the crate with even more features expected in the next release."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Our current plan is if there is enough interest and the crate becomes\ntoo large, we will split ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "boa_runtime"
      }), " into it's own repository. If you\nare interested in implementing any runtime features or contributing to\na runtime, feel free to reach out."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "continuing-performance-improvements",
      children: "Continuing performance improvements"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "As mentioned on previous release posts, we will continue to further work\non improving Boa's overall performance."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h3, {
      id: "intl-and-ecma402-conformance",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Intl"
      }), " and ECMA402 conformance"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We currently have some general support for the ECMA402 and ECMAScript's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "Intl"
        })
      }), " object. We\nwill continue to some general work on ECMA402 conformance to allow Boa to be fully usable\nfor internationalization use cases."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "how-can-you-support-boa",
      children: "How can you support Boa?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Boa is an independent JavaScript engine implementing the ECMAScript\nspecification, and we rely on the support of the community to keep it\ngoing. If you want to support us, you can do so by donating to our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://opencollective.com/boa",
        children: "open\ncollective"
      }), ". Proceeeds here go towards this very website, the domain\nname, and remunerating members of the team who have worked on the\nfeatures released."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["If financial contribution is not your strength, you can contribute by\nasking to be assigned to one of our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+no%3Aassignee",
        children: "open issues"
      }), ", and asking for\nmentoring if you don't know your way around the engine. Our\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/CONTRIBUTING.md",
        children: "contribution guide"
      }), " should help you here. If you are more used to\nworking with JavaScript or frontend web development, we also welcome\nhelp to improve our web presence, either in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa-dev.github.io",
        children: "our website"
      }), ", or in our\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues/820",
        children: "testing representation"
      }), " page or benchmarks page. You can also\ncontribute to our Criterion benchmark comparison GitHub ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/criterion-compare-action",
        children: "action"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We are also looking to improve the documentation of the engine, both for\ndevelopers of the engine itself and for users of the engine. Feel free\nto contact us in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://matrix.to/#/#boa:matrix.org",
        children: "Matrix"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "thank-you",
      children: "Thank You"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Once again, big thanks to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/graphs/contributors?from=2024-12-05&to=2025-08-30&type=c",
        children: "all the contributors"
      }), " of this\nrelease!!!"]
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