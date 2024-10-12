"use strict";
(self["webpackChunkboajs_dev"] = self["webpackChunkboajs_dev"] || []).push([[3347],{

/***/ 4096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "in": () => (/* reexport */ BlogPostProvider),
  OU: () => (/* reexport */ BlogSidebarItemList),
  Ki: () => (/* reexport */ groupBlogSidebarItemsByYear),
  kJ: () => (/* reexport */ useBlogListPageStructuredData),
  x: () => (/* reexport */ useBlogMetadata),
  e7: () => (/* reexport */ useBlogPost),
  J_: () => (/* reexport */ useBlogPostStructuredData),
  Gx: () => (/* reexport */ useVisibleBlogSidebarItems)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(9532);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useRouteContext.js
var useRouteContext = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/plugin-content-blog/lib/client/contexts.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useBlogMetadata(){const routeContext=(0,useRouteContext/* default */.A)();const blogMetadata=routeContext?.data?.blogMetadata;if(!blogMetadata){throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");}return blogMetadata;}const Context=/*#__PURE__*/react.createContext(null);/**
 * Note: we don't use `PropBlogPostContent` as context value on purpose.
 * Metadata is currently stored inside the MDX component, but we may want to
 * change that in the future.
 */function useContextValue(_ref){let{content,isBlogPostPage}=_ref;return (0,react.useMemo)(()=>({metadata:content.metadata,frontMatter:content.frontMatter,assets:content.assets,toc:content.toc,isBlogPostPage}),[content,isBlogPostPage]);}/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the blog post to the children tree.
 */function BlogPostProvider(_ref2){let{children,content,isBlogPostPage=false}=_ref2;const contextValue=useContextValue({content,isBlogPostPage});return/*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider,{value:contextValue,children:children});}/**
 * Returns the data of the currently browsed blog post. Gives access to
 * front matter, metadata, TOC, etc.
 * When swizzling a low-level component (e.g. the "Edit this page" link)
 * and you need some extra metadata, you don't have to drill the props
 * all the way through the component tree: simply use this hook instead.
 */function useBlogPost(){const blogPost=(0,react.useContext)(Context);if(blogPost===null){throw new reactUtils/* ReactContextError */.dV('BlogPostProvider');}return blogPost;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
;// ./node_modules/@docusaurus/plugin-content-blog/lib/client/structuredDataUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const convertDate=dateMs=>new Date(dateMs).toISOString();function getBlogPost(blogPostContent,siteConfig,withBaseUrl){const{assets,frontMatter,metadata}=blogPostContent;const{date,title,description,lastUpdatedAt}=metadata;const image=assets.image??frontMatter.image;const keywords=frontMatter.keywords??[];const blogUrl=`${siteConfig.url}${metadata.permalink}`;const dateModified=lastUpdatedAt?convertDate(lastUpdatedAt):undefined;return{'@type':'BlogPosting','@id':blogUrl,mainEntityOfPage:blogUrl,url:blogUrl,headline:title,name:title,description,datePublished:date,...(dateModified?{dateModified}:{}),...getAuthor(metadata.authors),...getImage(image,withBaseUrl,title),...(keywords?{keywords}:{})};}function getAuthor(authors){const authorsStructuredData=authors.map(createPersonStructuredData);return{author:authorsStructuredData.length===1?authorsStructuredData[0]:authorsStructuredData};}function getImage(image,withBaseUrl,title){return image?{image:createImageStructuredData({imageUrl:withBaseUrl(image,{absolute:true}),caption:`title image for the blog post: ${title}`})}:{};}function useBlogListPageStructuredData(props){const{siteConfig}=(0,useDocusaurusContext/* default */.A)();const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.hH)();const{metadata:{blogDescription,blogTitle,permalink}}=props;const url=`${siteConfig.url}${permalink}`;// details on structured data support: https://schema.org/Blog
return{'@context':'https://schema.org','@type':'Blog','@id':url,mainEntityOfPage:url,headline:blogTitle,description:blogDescription,blogPost:props.items.map(blogItem=>getBlogPost(blogItem.content,siteConfig,withBaseUrl))};}function useBlogPostStructuredData(){const blogMetadata=useBlogMetadata();const{assets,metadata}=useBlogPost();const{siteConfig}=(0,useDocusaurusContext/* default */.A)();const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.hH)();const{date,title,description,frontMatter,lastUpdatedAt}=metadata;const image=assets.image??frontMatter.image;const keywords=frontMatter.keywords??[];const dateModified=lastUpdatedAt?convertDate(lastUpdatedAt):undefined;const url=`${siteConfig.url}${metadata.permalink}`;// details on structured data support: https://schema.org/BlogPosting
// BlogPosting is one of the structured data types that Google explicitly
// supports: https://developers.google.com/search/docs/appearance/structured-data/article#structured-data-type-definitions
return{'@context':'https://schema.org','@type':'BlogPosting','@id':url,mainEntityOfPage:url,url,headline:title,name:title,description,datePublished:date,...(dateModified?{dateModified}:{}),...getAuthor(metadata.authors),...getImage(image,withBaseUrl,title),...(keywords?{keywords}:{}),isPartOf:{'@type':'Blog','@id':`${siteConfig.url}${blogMetadata.blogBasePath}`,name:blogMetadata.blogTitle}};}/** @returns A {@link https://schema.org/Person} constructed from the {@link Author} */function createPersonStructuredData(author){return{'@type':'Person',...(author.name?{name:author.name}:{}),...(author.title?{description:author.title}:{}),...(author.url?{url:author.url}:{}),...(author.email?{email:author.email}:{}),...(author.imageURL?{image:author.imageURL}:{})};}/** @returns A {@link https://schema.org/ImageObject} */function createImageStructuredData(_ref){let{imageUrl,caption}=_ref;return{'@type':'ImageObject','@id':imageUrl,url:imageUrl,contentUrl:imageUrl,caption};}
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(1682);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(9169);
;// ./node_modules/@docusaurus/plugin-content-blog/lib/client/sidebarUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function isVisible(item,pathname){if(item.unlisted&&!(0,routesUtils/* isSamePath */.ys)(item.permalink,pathname)){return false;}return true;}/**
 * Return the visible blog sidebar items to display.
 * Unlisted items are filtered.
 */function useVisibleBlogSidebarItems(items){const{pathname}=(0,react_router/* useLocation */.zy)();return (0,react.useMemo)(()=>items.filter(item=>isVisible(item,pathname)),[items,pathname]);}function groupBlogSidebarItemsByYear(items){const groupedByYear=(0,jsUtils/* groupBy */.$z)(items,item=>{return`${new Date(item.date).getFullYear()}`;});// "as" is safe here
// see https://github.com/microsoft/TypeScript/pull/56805#issuecomment-2196526425
const entries=Object.entries(groupedByYear);// We have to use entries because of https://x.com/sebastienlorber/status/1806371668614369486
// Objects with string/number keys are automatically sorted asc...
// Even if keys are strings like "2024"
// We want descending order for years
// Alternative: using Map.groupBy (not affected by this "reordering")
entries.reverse();return entries;}function BlogSidebarItemList(_ref){let{items,ulClassName,liClassName,linkClassName,linkActiveClassName}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:ulClassName,children:items.map(item=>/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:liClassName,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{isNavLink:true,to:item.permalink,className:linkClassName,activeClassName:linkActiveClassName,children:item.title})},item.permalink))});}
;// ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/***/ }),

/***/ 6913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogAuthor)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js
var Link = __webpack_require__(8774);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/Twitter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// SVG Source: https://svgl.app/
function Twitter(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})});}/* harmony default export */ const Socials_Twitter = (Twitter);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/GitHub/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"githubSvg":"githubSvg_Uu4N"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/GitHub/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// SVG Source: https://svgl.app/
function GitHub(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 256 250",width:"1em",height:"1em",...props,className:(0,clsx/* default */.A)(props.className,styles_module.githubSvg),xmlns:"http://www.w3.org/2000/svg",style:{'--dark':'#000','--light':'#fff'},preserveAspectRatio:"xMidYMid",children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})});}/* harmony default export */ const Socials_GitHub = (GitHub);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/X/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const X_styles_module = ({"xSvg":"xSvg_y3PF"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/X/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// SVG Source: https://svgl.app/
function X(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227",...props,className:(0,clsx/* default */.A)(props.className,X_styles_module.xSvg),style:{'--dark':'#000','--light':'#fff'},children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})});}/* harmony default export */ const Socials_X = (X);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/StackOverflow/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// SVG Source: https://svgl.app/
function StackOverflow(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em",...props,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]});}/* harmony default export */ const Socials_StackOverflow = (StackOverflow);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/LinkedIn/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// SVG Source: https://svgl.app/
function LinkedIn(props){return/*#__PURE__*/(0,jsx_runtime.jsx)("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",...props,children:/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})});}/* harmony default export */ const Socials_LinkedIn = (LinkedIn);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Socials/Default/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// SVG Source: https://tabler.io/
function DefaultSocial(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...props,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M3.6 9h16.8"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M3.6 15h16.8"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),/*#__PURE__*/(0,jsx_runtime.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]});}/* harmony default export */ const Default = (DefaultSocial);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/Socials/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Socials_styles_module = ({"authorSocials":"authorSocials_rSDt","authorSocialLink":"authorSocialLink_owbf","authorSocialIcon":"authorSocialIcon_XYv3"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/Socials/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const SocialPlatformConfigs={twitter:{Icon:Socials_Twitter,label:'Twitter'},github:{Icon:Socials_GitHub,label:'GitHub'},stackoverflow:{Icon:Socials_StackOverflow,label:'Stack Overflow'},linkedin:{Icon:Socials_LinkedIn,label:'LinkedIn'},x:{Icon:Socials_X,label:'X'}};function getSocialPlatformConfig(platformKey){return SocialPlatformConfigs[platformKey]??{Icon:Default,label:platformKey};}function SocialLink(_ref){let{platform,link}=_ref;const{Icon,label}=getSocialPlatformConfig(platform);return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{className:Socials_styles_module.authorSocialLink,href:link,title:label,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Icon,{className:(0,clsx/* default */.A)(Socials_styles_module.authorSocialLink)})});}function BlogAuthorSocials(_ref2){let{author}=_ref2;const entries=Object.entries(author.socials??{});return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:Socials_styles_module.authorSocials,children:entries.map(_ref3=>{let[platform,linkUrl]=_ref3;return/*#__PURE__*/(0,jsx_runtime.jsx)(SocialLink,{platform:platform,link:linkUrl},platform);})});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(1107);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Author_styles_module = ({"authorImage":"authorImage_XqGP","author-as-h1":"author-as-h1_n9oJ","author-as-h2":"author-as-h2_gXvM","authorDetails":"authorDetails_lV9A","authorName":"authorName_yefp","authorTitle":"authorTitle_nd0D","authorBlogPostCount":"authorBlogPostCount_iiJ5"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/Blog/Components/Author/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MaybeLink(props){if(props.href){return/*#__PURE__*/(0,jsx_runtime.jsx)(Link/* default */.A,{...props});}return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:props.children});}function AuthorTitle(_ref){let{title}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)("small",{className:Author_styles_module.authorTitle,title:title,children:title});}function AuthorName(_ref2){let{name,as}=_ref2;if(!as){return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:Author_styles_module.authorName,children:name});}else{return/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:as,className:Author_styles_module.authorName,children:name});}}function AuthorBlogPostCount(_ref3){let{count}=_ref3;return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:(0,clsx/* default */.A)(Author_styles_module.authorBlogPostCount),children:count});}// Note: in the future we might want to have multiple "BlogAuthor" components
// Creating different display modes with the "as" prop may not be the best idea
// Explainer: https://kyleshevlin.com/prefer-multiple-compositions/
// For now, we almost use the same design for all cases, so it's good enough
function BlogAuthor(_ref4){let{as,author,className,count}=_ref4;const{name,title,url,imageURL,email,page}=author;const link=page?.permalink||url||email&&`mailto:${email}`||undefined;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('avatar margin-bottom--sm',className,Author_styles_module[`author-as-${as}`]),children:[imageURL&&/*#__PURE__*/(0,jsx_runtime.jsx)(MaybeLink,{href:link,className:"avatar__photo-link",children:/*#__PURE__*/(0,jsx_runtime.jsx)("img",{className:(0,clsx/* default */.A)('avatar__photo',Author_styles_module.authorImage),src:imageURL,alt:name})}),(name||title)&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:(0,clsx/* default */.A)('avatar__intro',Author_styles_module.authorDetails),children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"avatar__name",children:[name&&/*#__PURE__*/(0,jsx_runtime.jsx)(MaybeLink,{href:link,children:/*#__PURE__*/(0,jsx_runtime.jsx)(AuthorName,{name:name,as:as})}),count&&/*#__PURE__*/(0,jsx_runtime.jsx)(AuthorBlogPostCount,{count:count})]}),!!title&&/*#__PURE__*/(0,jsx_runtime.jsx)(AuthorTitle,{title:title}),/*#__PURE__*/(0,jsx_runtime.jsx)(BlogAuthorSocials,{author:author})]})]});}

/***/ }),

/***/ 8027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogLayout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 66 modules
var Layout = __webpack_require__(8244);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(4581);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-blog/lib/client/index.js + 3 modules
var client = __webpack_require__(4096);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(1107);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebarYearGroup(_ref){let{year,yearGroupHeadingClassName,children}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{role:"group",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Heading/* default */.A,{as:"h3",className:yearGroupHeadingClassName,children:year}),children]});}function BlogSidebarContent(_ref2){let{items,yearGroupHeadingClassName,ListComponent}=_ref2;const themeConfig=(0,useThemeConfig/* useThemeConfig */.p)();if(themeConfig.blog.sidebar.groupByYear){const itemsByYear=(0,client/* groupBlogSidebarItemsByYear */.Ki)(items);return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:itemsByYear.map(_ref3=>{let[year,yearItems]=_ref3;return/*#__PURE__*/(0,jsx_runtime.jsx)(BlogSidebarYearGroup,{year:year,yearGroupHeadingClassName:yearGroupHeadingClassName,children:/*#__PURE__*/(0,jsx_runtime.jsx)(ListComponent,{items:yearItems})},year);})});}else{return/*#__PURE__*/(0,jsx_runtime.jsx)(ListComponent,{items:items});}}/* harmony default export */ const Content = (/*#__PURE__*/(0,react.memo)(BlogSidebarContent));
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"sidebar":"sidebar_re4s","sidebarItemTitle":"sidebarItemTitle_pO2u","sidebarItemList":"sidebarItemList_Yudw","sidebarItem":"sidebarItem__DBe","sidebarItemLink":"sidebarItemLink_mo7H","sidebarItemLinkActive":"sidebarItemLinkActive_I1ZP","yearGroupHeading":"yearGroupHeading_rMGB"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const ListComponent=_ref=>{let{items}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(client/* BlogSidebarItemList */.OU,{items:items,ulClassName:(0,clsx/* default */.A)(styles_module.sidebarItemList,'clean-list'),liClassName:styles_module.sidebarItem,linkClassName:styles_module.sidebarItemLink,linkActiveClassName:styles_module.sidebarItemLinkActive});};function BlogSidebarDesktop(_ref2){let{sidebar}=_ref2;const items=(0,client/* useVisibleBlogSidebarItems */.Gx)(sidebar.items);return/*#__PURE__*/(0,jsx_runtime.jsx)("aside",{className:"col col--3",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("nav",{className:(0,clsx/* default */.A)(styles_module.sidebar,'thin-scrollbar'),"aria-label":(0,Translate/* translate */.T)({id:'theme.blog.sidebar.navAriaLabel',message:'Blog recent posts navigation',description:'The ARIA label for recent posts in the blog sidebar'}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:(0,clsx/* default */.A)(styles_module.sidebarItemTitle,'margin-bottom--md'),children:sidebar.title}),/*#__PURE__*/(0,jsx_runtime.jsx)(Content,{items:items,ListComponent:ListComponent,yearGroupHeadingClassName:styles_module.yearGroupHeading})]})});}/* harmony default export */ const Desktop = (/*#__PURE__*/(0,react.memo)(BlogSidebarDesktop));
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(5600);
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Mobile/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Mobile_styles_module = ({"yearGroupHeading":"yearGroupHeading_QT03"});
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Mobile_ListComponent=_ref=>{let{items}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(client/* BlogSidebarItemList */.OU,{items:items,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"});};function BlogSidebarMobileSecondaryMenu(_ref2){let{sidebar}=_ref2;const items=(0,client/* useVisibleBlogSidebarItems */.Gx)(sidebar.items);return/*#__PURE__*/(0,jsx_runtime.jsx)(Content,{items:items,ListComponent:Mobile_ListComponent,yearGroupHeadingClassName:Mobile_styles_module.yearGroupHeading});}function BlogSidebarMobile(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(content/* NavbarSecondaryMenuFiller */.GX,{component:BlogSidebarMobileSecondaryMenu,props:props});}/* harmony default export */ const Mobile = (/*#__PURE__*/(0,react.memo)(BlogSidebarMobile));
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebar(_ref){let{sidebar}=_ref;const windowSize=(0,useWindowSize/* useWindowSize */.l)();if(!sidebar?.items.length){return null;}// Mobile sidebar doesn't need to be server-rendered
if(windowSize==='mobile'){return/*#__PURE__*/(0,jsx_runtime.jsx)(Mobile,{sidebar:sidebar});}return/*#__PURE__*/(0,jsx_runtime.jsx)(Desktop,{sidebar:sidebar});}
;// ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogLayout(props){const{sidebar,toc,children,...layoutProps}=props;const hasSidebar=sidebar&&sidebar.items.length>0;return/*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* default */.A,{...layoutProps,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container margin-vert--lg",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"row",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(BlogSidebar,{sidebar:sidebar}),/*#__PURE__*/(0,jsx_runtime.jsx)("main",{className:(0,clsx/* default */.A)('col',{'col--7':hasSidebar,'col--9 col--offset-1':!hasSidebar}),children:children}),toc&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"col col--2",children:toc})]})})});}

/***/ }),

/***/ 5846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ usePluralForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://twitter.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms=['zero','one','two','few','many','other'];function sortPluralForms(pluralForms){return OrderedPluralForms.filter(pf=>pluralForms.includes(pf));}// Hardcoded english/fallback implementation
const EnglishPluralForms={locale:'en',pluralForms:sortPluralForms(['one','other']),select:count=>count===1?'one':'other'};function createLocalePluralForms(locale){const pluralRules=new Intl.PluralRules(locale);return{locale,pluralForms:sortPluralForms(pluralRules.resolvedOptions().pluralCategories),select:count=>pluralRules.select(count)};}/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */function useLocalePluralForms(){const{i18n:{currentLocale}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{try{return createLocalePluralForms(currentLocale);}catch(err){console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);return EnglishPluralForms;}},[currentLocale]);}function selectPluralMessage(pluralMessages,count,localePluralForms){const separator='|';const parts=pluralMessages.split(separator);if(parts.length===1){return parts[0];}if(parts.length>localePluralForms.pluralForms.length){console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);}const pluralForm=localePluralForms.select(count);const pluralFormIndex=localePluralForms.pluralForms.indexOf(pluralForm);// In case of not enough plural form messages, we take the last one (other)
// instead of returning undefined
return parts[Math.min(pluralFormIndex,parts.length-1)];}/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */function usePluralForm(){const localePluralForm=useLocalePluralForms();return{selectMessage:(count,pluralMessages)=>selectPluralMessage(pluralMessages,count,localePluralForm)};}

/***/ })

}]);