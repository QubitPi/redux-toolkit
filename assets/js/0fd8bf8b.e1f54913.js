"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[350],{3411:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7378),a=n(7140),i="tabItem_wHwb";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},2453:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(2685),a=n(7378),i=n(7140),l=n(362),o=n(56),u=n(5720),s=n(9169),c="tabList_J5MA",d="tabItem_l0OV";function p(e){var t,n,l=e.lazy,p=e.block,m=e.defaultValue,h=e.values,f=e.groupId,k=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,u.U)(),w=g.tabGroupChoices,T=g.setTabGroupChoices,C=(0,a.useState)(N),O=C[0],E=C[1],S=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=w[f];null!=j&&j!==O&&b.some((function(e){return e.value===j}))&&E(j)}var A=function(e){var t=e.currentTarget,n=S.indexOf(t),r=b[n].value;r!==O&&(x(t),E(r),null!=f&&T(f,String(r)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=S.indexOf(e.currentTarget)+1;n=null!=(r=S[a])?r:S[0];break;case"ArrowLeft":var i,l=S.indexOf(e.currentTarget)-1;n=null!=(i=S[l])?i:S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},k)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return S.push(e)},onKeyDown:D,onFocus:A,onClick:A},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},4818:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=n(2685),a=n(1244),i=(n(7378),n(5318)),l=(n(3411),n(2453),["components"]),o={},u="RTKQ internal",s={unversionedId:"rtk-query/internal/overview",id:"rtk-query/internal/overview",title:"RTKQ internal",description:"Overview",source:"@site/../docs/rtk-query/internal/overview.mdx",sourceDirName:"rtk-query/internal",slug:"/rtk-query/internal/overview",permalink:"/rtk-query/internal/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1716193556,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"createApi - The Entry Point",id:"createapi---the-entry-point",level:2},{value:"Core Module",id:"core-module",level:2},{value:"buildThunks",id:"buildthunks",level:3},{value:"buildSlice",id:"buildslice",level:3},{value:"buildMiddleware",id:"buildmiddleware",level:3},{value:"buildSelectors",id:"buildselectors",level:3},{value:"return",id:"return",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rtkq-internal"},"RTKQ internal"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"RTK Query is a powerful data fetching and caching tool built on top of Redux Toolkit. It is designed to simplify the process of fetching, caching, and updating server state in your application. It is built on top of Redux Toolkit and uses Redux internally.")),(0,i.kt)("p",null,"This documentation is intended to provide a high-level overview of the internal architecture of RTK-Query. It is not intended to be a comprehensive guide to the library, but rather a guide to the internal architecture and how it works."),(0,i.kt)("h2",{id:"createapi---the-entry-point"},"createApi - The Entry Point"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"createApi()")," is called it takes the options provided and calls internally the ",(0,i.kt)("inlineCode",{parentName:"p"},"buildCreateApi()")," function passing into it two modules:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Modules are RTK-Query's method of customizing how the ",(0,i.kt)("inlineCode",{parentName:"em"},"createApi")," method handles endpoints.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"coreModule()")," - responsible for the majority of the internal handling using core redux logic i.e. slices, reducers, asyncThunks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reactHooksModule()")," - a module that generates react hooks from endpoints using react-redux")),(0,i.kt)("h2",{id:"core-module"},"Core Module"),(0,i.kt)("p",null,"The core module takes the ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," and the options passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"createApi()"),'. In turn an internal set of "build" methods are called. Each of these build methods create a set of functions which are assigned to either ',(0,i.kt)("inlineCode",{parentName:"p"},"api.util")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"api.internalActions"),' and/or passed to a future "build" step.'),(0,i.kt)("h3",{id:"buildthunks"},"buildThunks"),(0,i.kt)("p",null,"RTK-Query's internal functionality operates using the same ",(0,i.kt)("inlineCode",{parentName:"p"},"asyncThunk"),' exposed from RTK. In the first "build" method, a number of thunks are generated for the core module to use:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queryThunk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mutationThunk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"patchedQueryData")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"updateQueryData")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"upsertQueryData")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefetch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"buildMatchThunkActions"))),(0,i.kt)("h3",{id:"buildslice"},"buildSlice"),(0,i.kt)("p",null,"RTK-Query uses a very familiar redux-centric architecture. Where the ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," is a slice of your store, the ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," has its own slices created within it. These slices are where the majority of the RTKQ magic happens."),(0,i.kt)("p",null,'The slices built inside this "build" are:\n',(0,i.kt)("em",{parentName:"p"},"Some of which have their own actions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"querySlice"),(0,i.kt)("li",{parentName:"ul"},"mutationSlice"),(0,i.kt)("li",{parentName:"ul"},"invalidationSlice"),(0,i.kt)("li",{parentName:"ul"},"subscriptionSlice (used as a dummy slice to generate actions internally)"),(0,i.kt)("li",{parentName:"ul"},"internalSubscriptionsSlice"),(0,i.kt)("li",{parentName:"ul"},"configSlice (internal tracking of focus state, online state, hydration etc)")),(0,i.kt)("p",null,"buildSlice also exposes the core action ",(0,i.kt)("inlineCode",{parentName:"p"},"resetApiState")," which is subsequently added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.util")),(0,i.kt)("h3",{id:"buildmiddleware"},"buildMiddleware"),(0,i.kt)("p",null,"RTK-Query has a series of custom middlewares established within its store to handle additional responses in addition to the core logic established within the slices from buildSlice."),(0,i.kt)("p",null,'Each middleware built during this step is referred to internally as a "Handler" and are as follows:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"`buildDevCheckHandler"),(0,i.kt)("li",{parentName:"ul"},"`buildCacheCollectionHandler"),(0,i.kt)("li",{parentName:"ul"},"`buildInvalidationByTagsHandler"),(0,i.kt)("li",{parentName:"ul"},"`buildPollingHandler"),(0,i.kt)("li",{parentName:"ul"},"`buildCacheLifecycleHandler"),(0,i.kt)("li",{parentName:"ul"},"`buildQueryLifecycleHandler")),(0,i.kt)("h3",{id:"buildselectors"},"buildSelectors"),(0,i.kt)("p",null,"build selectors is a crucial step that exposes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," and utils:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"`buildQuerySelector"),(0,i.kt)("li",{parentName:"ul"},"`buildMutationSelector"),(0,i.kt)("li",{parentName:"ul"},"`selectInvalidatedBy"),(0,i.kt)("li",{parentName:"ul"},"`selectCachedArgsForQuery")),(0,i.kt)("h3",{id:"return"},"return"),(0,i.kt)("p",null,"Finally each endpoint passed into the ",(0,i.kt)("inlineCode",{parentName:"p"},"createApi()")," is iterated over and assigned either the query or the mutation selectors, initiators and match cases."))}m.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);