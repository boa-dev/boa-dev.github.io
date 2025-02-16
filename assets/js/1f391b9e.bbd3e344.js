"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[6061],{

/***/ 665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Unlisted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4164);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7289);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(204);
/* harmony import */ var _theme_Admonition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2362);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnlistedBanner(_ref){let{className}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_theme_Admonition__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{type:"caution",title:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .UnlistedBannerTitle */ .Rc,{}),className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(className,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .ThemeClassNames */ .G.common.unlistedBanner),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .UnlistedBannerMessage */ .Uh,{})});}function Unlisted(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .UnlistedMetadata */ .AE,{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(UnlistedBanner,{...props})]});}

/***/ }),

/***/ 1021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TOCItems)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(3115);
;// ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function treeifyTOC(flatTOC){const headings=flatTOC.map(heading=>({...heading,parentIndex:-1,children:[]}));// Keep track of which previous index would be the current heading's direct
// parent. Each entry <i> is the last index of the `headings` array at heading
// level <i>. We will modify these indices as we iterate through all headings.
// e.g. if an ### H3 was last seen at index 2, then prevIndexForLevel[3] === 2
// indices 0 and 1 will remain unused.
const prevIndexForLevel=Array(7).fill(-1);headings.forEach((curr,currIndex)=>{// Take the last seen index for each ancestor level. the highest index will
// be the direct ancestor of the current heading.
const ancestorLevelIndexes=prevIndexForLevel.slice(2,curr.level);curr.parentIndex=Math.max(...ancestorLevelIndexes);// Mark that curr.level was last seen at the current index.
prevIndexForLevel[curr.level]=currIndex;});const rootNodes=[];// For a given parentIndex, add each Node into that parent's `children` array
headings.forEach(heading=>{const{parentIndex,...rest}=heading;if(parentIndex>=0){headings[parentIndex].children.push(rest);}else{rootNodes.push(rest);}});return rootNodes;}/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect. Memoized for performance.
 */function useTreeifiedTOC(toc){return useMemo(()=>treeifyTOC(toc),[toc]);}function filterTOC(_ref){let{toc,minHeadingLevel,maxHeadingLevel}=_ref;function isValid(item){return item.level>=minHeadingLevel&&item.level<=maxHeadingLevel;}return toc.flatMap(item=>{const filteredChildren=filterTOC({toc:item.children,minHeadingLevel,maxHeadingLevel});if(isValid(item)){return[{...item,children:filteredChildren}];}return filteredChildren;});}/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect, applying the `minHeadingLevel` and `maxHeadingLevel`.
 * Memoized for performance.
 *
 * **Important**: this is not the same as `useTreeifiedTOC(toc.filter(...))`,
 * because we have to filter the TOC after it has been treeified. This is mostly
 * to ensure that weird TOC structures preserve their semantics. For example, an
 * h3-h2-h4 sequence should not be treeified as an "h3 > h4" hierarchy with
 * min=3, max=4, but should rather be "[h3, h4]" (since the h2 heading has split
 * the two headings and they are not parent-children)
 */function useFilteredAndTreeifiedTOC(_ref2){let{toc,minHeadingLevel,maxHeadingLevel}=_ref2;return (0,react.useMemo)(()=>filterTOC({toc:treeifyTOC(toc),minHeadingLevel,maxHeadingLevel}),[toc,minHeadingLevel,maxHeadingLevel]);}
;// ./node_modules/@docusaurus/theme-common/lib/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO make the hardcoded theme-classic classnames configurable (or add them
// to ThemeClassNames?)
/**
 * If the anchor has no height and is just a "marker" in the DOM; we'll use the
 * parent (normally the link text) rect boundaries instead
 */function getVisibleBoundingClientRect(element){const rect=element.getBoundingClientRect();const hasNoHeight=rect.top===rect.bottom;if(hasNoHeight){return getVisibleBoundingClientRect(element.parentNode);}return rect;}/**
 * Considering we divide viewport into 2 zones of each 50vh, this returns true
 * if an element is in the first zone (i.e., appear in viewport, near the top)
 */function isInViewportTopHalf(boundingRect){return boundingRect.top>0&&boundingRect.bottom<window.innerHeight/2;}function getAnchors(_ref){let{minHeadingLevel,maxHeadingLevel}=_ref;const selectors=[];for(let i=minHeadingLevel;i<=maxHeadingLevel;i+=1){selectors.push(`h${i}.anchor`);}return Array.from(document.querySelectorAll(selectors.join()));}function getActiveAnchor(anchors,_ref2){let{anchorTopOffset}=_ref2;// Naming is hard: The "nextVisibleAnchor" is the first anchor that appear
// under the viewport top boundary. It does not mean this anchor is visible
// yet, but if user continues scrolling down, it will be the first to become
// visible
const nextVisibleAnchor=anchors.find(anchor=>{const boundingRect=getVisibleBoundingClientRect(anchor);return boundingRect.top>=anchorTopOffset;});if(nextVisibleAnchor){const boundingRect=getVisibleBoundingClientRect(nextVisibleAnchor);// If anchor is in the top half of the viewport: it is the one we consider
// "active" (unless it's too close to the top and and soon to be scrolled
// outside viewport)
if(isInViewportTopHalf(boundingRect)){return nextVisibleAnchor;}// If anchor is in the bottom half of the viewport, or under the viewport,
// we consider the active anchor is the previous one. This is because the
// main text appearing in the user screen mostly belong to the previous
// anchor. Returns null for the first anchor, see
// https://github.com/facebook/docusaurus/issues/5318
return anchors[anchors.indexOf(nextVisibleAnchor)-1]??null;}// No anchor under viewport top (i.e. we are at the bottom of the page),
// highlight the last anchor found
return anchors[anchors.length-1]??null;}function getLinkAnchorValue(link){return decodeURIComponent(link.href.substring(link.href.indexOf('#')+1));}function getLinks(linkClassName){return Array.from(document.getElementsByClassName(linkClassName));}function getNavbarHeight(){// Not ideal to obtain actual height this way
// Using TS ! (not ?) because otherwise a bad selector would be un-noticed
return document.querySelector('.navbar').clientHeight;}function useAnchorTopOffsetRef(){const anchorTopOffsetRef=(0,react.useRef)(0);const{navbar:{hideOnScroll}}=(0,useThemeConfig/* useThemeConfig */.p)();(0,react.useEffect)(()=>{anchorTopOffsetRef.current=hideOnScroll?0:getNavbarHeight();},[hideOnScroll]);return anchorTopOffsetRef;}/**
 * Side-effect that applies the active class name to the TOC heading that the
 * user is currently viewing. Disabled when `config` is undefined.
 */function useTOCHighlight(config){const lastActiveLinkRef=(0,react.useRef)(undefined);const anchorTopOffsetRef=useAnchorTopOffsetRef();(0,react.useEffect)(()=>{if(!config){// No-op, highlighting is disabled
return()=>{};}const{linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel}=config;function updateLinkActiveClass(link,active){if(active){if(lastActiveLinkRef.current&&lastActiveLinkRef.current!==link){lastActiveLinkRef.current.classList.remove(linkActiveClassName);}link.classList.add(linkActiveClassName);lastActiveLinkRef.current=link;// link.scrollIntoView({block: 'nearest'});
}else{link.classList.remove(linkActiveClassName);}}function updateActiveLink(){const links=getLinks(linkClassName);const anchors=getAnchors({minHeadingLevel,maxHeadingLevel});const activeAnchor=getActiveAnchor(anchors,{anchorTopOffset:anchorTopOffsetRef.current});const activeLink=links.find(link=>activeAnchor&&activeAnchor.id===getLinkAnchorValue(link));links.forEach(link=>{updateLinkActiveClass(link,link===activeLink);});}document.addEventListener('scroll',updateActiveLink);document.addEventListener('resize',updateActiveLink);updateActiveLink();return()=>{document.removeEventListener('scroll',updateActiveLink);document.removeEventListener('resize',updateActiveLink);};},[config,anchorTopOffsetRef]);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(6289);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/Tree.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Recursive component rendering the toc tree
function TOCItemTree(_ref){let{toc,className,linkClassName,isChild}=_ref;if(!toc.length){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:isChild?undefined:className,children:toc.map(heading=>/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:`#${heading.id}`,className:linkClassName??undefined// Developer provided the HTML, so assume it's safe.
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/(0,jsx_runtime.jsx)(TOCItemTree,{isChild:true,toc:heading.children,className:className,linkClassName:linkClassName})]},heading.id))});}// Memo only the tree root is enough
/* harmony default export */ const Tree = (/*#__PURE__*/react.memo(TOCItemTree));
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCItems(_ref){let{toc,className='table-of-contents table-of-contents__left-border',linkClassName='table-of-contents__link',linkActiveClassName=undefined,minHeadingLevel:minHeadingLevelOption,maxHeadingLevel:maxHeadingLevelOption,...props}=_ref;const themeConfig=(0,useThemeConfig/* useThemeConfig */.p)();const minHeadingLevel=minHeadingLevelOption??themeConfig.tableOfContents.minHeadingLevel;const maxHeadingLevel=maxHeadingLevelOption??themeConfig.tableOfContents.maxHeadingLevel;const tocTree=useFilteredAndTreeifiedTOC({toc,minHeadingLevel,maxHeadingLevel});const tocHighlightConfig=(0,react.useMemo)(()=>{if(linkClassName&&linkActiveClassName){return{linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel};}return undefined;},[linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel]);useTOCHighlight(tocHighlightConfig);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tree,{toc:tocTree,className:className,linkClassName:linkClassName,...props});}

/***/ }),

/***/ 2075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ContentVisibility)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/translations/contentVisibilityTranslations.js
var contentVisibilityTranslations = __webpack_require__(7289);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(204);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 15 modules
var Admonition = __webpack_require__(2362);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/Draft/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Draft(_ref){let{className}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(Admonition/* default */.A,{type:"caution",title:/*#__PURE__*/(0,jsx_runtime.jsx)(contentVisibilityTranslations/* DraftBannerTitle */.Yh,{}),className:(0,clsx/* default */.A)(className,ThemeClassNames/* ThemeClassNames */.G.common.draftBanner),children:/*#__PURE__*/(0,jsx_runtime.jsx)(contentVisibilityTranslations/* DraftBannerMessage */.TT,{})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/Unlisted/index.js
var Unlisted = __webpack_require__(665);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ContentVisibility(_ref){let{metadata}=_ref;const{unlisted,frontMatter}=metadata;// Reading draft/unlisted status from frontMatter is useful to display
// the banners in dev mode (in dev, metadata.unlisted is always false)
// See https://github.com/facebook/docusaurus/issues/8285
return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(unlisted||frontMatter.unlisted)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Unlisted/* default */.A,{}),frontMatter.draft&&/*#__PURE__*/(0,jsx_runtime.jsx)(Draft,{})]});}

/***/ }),

/***/ 7289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AE: () => (/* binding */ UnlistedMetadata),
/* harmony export */   Rc: () => (/* binding */ UnlistedBannerTitle),
/* harmony export */   TT: () => (/* binding */ DraftBannerMessage),
/* harmony export */   Uh: () => (/* binding */ UnlistedBannerMessage),
/* harmony export */   Yh: () => (/* binding */ DraftBannerTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _docusaurus_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7143);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4848);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnlistedBannerTitle(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"});}function UnlistedBannerMessage(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."});}// TODO Docusaurus v4 breaking change (since it's v3 public theme-common API :/)
//  Move this to theme/ContentVisibility/Unlisted
function UnlistedMetadata(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Head__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta",{name:"robots",content:"noindex, nofollow"})});}function DraftBannerTitle(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"});}function DraftBannerMessage(){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."});}

/***/ }),

/***/ 7959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TOC)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(1021);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tableOfContents":"tableOfContents_bqdL","docItemContainer":"docItemContainer_F8PC"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME='table-of-contents__link toc-highlight';const LINK_ACTIVE_CLASS_NAME='table-of-contents__link--active';function TOC(_ref){let{className,...props}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(styles_module.tableOfContents,'thin-scrollbar',className),children:/*#__PURE__*/(0,jsx_runtime.jsx)(TOCItems/* default */.A,{...props,linkClassName:LINK_CLASS_NAME,linkActiveClassName:LINK_ACTIVE_CLASS_NAME})});}

/***/ }),

/***/ 9181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(1082);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(204);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 66 modules
var Layout = __webpack_require__(9847);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js + 45 modules
var MDXContent = __webpack_require__(7409);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(7959);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/ContentVisibility/index.js + 1 modules
var ContentVisibility = __webpack_require__(2075);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditMetaRow/index.js + 5 modules
var EditMetaRow = __webpack_require__(5783);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"mdxPageWrapper":"mdxPageWrapper_j9I6"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXPage(props){const{content:MDXPageContent}=props;const{metadata,assets}=MDXPageContent;const{title,editUrl,description,frontMatter,lastUpdatedBy,lastUpdatedAt}=metadata;const{keywords,wrapperClassName,hide_table_of_contents:hideTableOfContents}=frontMatter;const image=assets.image??frontMatter.image;const canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);return/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* HtmlClassNameProvider */.e3,{className:(0,clsx/* default */.A)(wrapperClassName??ThemeClassNames/* ThemeClassNames */.G.wrapper.mdxPages,ThemeClassNames/* ThemeClassNames */.G.page.mdxPage),children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Layout/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(metadataUtils/* PageMetadata */.be,{title:title,description:description,keywords:keywords,image:image}),/*#__PURE__*/(0,jsx_runtime.jsx)("main",{className:"container container--fluid margin-vert--lg",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('row',styles_module.mdxPageWrapper),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('col',!hideTableOfContents&&'col--8'),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ContentVisibility/* default */.A,{metadata:metadata}),/*#__PURE__*/(0,jsx_runtime.jsx)("article",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(MDXContent/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(MDXPageContent,{})})}),canDisplayEditMetaRow&&/*#__PURE__*/(0,jsx_runtime.jsx)(EditMetaRow/* default */.A,{className:(0,clsx/* default */.A)('margin-top--sm',ThemeClassNames/* ThemeClassNames */.G.pages.pageFooterEditMetaRow),editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy})]}),!hideTableOfContents&&MDXPageContent.toc.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col col--2",children:/*#__PURE__*/(0,jsx_runtime.jsx)(TOC/* default */.A,{toc:MDXPageContent.toc,minHeadingLevel:frontMatter.toc_min_heading_level,maxHeadingLevel:frontMatter.toc_max_heading_level})})]})})]})});}

/***/ })

}]);