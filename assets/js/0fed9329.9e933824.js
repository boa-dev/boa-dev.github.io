"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[2949],{

/***/ 4565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Benchmarks)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(6289);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(8532);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(9303);
// EXTERNAL MODULE: ./node_modules/chart.js/dist/chart.js + 2 modules
var chart = __webpack_require__(3468);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-chartjs-2/dist/index.js
var dist = __webpack_require__(4731);
;// ./src/components/benchmarks/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"cards-wrap":"cards-wrap_fyqw","benchmark-card-header":"benchmark-card-header_B2CI","benchmark-card":"benchmark-card_zF5C"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./src/components/benchmarks/index.tsx
chart/* Chart */.t1.register(chart/* CategoryScale */.PP,chart/* LinearScale */.kc,chart/* PointElement */.FN,chart/* LineElement */.No,chart/* Title */.hE,chart/* Tooltip */.m_,chart/* Legend */.s$,chart/* Colors */.Jy,chart/* BarElement */.E8);const ChartOptions={plugins:{colors:{forceOverride:true}}};const BenchmarkGraphs=_ref=>{let{selectedEngines,range}=_ref;// Control the state of which engines are displayed using a Set
const[charts,setCharts]=(0,react.useState)([]);const[data,setData]=(0,react.useState)({});const colorMode=(0,contexts_colorMode/* useColorMode */.G)();chart/* Chart */.t1.defaults.color=colorMode.colorMode==="light"?"#666":"white";(0,react.useEffect)(()=>{fetch(`https://boa-api.jason-williams.co.uk/benchmarks?months=${range}&engines=${selectedEngines.join(",")}`).then(res=>res.json()).then(respData=>{setData(respData);});},[selectedEngines,range]);(0,react.useEffect)(()=>{setCharts(buildChartFromBenchmark(data));},[data]);return charts&&charts.map(chart=>chart);};const normalizeBenchmarkData=benchmarkData=>{const labels=benchmarkData.map(entry=>new Date(entry.date).toLocaleDateString());const engines=Object.keys(benchmarkData[0]).filter(key=>key!="date");return{labels,datasets:engines.map(engine=>({label:engine,data:benchmarkData.map(entry=>entry[engine]),fill:false}))};};const getBarChartData=data=>{// We only want the last value from each dataset
return{labels:[data.labels[data.labels.length-1]],datasets:data.datasets.map(dataset=>{return{label:dataset.label,data:[dataset.data[dataset.data.length-1]]};})};};const buildChartFromBenchmark=data=>{let charts=[];for(const benchmark in data){const normalizedData=normalizeBenchmarkData(data[benchmark]);const barData=getBarChartData(normalizedData);charts.push(/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:`card__header ${styles_module["benchmark-card-header"]}`,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h2",children:benchmark})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module["cards-wrap"],children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:`card ${styles_module["benchmark-card"]}`,children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Line */.N1,{data:normalizedData,options:ChartOptions})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:`card ${styles_module["benchmark-card"]}`,children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Bar */.yP,{data:barData,options:ChartOptions})})]})]},benchmark));}return charts;};
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 66 modules
var Layout = __webpack_require__(9847);
;// ./src/pages/benchmarks/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const benchmarks_styles_module = ({"container":"container_kxXC","benchmarkControls":"benchmarkControls_C3Xr","benchmarkLabelWrap":"benchmarkLabelWrap_YZoa"});
;// ./src/pages/benchmarks/index.tsx
const engines=["boa","v8-jitless","sm-jitless","kiesel","libjs","duktape","quickjs"];function Benchmarks(){const[selectedEngines,setSelectedEngines]=(0,react.useState)(["boa","kiesel","libjs","duktape","quickjs"]);const[range,setRange]=(0,react.useState)("6");const handleEngineCheckboxChange=engine=>{if(selectedEngines.includes(engine)){setSelectedEngines(selectedEngines.filter(e=>e!==engine));}else{setSelectedEngines([...selectedEngines,engine]);}};const handleRangeCheckboxChange=evt=>{setRange(evt.target.value);};return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{title:"Benchmarks",description:"Boa Benchmarks Page",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:benchmarks_styles_module.container,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",children:"Benchmarks"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["These benchmarks are taken from the"," ",/*#__PURE__*/(0,jsx_runtime.jsxs)(Link/* default */.A,{to:"https://github.com/mozilla/arewefastyet/tree/master/benchmarks/v8-v7",children:["V8 benchmark suite V7."," "]}),"Our ",/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:"https://github.com/boa-dev/data",children:"data repo"})," runs these benchmarks against the listed engines every night using Github actions."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"The higher the score the better."}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:benchmarks_styles_module.benchmarkControls,children:engines.map(engine=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:benchmarks_styles_module.benchmarkLabelWrap,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"checkbox",value:engine,checked:selectedEngines.includes(engine),onChange:()=>handleEngineCheckboxChange(engine)}),engine]})},engine))}),/*#__PURE__*/(0,jsx_runtime.jsx)("form",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("fieldset",{className:benchmarks_styles_module.benchmarkControls,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("legend",{children:"Select rolling range"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:benchmarks_styles_module.benchmarkLabelWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"radio",value:1,checked:range==="1",onChange:handleRangeCheckboxChange}),"1 Month"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:benchmarks_styles_module.benchmarkLabelWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"radio",value:6,checked:range==="6",onChange:handleRangeCheckboxChange}),"6 Month"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:benchmarks_styles_module.benchmarkLabelWrap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"radio",value:12,checked:range==="12",onChange:handleRangeCheckboxChange}),"12 Month"]})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(BenchmarkGraphs,{selectedEngines:selectedEngines,range:range})]})});}

/***/ })

}]);