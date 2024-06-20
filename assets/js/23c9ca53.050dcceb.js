"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[3510],{

/***/ 6210:
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
	title: 'Boa release v0.14',
	author: 'Boa Developers'
};
const contentTitle = undefined;
const metadata = {
  "permalink": "/blog/2022/03/15/boa-release-14",
  "source": "@site/blog/2022-03-15-boa-release-14.md",
  "title": "Boa release v0.14",
  "description": "Summary",
  "date": "2022-03-15T00:00:00.000Z",
  "tags": [
    {
      "inline": true,
      "label": "post",
      "permalink": "/blog/tags/post"
    }
  ],
  "readingTime": 5.18,
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
    "title": "Boa release v0.14",
    "author": "Boa Developers"
  },
  "unlisted": false,
  "prevItem": {
    "title": "Boa release v0.15",
    "permalink": "/blog/2022/06/10/boa-release-15"
  },
  "nextItem": {
    "title": "Boa release v0.13",
    "permalink": "/blog/2021/09/30/boa-release-13"
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
  "value": "Boa has moved",
  "id": "boa-has-moved",
  "level": 2
}, {
  "value": "New ECMAScript features",
  "id": "new-ecmascript-features",
  "level": 2
}, {
  "value": "Virtual Machine",
  "id": "virtual-machine",
  "level": 2
}, {
  "value": "Boa opens financial contributions",
  "id": "boa-opens-financial-contributions",
  "level": 2
}, {
  "value": "What does this mean for Boa?",
  "id": "what-does-this-mean-for-boa",
  "level": 3
}, {
  "value": "Can I contribute differently?",
  "id": "can-i-contribute-differently",
  "level": 3
}, {
  "value": "Thank You",
  "id": "thank-you",
  "level": 3
}, {
  "value": "Thank you New Contributors",
  "id": "thank-you-new-contributors",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
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
      children: ["Boa v0.14 is here! After almost 6 months of development, we are very happy to present you the newest release of the Boa\nJavaScript engine. Boa makes it easy to embed a JS engine in your projects, and you can even use it from webassembly. See\nthe ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/about",
        children: "about"
      }), " page for more info. Together with this release, we present you: A new way to contribute to Boa, a virtual machine, usable examples and much more."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa currently supports part of the JavaScript language. In this release, our conformance has grown from 41.01% to 49.74%\nin the official ECMAScript Test Suite (Test262). The engine now passes 43,986 tests, coming from 33,192 in Boa 0.13\n(32.5% increase), and we have closed 40 issues and merged 137 pull requests. You can check the full list of changes\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/v0.14/CHANGELOG.md",
        children: "here"
      }), ", and the full information on conformance\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://boa-dev.github.io/boa/test262/",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "boa-has-moved",
      children: "Boa has moved"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["First off, some breaking changes!\nBoa is now ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://crates.io/crates/boa_engine",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "boa_engine"
        })
      }), " on crates.io. This should bring it in line with our other packages, and allows us to resolve the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues/230",
        children: "casing issue"
      }), " we had with Boa previously. It should just be a case of changing your dependencies in cargo.toml to the new destination. The old ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://crates.io/crates/boa",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "Boa"
        })
      }), " crate will no longer receive any updates."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "new-ecmascript-features",
      children: "New ECMAScript features"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Boa v0.14 ships with support for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Object.getOwnPropertyNames"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Object.getOwnPropertySymbols"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Object.prototype.hasOwnProperty"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Array.from"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "AggregateError"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Typed Arrays"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Proxy"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "toLocaleString()"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Symbol.prototype.valueOf"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Array.prototype.at()"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "String.fromCharCode"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Object.hasOwn"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Object.fromEntries"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Proxy"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Array.prototype.findLast"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Array.prototype.findLastIndex"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "console.trace"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "String.raw( template, ...substitutions )"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/v0.14/CHANGELOG.md",
        children: "more"
      }), ". There's also been several bug fixes and internal improvements, such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/1684",
        children: "switching to Bors"
      }), " for our CI management."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "virtual-machine",
      children: "Virtual Machine"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The biggest change in this release has definitely been the switch of the main implementation to a Virtual Machine. The\nJavaScript code first gets parsed into AST, then compiled into op-codes, and finally executed in the VM. This adds some\nextra steps, which, for now, have reduced the performance of the engine. We hope to fix some of these degradations over the course of the next few releases so hang tight. The new VM opens the door for many great features in the future (we're looking at you, async/await), and allows some nicer optimizations in the parsing and compilation phases in which we have already started working (such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/1829",
        children: "#1829"
      }), " and\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/1849",
        children: "#1849"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["This move towards a VM has also brought one great new feature, generator execution (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/1790",
        children: "#1790"
      }), ").\nYou can find out more about how to use the VM ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/docs/vm.md",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "light",
      src: "/images/2022-03-15/boa_architecture_light.svg"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      class: "dark",
      src: "/images/2022-03-15/boa_architecture_dark.svg"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "boa-opens-financial-contributions",
      children: "Boa opens financial contributions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In the past months, due to the big and steady progress on Boa, we have received multiple requests to contribute to Boa\nfinancially. From now on, anyone can contribute with either a recurring donation, or a one-time contribution in our\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://opencollective.com/boa",
        children: "OpenCollective page"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "what-does-this-mean-for-boa",
      children: "What does this mean for Boa?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Being able to receive financial contributions won't directly show a change in Boa development, but depending on how much\nfunding we get, we are already planning next steps. Having more motivated contributors would be the first step. We all\nwant to spend more of our free time in boa, and receiving a financial compensation for it is definitely making the team\nmembers eager to continue contributing."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "But that is not our only idea. We would like to create a reproducible benchmarking platform. Currently, we just use GitHub\nactions for benchmarking, which is useful to get some general ideas on how some changes affect the performance of the\nengine. However, they have a high variability (up to 10%), meaning that we can definitely see changes if they are big, but it's\nimpossible to see differences if changes are minimal (1-2%, for example). Having the infrastructure to do proper performance\ntesting would require using dedicated CPUs, for example, which could be financed using the Boa Open Collective."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "On the development side, there are some very big projects that require deep involvement from the team. Priorities include (not neccesarily in order):"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/projects/3",
          children: "Async/Await support"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Better ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/projects/5",
          children: "completion records"
        }), " implementation"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Performance improvement across the board."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Future implementation of Shapes/Hidden Classes."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Being able to measure against other engines."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Improved conformance of the EcmaScript specification."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Integration with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/unicode-org/icu4x",
          children: "ICU4X"
        }), " for Intl and future Temporal implementation."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Implementing a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/discussions/1531",
        children: "proper API"
      }), " for Rust crates that want to embed Boa as they\nlike, or a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues/332",
        children: "C API"
      }), " so that other software, not written in Rust, can use Boa,\nare also a priority, and implementing all the new built-in objects to achieve 100% conformance with the ECMAScript\nspecification is also a must. All this takes time, and we will need to finance developers working on these big issues."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "can-i-contribute-differently",
      children: "Can I contribute differently?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["If financial contribution is not your strength, you can contribute by asking to be assigned to one of our\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+no%3Aassignee",
        children: "open issues"
      }), ", and asking for mentoring if you\ndon't know your way around the engine. Our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/CONTRIBUTING.md",
        children: "contribution guide"
      }), "\nshould help you here. If you are more used to working with JavaScript or frontend web development, we also\nwelcome help to improve our web presence, either in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa-dev.github.io",
        children: "our website"
      }), ", or in\nour ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues/820",
        children: "testing representation"
      }), " page or benchmarks page. You can also contribute to\nour Criterion benchmark comparison GitHub ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/criterion-compare-action",
        children: "action"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We are also looking to improve the documentation of the engine, both for developers of the engine itself and for users of the\nengine. Feel free to contact us in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://discord.gg/tUFFk9Y",
        children: "Discord"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "thank-you",
      children: "Thank You"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Last but certainly not least, a big ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Thank You"
      }), " to all the contributors of Boa.\nIt's not often we list them but we would like to say thank you to the new contributors who joined for the last release."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
      id: "thank-you-new-contributors",
      children: "Thank you New Contributors"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/abhishekc-sharma",
          children: "@abhishekc-sharma"
        }), " who made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/1612",
          children: "#1612"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/kevinputera",
          children: "@kevinputera"
        }), " who made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/1606",
          children: "#1606"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/nrabulinski",
          children: "@nrabulinski"
        }), " who made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/1614",
          children: "#1614"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/hle0",
          children: "@hle0"
        }), " who made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/1618",
          children: "#1618"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/nekevss",
          children: "@nekevss"
        }), " who made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/1613",
          children: "#1613"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/lowr",
          children: "@lowr"
        }), " who made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/1628",
          children: "#1628"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/Nimpruda",
          children: "@Nimpruda"
        }), " who made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/1634",
          children: "#1634"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/atouchet",
          children: "@atouchet"
        }), " who made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/1638",
          children: "#1638"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/praveenbakkal",
          children: "@praveenbakkal"
        }), " who made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/1680",
          children: "#1680"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/bsinky",
          children: "@bsinky"
        }), " who made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/1665",
          children: "#1665"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/TheDoctor314",
          children: "@TheDoctor314"
        }), " who made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/1691",
          children: "#1691"
        })]
      }), "\n"]
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