"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[3249],{

/***/ 1477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogPostPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(1213);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/blogPost.js
var blogPost = __webpack_require__(7131);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js + 5 modules
var BlogLayout = __webpack_require__(6535);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostItem/index.js + 12 modules
var BlogPostItem = __webpack_require__(4651);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js
var PaginatorNavLink = __webpack_require__(9022);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostPaginator(props){const{nextItem,prevItem}=props;return/*#__PURE__*/(0,jsx_runtime.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,Translate/* translate */.T)({id:'theme.blog.post.paginator.navAriaLabel',message:'Blog post page navigation',description:'The ARIA label for the blog posts pagination'}),children:[prevItem&&/*#__PURE__*/(0,jsx_runtime.jsx)(PaginatorNavLink/* default */.A,{...prevItem,subLabel:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),nextItem&&/*#__PURE__*/(0,jsx_runtime.jsx)(PaginatorNavLink/* default */.A,{...nextItem,subLabel:/*#__PURE__*/(0,jsx_runtime.jsx)(Translate/* default */.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:true})]});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostPage/Metadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostPageMetadata(){const{assets,metadata}=(0,blogPost/* useBlogPost */.e)();const{title,description,date,tags,authors,frontMatter}=metadata;const{keywords}=frontMatter;const image=assets.image??frontMatter.image;return/*#__PURE__*/(0,jsx_runtime.jsxs)(metadataUtils/* PageMetadata */.be,{title:title,description:description,keywords:keywords,image:image,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"og:type",content:"article"}),/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"article:published_time",content:date}),authors.some(author=>author.url)&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"article:author",content:authors.map(author=>author.url).filter(Boolean).join(',')}),tags.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("meta",{property:"article:tag",content:tags.map(tag=>tag.label).join(',')})]});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(5260);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/structuredDataUtils.js + 1 modules
var structuredDataUtils = __webpack_require__(6676);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostPage/StructuredData/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostStructuredData(){const structuredData=(0,structuredDataUtils/* useBlogPostStructuredData */.J)();return/*#__PURE__*/(0,jsx_runtime.jsx)(Head/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("script",{type:"application/ld+json",children:JSON.stringify(structuredData)})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(7763);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Unlisted/index.js + 1 modules
var Unlisted = __webpack_require__(996);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogPostPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostPageContent(_ref){let{sidebar,children}=_ref;const{metadata,toc}=(0,blogPost/* useBlogPost */.e)();const{nextItem,prevItem,frontMatter,unlisted}=metadata;const{hide_table_of_contents:hideTableOfContents,toc_min_heading_level:tocMinHeadingLevel,toc_max_heading_level:tocMaxHeadingLevel}=frontMatter;return/*#__PURE__*/(0,jsx_runtime.jsxs)(BlogLayout/* default */.A,{sidebar:sidebar,toc:!hideTableOfContents&&toc.length>0?/*#__PURE__*/(0,jsx_runtime.jsx)(TOC/* default */.A,{toc:toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel}):undefined,children:[unlisted&&/*#__PURE__*/(0,jsx_runtime.jsx)(Unlisted/* default */.A,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostItem/* default */.A,{children:children}),(nextItem||prevItem)&&/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostPaginator,{nextItem:nextItem,prevItem:prevItem})]});}function BlogPostPage(props){const BlogPostContent=props.content;return/*#__PURE__*/(0,jsx_runtime.jsx)(blogPost/* BlogPostProvider */.i,{content:props.content,isBlogPostPage:true,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(metadataUtils/* HtmlClassNameProvider */.e3,{className:(0,clsx/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.wrapper.blogPages,ThemeClassNames/* ThemeClassNames */.G.page.blogPostPage),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostPageMetadata,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostStructuredData,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostPageContent,{sidebar:props.sidebar,children:/*#__PURE__*/(0,jsx_runtime.jsx)(BlogPostContent,{})})]})});}

/***/ }),

/***/ 7763:
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
var TOCItems = __webpack_require__(5195);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tableOfContents":"tableOfContents_bqdL","docItemContainer":"docItemContainer_F8PC"});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME='table-of-contents__link toc-highlight';const LINK_ACTIVE_CLASS_NAME='table-of-contents__link--active';function TOC(_ref){let{className,...props}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(styles_module.tableOfContents,'thin-scrollbar',className),children:/*#__PURE__*/(0,jsx_runtime.jsx)(TOCItems/* default */.A,{...props,linkClassName:LINK_CLASS_NAME,linkActiveClassName:LINK_ACTIVE_CLASS_NAME})});}

/***/ }),

/***/ 5195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TOCItems)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
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
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useTOCHighlight.js
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
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/Tree.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Recursive component rendering the toc tree
function TOCItemTree(_ref){let{toc,className,linkClassName,isChild}=_ref;if(!toc.length){return null;}return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:isChild?undefined:className,children:toc.map(heading=>/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{to:`#${heading.id}`,className:linkClassName??undefined// Developer provided the HTML, so assume it's safe.
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/(0,jsx_runtime.jsx)(TOCItemTree,{isChild:true,toc:heading.children,className:className,linkClassName:linkClassName})]},heading.id))});}// Memo only the tree root is enough
/* harmony default export */ const Tree = (/*#__PURE__*/react.memo(TOCItemTree));
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCItems(_ref){let{toc,className='table-of-contents table-of-contents__left-border',linkClassName='table-of-contents__link',linkActiveClassName=undefined,minHeadingLevel:minHeadingLevelOption,maxHeadingLevel:maxHeadingLevelOption,...props}=_ref;const themeConfig=(0,useThemeConfig/* useThemeConfig */.p)();const minHeadingLevel=minHeadingLevelOption??themeConfig.tableOfContents.minHeadingLevel;const maxHeadingLevel=maxHeadingLevelOption??themeConfig.tableOfContents.maxHeadingLevel;const tocTree=useFilteredAndTreeifiedTOC({toc,minHeadingLevel,maxHeadingLevel});const tocHighlightConfig=(0,react.useMemo)(()=>{if(linkClassName&&linkActiveClassName){return{linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel};}return undefined;},[linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel]);useTOCHighlight(tocHighlightConfig);return/*#__PURE__*/(0,jsx_runtime.jsx)(Tree,{toc:tocTree,className:className,linkClassName:linkClassName,...props});}

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

/***/ }),

/***/ 6676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ useBlogListPageStructuredData),
  J: () => (/* binding */ useBlogPostStructuredData)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useRouteContext.js
var useRouteContext = __webpack_require__(6803);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useBlogMetadata(){const routeContext=(0,useRouteContext/* default */.A)();const blogMetadata=routeContext?.data?.blogMetadata;if(!blogMetadata){throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");}return blogMetadata;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/blogPost.js
var blogPost = __webpack_require__(7131);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/structuredDataUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const convertDate=dateMs=>new Date(dateMs).toISOString();function getBlogPost(blogPostContent,siteConfig,withBaseUrl){const{assets,frontMatter,metadata}=blogPostContent;const{date,title,description,lastUpdatedAt}=metadata;const image=assets.image??frontMatter.image;const keywords=frontMatter.keywords??[];const blogUrl=`${siteConfig.url}${metadata.permalink}`;const dateModified=lastUpdatedAt?convertDate(lastUpdatedAt):undefined;return{'@type':'BlogPosting','@id':blogUrl,mainEntityOfPage:blogUrl,url:blogUrl,headline:title,name:title,description,datePublished:date,...(dateModified?{dateModified}:{}),...getAuthor(metadata.authors),...getImage(image,withBaseUrl,title),...(keywords?{keywords}:{})};}function getAuthor(authors){const authorsStructuredData=authors.map(createPersonStructuredData);return{author:authorsStructuredData.length===1?authorsStructuredData[0]:authorsStructuredData};}function getImage(image,withBaseUrl,title){return image?{image:createImageStructuredData({imageUrl:withBaseUrl(image,{absolute:true}),caption:`title image for the blog post: ${title}`})}:{};}function useBlogListPageStructuredData(props){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.hH)();const{metadata:{blogDescription,blogTitle,permalink}}=props;const url=`${siteConfig.url}${permalink}`;// details on structured data support: https://schema.org/Blog
return{'@context':'https://schema.org','@type':'Blog','@id':url,mainEntityOfPage:url,headline:blogTitle,description:blogDescription,blogPost:props.items.map(blogItem=>getBlogPost(blogItem.content,siteConfig,withBaseUrl))};}function useBlogPostStructuredData(){const blogMetadata=useBlogMetadata();const{assets,metadata}=(0,blogPost/* useBlogPost */.e)();const{siteConfig}=(0,useDocusaurusContext/* default */.A)();const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.hH)();const{date,title,description,frontMatter,lastUpdatedAt}=metadata;const image=assets.image??frontMatter.image;const keywords=frontMatter.keywords??[];const dateModified=lastUpdatedAt?convertDate(lastUpdatedAt):undefined;const url=`${siteConfig.url}${metadata.permalink}`;// details on structured data support: https://schema.org/BlogPosting
// BlogPosting is one of the structured data types that Google explicitly
// supports: https://developers.google.com/search/docs/appearance/structured-data/article#structured-data-type-definitions
return{'@context':'https://schema.org','@type':'BlogPosting','@id':url,mainEntityOfPage:url,url,headline:title,name:title,description,datePublished:date,...(dateModified?{dateModified}:{}),...getAuthor(metadata.authors),...getImage(image,withBaseUrl,title),...(keywords?{keywords}:{}),isPartOf:{'@type':'Blog','@id':`${siteConfig.url}${blogMetadata.blogBasePath}`,name:blogMetadata.blogTitle}};}/** @returns A {@link https://schema.org/Person} constructed from the {@link Author} */function createPersonStructuredData(author){return{'@type':'Person',...(author.name?{name:author.name}:{}),...(author.title?{description:author.title}:{}),...(author.url?{url:author.url}:{}),...(author.email?{email:author.email}:{}),...(author.imageURL?{image:author.imageURL}:{})};}/** @returns A {@link https://schema.org/ImageObject} */function createImageStructuredData(_ref){let{imageUrl,caption}=_ref;return{'@type':'ImageObject','@id':imageUrl,url:imageUrl,contentUrl:imageUrl,caption};}

/***/ })

}]);