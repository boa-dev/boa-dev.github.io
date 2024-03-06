"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[5892],{

/***/ 8367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./src/components/HomepageFeatures/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"features":"features_t9lD","featureSvg":"featureSvg_GfXr"});
;// CONCATENATED MODULE: ./static/img/new_logo_black.svg
var _path, _path2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgNewLogoBlack = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: 109,
    height: 109,
    viewBox: "0 0 109 109",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m68.119 7.223-1.868-5.21a1.5 1.5 0 0 0-2.523-.502l-3.726 4.107c-.452-.05-.906-.095-1.362-.133L55.786.728a1.5 1.5 0 0 0-2.572 0l-2.855 4.758c-.456.038-.91.082-1.362.132L45.271 1.51a1.5 1.5 0 0 0-2.523.502L40.88 7.224c-.443.127-.884.26-1.322.4L35.11 4.33a1.5 1.5 0 0 0-2.377.985l-.815 5.478c-.408.212-.812.428-1.213.65l-5.01-2.366a1.5 1.5 0 0 0-2.14 1.429l.27 5.543c-.355.284-.706.573-1.054.866l-5.384-1.346a1.5 1.5 0 0 0-1.82 1.82l1.347 5.384c-.294.347-.583.699-.867 1.054l-5.542-.27a1.5 1.5 0 0 0-1.43 2.14l2.367 5.009a49.51 49.51 0 0 0-.65 1.214l-5.479.815a1.5 1.5 0 0 0-.984 2.377l3.295 4.447c-.14.438-.273.88-.4 1.323l-5.212 1.867a1.5 1.5 0 0 0-.502 2.523l4.108 3.727c-.05.452-.094.906-.132 1.361L.728 53.214a1.5 1.5 0 0 0 0 2.572l4.758 2.855c.038.455.082.91.132 1.361L1.51 63.73a1.5 1.5 0 0 0 .502 2.523l5.212 1.867c.127.444.26.885.4 1.323L4.33 73.889a1.5 1.5 0 0 0 .984 2.377l5.479.815c.211.408.428.813.65 1.214l-2.367 5.01a1.5 1.5 0 0 0 1.43 2.138l5.542-.27c.285.356.573.708.867 1.055l-1.346 5.385a1.5 1.5 0 0 0 1.819 1.819l5.384-1.346c.348.293.7.582 1.055.866l-.27 5.543a1.5 1.5 0 0 0 2.14 1.43l5.009-2.367c.401.222.806.439 1.214.65l.815 5.478a1.499 1.499 0 0 0 2.377.985l4.447-3.295c.438.139.88.273 1.323.4l1.867 5.212a1.5 1.5 0 0 0 2.523.501l3.726-4.107c.453.05.907.094 1.362.132l2.855 4.758a1.501 1.501 0 0 0 2.572 0l2.854-4.758c.456-.038.91-.082 1.362-.132l3.726 4.107a1.498 1.498 0 0 0 2.523-.501l1.867-5.211c.444-.128.885-.262 1.324-.401l4.447 3.295a1.5 1.5 0 0 0 2.377-.985l.815-5.478c.408-.211.813-.428 1.214-.65l5.01 2.366a1.5 1.5 0 0 0 2.138-1.43l-.27-5.541c.356-.285.708-.574 1.055-.867l5.385 1.346a1.5 1.5 0 0 0 1.819-1.82l-1.347-5.383c.294-.348.583-.7.868-1.055l5.541.27a1.5 1.5 0 0 0 1.43-2.14l-2.367-5.008c.223-.402.44-.807.651-1.215l5.478-.815a1.5 1.5 0 0 0 .985-2.377l-3.295-4.447c.139-.438.273-.88.4-1.323l5.211-1.867a1.498 1.498 0 0 0 .502-2.523l-4.107-3.726c.05-.453.095-.907.133-1.363l4.756-2.854a1.5 1.5 0 0 0 0-2.572l-4.756-2.854a50.78 50.78 0 0 0-.133-1.363l4.107-3.726a1.5 1.5 0 0 0-.502-2.523l-5.211-1.867a45.614 45.614 0 0 0-.401-1.324l3.295-4.446a1.5 1.5 0 0 0-.984-2.377l-5.478-.815a49.376 49.376 0 0 0-.65-1.215l2.366-5.009a1.5 1.5 0 0 0-1.43-2.139l-5.541.27a49.8 49.8 0 0 0-.867-1.055l1.346-5.384a1.5 1.5 0 0 0-1.82-1.819l-5.383 1.346a49.27 49.27 0 0 0-1.056-.867l.27-5.542a1.5 1.5 0 0 0-2.14-1.43l-5.008 2.367a49.164 49.164 0 0 0-1.214-.65l-.815-5.478a1.5 1.5 0 0 0-2.377-.985l-4.447 3.295c-.439-.14-.88-.273-1.323-.4ZM19.204 35.272l3.376 6.626a3 3 0 0 1-1.31 4.035l-6.624 3.375c-.22 1.7-.332 3.433-.332 5.192 0 10.7 4.182 20.424 11 27.625l7.337-1.162a3 3 0 0 1 3.433 2.494l1.164 7.348A40.03 40.03 0 0 0 54.5 94.686a40.029 40.029 0 0 0 17.252-3.881l1.164-7.348a3 3 0 0 1 3.433-2.494l7.337 1.162c6.818-7.201 11-16.925 11-27.625 0-1.76-.113-3.492-.332-5.191l-6.624-3.376a3 3 0 0 1-1.311-4.035l3.377-6.628c-5.69-10.419-15.857-18.042-27.916-20.28l-5.26 5.259a3 3 0 0 1-4.242 0L47.12 14.99c-12.059 2.239-22.227 9.862-27.915 20.282Z",
    fill: "#000"
  })), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M58.5 61.5c1.528 2.53 5.505 4.584 9.021 4.584 2.954 0 4.841-1.498 4.841-3.566 0-2.48-1.939-3.357-5.19-4.8l-1.782-.775c-5.145-2.223-8.563-5.007-8.563-10.893 0-5.422 4.074-9.55 10.441-9.55 2.885 0 5.432 1.012 7.16 3.037a5 5 0 0 1 3.479 6.108l-.635 2.37 2.14 3.706-1.186-.318-.318 1.186-2.14-3.706-2.37-.635a5.002 5.002 0 0 1-3.706-4.842c-.695-.416-1.482-.601-2.424-.601-2.088 0-3.411 1.343-3.411 3.098 0 2.17 1.324 3.047 4.383 4.39l1.782.775c6.058 2.634 9.478 5.32 9.478 11.357 0 6.509-5.042 10.075-11.814 10.075-6.62 0-10.777-5.9-9.186-11ZM35.303 62.32c1.12 2.015 2.14 3.718 4.589 3.718 2.342 0 3.82-.929 3.82-4.542V36.913h7.129v24.68c0 7.486-4.328 10.894-10.646 10.894-5.708 0-9.014-2.996-10.695-6.604l5.803-3.563Z",
    fill: "#000"
  })));
};
/* harmony default export */ const new_logo_black = (SvgNewLogoBlack);
;// CONCATENATED MODULE: ./static/img/new_logo_yellow.svg
var new_logo_yellow_path, new_logo_yellow_path2;
function new_logo_yellow_extends() { new_logo_yellow_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return new_logo_yellow_extends.apply(this, arguments); }

const SvgNewLogoYellow = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", new_logo_yellow_extends({
    width: 109,
    height: 109,
    viewBox: "0 0 109 109",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, new_logo_yellow_path || (new_logo_yellow_path = /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m68.119 7.223-1.868-5.21a1.5 1.5 0 0 0-2.523-.502l-3.726 4.107c-.452-.05-.906-.094-1.362-.132L55.786.728a1.5 1.5 0 0 0-2.572 0l-2.855 4.758c-.456.038-.91.082-1.362.132l-3.726-4.107a1.5 1.5 0 0 0-2.523.501L40.88 7.224c-.443.127-.884.26-1.322.4L35.11 4.33a1.5 1.5 0 0 0-2.377.985l-.815 5.478c-.408.212-.812.428-1.213.65l-5.01-2.366a1.5 1.5 0 0 0-2.14 1.43l.27 5.542c-.355.284-.706.573-1.054.866l-5.384-1.346a1.5 1.5 0 0 0-1.82 1.82l1.347 5.384c-.294.347-.583.699-.867 1.054l-5.542-.27a1.5 1.5 0 0 0-1.43 2.14l2.367 5.009c-.222.401-.439.806-.65 1.214l-5.479.815a1.5 1.5 0 0 0-.984 2.377l3.295 4.447c-.14.438-.273.88-.4 1.323l-5.212 1.867a1.5 1.5 0 0 0-.502 2.523l4.108 3.727c-.05.452-.094.906-.132 1.361L.728 53.214a1.5 1.5 0 0 0 0 2.572l4.758 2.855c.038.455.082.91.132 1.361L1.51 63.73a1.5 1.5 0 0 0 .502 2.523l5.212 1.867c.127.444.26.885.4 1.323L4.33 73.889a1.5 1.5 0 0 0 .984 2.377l5.479.815c.211.408.428.813.65 1.214l-2.367 5.01a1.5 1.5 0 0 0 1.43 2.138l5.542-.27c.285.356.573.708.867 1.055l-1.346 5.385a1.5 1.5 0 0 0 1.819 1.819l5.384-1.346c.348.293.7.582 1.055.866l-.27 5.543a1.5 1.5 0 0 0 2.14 1.43l5.009-2.367c.401.222.806.439 1.214.65l.815 5.478c.077.522.423.964.91 1.165a1.498 1.498 0 0 0 1.467-.18l4.447-3.295c.438.139.88.273 1.323.4l1.867 5.212a1.5 1.5 0 0 0 2.523.502l3.726-4.108c.453.05.907.094 1.362.132l2.855 4.758a1.5 1.5 0 0 0 2.572 0l2.854-4.758c.456-.037.91-.082 1.362-.132l3.726 4.107a1.498 1.498 0 0 0 2.523-.501l1.867-5.211c.444-.128.885-.262 1.324-.401l4.447 3.295a1.498 1.498 0 0 0 2.377-.985l.815-5.478c.408-.211.813-.428 1.214-.65l5.01 2.366a1.5 1.5 0 0 0 2.138-1.429l-.27-5.542c.356-.284.708-.573 1.055-.867l5.385 1.346a1.5 1.5 0 0 0 1.819-1.82l-1.347-5.383c.294-.348.583-.7.868-1.055l5.541.27a1.5 1.5 0 0 0 1.43-2.14l-2.367-5.008c.223-.402.44-.807.651-1.215l5.478-.815a1.499 1.499 0 0 0 .985-2.377l-3.295-4.447c.139-.438.273-.88.4-1.323l5.211-1.867a1.498 1.498 0 0 0 .502-2.523l-4.107-3.726c.05-.453.095-.907.133-1.363l4.756-2.854a1.5 1.5 0 0 0 0-2.572l-4.756-2.854c-.038-.456-.083-.91-.133-1.363l4.107-3.726a1.5 1.5 0 0 0-.502-2.523l-5.211-1.867a45.71 45.71 0 0 0-.401-1.324l3.295-4.446a1.5 1.5 0 0 0-.984-2.377l-5.478-.815a49.558 49.558 0 0 0-.65-1.215l2.366-5.009a1.5 1.5 0 0 0-1.43-2.138l-5.541.27a49.548 49.548 0 0 0-.867-1.056l1.346-5.384a1.5 1.5 0 0 0-1.82-1.819l-5.383 1.346c-.348-.294-.7-.583-1.056-.867l.27-5.542a1.5 1.5 0 0 0-2.14-1.43l-5.008 2.367a49.161 49.161 0 0 0-1.214-.65l-.815-5.478a1.5 1.5 0 0 0-2.377-.985l-4.447 3.295c-.439-.14-.88-.273-1.323-.4ZM19.204 35.273l3.376 6.626a3 3 0 0 1-1.31 4.035l-6.624 3.375c-.22 1.7-.332 3.433-.332 5.192 0 10.7 4.182 20.424 11 27.625l7.337-1.162a3 3 0 0 1 3.433 2.494l1.164 7.348A40.03 40.03 0 0 0 54.5 94.686a40.03 40.03 0 0 0 17.252-3.881l1.164-7.348a3 3 0 0 1 3.433-2.494l7.337 1.162c6.818-7.201 11-16.925 11-27.625 0-1.76-.113-3.492-.332-5.191l-6.624-3.376a3 3 0 0 1-1.311-4.035l3.377-6.627C84.106 24.85 73.939 17.228 61.88 14.99l-5.26 5.259a3 3 0 0 1-4.242 0L47.12 14.99c-12.059 2.239-22.227 9.862-27.915 20.282Z",
    fill: "#F3FF00"
  })), new_logo_yellow_path2 || (new_logo_yellow_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M58.5 61.5c1.528 2.53 5.505 4.584 9.021 4.584 2.954 0 4.841-1.497 4.841-3.566 0-2.48-1.939-3.357-5.19-4.8l-1.782-.775c-5.145-2.223-8.563-5.007-8.563-10.893 0-5.422 4.074-9.55 10.441-9.55 2.885 0 5.432 1.013 7.16 3.037a5 5 0 0 1 3.479 6.109l-.635 2.37 2.14 3.705-1.186-.318-.318 1.186-2.14-3.706-2.37-.635a5.002 5.002 0 0 1-3.706-4.842c-.695-.416-1.482-.6-2.424-.6-2.088 0-3.411 1.342-3.411 3.097 0 2.17 1.324 3.047 4.383 4.39l1.782.775c6.058 2.634 9.478 5.32 9.478 11.357 0 6.51-5.042 10.075-11.814 10.075-6.62 0-10.777-5.9-9.186-11ZM35.303 62.32c1.12 2.015 2.14 3.719 4.589 3.719 2.342 0 3.82-.93 3.82-4.543V36.913h7.129v24.68c0 7.486-4.328 10.894-10.646 10.894-5.708 0-9.014-2.996-10.695-6.604l5.803-3.563Z",
    fill: "#F3FF00"
  })));
};
/* harmony default export */ const new_logo_yellow = (SvgNewLogoYellow);
;// CONCATENATED MODULE: ./static/img/new_logo_blue.svg
var new_logo_blue_path, new_logo_blue_path2;
function new_logo_blue_extends() { new_logo_blue_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return new_logo_blue_extends.apply(this, arguments); }

const SvgNewLogoBlue = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", new_logo_blue_extends({
    width: 109,
    height: 109,
    viewBox: "0 0 109 109",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, new_logo_blue_path || (new_logo_blue_path = /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m68.119 7.223-1.868-5.21a1.5 1.5 0 0 0-2.523-.502l-3.726 4.107c-.452-.05-.906-.094-1.362-.132L55.786.728a1.5 1.5 0 0 0-2.572 0l-2.855 4.758c-.456.038-.91.082-1.362.132l-3.726-4.107a1.5 1.5 0 0 0-2.523.501L40.88 7.224c-.443.127-.884.26-1.322.4L35.11 4.33a1.5 1.5 0 0 0-2.377.985l-.815 5.478c-.408.212-.812.428-1.213.65l-5.01-2.366a1.5 1.5 0 0 0-2.14 1.43l.27 5.542c-.355.284-.706.573-1.054.866l-5.384-1.346a1.5 1.5 0 0 0-1.82 1.82l1.347 5.384c-.294.347-.583.699-.867 1.054l-5.542-.27a1.5 1.5 0 0 0-1.43 2.14l2.367 5.009c-.222.401-.439.806-.65 1.214l-5.479.815a1.5 1.5 0 0 0-.984 2.377l3.295 4.447c-.14.438-.273.88-.4 1.323l-5.212 1.867a1.5 1.5 0 0 0-.502 2.523l4.108 3.727c-.05.452-.094.906-.132 1.361L.728 53.214a1.5 1.5 0 0 0 0 2.572l4.758 2.855c.038.455.082.91.132 1.361L1.51 63.73a1.5 1.5 0 0 0 .502 2.523l5.212 1.867c.127.444.26.885.4 1.323L4.33 73.889a1.5 1.5 0 0 0 .984 2.377l5.479.815c.211.408.428.813.65 1.214l-2.367 5.01a1.5 1.5 0 0 0 1.43 2.138l5.542-.27c.285.356.573.708.867 1.055l-1.346 5.385a1.5 1.5 0 0 0 1.819 1.819l5.384-1.346c.348.293.7.582 1.055.866l-.27 5.543a1.5 1.5 0 0 0 2.14 1.43l5.009-2.367c.401.222.806.439 1.214.65l.815 5.478c.077.522.423.964.91 1.165a1.498 1.498 0 0 0 1.467-.18l4.447-3.295c.438.139.88.273 1.323.4l1.867 5.212a1.5 1.5 0 0 0 2.523.502l3.726-4.108c.453.05.907.094 1.362.132l2.855 4.758a1.5 1.5 0 0 0 2.572 0l2.854-4.758c.456-.037.91-.082 1.362-.132l3.726 4.107a1.498 1.498 0 0 0 2.523-.501l1.867-5.211c.444-.128.885-.262 1.324-.401l4.447 3.295a1.498 1.498 0 0 0 2.377-.985l.815-5.478c.408-.211.813-.428 1.214-.65l5.01 2.366a1.5 1.5 0 0 0 2.138-1.429l-.27-5.542c.356-.284.708-.573 1.055-.867l5.385 1.346a1.5 1.5 0 0 0 1.819-1.82l-1.347-5.383c.294-.348.583-.7.868-1.055l5.541.27a1.5 1.5 0 0 0 1.43-2.14l-2.367-5.008c.223-.402.44-.807.651-1.215l5.478-.815a1.499 1.499 0 0 0 .985-2.377l-3.295-4.447c.139-.438.273-.88.4-1.323l5.211-1.867a1.498 1.498 0 0 0 .502-2.523l-4.107-3.726c.05-.453.095-.907.133-1.363l4.756-2.854a1.5 1.5 0 0 0 0-2.572l-4.756-2.854c-.038-.456-.083-.91-.133-1.363l4.107-3.726a1.5 1.5 0 0 0-.502-2.523l-5.211-1.867a45.71 45.71 0 0 0-.401-1.324l3.295-4.446a1.5 1.5 0 0 0-.984-2.377l-5.478-.815a49.558 49.558 0 0 0-.65-1.215l2.366-5.009a1.5 1.5 0 0 0-1.43-2.138l-5.541.27a49.548 49.548 0 0 0-.867-1.056l1.346-5.384a1.5 1.5 0 0 0-1.82-1.819l-5.383 1.346c-.348-.294-.7-.583-1.056-.867l.27-5.542a1.5 1.5 0 0 0-2.14-1.43l-5.008 2.367a49.161 49.161 0 0 0-1.214-.65l-.815-5.478a1.5 1.5 0 0 0-2.377-.985l-4.447 3.295c-.439-.14-.88-.273-1.323-.4ZM19.204 35.273l3.376 6.626a3 3 0 0 1-1.31 4.035l-6.624 3.375c-.22 1.7-.332 3.433-.332 5.192 0 10.7 4.182 20.424 11 27.625l7.337-1.162a3 3 0 0 1 3.433 2.494l1.164 7.348A40.03 40.03 0 0 0 54.5 94.686a40.03 40.03 0 0 0 17.252-3.881l1.164-7.348a3 3 0 0 1 3.433-2.494l7.337 1.162c6.818-7.201 11-16.925 11-27.625 0-1.76-.113-3.492-.332-5.191l-6.624-3.376a3 3 0 0 1-1.311-4.035l3.377-6.627C84.106 24.85 73.939 17.228 61.88 14.99l-5.26 5.259a3 3 0 0 1-4.242 0L47.12 14.99c-12.059 2.239-22.227 9.862-27.915 20.282Z",
    fill: "#0096CF"
  })), new_logo_blue_path2 || (new_logo_blue_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M58.5 61.5c1.528 2.53 5.505 4.584 9.021 4.584 2.954 0 4.841-1.497 4.841-3.566 0-2.48-1.939-3.357-5.19-4.8l-1.782-.775c-5.145-2.223-8.563-5.007-8.563-10.893 0-5.422 4.074-9.55 10.441-9.55 2.885 0 5.432 1.013 7.16 3.037a5 5 0 0 1 3.479 6.109l-.635 2.37 2.14 3.705-1.186-.318-.318 1.186-2.14-3.706-2.37-.635a5.002 5.002 0 0 1-3.706-4.842c-.695-.416-1.482-.6-2.424-.6-2.088 0-3.411 1.342-3.411 3.097 0 2.17 1.324 3.047 4.383 4.39l1.782.775c6.058 2.634 9.478 5.32 9.478 11.357 0 6.51-5.042 10.075-11.814 10.075-6.62 0-10.777-5.9-9.186-11ZM35.303 62.32c1.12 2.015 2.14 3.719 4.589 3.719 2.342 0 3.82-.93 3.82-4.543V36.913h7.129v24.68c0 7.486-4.328 10.894-10.646 10.894-5.708 0-9.014-2.996-10.695-6.604l5.803-3.563Z",
    fill: "#0096CF"
  })));
};
/* harmony default export */ const new_logo_blue = (SvgNewLogoBlue);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(1107);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./src/components/HomepageFeatures/index.tsx
const FeatureList=[{title:"Written in Rust",Svg:new_logo_black,description:/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Boa hopes to bring Rust safety garuantees to the world of JS engines."})},{title:"Aims for ECMAScript Conformance",Svg:new_logo_yellow,description:/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Boa currently passes more than 75% of ECMAScripts test262 test suite."})},{title:"Open Source",Svg:new_logo_blue,description:/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Boa is an open source project and hosted on GitHub. Contributions are always welcome!"})}];function Feature(_ref){let{title,description}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)("col col--4"),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"text--center padding-horiz--md padding-vert--xl",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h3",children:title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:description})]})});}function HomepageFeatures(){return/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:styles_module.features,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"row",children:FeatureList.map((props,idx)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Feature,{...props},idx))})})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 67 modules
var Layout = __webpack_require__(781);
;// CONCATENATED MODULE: ./src/components/latestPosts/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const latestPosts_styles_module = ({"latestPostsWrap":"latestPostsWrap_wV06","card":"card_ldvS","wrap":"wrap_VPsd"});
;// CONCATENATED MODULE: ./src/components/latestPosts/latestPosts.tsx
function LatestPosts(_ref){let{recentPosts}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)("container",latestPosts_styles_module.wrap),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h2",children:"Latest posts"}),/*#__PURE__*/(0,jsx_runtime.jsx)("section",{className:(0,clsx/* default */.A)(latestPosts_styles_module.latestPostsWrap),children:recentPosts.map(_ref2=>{let{content:BlogPostContent}=_ref2;return/*#__PURE__*/ (// key={BlogPostContent.metadata.permalink}
// frontMatter={BlogPostContent.frontMatter}
// assets={BlogPostContent.assets}
// metadata={BlogPostContent.metadata}
// truncated={BlogPostContent.metadata.truncated}
(0,jsx_runtime.jsxs)(Link/* default */.A,{className:(0,clsx/* default */.A)("card",latestPosts_styles_module.card),to:BlogPostContent.metadata.permalink,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card__header",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h3",children:BlogPostContent.metadata.title})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"card__body",children:/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:new Date(BlogPostContent.metadata.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})})]},BlogPostContent.metadata.permalink)//   <BlogPostContent />
);})})]});}
;// CONCATENATED MODULE: ./src/components/home/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"heroBanner":"heroBanner_yvPR","buttons":"buttons__cIi","buttonMargin":"buttonMargin_EgQo"});
;// CONCATENATED MODULE: ./src/components/home/index.tsx
function HomepageHeader(){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsx)("header",{className:(0,clsx/* default */.A)("hero hero--primary",index_module.heroBanner),children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h1",className:"hero__title",children:siteConfig.title}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"hero__subtitle",children:siteConfig.tagline}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:index_module.buttons,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"button button--secondary button--lg",to:"/playground",children:"Visit Boa Playground"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"button button--secondary "+index_module.buttonMargin,href:"https://docs.rs/Boa/latest/boa",children:"Release Documentation"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:"button button--secondary "+index_module.buttonMargin,href:"https://boajs.dev/boa/doc/boa_engine/index.html",children:"Dev Documentation"})]})]})});}function Home(_ref){let{recentPosts}=_ref;const{siteConfig}=(0,useDocusaurusContext/* default */.A)();return/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{title:siteConfig.title,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(HomepageHeader,{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(LatestPosts,{recentPosts:recentPosts}),/*#__PURE__*/(0,jsx_runtime.jsx)(HomepageFeatures,{})]})]});}

/***/ })

}]);