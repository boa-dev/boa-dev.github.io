"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[7000],{

/***/ 5068:
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
	title: 'Adding a JavaScript interpreter to your Rust project',
	author: 'Boa Developers'
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/blog/2022/10/24/boa-usage",
  "source": "@site/blog/2022-10-24-boa-usage.md",
  "title": "Adding a JavaScript interpreter to your Rust project",
  "description": "Introduction",
  "date": "2022-10-24T00:00:00.000Z",
  "tags": [
    {
      "inline": true,
      "label": "post",
      "permalink": "/blog/tags/post"
    }
  ],
  "readingTime": 11.48,
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
    "title": "Adding a JavaScript interpreter to your Rust project",
    "author": "Boa Developers"
  },
  "unlisted": false,
  "prevItem": {
    "title": "Boa release v0.17",
    "permalink": "/blog/2023/07/08/boa-release-17"
  },
  "nextItem": {
    "title": "Boa release v0.16",
    "permalink": "/blog/2022/09/25/boa-release-16"
  }
};
const assets = {
"authorsImageUrls": [undefined],
};



const toc = [{
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Starting from scratch",
  "id": "starting-from-scratch",
  "level": 2
}, {
  "value": "But, what can you do with Boa?",
  "id": "but-what-can-you-do-with-boa",
  "level": 2
}, {
  "value": "Integrating a full Rust data structure",
  "id": "integrating-a-full-rust-data-structure",
  "level": 2
}, {
  "value": "What&#39;s coming next?",
  "id": "whats-coming-next",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "When we develop tools for our users, we sometimes want to give them some form of control over how\nthey work. This is common in games, where we can add scripting for our users to be able to create\nextensions, or even for business tools, where we allow our customer to change or extend the\nbehaviour of our platform. For those cases, using Rust, a compiled, type safe language can be a\nchallenge, since once a program has been compiled, it's tricky to change or extend it at runtime.\nFurthermore, many of our users will prefer to use a more common scripting language, such as\nJavaScript."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This is where Boa enters the scene. Boa is a Javascript engine fully written in Rust. Currently, it\ncan be used in places where you need most of the JavaScript language to work, even though, we would\nadvise to wait to get all our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=64+162+718+773+2068+1930+1922+1917+1900+1848+1805+1570+1402+1307+1180+is%3Aopen",
        children: "known blocker bugs"
      }), " solved before using this for critical\nworkloads. You can check how conformant we are with the official ECMAScript specification\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://boa-dev.github.io/boa/test262/",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["And, before going further, we would like to mention that you can contribute to Boa by solving one\nof the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22%2CHacktoberfest%2CE-Easy%2C%22good+first+issue%22+no%3Aassignee",
        children: "issues"
      }), " where we need special help, and we now also accept financial contributions\nin ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://opencollective.com/boa",
        children: "our OpenCollective"
      }), " page."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
        children: ["Note: You can see more examples of integrating Boa in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/tree/main/boa_examples",
          children: "our repository"
        }), "."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "starting-from-scratch",
      children: "Starting from scratch"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Let's start a new project running ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "cargo new my_project"
      }), ", and then add ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://crates.io/crates/boa_engine",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "boa_engine"
        })
      }), " as one\nof our dependencies by running ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "cargo add boa_engine -F console"
      }), " in our newly created ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "my_project"
      }), "\ndirectory."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Let's start by adding the minimal code needed to get a JavaScript interpreter working in our\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "src/main.rs"
      }), " file:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "use boa_engine::Context;\n\nfn main() {\n    let js_code = \"console.log('Hello World from a JS code string!')\";\n\n    // Instantiate the execution context\n    let mut context = Context::default();\n\n    // Parse the source code\n    match context.eval(js_code) {\n        Ok(res) => {\n            println!(\"{}\", res.to_string(&mut context).unwrap());\n        }\n        Err(e) => {\n            // Pretty print the error\n            eprintln!(\"Uncaught {}\", e.display());\n        }\n    };\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As you can see in this example, when working with Boa, you will have to use a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Context"
        })
      }), ",\nwhich will be in charge of initializing all the internals and built-in objects (such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Date"
      }), ",\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Promise"
      }), " and so on). The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Context"
      }), " in Boa is also your go-to place for configuring your interpreter\nas you wish. You can add custom global functions, objects, and anything you might imagine. It's also\none of the arguments you will receive if you create a Rust function and expose it to JavaScript, and\nwith it, you will be able to throw errors, modify the global object and return values to JavaScript."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Talking about values, Boa comes with its built-in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/enum.JsValue.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "JsValue"
        })
      }), " type. This enumeration\nrepresents any JavaScript value that can, for example, be assigned to a variable. And, before you\nask, you can convert it to and from a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/serde_json/latest/serde_json/value/enum.Value.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "serde_json::Value"
        })
      }), ", of course, by using the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/enum.JsValue.html#method.from_json",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "JsValue::from_json()"
        })
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/enum.JsValue.html#method.to_json",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "JsValue::to_json()"
        })
      }), " methods."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As you can see in those methods, or in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Context::eval()"
      }), " that we used earlier, you will\nreceive a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsResult"
      }), " as a response. This result type will contain a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsValue"
      }), " as its error variant,\nwhich means you can return the error back to JavaScript for it to handle it. A ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsValue"
      }), ", internally,\nis a garbage-collected JavaScript value. But, isn't Rust one of the few non-garbage collected\nlanguages? Wasn't that a good thing?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The answer is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "yes, of course"
      }), ", but JavaScript requires a garbage collector. This garbage collector\nmakes sure that all values are freed when they are no longer needed. It also makes a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsValue"
      }), "\nextremely cheap to clone, independently of its contents."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you run this example code with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "cargo run"
      }), ", you will notice that it will print the message sent\nto ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "console.log()"
      }), ", and it will also print ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "undefined"
      }), " at the end. This last ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "undefined"
      }), " is part of\nthe ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Ok(res)"
      }), " branch in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "match"
      }), ", which prints the result of the execution. In this case, the\nresult of the execution is the result of the last statement, which is the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "console.log()"
      }), ", and this\nstatement returns ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "undefined"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "but-what-can-you-do-with-boa",
      children: "But, what can you do with Boa?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Let's start with the basics. Of course, you can execute JavaScript code. This code can be any\nstring or directly a byte vector (so you can load files and use them directly). You can use\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html#method.eval",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Context::eval()"
        })
      }), " in both cases, as you saw before, and you can also use\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html#method.parse",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Context::parse()"
        })
      }), ", which will give you a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/syntax/ast/node/statement_list/struct.StatementList.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "StatementList"
        })
      }), " that\nyou can use multiple times in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html#method.compile",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Context::compile()"
        })
      }), ", so that you don't need to\nparse the same code more than once. The compiled source code can also be executed multiple times,\nsince it's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/vm/struct.CodeBlock.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "CodeBlock"
        })
      }), " is garbage collected, and therefore it can be cheaply cloned.\nIn order to execute a code block you will need to use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html#method.execute",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Context::execute()"
        })
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This in itself is good enough to provide a simple scripting API for your project, but where Boa\nreally shines is in the ability to inter-operate Rust and JavaScript. Let's start with a simple\nexample: exposing a Rust function to JavaScript. A JavaScript-compatible Rust function must have\nthe ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/builtins/function/type.NativeFunctionSignature.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "NativeFunctionSignature"
        })
      }), " signature:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "use boa_engine::{builtins::JsArgs, Context, JsResult, JsValue};\n\n/// Says \"hello\" using the first argument.\nfn say_hello(_this: &JsValue, args: &[JsValue], context: &mut Context) -> JsResult<JsValue> {\n    let name = args.get_or_undefined(0);\n\n    if name.is_undefined() {\n        println!(\"Hello World!\");\n    } else {\n        println!(\"Hello {}!\", name.to_string(context)?);\n    }\n\n    Ok(JsValue::undefined())\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/builtins/trait.JsArgs.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "JsArgs"
        })
      }), " trait allows you to retrieve a value if the function received it, or set it\nto the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "undefined"
      }), " value, if not. Then, in this case, it will convert the name to a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsString"
      }), "\nbefore printing it, since we might be receiving an object, a symbol, a boolean... one of the perks\nof dynamic typing. This will then print the result in th standard output using the common\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "println!()"
      }), " macro in Rust. It will just return an undefined value."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can register this function in the context by adding this line after the context creation (and\nbefore executing any JS) in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "main()"
      }), " function:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "context.register_global_builtin_function(\"say_hello\", 1, say_hello);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This will register it as a global function, with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "say_hello()"
      }), " name, and with a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "length"
      }), " of 1\n(which indicates the number of arguments that it receives by default). You can then try it out by\nmodifying the JavaScript string:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "let js_code = r#\"say_hello(\"Rust\");\"#;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "r#\"...\"#"
      }), " syntax is a Rust raw ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://doc.rust-lang.org/rust-by-example/std/str.html#literals-and-escapes",
        children: "string literal"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can also add any ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsValue"
      }), " as a property to the global object by using the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html#method.register_global_property",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Context::register_global_property()"
        })
      }), " function:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "use boa_engine::property::Attribute;\n\ncontext.register_global_property(\"MY_PROJECT_VERSION\", \"1.0.0\", Attribute::all());\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "And you can use it in JavaScript:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javascript",
        children: "say_hello(MY_PROJECT_VERSION);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/property/struct.Attribute.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Attribute"
        })
      }), " of a property indicates if it will be writable (it can be set and\nmodified), enumerable (it can be used in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "for..in"
      }), " statements) and configurable (its attributes or\ntype of property can be modified)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "integrating-a-full-rust-data-structure",
      children: "Integrating a full Rust data structure"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Sometimes, adding a function or a single ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsValue"
      }), " to the global scope of your JavaScript context\nis not enough, and you want to enable the full power of Rust with its structures to handle more\ncomplex scenarios. This can be achieved using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/class/trait.Class.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Class"
        })
      }), " trait. This has to be combined\nwith two other traits, that make any Rust object be garbage-collected: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_gc/latest/boa_gc/trait.Trace.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Trace"
        })
      }), " and\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_gc/0.16.0/boa_gc/trait.Finalize.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Finalize"
        })
      }), ", in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://crates.io/crates/boa_gc",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "boa_gc"
        })
      }), " crate. Luckily those two traits can be derived."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Let's start by implementing a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Person"
      }), " type, that will showcase the potential of this API. Let's\nrun ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "cargo add gc boa_gc"
      }), " and add some code:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "use boa_gc::{Finalize, Trace};\n\n#[derive(Debug, Trace, Finalize)]\nstruct Person {\n    /// The name of the person.\n    name: String,\n    /// The age of the person.\n    age: u8,\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Then, we will move the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "say_hello()"
      }), " function to be a static method of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Person"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "impl Person {\n    /// Says \"hello\" using the name and the age of a `Person`.\n    fn say_hello(this: &JsValue, _args: &[JsValue], context: &mut Context) -> JsResult<JsValue> {\n        let this = this\n            .as_object()\n            .and_then(|obj| obj.downcast_ref::<Self>())\n            .ok_or_else(|| context.construct_type_error(\"`this` is not a `Person` object\"))?;\n\n        println!(\"Hello {}-year-old {}!\", this.age, this.name);\n\n        Ok(JsValue::undefined())\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As you can see, this now uses the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "this"
      }), " parameter of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "say_hello()"
      }), " function, which should be a\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Person"
      }), ", but in JavaScript you can assign methods of some objects to others, so we must make sure\nthat on this invocation, we are indeed working with a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Person"
      }), ", and return a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "TypeError"
      }), " if not."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Now, let's implement the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/class/trait.Class.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Class"
        })
      }), " trait. This trait requires a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "NAME"
      }), " constant, which will\nbe the name of the global object property, and a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "LENGTH"
      }), " for the constructor (the number of\narguments, by default ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "0"
      }), "). Then, it needs a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "constructor()"
      }), " function, which is a native function\nthat will be called when we do a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "new Person()"
      }), ", and an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "init()"
      }), " function, which will be called by\nthe ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Context"
      }), " when registering the function in the global scope. It will receive a\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/class/struct.ClassBuilder.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ClassBuilder"
        })
      }), ", which allows you to add a method (both, static and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "prototype"
      }), "), a\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "property"
      }), ", also for both cases, accessor properties (to use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "get"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "set"
      }), ") and property\ndescriptors. You can also get a reference to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Context"
      }), " with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "ClasBuilder::context()"
      }), " method,\nin case you want to do anything fancier."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In this case, the constructor will take care of constructing the Rust ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Person"
      }), " data structure with\nthe two arguments it receives, and then register the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "say_hello()"
      }), " method:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "use boa_engine::{\n    builtins::JsArgs,\n    class::{Class, ClassBuilder},\n};\n\nimpl Class for Person {\n    const NAME: &'static str = \"Person\";\n    const LENGTH: usize = 2;\n\n    // This is what is called when we construct a `Person` with the expression `new Person()`.\n    fn constructor(_this: &JsValue, args: &[JsValue], context: &mut Context) -> JsResult<Self> {\n        let name = args.get_or_undefined(0).to_string(context)?;\n        let age = args.get_or_undefined(1).to_u32(context)?;\n\n        if !(0..=150).contains(&age) {\n            context.throw_range_error(format!(\"invalid age `{age}`. Must be between 0 and 150\"))?;\n        }\n\n        let age = u8::try_from(age).expect(\"we already checked that it was in range\");\n\n        let person = Person {\n            name: name.to_string(),\n            age,\n        };\n\n        Ok(person)\n    }\n\n    /// Here is where the class is initialized, to be inserted into the global object.\n    fn init(class: &mut ClassBuilder) -> JsResult<()> {\n        class.method(\"say_hello\", 0, Self::say_hello);\n\n        Ok(())\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In order to register the class, you will need to use the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/struct.Context.html#method.register_global_class",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Context::register_global_class()"
        })
      }), " method:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "context\n    .register_global_class::<Person>()\n    .expect(\"could not register class\");\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can now adapt the JavaScript code:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javascript",
        children: "let person = new Person(\"John\", 28);\nperson.say_hello();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you want to access the global object from Rust, you can use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Context::global_object()"
      }), ", which\nwill return a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/object/struct.JsObject.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "JsObject"
        })
      }), ". In this object, you can use the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/latest/boa_engine/object/struct.JsObject.html#method.get",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "JsObject::get()"
        })
      }), " function to retrieve any property of the global object, such as\nthe ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MY_PROJECT_VERSION"
      }), " that you defined earlier, or any intrinsic, such as the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Date"
      }), " object."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We are now in the process of creating Rust wrappers for all JavaScript intrinsics (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues/2098",
        children: "#2098"
      }), ").\nFor example, you can create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsArray"
      }), " from a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsObject"
      }), " to make it much easier to manipulate a\nJavaScript array from Rust. In the following example, you'll create a new ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "reverseAppend()"
      }), " global\nfunction that will receive an array, reverse it, and then append the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "\"My Project\""
      }), " string to it.\nIt will then get the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "MY_PROJECT_VERSION"
      }), " from the global object, and append it to the array."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "use boa_engine::{\n    builtins::JsArgs, object::JsArray, property::Attribute, Context, JsResult, JsValue,\n};\n\n/// Reverses an array and appends the `\"My Project\"` string and the `MY_PROJECT_VERSION` global\n/// property to it.\nfn reverse_append(_this: &JsValue, args: &[JsValue], context: &mut Context) -> JsResult<JsValue> {\n    let arr = args\n        .get_or_undefined(0)\n        .as_object()\n        .ok_or_else(|| context.construct_type_error(\"argument must be an array\"))?;\n\n    let arr = JsArray::from_object(arr.clone(), context)?;\n\n    let reverse = arr.reverse(context)?;\n    reverse.push(\"My Project\", context)?;\n\n    let global_object = context.global_object().clone();\n    let version = global_object\n        .get(\"MY_PROJECT_VERSION\", context)\n        .unwrap_or_default();\n\n    reverse.push(version, context)?;\n\n    Ok((*reverse).clone().into())\n}\n\nfn main() {\n    let js_code = r#\"\n        let arr = ['a', 2, 5.4, \"Hello\"];\n        reverseAppend(arr);\n    \"#;\n\n    // Instantiate the execution context\n    let mut context = Context::default();\n\n    context.register_global_property(\"MY_PROJECT_VERSION\", \"1.0.0\", Attribute::all());\n\n    context.register_global_builtin_function(\"reverseAppend\", 1, reverse_append);\n\n    // Parse the source code\n    match context.eval(js_code) {\n        Ok(res) => {\n            println!(\"{}\", res.to_string(&mut context).unwrap());\n        }\n        Err(e) => {\n            // Pretty print the error\n            eprintln!(\"Uncaught {}\", e.display());\n        }\n    };\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We are looking for contributors to implement the rest of the wrappers, and of course, we offer mentoring!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "whats-coming-next",
      children: "What's coming next?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa's development is ongoing non-stop. The next version, v0.17, is already looking pretty nice,\nwith some great enhancements. For example, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/jedel1043",
        children: "@jedel1043"
      }), " has created new\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/2283",
        children: "\"lazy\" errors"
      }), ", that are much easier to create and throw, since they don't need a\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Context"
      }), ", and also enhance the performance. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/nekevss",
        children: "@nekevss"
      }), " has implemented a\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/2326",
        children: "new wrapper"
      }), " for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "RegExp"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/anuvratsingh",
        children: "@anuvratsingh"
      }), " is working on a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Date"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/2181",
        children: "wrapper"
      }), ". ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/Razican",
        children: "@razican"
      }), " is working on a JavaScript to Rust\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/2276",
        children: "conversion trait"
      }), " and derive, that will allow you to convert a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsValue"
      }), " to a Rust\nstructure and back really easily:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "use boa_derive::TryFromJs;\nuse boa_engine::{value::TryFromJs, Context, JsResult, JsValue};\n\n#[derive(Debug, TryFromJs)]\n#[allow(dead_code)]\nstruct TestStruct {\n    inner: bool,\n    hello: String,\n    #[boa(from_js_with = \"lossy_conversion\", hello = \"myfriend\")]\n    my_float: i16,\n}\n\nfn main() {\n    let js = r#\"\n    let x = {\n        inner: false,\n        hello: \"World\",\n        my_float: 2.9,\n    };\n\n    x;\n    \"#;\n\n    let mut context = Context::default();\n    let res = context.eval(js).unwrap();\n\n    let str = TestStruct::try_from_js(&res, &mut context)\n        .map_err(|e| e.display().to_string())\n        .unwrap();\n\n    println!(\"{str:?}\");\n}\n\n/// Converts the value lossly\nfn lossy_conversion(value: &JsValue, context: &mut Context) -> JsResult<i16> {\n    match value {\n        JsValue::Rational(r) => Ok(r.round() as i16),\n        JsValue::Integer(i) => Ok(*i as i16),\n        _ => context.throw_type_error(\"cannot convert value to an i16\"),\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We love contributions, whether it's a documentation enhancement, fixing or implementing the\nECMAScript specification, adding new functionality / APIs or enhancing performance, we would love\nto get new contributors on board! We are also looking for financial contributors, so feel free to\njoin our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://opencollective.com/boa",
        children: "OpenCollective"
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