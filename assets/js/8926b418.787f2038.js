"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[3663],{

/***/ 8137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BoaPlayground)
});

// EXTERNAL MODULE: ./node_modules/@monaco-editor/react/dist/index.mjs + 11 modules
var dist = __webpack_require__(8553);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 67 modules
var Layout = __webpack_require__(781);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(1107);
;// CONCATENATED MODULE: ./src/pages/playground/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"playgroundLayout":"playgroundLayout_PpWE","playgroundEditor":"playgroundEditor_blAy","playgroundOutput":"playgroundOutput_jD_O"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./src/pages/playground/index.tsx
const initialCode=`function greet(targetName) {
  return 'Hello, ' + targetName + '!';
}

greet('World')
`;// Potenital TODO: Add configure bar for horizontal/vertical editor flip and trace output?
function BoaPlayground(){const[input,setInput]=react.useState(initialCode);const[evaluate,setEvaluate]=react.useState(null);react.useEffect(()=>{__webpack_require__.e(/* import() */ 4396).then(__webpack_require__.bind(__webpack_require__, 4396)).then(_ref=>{let{evaluate}=_ref;return setEvaluate(()=>evaluate);});},[]);const output=react.useMemo(()=>{if(evaluate!==null){try{return evaluate(input);}catch(e){return e;}}},[input,evaluate]);return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{title:"Playground",description:"Boa Playground",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:index_module.playgroundLayout,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:index_module.playgroundEditor,children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.Ay,{theme:"vs-dark",language:"javascript",options:{minimap:{enabled:false}},value:input,onChange:setInput})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:index_module.playgroundOutput,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",children:"Output"}),`> ${output??""}`]})]})});}

/***/ })

}]);