"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[8908],{

/***/ 717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_src_pages_roadmap_md_b4e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-pages/default/site-src-pages-roadmap-md-b4e.json
const site_src_pages_roadmap_md_b4e_namespaceObject = /*#__PURE__*/JSON.parse('{"type":"mdx","permalink":"/roadmap","source":"@site/src/pages/roadmap.md","title":"Roadmap 2026","description":"Garbage Collector Redesign and Integration","frontMatter":{},"unlisted":false}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./src/pages/roadmap.md


const frontMatter = {};
const contentTitle = 'Roadmap 2026';

const assets = {

};



const toc = [{
  "value": "Garbage Collector Redesign and Integration",
  "id": "garbage-collector-redesign-and-integration",
  "level": 2
}, {
  "value": "Description",
  "id": "description",
  "level": 3
}, {
  "value": "Expected Outcomes",
  "id": "expected-outcomes",
  "level": 3
}, {
  "value": "Possible Extensions",
  "id": "possible-extensions",
  "level": 3
}, {
  "value": "Project Discussion:",
  "id": "project-discussion",
  "level": 3
}, {
  "value": "Public API Audit and 1.0 Stabilization",
  "id": "public-api-audit-and-10-stabilization",
  "level": 2
}, {
  "value": "Description",
  "id": "description-1",
  "level": 3
}, {
  "value": "Expected Outcomes",
  "id": "expected-outcomes-1",
  "level": 3
}, {
  "value": "Possible Extensions",
  "id": "possible-extensions-1",
  "level": 3
}, {
  "value": "JavaScript Engine Performance Improvements",
  "id": "javascript-engine-performance-improvements",
  "level": 2
}, {
  "value": "Open Issue:",
  "id": "open-issue",
  "level": 2
}, {
  "value": "Description",
  "id": "description-2",
  "level": 3
}, {
  "value": "Expected Outcomes",
  "id": "expected-outcomes-2",
  "level": 3
}, {
  "value": "Possible Extensions",
  "id": "possible-extensions-2",
  "level": 3
}, {
  "value": "Project Discussion",
  "id": "project-discussion-1",
  "level": 3
}, {
  "value": "ECMAScript Conformance and Spec Compliance",
  "id": "ecmascript-conformance-and-spec-compliance",
  "level": 2
}, {
  "value": "Description",
  "id": "description-3",
  "level": 3
}, {
  "value": "Expected Outcomes",
  "id": "expected-outcomes-3",
  "level": 3
}, {
  "value": "Possible Extensions",
  "id": "possible-extensions-3",
  "level": 3
}, {
  "value": "Developer Tooling and Engine Observability",
  "id": "developer-tooling-and-engine-observability",
  "level": 2
}, {
  "value": "Description",
  "id": "description-4",
  "level": 3
}, {
  "value": "Expected Outcomes",
  "id": "expected-outcomes-4",
  "level": 3
}, {
  "value": "Possible Extensions",
  "id": "possible-extensions-4",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "roadmap-2026",
        children: "Roadmap 2026"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "garbage-collector-redesign-and-integration",
      children: "Garbage Collector Redesign and Integration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Difficulty: Hard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duration: 350 hours"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required Skills: Rust, memory management, data structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preferred Skills: Garbage collection algorithms, language runtimes"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "description",
      children: "Description"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Boa currently uses a prototype garbage collector, with experimental work happening in the separate ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/oscars",
        children: "Oscars repository"
      }), ". While functional, the GC architecture needs significant redesign to better support performance, maintainability, and future language features."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This project focuses on evaluating, refining, and integrating a production-ready garbage collector into Boa."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-outcomes",
      children: "Expected Outcomes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the current GC design and limitations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve or redesign the GC architecture (e.g. tracing strategy, allocation model, rooting)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate the improved GC into Boa’s runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add stress tests and benchmarks for GC behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Produce documentation explaining the design and trade-offs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "possible-extensions",
      children: "Possible Extensions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Incremental or generational GC strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GC-aware optimizations in the VM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tooling to visualize heap and GC activity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-discussion",
      children: "Project Discussion:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://matrix.to/#/!ESLxDMqdSvKbprdiyg:matrix.org?via=matrix.org&via=rrogal.ski&via=t2bot.io",
        children: "Matrix Boa/GC"
      }), "\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://matrix.to/#/!ZBLAwGpYvzsLqZAZZg:matrix.org?via=matrix.org&via=t2bot.io&via=mozilla.org",
        children: "Matrix Boa/General"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "public-api-audit-and-10-stabilization",
      children: "Public API Audit and 1.0 Stabilization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Difficulty: Medium"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duration: 175–200 hours"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required Skills: Rust, API design"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preferred Skills: SemVer, library maintenance, documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "description-1",
      children: "Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Boa is approaching its 1.0 release. A key requirement for this milestone is ensuring that our public APIs are well-defined, intentional, and stable, as breaking changes become significantly more costly after 1.0.\nThis project focuses on auditing Boa’s public API surface, identifying areas that may cause long-term maintenance or compatibility issues, and helping prepare the engine for a stable 1.0 release."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-outcomes-1",
      children: "Expected Outcomes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify and document all public-facing APIs (types, traits, functions, feature flags)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review APIs for stability, consistency, and long-term viability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Propose improvements or refactors to reduce future breaking changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Help resolve or unblock remaining items needed for the 1.0 milestone"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve documentation around public APIs and versioning guarantees"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "possible-extensions-1",
      children: "Possible Extensions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Introduce tooling or CI checks to detect accidental public API changes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve feature gating or visibility (pub vs pub(crate)) across the codebase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assist in defining Boa’s post-1.0 stability and deprecation policy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "javascript-engine-performance-improvements",
      children: "JavaScript Engine Performance Improvements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Difficulty: Medium–Hard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duration: 175–350 hours"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required Skills: Rust, profiling, algorithms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preferred Skills: Compiler or VM internals, benchmarking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-issue",
      children: "Open Issue:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/boa-dev/boa/issues/4524",
        children: "https://github.com/boa-dev/boa/issues/4524"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "description-2",
      children: "Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Performance is a core goal of Boa. While already competitive in many areas, there are clear opportunities to improve execution speed, memory usage, and startup time."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This project focuses on identifying performance bottlenecks and implementing targeted optimizations across the VM, bytecode execution, and runtime systems."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-outcomes-2",
      children: "Expected Outcomes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Much improved results on boajs.dev/benchmarks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify high-impact performance bottlenecks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement measurable optimizations (e.g. faster bytecode dispatch, improved data structures)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add or improve benchmarks to prevent regressions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document performance changes and results"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "possible-extensions-2",
      children: "Possible Extensions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduced allocation pressure and memory churn"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve documentation and tooling for profiling and benchmarking"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-discussion-1",
      children: "Project Discussion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://matrix.to/#/!odQJQiuPFJtUBzgoXY:matrix.org?via=matrix.org&via=gitter.im&via=rrogal.ski",
          children: "Matrix Boa/Performance"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://matrix.to/#/!ZBLAwGpYvzsLqZAZZg:matrix.org?via=matrix.org&via=t2bot.io&via=mozilla.org",
          children: "Matrix Boa/General"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ecmascript-conformance-and-spec-compliance",
      children: "ECMAScript Conformance and Spec Compliance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Difficulty: Medium"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duration: 175 hours"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required Skills: Rust, reading specifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preferred Skills: JavaScript engine internals"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "description-3",
      children: "Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Boa already performs well on ECMAScript conformance tests, but maintaining and improving compliance is an ongoing effort as the specification evolves."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This project focuses on closing remaining gaps, improving correctness in edge cases, and strengthening test coverage."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-outcomes-3",
      children: "Expected Outcomes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify areas where Boa diverges from the ECMAScript specification"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement missing or partially compliant features"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve or expand test coverage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduce known test failures and inconsistencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document tricky or non-obvious spec decisions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "possible-extensions-3",
      children: "Possible Extensions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Focus on a specific ECMAScript feature set (e.g. async, modules, Intl groundwork)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve error reporting and diagnostics for spec failures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "developer-tooling-and-engine-observability",
      children: "Developer Tooling and Engine Observability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Difficulty: Medium"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Duration: 175 hours"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Required Skills: Rust, tooling, debugging"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preferred Skills: Runtime diagnostics, profiling tools"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "description-4",
      children: "Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "As Boa grows, better tooling is needed to understand and debug engine behavior. This project focuses on improving observability for developers working on the engine."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "expected-outcomes-4",
      children: "Expected Outcomes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve logging and diagnostics in the VM and runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add optional tracing or debug modes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Improve internal metrics (allocation counts, GC timing, bytecode execution stats)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document tooling for contributors and users"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "possible-extensions-4",
      children: "Possible Extensions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debug-friendly execution modes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance and memory visualization tooling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration with existing Rust profiling tools"
      }), "\n"]
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