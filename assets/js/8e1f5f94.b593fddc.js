"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9489],{3411:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7378),a=r(7140),i="tabItem_wHwb";function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:r},t)}},2453:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(2685),a=r(7378),i=r(7140),o=r(362),l=r(56),u=r(5720),c=r(9169),d="tabList_J5MA",s="tabItem_l0OV";function p(e){var t,r,o=e.lazy,p=e.block,m=e.defaultValue,f=e.values,g=e.groupId,h=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:v[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),x=w.tabGroupChoices,N=w.setTabGroupChoices,A=(0,a.useState)(y),O=A[0],T=A[1],P=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var j=x[g];null!=j&&j!==O&&k.some((function(e){return e.value===j}))&&T(j)}var E=function(e){var t=e.currentTarget,r=P.indexOf(t),n=k[r].value;n!==O&&(I(t),T(n),null!=g&&N(g,String(n)))},C=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=P.indexOf(e.currentTarget)+1;r=null!=(n=P[a])?n:P[0];break;case"ArrowLeft":var i,o=P.indexOf(e.currentTarget)-1;r=null!=(i=P[o])?i:P[P.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},h)},k.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return P.push(e)},onKeyDown:C,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},7814:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var n=r(2685),a=r(1244),i=(r(7378),r(5318)),o=r(3411),l=r(2453),u=["components"],c={id:"redux-integration",title:"API Slices: Redux Integration",sidebar_label:"Redux Integration",hide_title:!0},d=void 0,s={unversionedId:"rtk-query/api/created-api/redux-integration",id:"rtk-query/api/created-api/redux-integration",title:"API Slices: Redux Integration",description:"&nbsp;",source:"@site/../docs/rtk-query/api/created-api/redux-integration.mdx",sourceDirName:"rtk-query/api/created-api",slug:"/rtk-query/api/created-api/redux-integration",permalink:"/redux-toolkit/rtk-query/api/created-api/redux-integration",draft:!1,tags:[],version:"current",lastUpdatedAt:1681260993,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{id:"redux-integration",title:"API Slices: Redux Integration",sidebar_label:"Redux Integration",hide_title:!0},sidebar:"docs",previous:{title:"API Slice Overview",permalink:"/redux-toolkit/rtk-query/api/created-api/overview"},next:{title:"Endpoints",permalink:"/redux-toolkit/rtk-query/api/created-api/endpoints"}},p={},m=[{value:"<code>reducerPath</code>",id:"reducerpath",level:2},{value:"<code>reducer</code>",id:"reducer",level:2},{value:"<code>middleware</code>",id:"middleware",level:2}],f={toc:m};function g(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-slices-redux-integration"},"API Slices: Redux Integration"),(0,i.kt)("p",null,"Internally, ",(0,i.kt)("inlineCode",{parentName:"p"},"createApi")," will call ",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/createSlice"},"the Redux Toolkit ",(0,i.kt)("inlineCode",{parentName:"a"},"createSlice")," API")," to generate a slice reducer and corresponding action creators with the appropriate logic for caching fetched data. It also automatically generates a custom Redux middleware that manages subscription counts and cache lifetimes."),(0,i.kt)("p",null,"The generated slice reducer and the middleware both need to be added to your Redux store setup in ",(0,i.kt)("inlineCode",{parentName:"p"},"configureStore")," in order to work correctly:"),(0,i.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/store.ts"',title:'"src/store.ts"'},"import { configureStore } from '@reduxjs/toolkit'\nimport { setupListeners } from '@reduxjs/toolkit/query'\nimport { pokemonApi } from './services/pokemon'\n\nexport const store = configureStore({\n  reducer: {\n    // Add the generated reducer as a specific top-level slice\n    [pokemonApi.reducerPath]: pokemonApi.reducer,\n  },\n  // Adding the api middleware enables caching, invalidation, polling,\n  // and other useful features of `rtk-query`.\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().concat(pokemonApi.middleware),\n})\n\n// configure listeners using the provided defaults\nsetupListeners(store.dispatch)\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/store.ts"',title:'"src/store.ts"'},"import { configureStore } from '@reduxjs/toolkit'\nimport { setupListeners } from '@reduxjs/toolkit/query'\nimport { pokemonApi } from './services/pokemon'\n\nexport const store = configureStore({\n  reducer: {\n    // Add the generated reducer as a specific top-level slice\n    [pokemonApi.reducerPath]: pokemonApi.reducer,\n  },\n  // Adding the api middleware enables caching, invalidation, polling,\n  // and other useful features of `rtk-query`.\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().concat(pokemonApi.middleware),\n})\n\n// configure listeners using the provided defaults\nsetupListeners(store.dispatch)\n")))),(0,i.kt)("h2",{id:"reducerpath"},(0,i.kt)("inlineCode",{parentName:"h2"},"reducerPath")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"reducerPath: string\n")),(0,i.kt)("p",null,"Contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"reducerPath")," option provided to ",(0,i.kt)("inlineCode",{parentName:"p"},"createApi"),". Use this as the root state key when adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"reducer")," function to the store so that the rest of the generated API logic can find the state correctly."),(0,i.kt)("h2",{id:"reducer"},(0,i.kt)("inlineCode",{parentName:"h2"},"reducer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"reducer: Reducer\n")),(0,i.kt)("p",null,"A standard Redux slice reducer function containing the logic for updating the cached data. Add this to the Redux store using the ",(0,i.kt)("inlineCode",{parentName:"p"},"reducerPath")," you provided as the root state key."),(0,i.kt)("h2",{id:"middleware"},(0,i.kt)("inlineCode",{parentName:"h2"},"middleware")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"middleware: Middleware\n")),(0,i.kt)("p",null,"A custom Redux middleware that contains logic for managing caching, invalidation, subscriptions, polling, and more. Add this to the store setup after other middleware."))}g.isMDXComponent=!0},5318:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);