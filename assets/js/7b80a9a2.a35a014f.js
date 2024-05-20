"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3291],{3411:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7378),o=n(7140),a="tabItem_wHwb";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},2453:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(2685),o=n(7378),a=n(7140),i=n(362),u=n(56),l=n(5720),c=n(9169),s="tabList_J5MA",p="tabItem_l0OV";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,f=e.values,y=e.groupId,k=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,u.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,l.U)(),x=C.tabGroupChoices,M=C.setTabGroupChoices,w=(0,o.useState)(h),S=w[0],N=w[1],T=[],A=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var z=x[y];null!=z&&z!==S&&b.some((function(e){return e.value===z}))&&N(z)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==S&&(A(t),N(r),null!=y&&M(y,String(r)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=T.indexOf(e.currentTarget)+1;n=null!=(r=T[o])?r:T[0];break;case"ArrowLeft":var a,i=T.indexOf(e.currentTarget)-1;n=null!=(a=T[i])?a:T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},k)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:j,onClick:j},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(g.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function m(e){var t=(0,i.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},1276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(2685),o=n(1244),a=(n(7378),n(5318)),i=n(3411),u=n(2453),l=["components"],c={id:"customizing-create-api",title:"Customizing createApi",sidebar_label:"Customizing createApi",hide_title:!0,description:"RTK Query > Usage > Customizing createApi: adding customized variations"},s=void 0,p={unversionedId:"rtk-query/usage/customizing-create-api",id:"rtk-query/usage/customizing-create-api",title:"Customizing createApi",description:"RTK Query > Usage > Customizing createApi: adding customized variations",source:"@site/../docs/rtk-query/usage/customizing-create-api.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/customizing-create-api",permalink:"/rtk-query/usage/customizing-create-api",draft:!1,tags:[],version:"current",lastUpdatedAt:1716195420,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"customizing-create-api",title:"Customizing createApi",sidebar_label:"Customizing createApi",hide_title:!0,description:"RTK Query > Usage > Customizing createApi: adding customized variations"},sidebar:"docs",previous:{title:"Persistence and Rehydration",permalink:"/rtk-query/usage/persistence-and-rehydration"},next:{title:"Customizing Queries",permalink:"/rtk-query/usage/customizing-queries"}},d={},m=[{value:"Customizing the React-Redux Hooks",id:"customizing-the-react-redux-hooks",level:2},{value:"Customizing <code>createSelector</code> for RTKQ",id:"customizing-createselector-for-rtkq",level:2},{value:"Creating your own module",id:"creating-your-own-module",level:2}],f={toc:m};function y(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"customizing-createapi"},"Customizing ",(0,a.kt)("inlineCode",{parentName:"h1"},"createApi")),(0,a.kt)("p",null,"Currently, RTK Query includes two variants of ",(0,a.kt)("inlineCode",{parentName:"p"},"createApi"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"createBaseApi"),", which contains only the UI-agnostic Redux logic (the core module)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"createApi"),", which contains both the core and React hooks modules")),(0,a.kt)("p",null,"You can create your own versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"createApi")," by either specifying non-default options for the modules or by adding your own modules."),(0,a.kt)("h2",{id:"customizing-the-react-redux-hooks"},"Customizing the React-Redux Hooks"),(0,a.kt)("p",null,"If you want the hooks to use different versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"useSelector"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useDispatch")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useStore"),", such as if you are using a custom context, you can pass these in at module creation:"),(0,a.kt)(u.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react'\nimport {\n  createDispatchHook,\n  createSelectorHook,\n  createStoreHook,\n  ReactReduxContextValue,\n} from 'react-redux'\nimport {\n  buildCreateApi,\n  coreModule,\n  reactHooksModule,\n} from '@reduxjs/toolkit/query/react'\n\nconst MyContext = React.createContext<ReactReduxContextValue | null>(null)\nconst customCreateApi = buildCreateApi(\n  coreModule(),\n  reactHooksModule({\n    hooks: {\n      useDispatch: createDispatchHook(MyContext),\n      useSelector: createSelectorHook(MyContext),\n      useStore: createStoreHook(MyContext),\n    },\n  })\n)\n"))),(0,a.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react'\nimport {\n  createDispatchHook,\n  createSelectorHook,\n  createStoreHook,\n} from 'react-redux'\nimport {\n  buildCreateApi,\n  coreModule,\n  reactHooksModule,\n} from '@reduxjs/toolkit/query/react'\n\nconst MyContext = React.createContext(null)\nconst customCreateApi = buildCreateApi(\n  coreModule(),\n  reactHooksModule({\n    hooks: {\n      useDispatch: createDispatchHook(MyContext),\n      useSelector: createSelectorHook(MyContext),\n      useStore: createStoreHook(MyContext),\n    },\n  })\n)\n")))),(0,a.kt)("h2",{id:"customizing-createselector-for-rtkq"},"Customizing ",(0,a.kt)("inlineCode",{parentName:"h2"},"createSelector")," for RTKQ"),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"coreModule")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"reactHooksModule")," accept a ",(0,a.kt)("inlineCode",{parentName:"p"},"createSelector")," option which should be a selector creator instance from Reselect or with an equivalent signature."),(0,a.kt)(u.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import * as React from 'react'\nimport { createSelectorCreator, lruMemoize } from '@reduxjs/toolkit'\nimport {\n  buildCreateApi,\n  coreModule,\n  reactHooksModule,\n} from '@reduxjs/toolkit/query/react'\n\nconst createLruSelector = createSelectorCreator(lruMemoize)\n\nconst customCreateApi = buildCreateApi(\n  coreModule({ createSelector: createLruSelector }),\n  reactHooksModule({ createSelector: createLruSelector })\n)\n"))),(0,a.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { createSelectorCreator, lruMemoize } from '@reduxjs/toolkit'\nimport {\n  buildCreateApi,\n  coreModule,\n  reactHooksModule,\n} from '@reduxjs/toolkit/query/react'\n\nconst createLruSelector = createSelectorCreator(lruMemoize)\n\nconst customCreateApi = buildCreateApi(\n  coreModule({ createSelector: createLruSelector }),\n  reactHooksModule({ createSelector: createLruSelector })\n)\n")))),(0,a.kt)("h2",{id:"creating-your-own-module"},"Creating your own module"),(0,a.kt)("p",null,"If you want to create your own module, you should review ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-toolkit/blob/b74a52935a5840bebca5acdc8e2265e3b6497afa/src/query/react/module.ts"},"the react-hooks module")," to see what an implementation would look like."),(0,a.kt)("p",null,"Here is a very stripped down version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"import { CoreModule } from '@internal/core/module'\nimport {\n  BaseQueryFn,\n  EndpointDefinitions,\n  Api,\n  Module,\n  buildCreateApi,\n  coreModule,\n} from '@reduxjs/toolkit/query'\n\nexport const customModuleName = Symbol()\nexport type CustomModule = typeof customModuleName\n\ndeclare module '../apiTypes' {\n  export interface ApiModules<\n    BaseQuery extends BaseQueryFn,\n    Definitions extends EndpointDefinitions,\n    ReducerPath extends string,\n    TagTypes extends string,\n  > {\n    [customModuleName]: {\n      endpoints: {\n        [K in keyof Definitions]: {\n          myEndpointProperty: string\n        }\n      }\n    }\n  }\n}\n\nexport const myModule = (): Module<CustomModule> => ({\n  name: customModuleName,\n  init(api, options, context) {\n    // initialize stuff here if you need to\n\n    return {\n      injectEndpoint(endpoint, definition) {\n        const anyApi = api as any as Api<\n          any,\n          Record<string, any>,\n          string,\n          string,\n          CustomModule | CoreModule\n        >\n        anyApi.endpoints[endpoint].myEndpointProperty = 'test'\n      },\n    }\n  },\n})\n\nexport const myCreateApi = buildCreateApi(coreModule(), myModule())\n")))}y.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);