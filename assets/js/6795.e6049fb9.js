"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[6795],{

/***/ 6795:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diagram: () => (/* binding */ diagram)
/* harmony export */ });
/* harmony import */ var _chunk_RKKUNAVE_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8872);
/* harmony import */ var _chunk_P3VETL53_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4505);
/* harmony import */ var _chunk_3XYRH5AP_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1750);
/* harmony import */ var _mermaid_js_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8731);




// src/diagrams/info/infoParser.ts

var parser = {
  parse: /* @__PURE__ */ (0,_chunk_3XYRH5AP_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (input) => {
    const ast = await (0,_mermaid_js_parser__WEBPACK_IMPORTED_MODULE_3__/* .parse */ .qg)("info", input);
    _chunk_3XYRH5AP_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.debug(ast);
  }, "parse")
};

// src/diagrams/info/infoDb.ts
var DEFAULT_INFO_DB = {
  version: _chunk_RKKUNAVE_mjs__WEBPACK_IMPORTED_MODULE_0__/* .package_default */ .n.version + ( true ? "" : 0)
};
var getVersion = /* @__PURE__ */ (0,_chunk_3XYRH5AP_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};

// src/diagrams/info/infoRenderer.ts
var draw = /* @__PURE__ */ (0,_chunk_3XYRH5AP_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((text, id, version) => {
  _chunk_3XYRH5AP_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.debug("rendering info diagram\n" + text);
  const svg = (0,_chunk_P3VETL53_mjs__WEBPACK_IMPORTED_MODULE_1__/* .selectSvgElement */ .D)(id);
  (0,_chunk_3XYRH5AP_mjs__WEBPACK_IMPORTED_MODULE_2__/* .configureSvgSize */ .a$)(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };

// src/diagrams/info/infoDiagram.ts
var diagram = {
  parser,
  db,
  renderer
};



/***/ })

}]);