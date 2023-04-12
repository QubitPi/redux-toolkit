"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2747],{3411:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7378),r=a(7140),l="tabItem_wHwb";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},2453:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(2685),r=a(7378),l=a(7140),i=a(362),o=a(56),u=a(5720),d=a(9169),s="tabList_J5MA",c="tabItem_l0OV";function p(e){var t,a,i=e.lazy,p=e.block,m=e.defaultValue,f=e.values,h=e.groupId,g=e.className,w=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:w.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(a=w.find((function(e){return e.props.default})))?void 0:a.props.value)?t:w[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),N=y.tabGroupChoices,S=y.setTabGroupChoices,x=(0,r.useState)(b),M=x[0],D=x[1],O=[],T=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=N[h];null!=C&&C!==M&&v.some((function(e){return e.value===C}))&&D(C)}var I=function(e){var t=e.currentTarget,a=O.indexOf(t),n=v[a].value;n!==M&&(T(t),D(n),null!=h&&S(h,String(n)))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=O.indexOf(e.currentTarget)+1;a=null!=(n=O[r])?n:O[0];break;case"ArrowLeft":var l,i=O.indexOf(e.currentTarget)-1;a=null!=(l=O[i])?l:O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},g)},v.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:M===t?0:-1,"aria-selected":M===t,key:t,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":M===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(w.filter((function(e){return e.props.value===M}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==M})}))))}function m(e){var t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},3451:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return m}});var n=a(2685),r=a(1244),l=(a(7378),a(5318)),i=a(3411),o=a(2453),u=["components"],d={id:"getDefaultMiddleware",title:"getDefaultMiddleware",sidebar_label:"getDefaultMiddleware",hide_title:!0},s=void 0,c={unversionedId:"api/getDefaultMiddleware",id:"api/getDefaultMiddleware",title:"getDefaultMiddleware",description:"&nbsp;",source:"@site/../docs/api/getDefaultMiddleware.mdx",sourceDirName:"api",slug:"/api/getDefaultMiddleware",permalink:"/redux-toolkit/api/getDefaultMiddleware",draft:!1,tags:[],version:"current",lastUpdatedAt:1681260993,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{id:"getDefaultMiddleware",title:"getDefaultMiddleware",sidebar_label:"getDefaultMiddleware",hide_title:!0},sidebar:"docs",previous:{title:"configureStore",permalink:"/redux-toolkit/api/configureStore"},next:{title:"Immutability Middleware",permalink:"/redux-toolkit/api/immutabilityMiddleware"}},p={},m=[{value:"Intended Usage",id:"intended-usage",level:2},{value:"Included Default Middleware",id:"included-default-middleware",level:2},{value:"Development",id:"development",level:3},{value:"Production",id:"production",level:3},{value:"Customizing the Included Middleware",id:"customizing-the-included-middleware",level:2},{value:"API Reference",id:"api-reference",level:2}],f={toc:m};function h(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getdefaultmiddleware"},(0,l.kt)("inlineCode",{parentName:"h1"},"getDefaultMiddleware")),(0,l.kt)("p",null,"Returns an array containing the default list of middleware."),(0,l.kt)("h2",{id:"intended-usage"},"Intended Usage"),(0,l.kt)("p",null,"By default, ",(0,l.kt)("a",{parentName:"p",href:"/redux-toolkit/api/configureStore"},(0,l.kt)("inlineCode",{parentName:"a"},"configureStore"))," adds some middleware to the Redux store setup automatically."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const store = configureStore({\n  reducer: rootReducer,\n})\n\n// Store has middleware added, because the middleware list was not customized\n")),(0,l.kt)("p",null,"If you want to customize the list of middleware, you can supply an array of middleware functions to ",(0,l.kt)("inlineCode",{parentName:"p"},"configureStore"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const store = configureStore({\n  reducer: rootReducer,\n  middleware: [thunk, logger],\n})\n\n// Store specifically has the thunk and logger middleware applied\n")),(0,l.kt)("p",null,"However, when you supply the ",(0,l.kt)("inlineCode",{parentName:"p"},"middleware")," option, you are responsible for defining ",(0,l.kt)("em",{parentName:"p"},"all")," the middleware you want added\nto the store. ",(0,l.kt)("inlineCode",{parentName:"p"},"configureStore")," will not add any extra middleware beyond what you listed."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," is useful if you want to add some custom middleware, but also still want to have the default\nmiddleware added as well:"),(0,l.kt)(o.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { configureStore } from '@reduxjs/toolkit'\n\nimport logger from 'redux-logger'\n\nimport rootReducer from './reducer'\n\nconst store = configureStore({\n  reducer: rootReducer,\n  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),\n})\n\n// Store has all of the default middleware added, _plus_ the logger middleware\n"))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit'\n\nimport logger from 'redux-logger'\n\nimport rootReducer from './reducer'\n\nconst store = configureStore({\n  reducer: rootReducer,\n  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),\n})\n\n// Store has all of the default middleware added, _plus_ the logger middleware\n")))),(0,l.kt)("p",null,"It is preferable to use the chainable ",(0,l.kt)("inlineCode",{parentName:"p"},".concat(...)")," and ",(0,l.kt)("inlineCode",{parentName:"p"},".prepend(...)")," methods of the returned ",(0,l.kt)("inlineCode",{parentName:"p"},"MiddlewareArray")," instead of the array spread operator, as the latter can lose valuable type information under some circumstances."),(0,l.kt)("h2",{id:"included-default-middleware"},"Included Default Middleware"),(0,l.kt)("h3",{id:"development"},"Development"),(0,l.kt)("p",null,"One of the goals of Redux Toolkit is to provide opinionated defaults and prevent common mistakes. As part of that,\n",(0,l.kt)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," includes some middleware that are added ",(0,l.kt)("strong",{parentName:"p"},"in development builds of your app only")," to\nprovide runtime checks for two common issues:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/redux-toolkit/api/immutabilityMiddleware"},"Immutability check middleware"),": deeply compares\nstate values for mutations. It can detect mutations in reducers during a dispatch, and also mutations that occur between\ndispatches (such as in a component or a selector). When a mutation is detected, it will throw an error and indicate the key\npath for where the mutated value was detected in the state tree. (Forked from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/leoasis/redux-immutable-state-invariant"},(0,l.kt)("inlineCode",{parentName:"a"},"redux-immutable-state-invariant")),".)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/redux-toolkit/api/serializabilityMiddleware"},"Serializability check middleware"),": a custom middleware created specifically for use in Redux Toolkit. Similar in\nconcept to ",(0,l.kt)("inlineCode",{parentName:"p"},"immutable-state-invariant"),", but deeply checks your state tree and your actions for non-serializable values\nsuch as functions, Promises, Symbols, and other non-plain-JS-data values. When a non-serializable value is detected, a\nconsole error will be printed with the key path for where the non-serializable value was detected."))),(0,l.kt)("p",null,"In addition to these development tool middleware, it also adds ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-thunk"},(0,l.kt)("inlineCode",{parentName:"a"},"redux-thunk")),"\nby default, since thunks are the basic recommended side effects middleware for Redux."),(0,l.kt)("p",null,"Currently, the return value is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const middleware = [thunk, immutableStateInvariant, serializableStateInvariant]\n")),(0,l.kt)("h3",{id:"production"},"Production"),(0,l.kt)("p",null,"Currently, the return value is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const middleware = [thunk]\n")),(0,l.kt)("h2",{id:"customizing-the-included-middleware"},"Customizing the Included Middleware"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"getDefaultMiddleware")," accepts an options object that allows customizing each middleware in two ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Each middleware can be excluded the result array by passing ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," for its corresponding field"),(0,l.kt)("li",{parentName:"ul"},"Each middleware can have its options customized by passing the matching options object for its corresponding field")),(0,l.kt)("p",null,'This example shows excluding the serializable state check middleware, and passing a specific value for the thunk\nmiddleware\'s "extra argument":'),(0,l.kt)(o.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { configureStore } from '@reduxjs/toolkit'\nimport rootReducer from './reducer'\nimport { myCustomApiService } from './api'\n\nconst store = configureStore({\n  reducer: rootReducer,\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware({\n      thunk: {\n        extraArgument: myCustomApiService,\n      },\n      serializableCheck: false,\n    }),\n})\n"))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { configureStore } from '@reduxjs/toolkit'\nimport rootReducer from './reducer'\nimport { myCustomApiService } from './api'\n\nconst store = configureStore({\n  reducer: rootReducer,\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware({\n      thunk: {\n        extraArgument: myCustomApiService,\n      },\n      serializableCheck: false,\n    }),\n})\n")))),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},'interface ThunkOptions<E = any> {\n  extraArgument: E\n}\n\ninterface ImmutableStateInvariantMiddlewareOptions {\n  // See "Immutability Middleware" page for definition\n}\n\ninterface SerializableStateInvariantMiddlewareOptions {\n  // See "Serializability Middleware" page for definition\n}\n\ninterface GetDefaultMiddlewareOptions {\n  thunk?: boolean | ThunkOptions\n  immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions\n  serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions\n}\n\nfunction getDefaultMiddleware<S = any>(\n  options: GetDefaultMiddlewareOptions = {}\n): Middleware<{}, S>[]\n')))}h.isMDXComponent=!0},5318:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);