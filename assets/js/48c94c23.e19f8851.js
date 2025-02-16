"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[3045],{

/***/ 1828:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"permalink":"/blog/2024/07/09/boa-release-19","source":"@site/blog/2024-07-09-boa-release-19.md","title":"Boa release v0.19","description":"More progress on Temporal, new benchmarks, migration to Matrix, and more...","date":"2024-07-09T00:00:00.000Z","tags":[{"inline":true,"label":"post","permalink":"/blog/tags/post"}],"readingTime":8.665,"hasTruncateMarker":true,"authors":[{"name":"Boa Developers","url":"https://github.com/boa-dev","key":"boa-dev","page":null}],"frontMatter":{"layout":"post","tags":["post"],"title":"Boa release v0.19","description":"More progress on Temporal, new benchmarks, migration to Matrix, and more...","authors":"boa-dev"},"unlisted":false,"prevItem":{"title":"Boa release v0.20","permalink":"/blog/2024/12/05/boa-release-020"},"nextItem":{"title":"Boa release v0.18","permalink":"/blog/2024/03/07/boa-release-18"}}');

/***/ }),

/***/ 2384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_07_09_boa_release_19_md_48c_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_07_09_boa_release_19_md_48c_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1828);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8453);


const frontMatter = {
	layout: 'post',
	tags: [
		'post'
	],
	title: 'Boa release v0.19',
	description: 'More progress on Temporal, new benchmarks, migration to Matrix, and more...',
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
  "value": "Highlights",
  "id": "highlights",
  "level": 2
}, {
  "value": "Temporal",
  "id": "temporal",
  "level": 3
}, {
  "value": "New Benchmark Suite, Faster CI and reduced repo size",
  "id": "new-benchmark-suite-faster-ci-and-reduced-repo-size",
  "level": 3
}, {
  "value": "Migration to Matrix",
  "id": "migration-to-matrix",
  "level": 3
}, {
  "value": "Optimizations",
  "id": "optimizations",
  "level": 3
}, {
  "value": "Release binary stripping",
  "id": "release-binary-stripping",
  "level": 4
}, {
  "value": "Dense array storage variants for i32 and f64",
  "id": "dense-array-storage-variants-for-i32-and-f64",
  "level": 4
}, {
  "value": "New Contributors",
  "id": "new-contributors",
  "level": 2
}, {
  "value": "Looking Forward",
  "id": "looking-forward",
  "level": 2
}, {
  "value": "API ergonomics",
  "id": "api-ergonomics",
  "level": 3
}, {
  "value": "Performance",
  "id": "performance",
  "level": 3
}, {
  "value": "v1.0",
  "id": "v10",
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
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Boa v0.19 is now available! After 4 months of development we are very happy to present you the latest\nrelease of the Boa JavaScript engine. Boa makes it easy to embed a JS engine in your projects, and\nyou can even use it from WebAssembly. See the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/about",
        children: "about"
      }), " page for more info."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["In this release, our conformance has grown from 85.03% to 87.3% in the official ECMAScript Test Suite\n(Test262). Interestingly, this was partly because around 2000 tests\nwere ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/tc39/test262/commit/ea2268aa4382013f5533b91f9ef50366ad065a86",
        children: "removed from test262"
      }), "\nas part of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/tc39/proposal-temporal/issues/2826",
        children: "removal of custom calendars and timezones"
      }), ".\nOverall, Boa's conformance in real terms has improved by ~6%."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["You can check the full list of changes ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/v0.19/CHANGELOG.md",
        children: "here"
      }), ", and the full information on conformance\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://boajs.dev/boa/test262/",
        children: "here"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "highlights",
      children: "Highlights"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "temporal",
      children: "Temporal"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Boa is continuing to progress on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/tc39/proposal-temporal",
        children: "Temporal"
      }), ". The Temporal API is a new\nset of built-in objects and functions that is designed to be a more modern replacement for the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Date"
      }), "\nobject, providing a more feature-rich and flexible API for working with dates and times."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["It is currently a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://tc39.es/proposal-temporal/docs/",
        children: "stage 3 proposal"
      }), " and we are working\nalongside the TC39 champions to put together a solid Rust implementation. Since Temporal is such an\nextensive specification, we have done most of the work outside of Boa so that it can be used in other\nprojects. This work can be found in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/temporal/",
        children: "temporal_rs"
      }), " repository."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We hope to release a full blog post on Temporal in the future, but for now you can see the previous release notes for some examples on how to use it.\nYou can also look at the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://tc39.es/proposal-temporal/docs/cookbook.html",
        children: "Temporal Cook Book"
      }), " for some examples too!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["If you're interested in learning more or want to contribute to the native Rust implementation of\nTemporal, feel free to check out ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "temporal_rs"
      }), "'s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/temporal/issues",
        children: "issues"
      }), "!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Boa's conformance on the Temporal test suite has grown from 19.35% to 24.61% in this release."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "new-benchmark-suite-faster-ci-and-reduced-repo-size",
      children: "New Benchmark Suite, Faster CI and reduced repo size"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Boa has had an overhaul of its older criterion benchmark suite to a new ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://boajs.dev/benchmarks",
        children: "end to end benchmark suite"
      }), ".\nWe had finally outgrown the old benchmark suite and needed a new one that could handle the new features and improvements we were making to the engine.\nThe former benchmark suite has been there almost since the beginning, and was created as a way to keep an eye on certain functions and routines within Boa itself. Although useful, it\nwasn't comparable to other engines due to being so specific on how Boa works."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The new suite is taken from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7",
        children: "V8's old benchmark suite"
      }), " which, despite being deprecated, is still for comparative performance.\nOver time we will eventually need to work with other engines to have a more advanced benchmarking suite which can take into account modern JavaScript, but for now this is a good start."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This change also offered a nice side effect of not having benchmark or test262 data in the main repository anymore. Last time we released we had ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://www.reddit.com/r/rust/comments/1b91ora/comment/ktue8rf/",
        children: "reports"
      }), " of the repository being too large, so we've taken steps to reduce the size of the repository by moving this data to a separate repository and building a nightly version for reporting. Not only this makes it easier for anyone cloning Boa today but pushes to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "main"
      }), " are now much faster due to us not having to run test262 or Benchmarks each time."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "migration-to-matrix",
      children: "Migration to Matrix"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The Boa team will be migrating to Matrix from our Discord servers over the course of this year. This means we will hang out in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://matrix.to/#/#boa:matrix.org",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "#boa:matrix.org"
        })
      }), " room and will be available for questions and discussions there. We will also be using Matrix for other break-out rooms on future development in areas such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://matrix.to/#/!odQJQiuPFJtUBzgoXY:matrix.org?via=matrix.org&via=mozilla.org",
        children: "Performance"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://matrix.to/#/!rsWLMsIzfquQAbDoak:matrix.org?via=matrix.org",
        children: "Intl"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://matrix.to/#/!DeQjFAUjAPAffIsCgq:matrix.org?via=matrix.org&via=mozilla.org&via=igalia.com",
        children: "Temporal"
      }), ". We will be keeping the Discord server open for a while to allow people to migrate over, but we will eventually close it down sometime in 2025."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Boa has long been a user of Discord, pretty much since the beginning of the project, but as the project has grown and matured, we have chosen to move more in line to other communities who use Matrix for communication, such as TC39 who work on ECMAScript standard. With Boa's increased conformance and ability to work closer with the standard committee when implementing Temporal and other new specifications meant that a migration to Matrix was the most natural choice to ease communication with the broader JavaScript implementer communities."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "optimizations",
      children: "Optimizations"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "release-binary-stripping",
      children: "Release binary stripping"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Boa's binaries are on the larger side by default due to including ICU data. We may eventually move to a system where this needs to be fed from the host. However, until then there are other tricks we can employ to bring down our size, one of those is binary stripping. We can remove debug information from the release binary to reduce the size."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "crate"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "v0.18"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "v0.19"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boa"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "26MB"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "25MB"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boa_tester"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "27MB"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "25MB"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "dense-array-storage-variants-for-i32-and-f64",
      children: "Dense array storage variants for i32 and f64"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This release adds ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3760",
        children: "dense array storage"
      }), " variants for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "i32"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "f64"
      }), " types. This allows us to store arrays of these types more efficiently, and also allows us to optimize certain operations on these arrays."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["If you want to inspect the storage type of an array in Boa you can use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "$boa.object.indexedStorageType()"
      }), " APi. Here are ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/d3e539593fe206f18d44f20498cb54be15477a58/docs/boa_object.md#function-boaobjectindexedstoragetypeobject",
        children: "some examples"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "let a = [1, 2];\n\n$boa.object.indexedStorageType(a); // 'DenseI32'\n\na.push(0xdeadbeef);\n$boa.object.indexedStorageType(a); // 'DenseI32'\n\na.push(0.5);\n$boa.object.indexedStorageType(a); // 'DenseF64'\n\na.push(\"Hello\");\n$boa.object.indexedStorageType(a); // 'DenseElement'\n\na[100] = 100; // Make a hole\n$boa.object.indexedStorageType(a); // 'SparseElement'\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Much of this work is possible thanks to our implementation of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/docs/shapes.md",
        children: "Object Shapes"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "new-contributors",
      children: "New Contributors"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Thank you to the new contributors to Boa for this release, you can find their contributions below:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/robot-head",
          children: "@robot-head"
        }), " made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/3730",
          children: "https://github.com/boa-dev/boa/pull/3730"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/hansl",
          children: "@hansl"
        }), " made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/3755",
          children: "https://github.com/boa-dev/boa/pull/3755"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/NickTomlin",
          children: "@NickTomlin"
        }), " made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/3793",
          children: "https://github.com/boa-dev/boa/pull/3793"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/linusg",
          children: "@linusg"
        }), " made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/3800",
          children: "https://github.com/boa-dev/boa/pull/3800"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/getong",
          children: "@getong"
        }), " made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/3836",
          children: "https://github.com/boa-dev/boa/pull/3836"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/leoflalv",
          children: "@leoflalv"
        }), " made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/3867",
          children: "https://github.com/boa-dev/boa/pull/3867"
        })]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/CrazyboyQCD",
          children: "@CrazyboyQCD"
        }), " made their first contribution in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/3898",
          children: "https://github.com/boa-dev/boa/pull/3898"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "looking-forward",
      children: "Looking Forward"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "api-ergonomics",
      children: "API ergonomics"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Before finishing this blog post, we wanted to give a special shoutout to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/hansl",
        children: "@hansl"
      }), ", one of our new\ncontributors for this release! He's been working on improving the ergonomics around exposing\nRust functions and types as ECMAScript functions and classes with a lot of nice API enhancements.\nSome notable PRs are:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/3772",
          children: "Add a boa_interop crate"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/3786",
          children: "Add a new type Convert<> to convert values"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/3802",
          children: "Add a ContextData struct to inject host defined types from the context"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "https://github.com/boa-dev/boa/pull/3872",
          children: "Add a js_class to implement the Class trait without boilerplate"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Unfortunately, the aforementioned ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "boa_interop"
      }), " crate was not published for this version, and that's\nbecause we would like to polish it first and integrate it within the other crates of the project.\nHowever, we can give you a sneak peek of what some of the new APIs will allow you to do. Hopefully\nthis will make you look forward for v0.20!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-rust",
        children: "use boa_interop::{js_class, Ignore, JsClass};\n\n#[derive(Clone, Trace, Finalize, JsData)]\npub enum Animal {\n    Cat,\n    Dog,\n    Other,\n}\n\njs_class! {\n    // Implements the [`Class`] trait for the `Animal` enum.\n    class Animal {\n        // This sets a field on the JavaScript object. The arguments to\n        // `init` are the arguments passed to the constructor.\n        public age(_name: Ignore, age: i32) -> i32 {\n            age\n        }\n        // This is called when a new instance of the class is created in\n        // JavaScript, e.g. `new Animal(\"cat\")`.\n        constructor(name: String) {\n            match name.as_str() {\n                \"cat\" => Ok(Animal::Cat),\n                \"dog\" => Ok(Animal::Dog),\n                _ => Ok(Animal::Other),\n            }\n        }\n        // Declare a function on the class itself.\n        fn speak(this: JsClass<Animal>) -> JsString {\n            match *this.borrow() {\n                Animal::Cat => js_string!(\"meow\"),\n                Animal::Dog => js_string!(\"woof\"),\n                Animal::Other => js_string!(r\"¯\\_(ツ)_/¯\"),\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "performance",
      children: "Performance"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Now that our conformance is farily high (87.3% in Test262), we will be focusing on improving the performance of the engine. This will involve re-writing the Garbage Collector from the one we have now which was a fork of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/Manishearth/rust-gc",
        children: "rust-gc"
      }), " and modified heavily, to something which will work better for the engine and allow us to have paritioning, snapshots and other features which are not possible with the current GC. If this interests you, you can join the effort in our Matrix GC chat (see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "#migration-to-matrix",
        children: "Migration To Matrix"
      }), " above)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Boa will also be working on ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/pull/3798",
        children: "migrating"
      }), " from a stack VM to a register-based VM. This will allow us to optimize the engine further and make it more competitive with other engines. We will also be working on improving the performance of the engine in general, and we will be looking at ways to make the engine faster and more efficient."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "v10",
      children: "v1.0"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "We hope that the changes mentioned above will bring us closer to a v1.0 release. We are still some way off, but we are making progress and we are confident that we will be able to release a v1.0 version of Boa in the future."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "how-can-you-support-boa",
      children: "How can you support Boa?"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Boa is an independent JavaScript engine implementing the ECMAScript specification, and we rely on the\nsupport of the community to keep it going. If you want to support us, you can do so by donating to\nour ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://opencollective.com/boa",
        children: "open collective"
      }), ". Proceeeds here go towards this very website, the domain name, and remunerating\nmembers of the team who have worked on the features released."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["If financial contribution is not your strength, you can contribute by asking to be assigned to one of\nour ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+no%3Aassignee",
        children: "open issues"
      }), ", and asking for mentoring if you don't know your way around the engine. Our\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/blob/main/CONTRIBUTING.md",
        children: "contribution guide"
      }), " should help you here. If you are more used to working with JavaScript or frontend\nweb development, we also welcome help to improve our web presence, either in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa-dev.github.io",
        children: "our website"
      }), ", or in our\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues/820",
        children: "testing representation"
      }), " page or benchmarks page. You can also contribute to our Criterion benchmark\ncomparison GitHub ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/criterion-compare-action",
        children: "action"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["We are also looking to improve the documentation of the engine, both for developers of the engine\nitself and for users of the engine. Feel free to contact us in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://matrix.to/#/#boa:matrix.org",
        children: "Matrix"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "thank-you",
      children: "Thank You"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Once again, big thanks to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/graphs/contributors?from=2024-03-05&to=2024-07-11&type=c",
        children: "all the contributors"
      }), " of this release!!"]
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