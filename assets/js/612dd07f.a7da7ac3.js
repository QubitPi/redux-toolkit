"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6091],{3411:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7378),r=n(7140),l="tabItem_wHwb";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},2453:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(2685),r=n(7378),l=n(7140),i=n(362),o=n(56),u=n(5720),d=n(9169),s="tabList_J5MA",m="tabItem_l0OV";function c(e){var t,n,i=e.lazy,c=e.block,p=e.defaultValue,f=e.values,b=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,u.U)(),x=k.tabGroupChoices,S=k.setTabGroupChoices,N=(0,r.useState)(y),I=N[0],M=N[1],T=[],j=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var O=x[b];null!=O&&O!==I&&g.some((function(e){return e.value===O}))&&M(O)}var D=function(e){var t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==I&&(j(t),M(a),null!=b&&S(b,String(a)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=T.indexOf(e.currentTarget)+1;n=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var l,i=T.indexOf(e.currentTarget)-1;n=null!=(l=T[i])?l:T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:D,onClick:D},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function p(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},9174:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return p}});var a=n(2685),r=n(1244),l=(n(7378),n(5318)),i=n(3411),o=n(2453),u=["components"],d={id:"immutabilityMiddleware",title:"Immutability Middleware",sidebar_label:"Immutability Middleware",hide_title:!0},s=void 0,m={unversionedId:"api/immutabilityMiddleware",id:"api/immutabilityMiddleware",title:"Immutability Middleware",description:"&nbsp;",source:"@site/../docs/api/immutabilityMiddleware.mdx",sourceDirName:"api",slug:"/api/immutabilityMiddleware",permalink:"/api/immutabilityMiddleware",draft:!1,tags:[],version:"current",lastUpdatedAt:1716195420,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"immutabilityMiddleware",title:"Immutability Middleware",sidebar_label:"Immutability Middleware",hide_title:!0},sidebar:"docs",previous:{title:"getDefaultMiddleware",permalink:"/api/getDefaultMiddleware"},next:{title:"Serializability Middleware",permalink:"/api/serializabilityMiddleware"}},c={},p=[{value:"Options",id:"options",level:2},{value:"Exports",id:"exports",level:2},{value:"<code>createImmutableStateInvariantMiddleware</code>",id:"createimmutablestateinvariantmiddleware",level:3},{value:"<code>isImmutableDefault</code>",id:"isimmutabledefault",level:3}],f={toc:p};function b(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"immutability-middleware"},"Immutability Middleware"),(0,l.kt)("p",null,"A port of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/leoasis/redux-immutable-state-invariant"},(0,l.kt)("inlineCode",{parentName:"a"},"redux-immutable-state-invariant"))," middleware, customized for use with Redux Toolkit. Any detected mutations will be thrown as errors."),(0,l.kt)("p",null,"This middleware is added to the store by default by ",(0,l.kt)("a",{parentName:"p",href:"/api/configureStore"},(0,l.kt)("inlineCode",{parentName:"a"},"configureStore"))," and ",(0,l.kt)("a",{parentName:"p",href:"/api/getDefaultMiddleware"},(0,l.kt)("inlineCode",{parentName:"a"},"getDefaultMiddleware")),"."),(0,l.kt)("p",null,"You can customize the behavior of this middleware by passing any of the supported options as the ",(0,l.kt)("inlineCode",{parentName:"p"},"immutableCheck")," value for ",(0,l.kt)("inlineCode",{parentName:"p"},"getDefaultMiddleware"),"."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"type IsImmutableFunc = (value: any) => boolean\n\ninterface ImmutableStateInvariantMiddlewareOptions {\n  /**\n    Callback function to check if a value is considered to be immutable.\n    This function is applied recursively to every value contained in the state.\n    The default implementation will return true for primitive types \n    (like numbers, strings, booleans, null and undefined).\n   */\n  isImmutable?: IsImmutableFunc\n  /** \n    An array of dot-separated path strings or RegExps that match named nodes from \n    the root state to ignore when checking for immutability.\n    Defaults to undefined\n   */\n  ignoredPaths?: (string | RegExp)[]\n  /** Print a warning if checks take longer than N ms. Default: 32ms */\n  warnAfter?: number\n}\n")),(0,l.kt)("h2",{id:"exports"},"Exports"),(0,l.kt)("h3",{id:"createimmutablestateinvariantmiddleware"},(0,l.kt)("inlineCode",{parentName:"h3"},"createImmutableStateInvariantMiddleware")),(0,l.kt)("p",null,"Creates an instance of the immutability check middleware, with the given options."),(0,l.kt)("p",null,"You will most likely not need to call this yourself, as ",(0,l.kt)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," already does so."),(0,l.kt)("p",null,"Example:"),(0,l.kt)(o.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// file: exampleSlice.ts\nimport { createSlice } from '@reduxjs/toolkit'\n\nexport const exampleSlice = createSlice({\n  name: 'example',\n  initialState: {\n    user: 'will track changes',\n    ignoredPath: 'single level',\n    ignoredNested: {\n      one: 'one',\n      two: 'two',\n    },\n  },\n  reducers: {},\n})\n\nexport default exampleSlice.reducer\n\n\n// file: store.ts\nimport {\n  configureStore,\n  createImmutableStateInvariantMiddleware,\n  Tuple,\n} from '@reduxjs/toolkit'\n\nimport exampleSliceReducer from './exampleSlice'\n\nconst immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({\n  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],\n})\n\nconst store = configureStore({\n  reducer: exampleSliceReducer,\n  // Note that this will replace all default middleware\n  middleware: () => new Tuple(immutableInvariantMiddleware),\n})\n"))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// file: exampleSlice.js\nimport { createSlice } from '@reduxjs/toolkit'\n\nexport const exampleSlice = createSlice({\n  name: 'example',\n  initialState: {\n    user: 'will track changes',\n    ignoredPath: 'single level',\n    ignoredNested: {\n      one: 'one',\n      two: 'two',\n    },\n  },\n  reducers: {},\n})\n\nexport default exampleSlice.reducer\n\n\n// file: store.js\nimport {\n  configureStore,\n  createImmutableStateInvariantMiddleware,\n  Tuple,\n} from '@reduxjs/toolkit'\n\nimport exampleSliceReducer from './exampleSlice'\n\nconst immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({\n  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],\n})\n\nconst store = configureStore({\n  reducer: exampleSliceReducer,\n  // Note that this will replace all default middleware\n  middleware: () => new Tuple(immutableInvariantMiddleware),\n})\n")))),(0,l.kt)("p",null,"doing the same without removing all other middlewares, using ",(0,l.kt)("a",{parentName:"p",href:"./getDefaultMiddleware"},"getDetfaultMiddleware"),":"),(0,l.kt)(o.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { configureStore } from '@reduxjs/toolkit'\n\nimport exampleSliceReducer from './exampleSlice'\n\nconst store = configureStore({\n  reducer: exampleSliceReducer,\n  // This replaces the original default middleware with the customized versions\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware({\n      immutableCheck: {\n        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],\n      },\n    }),\n})\n"))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit'\n\nimport exampleSliceReducer from './exampleSlice'\n\nconst store = configureStore({\n  reducer: exampleSliceReducer,\n  // This replaces the original default middleware with the customized versions\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware({\n      immutableCheck: {\n        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],\n      },\n    }),\n})\n")))),(0,l.kt)("h3",{id:"isimmutabledefault"},(0,l.kt)("inlineCode",{parentName:"h3"},"isImmutableDefault")),(0,l.kt)("p",null,'Default implementation of the "is this value immutable?" check. Currently implemented as:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"return (\n  typeof value !== 'object' || value === null || typeof value === 'undefined'\n)\n")),(0,l.kt)("p",null,"This will return true for primitive types (like numbers, strings, booleans, null and undefined)"))}b.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),p=r,f=c["".concat(u,".").concat(p)]||c[p]||m[p]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);