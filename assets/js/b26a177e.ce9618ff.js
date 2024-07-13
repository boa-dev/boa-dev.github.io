"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[4828],{

/***/ 9525:
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
	title: 'Boa release v0.18',
	author: 'Boa Developers'
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/blog/2024/03/07/boa-release-18",
  "source": "@site/blog/2024-03-07-boa-release-18.md",
  "title": "Boa release v0.18",
  "description": "Summary",
  "date": "2024-03-07T00:00:00.000Z",
  "tags": [
    {
      "inline": true,
      "label": "post",
      "permalink": "/blog/tags/post"
    }
  ],
  "readingTime": 19.53,
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
    "title": "Boa release v0.18",
    "author": "Boa Developers"
  },
  "unlisted": false,
  "prevItem": {
    "title": "Boa release v0.19",
    "permalink": "/blog/2024/07/09/boa-release-19"
  },
  "nextItem": {
    "title": "Boa release v0.17",
    "permalink": "/blog/2023/07/08/boa-release-17"
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
  "value": "We&#39;re on test262.fyi",
  "id": "were-on-test262fyi",
  "level": 3
}, {
  "value": "Temporal",
  "id": "temporal",
  "level": 3
}, {
  "value": "RegExp",
  "id": "regexp",
  "level": 3
}, {
  "value": "Shared Array Buffer + Atomics",
  "id": "shared-array-buffer--atomics",
  "level": 3
}, {
  "value": "Intl updates",
  "id": "intl-updates",
  "level": 2
}, {
  "value": "Builtins updates",
  "id": "builtins-updates",
  "level": 2
}, {
  "value": "findLast and findLastIndex on TypedArray",
  "id": "findlast-and-findlastindex-on-typedarray",
  "level": 3
}, {
  "value": "String.prototype.isWellFormed and String.prototype.toWellFormed",
  "id": "stringprototypeiswellformed-and-stringprototypetowellformed",
  "level": 3
}, {
  "value": "Change Array by copy",
  "id": "change-array-by-copy",
  "level": 3
}, {
  "value": "Grouping functions",
  "id": "grouping-functions",
  "level": 3
}, {
  "value": "Resizable buffers",
  "id": "resizable-buffers",
  "level": 3
}, {
  "value": "Transferrable buffers",
  "id": "transferrable-buffers",
  "level": 3
}, {
  "value": "APIs updates",
  "id": "apis-updates",
  "level": 2
}, {
  "value": "Experimental features",
  "id": "experimental-features",
  "level": 3
}, {
  "value": "<code>[[HostDefined]]</code> fields",
  "id": "hostdefined-fields",
  "level": 3
}, {
  "value": "<code>Class</code> redesign + API enhancements",
  "id": "class-redesign--api-enhancements",
  "level": 3
}, {
  "value": "Runtime limits",
  "id": "runtime-limits",
  "level": 3
}, {
  "value": "Synthetic modules",
  "id": "synthetic-modules",
  "level": 3
}, {
  "value": "Async eval",
  "id": "async-eval",
  "level": 3
}, {
  "value": "<code>JsErasedError</code>",
  "id": "jserasederror",
  "level": 3
}, {
  "value": "Optimizations",
  "id": "optimizations",
  "level": 2
}, {
  "value": "Inline Caching",
  "id": "inline-caching",
  "level": 3
}, {
  "value": "Road to 1.0",
  "id": "road-to-10",
  "level": 2
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}, {
  "value": "How can you support Boa?",
  "id": "how-can-you-support-boa",
  "level": 3
}, {
  "value": "Thank You",
  "id": "thank-you",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa v0.18 is now available! After 7 months of development we are very happy to present you the latest\nrelease of the Boa JavaScript engine. Boa makes it easy to embed a JS engine in your projects, and\nyou can even use it from WebAssembly. See the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/about",
        children: "about"
      }), " page for more info."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In this release, our conformance has grown from 79.36% to 85.03% in the official ECMAScript Test Suite\n(Test262). This means we now pass ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "3,550"
      }), " more tests than in the previous version. Moreover, our\namount of ignored tests decreased from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "9,496"
      }), " to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "1,391"
      }), " thanks to all the new builtins we have\nimplemented for this release."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can check the full list of changes ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/v0.18/CHANGELOG.md",
        children: "here"
      }), ", and the full information on conformance\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://boajs.dev/boa/test262/",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You probably noticed that something seems different... This release marks a major update to the design\nof our website, and the introduction of our new logo!\nWe'd like to thank ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/ZackMitkin",
        children: "@ZackMitkin"
      }), " for being the one that started the\nwork on this nifty redesign, and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/kelbazz",
        children: "@kelbazz"
      }), " for designing the logo.\nWe're planning to add some additional pages to learn more about the APIs that Boa exposes.\nAdditionally, expect some more blog posts from us in the future! We would like to write about how to\nuse certain APIs, design challenges that we encountered while developing the engine, and internal\nimplementation details.\nSubscribe to our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://boajs.dev/blog/rss.xml",
        children: "RSS feed"
      }), " if you're interested in staying up to date!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This big release was partly possible thanks to those who have ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://opencollective.com/boa",
        children: "supported us"
      }), ".\nThanks to funds we've received we have been able to renew our domain name, remunerate members of the\nteam who have worked on the features released, and discuss the possibility of using dedicated servers\nfor benchmarking. If you wish to sponsor Boa, you can do so by donating to our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://opencollective.com/boa",
        children: "open collective"
      }), ".\nYou can also check ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3AE-Easy",
        children: "easy"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22",
        children: "good first issues"
      }), " if you want to contribute\nsome code instead."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "highlights",
      children: "Highlights"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "were-on-test262fyi",
      children: ["We're on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://test262.fyi/",
        children: "test262.fyi"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Thanks to the amazing work of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://twitter.com/CanadaHonk",
        children: "CanadaHonk"
      }), ", Boa is now listed on\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://test262.fyi/",
        children: "test262.fyi"
      }), "! This is a daily runner of the official test262 test suite that\nruns a nightly build of Boa, along with other engines, and updates the results every day. This is\nusing the tip of the main branch of Boa alongside the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/tc39/test262",
        children: "latest test262"
      }), "\nchanges pushed to their main branch."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "This is a great achievement for us and we are very proud to be listed alongside other major JavaScript\nengines. It should be much easier for users to compare Boa's conformance tests with other engines."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "temporal",
      children: "Temporal"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["A lot of work has been put over the past few months on the Temporal API. The Temporal API is a new\nset of built-in objects and functions that is designed to be a more modern replacement for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Date"
      }), "\nobject, providing a more feature-rich and flexible API for working with dates and times."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["It is currently a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://tc39.es/proposal-temporal/docs/",
        children: "stage 3 proposal"
      }), " and we are working\nalongside the TC39 champions to put together a solid implementation. Since Temporal is such an\nextensive specification, we have done most of the work outside of Boa so that it can be used in other\nprojects. This work can be found in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/temporal/",
        children: "temporal_rs"
      }), " repository."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We hope to release a full blog post on Temporal in the future, but for now, let's look at a couple small\nexamples of Temporal."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In JavaScript:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-javascript",
        children: "// JavaScript's Temporal built-in object.\n\n// For example, you can customize you're own calendar implementations!\nclass CustomCalendar extends Temporal.Calendar {\n  constructor() {\n    super(\"iso8601\");\n  }\n  inLeapYear(dateLike) {\n    messageInACalendar = \"It's a message in a Calendar!\";\n    return dateLike.daysInYear === 366;\n  }\n}\n\nlet messageInACalendar;\n// Construct the CustomCalendar.\nconst calendar = new CustomCalendar();\n\nconst boaReleaseDay = new Temporal.PlainDate(2024, 3, 7, calendar);\nconst leap = boaReleaseDay.inLeapYear;\n\nmessageInACalendar;\n// Outputs: \"It's a message in a Calendar!\"\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "In Rust:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "// Rust's `temporal_rs` crate\nuse temporal_rs::{components::{calendar::CalendarSlot, Date}, options::ArithmeticOverflow };\nuse std::str::FromStr;\n\n// Create a Calendar slot value from a string\nlet calendar = CalendarSlot::<()>::from_str(\"iso8601\").unwrap();\n\n// Create a date. The date can be made to either reject or constrain the input.\nlet date = Date::<()>::new(2024, 3, 7, calendar, ArithmeticOverflow::Reject).unwrap();\n\nassert_eq!(date.iso_year(), date.year().unwrap());\n\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Please note that Temporal is still an experimental feature, and while a lot of progress\nhas been made, there is still more work to be completed until it is production ready."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If you're interested in learning more or want to contribute to the native Rust implementation of\nTemporal, feel free to check out ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "temporal_rs"
      }), "'s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/temporal/issues",
        children: "issues"
      }), "!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "regexp",
      children: "RegExp"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Over the past 7 months there has been some effort poured into an improved implementation of RegExp.\nThis includes:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Support for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "RegExp.prototype.hasIndices"
          })
        }), " (Thanks to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/dirkdev98",
          children: "@dirkdev98"
        }), "!)."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Support for Unicode sets, aka the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "v"
        }), " flag."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Support for UTF-16 text searches."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["General fixes around ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RegExp()"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RegExp.toString()"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "RegExp.match()"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Here is a table showing the progress of RegExp between v0.17 and v0.18:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Test262"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "v0.17 (July 2023)"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "v0.18 (Feb 2024)"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Total"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "1,915"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "1,920"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Pass"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "1,071"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "1,878"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Fail"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "132"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "Skipped"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "712"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "40"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "That's a whopping 807 more tests passed!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We only have two failing tests left and both are caused by the lack of Unicode 15.1 support.\nThe remaining skipped tests are all related to stage 3 proposals."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "shared-array-buffer--atomics",
      children: "Shared Array Buffer + Atomics"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer",
        children: "SharedArrayBuffer"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics",
        children: "Atomics"
      }), " builtins have been implemented in this release.\nThis means embedders can now orchestrate ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Context"
      }), "s running on separate threads to execute\nshared work between them."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Atomics"
      }), " builtin object contains several static methods that allow executing atomic operations\non shared memory. In addition to that, it also contains the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "wait()"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "notify()"
      }), " methods, which\noffers the same functionality as Linux futexes for JS's worker threads:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "// On the main thread\nconst sab = new SharedArrayBuffer(1024);\nconst int32 = new Int32Array(sab);\nsend(worker1, int32);\nsend(worker2, int32);\n\n// On worker1\nint32 = receive();\nAtomics.wait(int32, 0, 0);\nconsole.log(int32[0]); // 123\n\n// On worker2\nint32 = receive();\nconsole.log(int32[0]); // 0\nAtomics.store(int32, 0, 123);\nAtomics.notify(int32, 0, 1);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "intl-updates",
      children: "Intl updates"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We're keeping the good progress on our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Intl"
      }), " implementation, and now we have the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Intl.PluralRules"
        })
      }), "\nbuiltin and (a first prototype of) the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Intl.NumberFormat"
        })
      }), " builtin in place."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["As mentioned by the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules#description",
        children: "Mozilla docs"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Languages use different patterns for expressing both plural numbers of items (cardinal numbers) and\nfor expressing the order of items (ordinal numbers). English has two forms for expressing cardinal\nnumbers: one for the singular \"item\" (1 hour, 1 dog, 1 fish) and the other for zero or any other\nnumber of \"items\" (0 hours, 2 lemmings, 100000.5 fish), while Chinese has only one form, and Arabic\nhas six! Similarly, English has four forms for expressing ordinal numbers: \"th\", \"st\", \"nd\", \"rd\",\ngiving the sequence: 0th, 1st, 2nd, 3rd, 4th, 5th, ..., 21st, 22nd, 23rd, 24th, 25th, and so on,\nwhile both Chinese and Arabic only have one form for ordinal numbers."
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This variation between languages makes it really hard to properly localize a cardinal or ordinal number.\nTo fix this, the CLDR (Common Locale Data Repository) project has been collecting information about\nthe \"plural category\" of certain numeric patterns on many languages, and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Intl.PluralRules"
      }), " objects\nare the builtin objects that enable obtaining this information in an easy way:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "const pr = new Intl.PluralRules(\"en-US\", { type: \"ordinal\" });\n\nconst suffixes = new Map([\n  [\"one\", \"st\"],\n  [\"two\", \"nd\"],\n  [\"few\", \"rd\"],\n  [\"other\", \"th\"],\n]);\n\nconst getSuffix = (n) => {\n  return suffixes.get(pr.select(n));\n};\n\nconsole.log(getSuffix(0)); // \"th\"\nconsole.log(getSuffix(1)); // \"st\"\nconsole.log(getSuffix(2)); // \"nd\"\nconsole.log(getSuffix(3)); // \"rd\"\nconsole.log(getSuffix(4)); // \"th\"\n\nconsole.log(getSuffix(21)); // \"st\"\nconsole.log(getSuffix(42)); // \"nd\"\nconsole.log(getSuffix(73)); // \"th\"\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["On the same vein, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Intl.NumberFormat"
        })
      }), " objects can format numbers in a language-sensitive way:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "const nf = new Intl.NumberFormat(\"bn\", {\n  useGrouping: \"min2\",\n  minimumSignificantDigits: 3,\n  maximumSignificantDigits: 7,\n});\n\nconsole.log(nf.format(10003.1234)); // ১০,০০৩.১২\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["However, we need to mention that ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Intl.NumberFormat"
      }), " is NOT feature complete at the moment, since it\nonly allows formatting numbers in the standard notation with no currencies or units. We're still\nworking on adding the missing features, but we hope that this initial prototype is at least useful\nfor some use cases."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "builtins-updates",
      children: "Builtins updates"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "While this new release is filled with shiny new features and APIs, it should be noted that the\nECMAScript 262 specification is constantly evolving, which is why there are also a lot of small\nchanges and additions to existing builtins that keep Boa updated to the latest revisions of the\nspecification."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["All examples were taken from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US",
        children: "Mozilla Web Docs"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "findlast-and-findlastindex-on-typedarray",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3135",
        children: "findLast and findLastIndex on TypedArray"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "function isPrime(element) {\n  if (element % 2 === 0 || element < 2) {\n    return false;\n  }\n  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {\n    if (element % factor === 0) {\n      return false;\n    }\n  }\n  return true;\n}\n\nlet uint8 = new Uint8Array([4, 6, 8, 12]);\nconsole.log(uint8.findLast(isPrime)); // undefined (no primes in array)\nuint8 = new Uint8Array([4, 5, 7, 8, 9, 11, 12]);\nconsole.log(uint8.findLast(isPrime)); // 11\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "stringprototypeiswellformed-and-stringprototypetowellformed",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3187",
        children: "String.prototype.isWellFormed and String.prototype.toWellFormed"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "const illFormed = \"https://example.com/search?q=\\uD800\";\n\ntry {\n  encodeURI(illFormed);\n} catch (e) {\n  console.log(e); // URIError: URI malformed\n}\n\nif (illFormed.isWellFormed()) {\n  console.log(encodeURI(illFormed));\n} else {\n  console.warn(\"Ill-formed strings encountered.\"); // Ill-formed strings encountered.\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "change-array-by-copy",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3412",
        children: "Change Array by copy"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "const months = [\"Mar\", \"Jan\", \"Feb\", \"Dec\"];\nconst sortedMonths = months.toSorted();\nconsole.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']\nconsole.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']\n\nconst values = [1, 10, 21, 2];\nconst sortedValues = values.toSorted((a, b) => a - b);\nconsole.log(sortedValues); // [1, 2, 10, 21]\nconsole.log(values); // [1, 10, 21, 2]\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "grouping-functions",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3420",
        children: "Grouping functions"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "const array = [1, 2, 3, 4, 5];\n\n// `Object.groupBy` groups items by arbitrary key.\n// In this case, we're grouping by even/odd keys\nObject.groupBy(array, (num, index) => {\n  return num % 2 === 0 ? \"even\" : \"odd\";\n});\n// =>  { odd: [1, 3, 5], even: [2, 4] }\n\n// `Map.groupBy` returns items in a Map, and is useful for grouping\n// using an object key.\nconst odd = { odd: true };\nconst even = { even: true };\nMap.groupBy(array, (num, index) => {\n  return num % 2 === 0 ? even : odd;\n});\n// =>  Map { {odd: true}: [1, 3, 5], {even: true}: [2, 4] }\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "resizable-buffers",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3634",
        children: "Resizable buffers"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "const buffer = new ArrayBuffer(8, { maxByteLength: 16 });\n\nconsole.log(buffer.byteLength); // 8\n\nbuffer.resize(12);\n\nconsole.log(buffer.byteLength); // 12\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "transferrable-buffers",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3649",
        children: "Transferrable buffers"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "const buffer = new ArrayBuffer(8, { maxByteLength: 16 });\nconst view = new Uint8Array(buffer);\nview[1] = 2;\nview[7] = 4;\n\n// Copy the buffer to a smaller size\nconst buffer2 = buffer.transfer(4);\nconsole.log(buffer2.byteLength); // 4\nconsole.log(buffer2.maxByteLength); // 16\nconst view2 = new Uint8Array(buffer2);\nconsole.log(view2[1]); // 2\nconsole.log(view2[7]); // undefined\nbuffer2.resize(8);\nconsole.log(view2[7]); // 0\n\n// Copy the buffer to a larger size within maxByteLength\nconst buffer3 = buffer2.transfer(12);\nconsole.log(buffer3.byteLength); // 12\n\n// Copy the buffer to a larger size than maxByteLength\nbuffer3.transfer(20); // RangeError: Invalid array buffer length\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "apis-updates",
      children: "APIs updates"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "experimental-features",
      children: "Experimental features"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Some of you might have noticed that the previous section contained a builtin addition that isn't\ntechnically a \"spec addition\", but a \"proposal for a spec addition\". To clarify, the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.a, {
        href: "https://github.com/tc39/proposal-arraybuffer-transfer",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "ArrayBuffer.prototype.transfer"
        }), " and friends"]
      }), " proposal is, at the time of the publication\nof this post, still at stage 3 on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://tc39.es/process-document/",
        children: "TC39 Process"
      }), ". Generally, stages 3 and below need to be\ngated by implementors; this avoids exposing experimental APIs to users."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Mirroring this general idea, we introduced a new ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "experimental"
      }), " feature for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "boa_engine"
      }), " crate.\nEnabling this feature will make it possible to test future proposals for the ECMAScript specification\nusing Boa, but we do not recommend enabling the feature in production environments."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We're still trying to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues/3377",
        children: "find a way to enable experimental features in a more granular way"
      }), ",\nsince the current flag allows enabling either all or no experimental features; definitely not ideal.\nSo, expect some API changes in the future around this. But for now, have fun testing the new proposals!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "hostdefined-fields",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "[[HostDefined]]"
      }), " fields"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In this version, we introduced a new API to attach custom data to realms, scripts and modules.\nThe ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.rs/boa_engine/0.18.0/boa_engine/struct.HostDefined.html",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "HostDefined"
        })
      }), " struct is a more composable way of attaching custom data. Instead of attaching\nonly a single type casted to an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Any"
      }), ", you can insert many types to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "HostDefined"
      }), " map, and\nevery separate type will have its own value stored inside the map."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "// Example snippet taken from https://github.com/boa-dev/boa/blob/main/examples/src/bin/host_defined.rs\n// Check that file for a more extensive example.\n\n/// Custom host-defined struct that has some state, and can be shared between JavaScript and rust.\n#[derive(Default, Trace, Finalize, JsData)]\nstruct CustomHostDefinedStruct {\n    #[unsafe_ignore_trace]\n    counter: usize,\n}\n\n// We create a new `Context` to create a new Javascript executor.\nlet mut context = Context::default();\n\n// Get the realm from the context.\nlet realm = context.realm().clone();\n\n// Insert a default CustomHostDefinedStruct.\nrealm\n    .host_defined_mut()\n    .insert_default::<CustomHostDefinedStruct>();\n\nassert!(realm.host_defined().has::<CustomHostDefinedStruct>());\n\n// Get the [[HostDefined]] field from the realm and downcast it to our concrete type.\nlet host_defined = realm.host_defined();\nlet Some(host_defined) = host_defined.get::<CustomHostDefinedStruct>() else {\n    return Err(JsNativeError::typ()\n    .with_message(\"Realm does not have HostDefined field\")\n    .into());\n};\n\n// Assert that the [[HostDefined]] field is in it's initial state.\nassert_eq!(host_defined.counter, 0);\n\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
      id: "class-redesign--api-enhancements",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Class"
      }), " redesign + API enhancements"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["There were some small improvements made to our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Class"
      }), " trait API, including a way to cache\ncustom ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Class"
      }), " implementors into the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Context"
      }), " itself for easy access to the constructor and\nprototype objects. This is part of an ongoing effort about\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues/3314",
        children: ["improving the APIs around the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Class"
        }), " trait"]
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "// An example of what this new API allows\n// Assume there's already a `Person` struct that implements `Class`.\n\nlet mut context = Context::default();\ncontext\n  .register_global_class::<Person>()\n  .expect(\"the Person builtin shouldn't exist\");\n\n// Previously, the line below had to be done manually using something like\n// let prototype = context\n//     .global_object()\n//     .get(js_string!(\"Person\"), context)\n//     .unwrap()\n//     .as_object()\n//     .cloned()\n//     .unwrap()\n//     .get(js_string(\"prototype\"), context)\n//     .unwrap()\n//     .as_object()\n//     .cloned()\n//     .unwrap();\n// Yeah... it's a handful.\nlet prototype = context.get_global_class::<Person>().unwrap().prototype();\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "runtime-limits",
      children: "Runtime limits"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We added new APIs to limit the execution of the engine at runtime! This new API has some limitations\nsuch as being unable to track limits inside native Rust functions, and we're still working on offering\nmore options for other runtime limits such as heap size limits, but we hope this is at least useful\nfor some users."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "// Snippet taken from https://github.com/boa-dev/boa/blob/main/examples/src/bin/runtime_limits.rs\n// Check that file for the full example.\n// Create the JavaScript context.\nlet mut context = Context::default();\n\n// Set the context's runtime limit on loops to 10 iterations.\ncontext.runtime_limits_mut().set_loop_iteration_limit(10);\n\n// Here we exceed the limit by 1 iteration and a `RuntimeLimit` error is thrown.\n//\n// This error cannot be caught in JavaScript, it can only be caught in Rust code.\nlet result = context.eval(Source::from_bytes(\n    r\"\n        try {\n            for (let i = 0; i < 12; ++i) { }\n        } catch (e) {\n\n        }\n    \",\n));\nassert!(result.is_err());\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "synthetic-modules",
      children: "Synthetic modules"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We added support for creating synthetic modules from Rust code. This allows exposing a set of\nfunctions and properties to other modules without having to evaluate Javascript code."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "// Taken from https://github.com/boa-dev/boa/blob/main/examples/src/bin/synthetic.rs\n// See the file for the full example.\n\n// ...\n\nlet sum = FunctionObjectBuilder::new(\n        context.realm(),\n        NativeFunction::from_fn_ptr(|_, args, ctx| {\n            args.get_or_undefined(0).add(args.get_or_undefined(1), ctx)\n        }),\n    )\n    .length(2)\n    .name(js_string!(\"sum\"))\n    .build();\n\n// ...\n\nlet operations = Module::synthetic(\n    // Make sure to list all exports beforehand.\n    &[\n        js_string!(\"sum\"),\n        // ...\n    ],\n    // The initializer is evaluated every time a module imports this synthetic module,\n    // so we avoid creating duplicate objects by capturing and cloning them instead.\n    SyntheticModuleInitializer::from_copy_closure_with_captures(\n        |module, fns, _| {\n            println!(\"Running initializer!\");\n            module.set_export(&js_string!(\"sum\"), fns.0.clone().into())?;\n            // ...\n            Ok(())\n        },\n        (sum, /* ... */),\n    ),\n    None,\n    context,\n)\n\nloader.insert(\n    PathBuf::from(\"./scripts/modules\")\n        .canonicalize()?\n        .join(\"operations.mjs\"),\n    operations,\n);\n\n// ...\n\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "async-eval",
      children: "Async eval"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Due to popular demand, we added some APIs that allow running scripts in an asynchronous way, making\nit possible to share some workload between async tasks and the execution of the engine itself.\nNote that, by the single-threaded nature of JS engines, all futures returned by Boa cannot implement\nneither ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Send"
      }), " nor ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Sync"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "let context = &mut Context::default();\nlet src = Source::from_bytes(r#\"\n  let array = new Array([15, 20, 35, 123, 65, 12]);\n  array.sort();\n  console.log(array);\n\"#);\nlet src = Script::parse(src, None, context).unwrap();\nlet task = async move {\n  let result = src.evaluate_async(context).await.unwrap();\n  println!(\"{:?}\", result.display());\n}\nblock_on(join!(long_task(), task));\n\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "jserasederror",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsErasedError"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Don't you hate when you try to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "?"
      }), " a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Result<T, JsError>"
      }), " and the compiler just complains saying\nsomething like"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "error[E0277]: `Rc<num_bigint::bigint::BigInt>` cannot be sent between threads safely\n   --> tests/tester/src/main.rs:190:52\n    |\n190 |     Context::default().eval(Source::from_bytes(\"\"))?;\n    |                                                    ^ `Rc<num_bigint::bigint::BigInt>` cannot be sent between threads safely\n    |\n    = help: within `JsError`, the trait `Send` is not implemented for `Rc<num_bigint::bigint::BigInt>`\n    = help: the following other types implement trait `FromResidual<R>`:\n              <Result<T, F> as FromResidual<Yeet<E>>>\n              <Result<T, F> as FromResidual<Result<Infallible, E>>>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Well, say no more to missing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Send"
      }), "s in your daily life! We present to you, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsErasedError"
      }), "!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Jokes aside, using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsError"
      }), " is difficult from an embedder's perspective because ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsError"
      }), " can be\nany arbitrary value, including non-", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Send"
      }), " values such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsObject"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsString"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsBigInt"
      }), ".\nThis makes ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsError"
      }), " automatically incompatible with libraries like ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "anyhow"
      }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "eyre"
      }), " that expect\nonly ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Send"
      }), " errors."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["To solve this, we introduced a new ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsError::into_erased"
      }), " method which returns a thread-safe\nversion of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsError"
      }), " that is compatible with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "anyhow"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "eyre"
      }), " and other error-reporting libraries."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-rust",
        children: "fn main() -> eyre::Result<()> {\n    let context = &mut Context::default();\n    let value = context\n        .eval(Source::from_bytes(\"\"))\n        .map_err(|err| err.into_erased(context))?; // No compiler errors!\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Why not call it ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsSendError"
      }), " instead of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsErasedError"
      }), "? Well, it is generally not possible to\nconvert a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsError"
      }), " into a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsErasedError"
      }), " without losing some information in the conversion. However,\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsSendError"
      }), " gave the appearance of being ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsError"
      }), " but ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Send"
      }), ", which is really not true. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "JsErasedError"
      }), ",\non the other hand, makes it clear the conversion is not lossless. Feel free to ping us if you have a\nbetter name for it though!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "optimizations",
      children: "Optimizations"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The following benchmarks below are taken from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7",
        children: "v8 benchmark suite"
      }), ". This benchmark is deprecated,\nbut is useful in this context to show the performance improvements between versions."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "(higher numbers are better)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Boa Version"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Richards"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "DeltaBlue"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Crypto"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "RayTrace"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "EarleyBoyer"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Splay"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "NavierStokes"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "Total"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "v0.16"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "29.0"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "29.2"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "42.1"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "107"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "105"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "111"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "15.4"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "49.1"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "v0.17"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "34.3"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "39.1"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "49.1"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "134"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "119"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "141"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "11.9"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "56.2"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "v0.18"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "49.8"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "53.9"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "52.1"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "161"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "152"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "154"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "102"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "91.5"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "inline-caching",
      children: "Inline Caching"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Thanks to the implementation of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/docs/shapes.md",
        children: "Object Shapes"
      }), "\nin version ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "v0.17"
      }), ", we were able to further improve the performance of the engine by implementing\nInline Caching. The concept of Inline Caching is based on the idea that a property access for a\nvariable will usually only be applied to objects of similar Shapes. To picture this, let's examine\nthe following code:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "function attach(obj1, obj2) {\n  obj1.attach = obj2.getHandler();\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["On interpreters that don't implement any kind of caching, the previous code would have to make a\nproperty lookup for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getHandler"
      }), " method every time that method is called. This is really inefficient\nfor a simple reason: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getHandler"
      }), " could be inside ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "obj2"
      }), ", or it could be inside ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "obj2.prototype"
      }), ",\nor it could be inside ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "obj2.prototype.prototype"
      }), "... in fact, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "getHandler"
      }), " could be anywhere on the\ninheritance chain of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "obj2"
      }), "!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The easy approach to solve this is to cache the method lookup inside ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "obj2"
      }), " itself using an associative\nmap of some sorts. This is nice, but also a bit wasteful because we would be allocating a new\nassociative map for all instances of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "obj2"
      }), ", even if the map is only really used inside ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "attach"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["What then? Well, we can apply the \"inline\" part of an inline cache now! Just allocate an array of\nall property accesses within the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "attach"
      }), " function and assign an index to every one of them.\nInitially, a property access is uninitialized. Once we reach a particular uninitialized property access,\nit performs the dynamic lookup and changes its corresponding array slot to be a\nweak reference to the object's shape. If we reach the same property access again, we can retrieve the\nstored shape and directly access the object's dense storage without doing a property lookup!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["However, there's a caveat. If ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "obj2.getHandler"
      }), " is evaluated twice with objects of different shapes,\nthe stored shape would be invalid for the second property access. In this case, we can rollback the\naccess to the uninitialized state and make a manual property lookup once again.\nThis is known as monomorphic inline caching. There's also polymorphic inline caching, which\nstores several shapes per access instead of rolling back to the uninitialized state."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Currently we do eager monomorphic inline caching, so there is plently of room for improvements that\nwe're planning to do in the future!"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "road-to-10",
      children: "Road to 1.0"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "As Boa is being used by more projects it is important we can provide a stable and reliable API. We\ndon't feel like we're quite there yet, but after a discussion with the team we have decided to aim\nfor a 1.0 release in the near future. This will be a big milestone for us and we hope to have a lot\nof new features and improvements to show off by then."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "We will keep our focus on the public API for those embedding Boa. We will also be working on improving\nthe performance of the engine. If you wanted to offer feedback on the API feel free to reach out to\nus via Github or Discord."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can keep an eye on the project to reach 1.0 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/orgs/boa-dev/projects/2/views/1",
        children: "here"
      }), ".\nWe hopefully don't forsee this project getting much bigger as most issues such as spec conformance\nor performance are a going-concern."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "how-can-you-support-boa",
      children: "How can you support Boa?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa is an independent JavaScript engine implementing the ECMAScript specification, we rely on the\nsupport of the community to keep it going. If you want to support us, you can do so by donating to\nour ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://opencollective.com/boa",
        children: "open collective"
      }), ". Proceeeds here go towards this very website, the domain name, and remunerating\nmembers of the team who have worked on the features released."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If financial contribution is not your strength, you can contribute by asking to be assigned to one of\nour ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+no%3Aassignee",
        children: "open issues"
      }), ", and asking for mentoring if you don't know your way around the engine. Our\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/CONTRIBUTING.md",
        children: "contribution guide"
      }), " should help you here. If you are more used to working with JavaScript or frontend\nweb development, we also welcome help to improve our web presence, either in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa-dev.github.io",
        children: "our website"
      }), ", or in our\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues/820",
        children: "testing representation"
      }), " page or benchmarks page. You can also contribute to our Criterion benchmark\ncomparison GitHub ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/criterion-compare-action",
        children: "action"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We are also looking to improve the documentation of the engine, both for developers of the engine\nitself and for users of the engine. Feel free to contact us in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.gg/tUFFk9Y",
        children: "Discord"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "thank-you",
      children: "Thank You"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Once again, big thanks to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/graphs/contributors?from=2023-07-08&to=2024-03-05&type=c",
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