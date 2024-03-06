"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[1080],{

/***/ 6612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Conformance)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 67 modules
var Layout = __webpack_require__(781);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./src/components/conformance/VersionSelector/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"versionSelector":"versionSelector_Jach","versionCard":"versionCard_H8dz","versionTitle":"versionTitle_Fy_5"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./src/components/conformance/VersionSelector/index.tsx
function VersionSelector(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.versionSelector,children:props.availableVersions.map(version=>{return/*#__PURE__*/(0,jsx_runtime.jsx)(Version,{setNewVersion:props.setNewVersion,version:version},version.tagName);})});}function Version(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:styles_module.versionCard,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:styles_module.versionTitle,children:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:"Release: "+props.version.tagName})}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"button button--primary button--sm",value:props.version.tagName,onClick:()=>props.setNewVersion(props.version),children:"View Results"})]});}
;// CONCATENATED MODULE: ./src/components/conformance/types.ts
let TestOutcome=/*#__PURE__*/function(TestOutcome){TestOutcome[TestOutcome["Passed"]=0]="Passed";TestOutcome[TestOutcome["Ignored"]=1]="Ignored";TestOutcome[TestOutcome["Failed"]=2]="Failed";TestOutcome[TestOutcome["Panic"]=3]="Panic";return TestOutcome;}({});let SpecEdition=/*#__PURE__*/function(SpecEdition){SpecEdition[SpecEdition["es5"]=5]="es5";SpecEdition[SpecEdition["es6"]=6]="es6";SpecEdition[SpecEdition["es7"]=7]="es7";SpecEdition[SpecEdition["es8"]=8]="es8";SpecEdition[SpecEdition["es9"]=9]="es9";SpecEdition[SpecEdition["es10"]=10]="es10";SpecEdition[SpecEdition["es11"]=11]="es11";SpecEdition[SpecEdition["es12"]=12]="es12";SpecEdition[SpecEdition["es13"]=13]="es13";SpecEdition[SpecEdition["ESNext"]=14]="ESNext";return SpecEdition;}({});
;// CONCATENATED MODULE: ./src/components/conformance/utils.ts
// Interface for the http response of boa_tester's `ResultInfo`
// Function for converting an http response of boa_tester's `ResultInfo` to ResultInfo
function mapToResultInfo(unmappedValue){return{commit:unmappedValue.c,test262Commit:unmappedValue.u,results:mapToSuiteResult(unmappedValue.r)};}// Interface for the http response of boa_tester's `SuiteResult`
// Function for converting an http response of boa_tester's `SuiteResult` to SuiteResult
function mapToSuiteResult(unmappedValue){const suiteResult={name:unmappedValue.n,stats:mapToTestStats(unmappedValue.a)};if(unmappedValue.av){suiteResult["versionedStats"]=mapToVersionedStats(unmappedValue.av);}if(unmappedValue.s){suiteResult["suites"]=unmappedValue.s.map(suite=>mapToSuiteResult(suite));}if(unmappedValue.t){suiteResult["tests"]=unmappedValue.t.map(test=>mapToTestResult(test));}if(unmappedValue.f){suiteResult["features"]=Array(unmappedValue.f);}return suiteResult;}// Interface for the http response of boa_tester's `Statistics`
// Function for converting an http response of boa_tester's `Statistics` to `TestStats`
function mapToTestStats(unmappedValue){return{total:unmappedValue.t,passed:unmappedValue.o,ignored:unmappedValue.i,panic:unmappedValue.p};}// Interface for the http response of boa_tester's versioned `Statistics`
// Function for converting an http response of boa_tester's versioned `Statistics` to `VersionedStats`
function mapToVersionedStats(unmappedValue){return{es5:mapToTestStats(unmappedValue.es5),es6:mapToTestStats(unmappedValue.es6),es7:mapToTestStats(unmappedValue.es7),es8:mapToTestStats(unmappedValue.es8),es9:mapToTestStats(unmappedValue.es9),es10:mapToTestStats(unmappedValue.es10),es11:mapToTestStats(unmappedValue.es11),es12:mapToTestStats(unmappedValue.es12),es13:mapToTestStats(unmappedValue.es13)};}// Interface for the http response of boa_tester's `TestResult`
// Function for converting an http response of boa_tester's `TestResult` to TestResult
function mapToTestResult(unmappedValue){return{name:unmappedValue.n,edition:mapToSpecEditionEnum(unmappedValue.v),strict:Boolean(unmappedValue.s),result:mapToTestOutcomeEnum(unmappedValue.r)};}function mapToSpecEditionEnum(unmappedValue){switch(Number(unmappedValue)){case 5:return SpecEdition.es5;case 6:return SpecEdition.es6;case 7:return SpecEdition.es7;case 8:return SpecEdition.es8;case 9:return SpecEdition.es9;case 10:return SpecEdition.es10;case 11:return SpecEdition.es11;case 12:return SpecEdition.es12;case 13:return SpecEdition.es13;default:return SpecEdition.ESNext;}}function mapToTestOutcomeEnum(unmappedValue){switch(String(unmappedValue)){case"O":return TestOutcome.Passed;case"I":return TestOutcome.Ignored;case"P":return TestOutcome.Panic;default:return TestOutcome.Failed;}}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(1107);
;// CONCATENATED MODULE: ./src/components/conformance/Banner/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Banner_styles_module = ({"bannerSection":"bannerSection_CQlB","cardContainer":"cardContainer_de9X"});
;// CONCATENATED MODULE: ./src/components/conformance/Banner/index.tsx
function ConformanceBanner(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Banner_styles_module.bannerSection,children:props.focusItems.map(item=>{return/*#__PURE__*/(0,jsx_runtime.jsx)(BannerCard,{setNewVersion:props.setNewVersion,item:item},item.tagName);})});}function BannerCard(props){const[stats,setStats]=react.useState(null);react.useEffect(()=>{const fetchStats=async()=>{const response=await fetch(props.item.fetchUrl);const results=await response.json();return results.r.a;};fetchStats().then(data=>setStats(mapToTestStats(data)));},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Banner_styles_module.cardContainer,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"card",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card__header",children:props.item.tagName==="main"?/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h3",children:"main Branch Results"}):/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h3",children:"Release "+props.item.tagName+" Results"})}),stats?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"card__body",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Total: "+stats.total})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--ifm-color-success)"},children:"Passed: "+stats.passed})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--ifm-color-warning)"},children:"Ignored: "+stats.ignored})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--ifm-color-danger)"},children:"Failed: "+(stats.total-stats.passed-stats.ignored)})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--ifm-color-danger)"},children:"\u26A0Panics: "+stats.panic+"\u26A0"})})]}):null,/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card__footer",children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"button button--block button--primary",onClick:()=>props.setNewVersion(props.item),children:"View Results"})})]})});}
;// CONCATENATED MODULE: ./src/components/conformance/ResultsDisplay/components/SuiteSelector/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SuiteSelector_styles_module = ({"suiteSelector":"suiteSelector_IaVZ","suiteCard":"suiteCard_kP4J","suiteCardTitle":"suiteCardTitle_aqXE","suiteCardResults":"suiteCardResults_cmIK"});
;// CONCATENATED MODULE: ./src/components/conformance/ResultsDisplay/components/SuiteSelector/index.tsx
function SuiteSelector(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:SuiteSelector_styles_module.suiteSelector,children:props.suites.map(suite=>{return/*#__PURE__*/(0,jsx_runtime.jsx)(SuiteItem,{suite:suite,esFlag:props.esFlag,navigateToSuite:props.navigateToSuite},suite.name);})});}function SuiteItem(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:SuiteSelector_styles_module.suiteCard,onClick:()=>props.navigateToSuite(props.suite.name),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:SuiteSelector_styles_module.suiteCardTitle,children:/*#__PURE__*/(0,jsx_runtime.jsx)("b",{children:props.suite.name})}),/*#__PURE__*/(0,jsx_runtime.jsx)(SuiteStatistics,{testResults:props.esFlag&&props.suite.versionedStats[props.esFlag]?props.suite.versionedStats[props.esFlag]:props.suite.stats})]});}function SuiteStatistics(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:SuiteSelector_styles_module.suiteCardResults,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{style:{color:"var(--ifm-color-success)"},children:[props.testResults.passed," "]}),"/"," ",/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{style:{color:"var(--ifm-color-warning)"},children:[props.testResults.ignored," "]}),"/"," ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{color:"var(--ifm-color-danger)"},children:`${props.testResults.total-props.testResults.passed-props.testResults.ignored} (${props.testResults.panic}\u26A0)`})]})});}
;// CONCATENATED MODULE: ./src/components/conformance/ResultsDisplay/components/SuiteDataContainer/cards/TestGrid/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TestGrid_styles_module = ({"testGridCard":"testGridCard_qvsW","gridStyle":"gridStyle_FWR9","testGridItem":"testGridItem_EKGp","passed":"passed_lYFG","ignored":"ignored_JJaN","failed":"failed_jtUl"});
;// CONCATENATED MODULE: ./src/components/conformance/ResultsDisplay/components/SuiteDataContainer/cards/TestGrid/index.tsx
function TestsGrid(props){const cardBodyClass="card__body "+TestGrid_styles_module.gridStyle;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:TestGrid_styles_module.testGridCard,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"card",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card__header",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h3",children:props.suite.name})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:cardBodyClass,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Grid,{tests:props.suite.tests,esFlag:props.esFlag,selectTest:props.selectTest})})]})});}function Grid(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.esFlag?props.tests.filter(test=>test.edition<=SpecEdition[props.esFlag]).map(test=>{return/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem,{test:test,selectTest:props.selectTest},test.strict?test.name+"-strict":test.name);}):props.tests.map(test=>{return/*#__PURE__*/(0,jsx_runtime.jsx)(GridItem,{test:test,selectTest:props.selectTest},test.strict?test.name+"-strict":test.name);})});}function GridItem(props){let testResult;switch(props.test.result){case TestOutcome.Passed:testResult=TestGrid_styles_module.testGridItem+" "+TestGrid_styles_module.passed;break;case TestOutcome.Ignored:testResult=TestGrid_styles_module.testGridItem+" "+TestGrid_styles_module.ignored;break;default:testResult=TestGrid_styles_module.testGridItem+" "+TestGrid_styles_module.failed;}return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:testResult,onClick:()=>props.selectTest(props.test.name+".js"),title:props.test.strict?"(strict) "+props.test.name+".js":props.test.name+".js"})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
;// CONCATENATED MODULE: ./src/components/conformance/ResultsDisplay/components/SuiteDataContainer/cards/TestViewer/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TestViewer_styles_module = ({"testViewerCard":"testViewerCard_Hw2J","editorContainer":"editorContainer_NG8N","testTitle":"testTitle_Pk2w","headerOptions":"headerOptions_bMa0","testEditor":"testEditor_JfxJ"});
// EXTERNAL MODULE: ./node_modules/@monaco-editor/react/dist/index.mjs + 11 modules
var dist = __webpack_require__(8553);
;// CONCATENATED MODULE: ./src/components/conformance/ResultsDisplay/components/SuiteDataContainer/cards/TestViewer/index.tsx
function TestViewer(props){const[testContent,setTestContent]=react.useState(null);// path constants
const tc39raw="https://raw.githubusercontent.com/tc39/test262/";const tc39Home="https://github.com/tc39/test262/blob/main/";react.useEffect(()=>{const fetchRaw=async requestPath=>{const response=await fetch(requestPath);return await response.text();};const filePath=props.t262Path+"/"+props.testName;const fullPath=tc39raw+filePath;fetchRaw(fullPath).then(data=>setTestContent(data));},[props.testName]);const generateLink=()=>{const pathValues=props.t262Path.split("/");const trimmedPath=pathValues.slice(1,pathValues.length).join("/");return tc39Home+trimmedPath+"/"+props.testName;};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:TestViewer_styles_module.testViewerCard,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"card",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"card__header",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h3",className:TestViewer_styles_module.testTitle,children:"Test: "+props.testName}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:TestViewer_styles_module.headerOptions,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"button button--primary button--sm",onClick:props.backToGrid,children:"Back"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:generateLink(),children:"Visit Repo"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card__body",style:{overflow:"auto"},children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:TestViewer_styles_module.editorContainer,children:/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Editor */.KE,{className:TestViewer_styles_module.testEditor,theme:"vs-dark",language:"javascript",options:{minimap:{enabled:false}},value:testContent})})})]})});}
;// CONCATENATED MODULE: ./src/components/conformance/ResultsDisplay/components/SuiteDataContainer/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SuiteDataContainer_styles_module = ({"dataContainer":"dataContainer_B1Vt"});
;// CONCATENATED MODULE: ./src/components/conformance/ResultsDisplay/components/SuiteDataContainer/index.tsx
function SuiteDataContainer(props){const[selectedTest,setSelectedTest]=react.useState(null);// Unselect a test if the underlying test262 path has been changed.
react.useEffect(()=>{setSelectedTest(null);},[props.t262Path]);// Set the user's selected test to be displayed in the ViewPort.
const selectTest=testName=>{setSelectedTest(testName);};const clearTest=()=>{setSelectedTest(null);};// Add a TestViewer to look up and display the test262.
return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:SuiteDataContainer_styles_module.dataContainer,children:selectedTest?/*#__PURE__*/(0,jsx_runtime.jsx)(TestViewer,{testName:selectedTest,t262Path:props.t262Path,backToGrid:()=>clearTest()}):/*#__PURE__*/(0,jsx_runtime.jsx)(TestsGrid,{...props,selectTest:selectTest})});}
;// CONCATENATED MODULE: ./src/components/conformance/ResultsDisplay/components/SuiteDisplay/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SuiteDisplay_styles_module = ({"suiteDisplay":"suiteDisplay__VqN"});
;// CONCATENATED MODULE: ./src/components/conformance/ResultsDisplay/components/SuiteDisplay/index.tsx
function SuiteDisplay(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:SuiteDisplay_styles_module.suiteDisplay,children:[props.currentSuite.suites?/*#__PURE__*/(0,jsx_runtime.jsx)(SuiteSelector,{suites:props.currentSuite.suites,esFlag:props.esFlag,navigateToSuite:props.navigateToSuite}):null,props.currentSuite.tests?/*#__PURE__*/(0,jsx_runtime.jsx)(SuiteDataContainer,{suite:props.currentSuite,esFlag:props.esFlag,t262Path:props.t262Path}):null]});}
;// CONCATENATED MODULE: ./src/components/conformance/ResultsDisplay/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ResultsDisplay_styles_module = ({"resultsDisplay":"resultsDisplay_Mrfa","resultsNav":"resultsNav_Dp3n","navLink":"navLink_t6a5","dropdownContainer":"dropdownContainer_HXCv"});
;// CONCATENATED MODULE: ./src/components/conformance/ResultsDisplay/index.tsx
function ResultsDisplay(props){const[activeResults,setActiveResults]=react.useState(null);const[testPath,setTestPath]=react.useState([props.activeVersion.tagName]);const[currentSuite,setCurrentSuite]=react.useState(null);const[esVersionFlag,setEsVersionFlag]=react.useState(null);react.useEffect(()=>{fetchResults(props.activeVersion).then(data=>{const resultInfo=mapToResultInfo(data);setActiveResults(resultInfo);setCurrentSuite(resultInfo.results);});setTestPath([props.activeVersion.tagName]);},[props.activeVersion]);react.useEffect(()=>{// Return early if activeResults is null.
if(!activeResults)return;let newSuiteTarget=null;for(const target of testPath){if(target===props.activeVersion.tagName){newSuiteTarget=activeResults.results;}// Suites must exist here for the path value to be valid.
for(const suite of newSuiteTarget.suites){if(suite.name===target){newSuiteTarget=suite;}}}setCurrentSuite(newSuiteTarget);},[testPath]);// Fetches the version results
const fetchResults=async version=>{const response=await fetch(version.fetchUrl);return await response.json();};// Navigates to a suite by adding the SuiteName to the test path array.
const navigateToSuite=newSuiteName=>{setTestPath(testPath=>[...testPath,newSuiteName]);};// Removes a value or values from the test path array.
//
// Used by breadcrumbs for navigation.
const sliceNavToIndex=nonInclusiveIndex=>{setTestPath(testPath=>[...testPath.slice(0,nonInclusiveIndex)]);};// Sets the ECMAScript version flag value.
const setEcmaScriptFlag=flag=>{const nulledFlag=flag?flag:null;setEsVersionFlag(nulledFlag);};// Create the t262 URL from testPath with the results commit
const t262Path=()=>{// NOTE: testPath[0] === activeBoaReleaseTag
return[activeResults.test262Commit,"test",...testPath.slice(1,testPath.length)].join("/");};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:ResultsDisplay_styles_module.resultsDisplay,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ResultNavigation,{navPath:testPath,sliceNavToIndex:sliceNavToIndex,setEcmaScriptFlag:setEcmaScriptFlag}),activeResults&&currentSuite?/*#__PURE__*/(0,jsx_runtime.jsx)(SuiteDisplay,{currentSuite:currentSuite,esFlag:esVersionFlag,t262Path:t262Path(),navigateToSuite:navigateToSuite}):null]});}function ResultNavigation(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:ResultsDisplay_styles_module.resultsNav,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(EcmaScriptVersionDropdown,{setEcmaScriptFlag:props.setEcmaScriptFlag}),/*#__PURE__*/(0,jsx_runtime.jsx)("nav",{"aria-label":"breadcrumbs",style:{padding:"0.25em"},children:/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"breadcrumbs",children:props.navPath.map((pathItem,idx,arr)=>{return/*#__PURE__*/(0,jsx_runtime.jsx)(NavItem,{itemName:pathItem,index:idx,sliceNavToIndex:props.sliceNavToIndex,breadcrumbValue:idx+1===arr.length?"breadcrumbs__item breadcrumbs__item--active":"breadcrumbs__item"},pathItem);})})})]});}function NavItem(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:props.breadcrumbValue,children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{className:ResultsDisplay_styles_module.navLink,onClick:()=>props.sliceNavToIndex(props.index+1),children:props.itemName})});}function EcmaScriptVersionDropdown(props){const[dropdownValue,setDropdownValue]=react.useState("");const handleVersionSelection=e=>{setDropdownValue(e.target.value);props.setEcmaScriptFlag(e.target.value);};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:ResultsDisplay_styles_module.dropdownContainer,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("select",{value:dropdownValue,onChange:handleVersionSelection,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:"",children:"All"}),Object.keys(SpecEdition).filter(v=>isNaN(Number(v))).map(key=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:key,children:key},key);})]})});}
;// CONCATENATED MODULE: ./src/pages/conformance/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const conformance_styles_module = ({"mainLayout":"mainLayout_xlEm"});
;// CONCATENATED MODULE: ./src/pages/conformance/index.tsx
// TODO: Add header file to speed up statisic fetching for initial render?
function Conformance(){const[version,setVersion]=react.useState(null);const[releaseRecords,setReleaseRecords]=react.useState(null);react.useEffect(()=>{const validateReleaseVersion=releaseTag=>{const version=releaseTag.split(".");// Check if correct version tag is present and major release is 1+
const versionTagValidated=version[0].includes("v")&&parseInt(version[0].replace("v",""))>0;return versionTagValidated||10<=parseInt(version[1]);};const fetchReleases=async()=>{const response=await fetch("https://api.github.com/repos/boa-dev/boa/releases");const releases=await response.json();return releases.filter(potentialRelease=>validateReleaseVersion(potentialRelease.tag_name)).map(release=>{return{tagName:release.tag_name,fetchUrl:`https://boajs.dev/boa/test262/refs/tags/${release.tag_name}/latest.json`};});};const mainVersion={tagName:"main",fetchUrl:`https://boajs.dev/boa/test262/refs/heads/main/latest.json`};fetchReleases().then(releases=>setReleaseRecords([mainVersion,...releases]));},[]);const setNewVersion=newVersion=>{setVersion(newVersion);};return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{title:"Conformance",description:"Boa Conformance Page",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{className:conformance_styles_module.mainLayout,children:[releaseRecords?/*#__PURE__*/(0,jsx_runtime.jsx)(VersionSelector,{availableVersions:releaseRecords,setNewVersion:setNewVersion}):null,releaseRecords?version?/*#__PURE__*/(0,jsx_runtime.jsx)(ResultsDisplay,{activeVersion:version},version.tagName):/*#__PURE__*/(0,jsx_runtime.jsx)(ConformanceBanner,{focusItems:releaseRecords.slice(0,2),setNewVersion:setNewVersion}):null]})});}

/***/ })

}]);