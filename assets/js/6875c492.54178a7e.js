"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[4813],{

/***/ 7713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BlogListPaginator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1312);
/* harmony import */ var _theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9022);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPaginator(props){const{metadata}=props;const{previousPage,nextPage}=metadata;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav",{className:"pagination-nav","aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.paginator.navAriaLabel',message:'Blog list page navigation',description:'The ARIA label for the blog pagination'}),children:[previousPage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{permalink:previousPage,title:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),nextPage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{permalink:nextPage,title:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:true})]});}

/***/ }),

/***/ 3892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BlogPostItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7131);
/* harmony import */ var _theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4651);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostItems(_ref){let{items,component:BlogPostItemComponent=_theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:items.map(_ref2=>{let{content:BlogPostContent}=_ref2;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_theme_common_internal__WEBPACK_IMPORTED_MODULE_3__/* .BlogPostProvider */ .i,{content:BlogPostContent,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BlogPostItemComponent,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BlogPostContent,{})})},BlogPostContent.metadata.permalink);})});}

/***/ }),

/***/ 3069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogTagsPostsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1312);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5846);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1213);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7559);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8774);
/* harmony import */ var _theme_BlogLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6535);
/* harmony import */ var _theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7713);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1463);
/* harmony import */ var _theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3892);
/* harmony import */ var _theme_Unlisted__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(996);
/* harmony import */ var _theme_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1107);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useBlogPostsPlural(){const{selectMessage}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .usePluralForm */ .W)();return count=>selectMessage(count,(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.post.plurals',description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One post|{count} posts'},{count}));}function useBlogTagsPostsPageTitle(tag){const blogPostsPlural=useBlogPostsPlural();return (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.tagTitle',description:'The title of the page for a blog tag',message:'{nPosts} tagged with "{tagName}"'},{nPosts:blogPostsPlural(tag.count),tagName:tag.label});}function BlogTagsPostsPageMetadata(_ref){let{tag}=_ref;const title=useBlogTagsPostsPageTitle(tag);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_11__/* .PageMetadata */ .be,{title:title,description:tag.description}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{tag:"blog_tags_posts"})]});}function BlogTagsPostsPageContent(_ref2){let{tag,items,sidebar,listMetadata}=_ref2;const title=useBlogTagsPostsPageTitle(tag);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_theme_BlogLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{sidebar:sidebar,children:[tag.unlisted&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_theme_Unlisted__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("header",{className:"margin-bottom--xl",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_theme_Heading__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{as:"h1",children:title}),tag.description&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p",{children:tag.description}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{href:tag.allTagsPath,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_theme_BlogPostItems__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{items:items}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{metadata:listMetadata})]});}function BlogTagsPostsPage(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_11__/* .HtmlClassNameProvider */ .e3,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_13__/* .ThemeClassNames */ .G.wrapper.blogPages,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_13__/* .ThemeClassNames */ .G.page.blogTagPostListPage),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BlogTagsPostsPageMetadata,{...props}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(BlogTagsPostsPageContent,{...props})]});}

/***/ }),

/***/ 996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Unlisted)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/unlistedUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnlistedBannerTitle(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"});}function UnlistedBannerMessage(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."});}function UnlistedMetadata(){return/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{name:"robots",content:"noindex, nofollow"})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 15 modules
var Admonition = __webpack_require__(7293);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Unlisted/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnlistedBanner(_ref){let{className}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Admonition/* default */.A,{type:"caution",title:/*#__PURE__*/(0,jsx_runtime.jsx)(UnlistedBannerTitle,{}),className:(0,clsx/* default */.A)(className,ThemeClassNames/* ThemeClassNames */.G.common.unlistedBanner),children:/*#__PURE__*/(0,jsx_runtime.jsx)(UnlistedBannerMessage,{})});}function Unlisted(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(UnlistedMetadata,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(UnlistedBanner,{...props})]});}

/***/ })

}]);