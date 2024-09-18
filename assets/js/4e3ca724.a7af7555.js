"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[5518],{

/***/ 1528:
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
	sidebar_position: 2
};
const contentTitle = 'Shapes (Hidden Classes)';
const metadata = {
  "id": "optimizations/shapes",
  "title": "Shapes (Hidden Classes)",
  "description": "The best way to explain object shapes is through examples. It all begins with the root shape.",
  "source": "@site/docs/optimizations/shapes.md",
  "sourceDirName": "optimizations",
  "slug": "/optimizations/shapes",
  "permalink": "/docs/optimizations/shapes",
  "draft": false,
  "unlisted": false,
  "editUrl": "https://github.com/boa-dev/boa-dev.github.io/tree/main/docs/docs/optimizations/shapes.md",
  "tags": [],
  "version": "current",
  "sidebarPosition": 2,
  "frontMatter": {
    "sidebar_position": 2
  },
  "sidebar": "infoSidebar",
  "previous": {
    "title": "Overview",
    "permalink": "/docs/optimizations/overview"
  },
  "next": {
    "title": "Profiling",
    "permalink": "/docs/profiling"
  }
};
const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    mermaid: "mermaid",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.header, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h1, {
        id: "shapes-hidden-classes",
        children: "Shapes (Hidden Classes)"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The best way to explain object shapes is through examples. It all begins with the root shape."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mermaid, {
      value: "flowchart LR\n    classDef New style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5\n    style Root stroke:#000,stroke-width:5px\n    style PropertyTable fill:#071E22\n\n    Root(<b>Root Shape</b>\\n<b>Prototype:</i> <i>None</i>) -->| Property Count 0 | PropertyTable(PropertyTable\\n)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The root shape is where the transition chain starts from, it has a pointer to a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PropertyTable"
      }), ",\nwe will explain what it is and does later on!"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "NOTE:"
      }), " We will annotate the shapes with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "S"
      }), " followed by a number."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "If we have an example of JavaScript code like:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "let o = {};\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The following chain is created:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mermaid, {
      value: "flowchart LR\n    classDef New style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5\n    style Root stroke:#000,stroke-width:5px\n    style PropertyTable fill:#071E22\n\n    Root(<b>S0: Root Shape</b>\\n<b>Prototype:</b> <i>None</i>) -->|Property Count: 0| PropertyTable(PropertyTable\\n)\n\n    ObjectPrototype(<b>S1: Prototype Shape</b>\\n<b>Prototype:</b> Object.prototype) -->|Property Count: 0|PropertyTable\n    ObjectPrototype:::New -->|Previous| Root"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We transition, the object ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "o"
      }), " has ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "S1"
      }), " shape. The root shape does not have a prototype. So we transition into a shape that has the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Object.prototype"
      }), " as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "__proto__"
      }), ". We can see that the shapes inherited the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PropertyTable"
      }), " from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "root"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Ok, Let us add a property ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "x"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "o.x = 100; // The value is not important!\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Then this happens:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mermaid, {
      value: "flowchart LR\n    classDef New style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5\n    style Root stroke:#000,stroke-width:5px\n    style PropertyTable fill:#071E22\n\n    Root(<b>S0: Root Shape</b>\\nPrototype: <i>None</i>) -->|Property Count: 0| PropertyTable(<b>PropertyTable</b>\\nx: Slot 0, writable, configurable, enumerable)\n\n    ObjectPrototype(<b>S1: Prototype Shape</b>\\n<b>Prototype:</b> <i>Object.prototype</i>) -->|Property Count: 0|PropertyTable\n    ObjectPrototype -->|Previous| Root\n\n    InsertX(<b>S2: Insert Shape</b>\\n<b>Property:</b> '<i>x</i>') --> |Property Count: 1|PropertyTable\n    InsertX:::New -->|Previous| ObjectPrototype"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The object ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "o"
      }), " has shape ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "S2"
      }), " shape now, we can see that it also inherited the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PropertyTable"
      }), ", but it's property count is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "1"
      }), " and\nan entry has been added into the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PropertyTable"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We can see that the property added is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "writable"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "configurable"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "enumerable"
      }), ", but we also see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "Slot 0"
      }), ",\nthis is the index into the dense storage in the object itself."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Here is how it would look with the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "o"
      }), " object:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mermaid, {
      value: "flowchart LR\n    classDef New style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5\n    style Root stroke:#000,stroke-width:5px\n    style PropertyTable fill:#071E22\n\n    Root(<b>S0: Root Shape</b>\\n<b>Prototype:</b> <i>None</i>) -->| Property Count: 0 | PropertyTable(<b>PropertyTable</b>\\nx: Slot 0, writable, configurable, enumerable)\n\n    ObjectPrototype(<b>S1: Prototype Shape</b>\\n<b>Prototype:</b> <i>Object.prototype</i>) -->| Property Count: 0 |PropertyTable\n    ObjectPrototype -->|Previous| Root\n\n    InsertX(<b>S2: Insert Shape</b>\\n<b>Property:</b> '<i>x</i>') --> | Property Count: 1 | PropertyTable\n    InsertX -->|Previous| ObjectPrototype\n\n    O(<b>Object o</b>\\n<b>Element 0:</b> JsValue: <i>100</i>)\n    O:::New --> InsertX"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Let's define a getter and setter ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "y"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "// What the getter/setter are not important!\nObject.defineProperty(o, \"y\", {\n  enumerable: true,\n  configurable: true,\n  get: function () {\n    return this.x;\n  },\n  set: function (value) {\n    this.x = value;\n  },\n});\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mermaid, {
      value: "flowchart LR\n    classDef New style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5\n    style Root stroke:#000,stroke-width:5px\n    style PropertyTable fill:#071E22\n\n    Root(<b>S0: Root Shape</b>\\n<b>Prototype:</b> <i>None</i>) -->|Property Count: 0| PropertyTable(<b>PropertyTable</b>\\nx: Slot 0, writable, configurable, enumerable\\ny: Slot 1, has_get, has_set, configurable, enumerable)\n\n    ObjectPrototype(<b>S1: Prototype Shape</b>\\n<b>Prototype:</b> <i>Object.prototype</i>) -->| Property Count: 0 |PropertyTable\n    ObjectPrototype -->|Previous| Root\n\n    InsertX(<b>S2: Insert Shape</b>\\n<b>Property:</b> '<i>x</i>') --> |Property Count: 1| PropertyTable\n    InsertX -->|Previous| ObjectPrototype\n\n    InsertY(<b>S3: Insert Shape</b>\\n<b>Property:</b> '<i>y</i>') --> |Property Count: 2| PropertyTable\n    InsertY:::New -->|Previous| InsertX\n\n    O(<b>Object o\\nElement 0:</b> JsValue: 100\\n<b>Element 1:</b> JsValue: func\\n<b>Element 2:</b> JsValue: func) --> InsertY"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["We can see that the property has been added into the property table, it has the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "has_get"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "has_set"
      }), " flags set,\nin the object there are two elements added, the first is the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "get"
      }), " function and the second is the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "set"
      }), " function."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Slots are varying in length, two for accessor properties and one for data properties, the index points to the first\nvalue in the object storage."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["What would happen if an object had ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "S2"
      }), " shape and we tried to access a property ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "y"
      }), " how does it know if it\nhas or doesn't have a property named ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "y"
      }), "? By the property count on the shape, it has property count ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "1"
      }), ",\nall the object in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PropertyTable"
      }), " are stored in a map that preserves the order and and can be indexed."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["When we do a lookup the on property table, if the index of the property is greater than the property count (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "1"
      }), "),\nthan it does not belong to the shape."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Now, Let's create a new object ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "o2"
      }), ", with property ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "x"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "let o2 = { x: 200 };\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["After this ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "o2"
      }), " would have the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "S2"
      }), " shape."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["How does the shape know that it can reuse ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "S1"
      }), " then to go to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "S2"
      }), "? This is not the real structure!\nEvery shape has pointers to forward transitions that happened, these are weak pointers so we don't keep\nalive unused shapes. The pointers have been omitted, so the diagrams are clearer (too many arrows)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Ok, now let us define a property ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "z"
      }), " instead of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "y"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "o2.z = 300;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The following changes accure to the shape tree:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mermaid, {
      value: "flowchart LR\n    classDef New style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5\n    style Root stroke:#000,stroke-width:5px\n    style PropertyTable fill:#071E22\n    style PropertyTableFork fill:#071E22\n\n    Root(<b>S0: Root Shape</b>\\n<b>Prototype:</b> <i>None</i>) -->| Property Count: 0 | PropertyTable(<b>PropertyTable</b>\\nx: Slot 0, writable, configurable, enumerable\\ny: Slot 1, has_get, has_set, configurable, enumerable)\n\n    ObjectPrototype(<b>S1: Prototype Shape\\nPrototype:</b> <i>Object.prototype</i>) -->| Property Count: 0 |PropertyTable\n    ObjectPrototype -->|Previous| Root\n\n    InsertX(<b>S2: Insert Shape\\nProperty:</b> '<i>x</i>') --> | Property Count: 1 | PropertyTable\n    InsertX -->|Previous| ObjectPrototype\n\n    InsertY(<b>S3: Insert Shape\\nProperty:</b> '<i>y</i>') --> | Property Count: 2 | PropertyTable\n    InsertY -->|Previous| InsertX\n\n    PropertyTableFork(<b>PropertyTable</b>\\nx: Slot 0, writable, configurable, enumerable\\nz: Slot 1, writable, configurable, enumerable)\n    InsertZ(<b>S4: Insert Shape\\nProperty:</b> '<i>z</i>') --> | Property Count: 2 | PropertyTableFork:::New\n    InsertZ:::New -->|Previous| InsertX\n\n    O(<b>Object o\\nElement 0:</b> JsValue: 100\\n<b>Element 1:</b> JsValue: func\\n<b>Element 2:</b> JsValue: func) --> InsertY\n    O2(<b>Object o2\\nElement 0:</b> JsValue: 200\\n<b>Element 1:</b> JsValue: 300)\n    O2:::New --> InsertZ"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Now ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "o2"
      }), " has ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "S4"
      }), " shape. We can also see that ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "PropertyTable"
      }), " has been forked, because we can no longer add a property at position ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "1"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["What would happen if we wanted to delete a property ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "x"
      }), " from object ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "o"
      }), ":"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-js",
        children: "delete o.x;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mermaid, {
      value: "flowchart LR\n    classDef New style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5\n    style Root stroke:#000,stroke-width:5px\n    style PropertyTable fill:#071E22\n    style PropertyTableFork fill:#071E22\n\n    Root(<b>S0: Root Shape</b>\\n<b>Prototype:</b> <i>None</i>) -->| Property Count: 0 | PropertyTable(<b>PropertyTable</b>\\nx: Slot 0, writable, configurable, enumerable\\ny: Slot 1, has_get, has_set, configurable, enumerable)\n\n    ObjectPrototype(<b>S1: Prototype Shape\\nPrototype:</b> <i>Object.prototype</i>) -->| Property Count: 0 |PropertyTable\n    ObjectPrototype -->|Previous| Root\n\n\n    PropertyTableFork(<b>PropertyTable</b>\\ny: Slot 0, has_get, has_set, configurable, enumerable)\n    InsertYNew(<b>S3: Insert Shape\\nProperty:</b> <i>y</i>) --> | Property Count: 1 |PropertyTableFork:::New\n    InsertYNew:::New -->|Previous| ObjectPrototype\n\n    O(<b>Object o</b>\\n<b>Element 0:</b> JsValue: func\\n<b>Element 1:</b> JsValue: func) --> InsertYNew\n    O:::New"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "NOTE:"
      }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "o2"
      }), " and its shape have been omitted from the diagram."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["When a deletion happens, we find the node in the chain where we added the property, and get it's parent (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "base"
      }), "),\nwe also remember that what transitions happened after the property insertion, then we apply them\none by one until we construct the chain and return the last shape in that chain."]
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