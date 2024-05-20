"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4134],{3411:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7378),r=n(7140),i="tabItem_wHwb";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},2453:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(2685),r=n(7378),i=n(7140),o=n(362),l=n(56),c=n(5720),u=n(9169),s="tabList_J5MA",p="tabItem_l0OV";function d(e){var t,n,o=e.lazy,d=e.block,h=e.defaultValue,m=e.values,f=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,c.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,B=(0,r.useState)(v),E=B[0],C=B[1],A=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=w[f];null!=S&&S!==E&&k.some((function(e){return e.value===S}))&&C(S)}var x=function(e){var t=e.currentTarget,n=A.indexOf(t),a=k[n].value;a!==E&&(O(t),C(a),null!=f&&T(f,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=A.indexOf(e.currentTarget)+1;n=null!=(a=A[r])?a:A[0];break;case"ArrowLeft":var i,o=A.indexOf(e.currentTarget)-1;n=null!=(i=A[o])?i:A[A.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return A.push(e)},onKeyDown:D,onFocus:x,onClick:x},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function h(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},8749:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var a=n(2685),r=n(1244),i=(n(7378),n(5318)),o=n(3411),l=n(2453),c=["components"],u={id:"autoBatchEnhancer",title:"autoBatchEnhancer",sidebar_label:"autoBatchEnhancer",hide_title:!0},s=void 0,p={unversionedId:"api/autoBatchEnhancer",id:"api/autoBatchEnhancer",title:"autoBatchEnhancer",description:"&nbsp;",source:"@site/../docs/api/autoBatchEnhancer.mdx",sourceDirName:"api",slug:"/api/autoBatchEnhancer",permalink:"/api/autoBatchEnhancer",draft:!1,tags:[],version:"current",lastUpdatedAt:1716193556,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"autoBatchEnhancer",title:"autoBatchEnhancer",sidebar_label:"autoBatchEnhancer",hide_title:!0},sidebar:"docs",previous:{title:"getDefaultEnhancers",permalink:"/api/getDefaultEnhancers"},next:{title:"createReducer",permalink:"/api/createReducer"}},d={},h=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"API",id:"api",level:2},{value:"<code>autoBatchEnhancer</code>",id:"autobatchenhancer-1",level:3},{value:"<code>prepareAutoBatched</code>",id:"prepareautobatched",level:3},{value:"Batching Approach and Background",id:"batching-approach-and-background",level:2},{value:"RTK Query and Batching",id:"rtk-query-and-batching",level:3}],m={toc:h};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"autobatchenhancer"},(0,i.kt)("inlineCode",{parentName:"h1"},"autoBatchEnhancer")),(0,i.kt)("p",null,'A Redux store enhancer that looks for one or more "low-priority" dispatched actions in a row, and queues a callback to run subscriber notifications on a delay. It then notifies subscribers either when the queued callback runs, or when the next "normal-priority" action is dispatched, whichever is first.'),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  createSlice,\n  configureStore,\n  autoBatchEnhancer,\n  prepareAutoBatched,\n} from '@reduxjs/toolkit'\n\ninterface CounterState {\n  value: number\n}\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 } satisfies CounterState as CounterState,\n  reducers: {\n    incrementBatched: {\n      // Batched, low-priority\n      reducer(state) {\n        state.value += 1\n      },\n      // highlight-start\n      // Use the `prepareAutoBatched` utility to automatically\n      // add the `action.meta[SHOULD_AUTOBATCH]` field the enhancer needs\n      prepare: prepareAutoBatched<void>(),\n      // highlight-end\n    },\n    // Not batched, normal priority\n    decrementUnbatched(state) {\n      state.value -= 1\n    },\n  },\n})\nconst { incrementBatched, decrementUnbatched } = counterSlice.actions\n\n// includes batch enhancer by default, as of RTK 2.0\nconst store = configureStore({\n  reducer: counterSlice.reducer,\n})\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  createSlice,\n  configureStore,\n  prepareAutoBatched,\n} from '@reduxjs/toolkit'\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    incrementBatched: {\n      // Batched, low-priority\n      reducer(state) {\n        state.value += 1\n      },\n      // highlight-start\n      // Use the `prepareAutoBatched` utility to automatically\n      // add the `action.meta[SHOULD_AUTOBATCH]` field the enhancer needs\n      prepare: prepareAutoBatched(),\n      // highlight-end\n    },\n    // Not batched, normal priority\n    decrementUnbatched(state) {\n      state.value -= 1\n    },\n  },\n})\nconst { incrementBatched, decrementUnbatched } = counterSlice.actions\n\n// includes batch enhancer by default, as of RTK 2.0\nconst store = configureStore({\n  reducer: counterSlice.reducer,\n})\n")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"autobatchenhancer-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"autoBatchEnhancer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="autoBatchEnhancer signature" no-transpile',title:'"autoBatchEnhancer','signature"':!0,"no-transpile":!0},"export type SHOULD_AUTOBATCH = string\ntype AutoBatchOptions =\n  | { type: 'tick' }\n  | { type: 'timer'; timeout: number }\n  | { type: 'raf' }\n  | { type: 'callback'; queueNotification: (notify: () => void) => void }\n\nexport type autoBatchEnhancer = (options?: AutoBatchOptions) => StoreEnhancer\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"As of RTK 2.0, the ",(0,i.kt)("inlineCode",{parentName:"p"},"autoBatchEnhancer")," is included by default when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"configureStore"),"."),(0,i.kt)("p",{parentName:"admonition"},"This means to configure it, you should instead pass an callback that receives ",(0,i.kt)("inlineCode",{parentName:"p"},"getDefaultEnhancers")," and calls it with your desired settings."),(0,i.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Configuring autoBatchEnhancer with getDefaultEnhancers"',title:'"Configuring',autoBatchEnhancer:!0,with:!0,'getDefaultEnhancers"':!0},"import { configureStore } from '@reduxjs/toolkit'\n\nconst store = configureStore({\n  reducer: () => 0,\n  enhancers: (getDefaultEnhancers) =>\n    getDefaultEnhancers({\n      autoBatch: { type: 'tick' },\n    }),\n})\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Configuring autoBatchEnhancer with getDefaultEnhancers"',title:'"Configuring',autoBatchEnhancer:!0,with:!0,'getDefaultEnhancers"':!0},"import { configureStore } from '@reduxjs/toolkit'\n\nconst store = configureStore({\n  reducer: () => 0,\n  enhancers: (getDefaultEnhancers) =>\n    getDefaultEnhancers({\n      autoBatch: { type: 'tick' },\n    }),\n})\n"))))),(0,i.kt)("p",null,"Creates a new instance of the autobatch store enhancer."),(0,i.kt)("p",null,"Any action that is tagged with ",(0,i.kt)("inlineCode",{parentName:"p"},"action.meta[SHOULD_AUTOBATCH] = true"),' will be treated as "low-priority", and a notification callback will be queued. The enhancer will delay notifying subscribers until either:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The queued callback runs and triggers the notifications"),(0,i.kt)("li",{parentName:"ul"},'A "normal-priority" action (any action ',(0,i.kt)("em",{parentName:"li"},"without")," ",(0,i.kt)("inlineCode",{parentName:"li"},"action.meta[SHOULD_AUTOBATCH] = true"),") is dispatched in the same tick")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"autoBatchEnhancer")," accepts options to configure how the notification callback is queued:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{type: 'raf'}"),": queues using ",(0,i.kt)("inlineCode",{parentName:"li"},"requestAnimationFrame")," (default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{type: 'tick'}"),": queues using ",(0,i.kt)("inlineCode",{parentName:"li"},"queueMicrotask")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{type: 'timer', timeout: number}"),": queues using ",(0,i.kt)("inlineCode",{parentName:"li"},"setTimeout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{type: 'callback', queueNotification: (notify: () => void) => void}"),": lets you provide your own callback, such as a debounced or throttled function")),(0,i.kt)("p",null,"The default behavior is to queue the notifications using ",(0,i.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOULD_AUTOBATCH")," value is meant to be opaque - it's currently a string for simplicity, but could be a ",(0,i.kt)("inlineCode",{parentName:"p"},"Symbol")," in the future."),(0,i.kt)("h3",{id:"prepareautobatched"},(0,i.kt)("inlineCode",{parentName:"h3"},"prepareAutoBatched")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="prepareAutoBatched signature" no-transpile',title:'"prepareAutoBatched','signature"':!0,"no-transpile":!0},"type prepareAutoBatched = <T>() => (payload: T) => { payload: T; meta: unknown }\n")),(0,i.kt)("p",null,"Creates a function that accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"payload")," value, and returns an object with ",(0,i.kt)("inlineCode",{parentName:"p"},"{payload, meta: {[SHOULD_AUTOBATCH]: true}}"),". This is meant to be used with RTK's ",(0,i.kt)("inlineCode",{parentName:"p"},"createSlice"),' and its "',(0,i.kt)("inlineCode",{parentName:"p"},"prepare"),' callback" syntax:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"createSlice({\n  name: 'todos',\n  initialState,\n  reducers: {\n    todoAdded: {\n      reducer(state, action: PayloadAction<Todo>) {\n        state.push(action.payload)\n      },\n      // highlight-start\n      prepare: prepareAutoBatched<Todo>(),\n      // highlight-end\n    },\n  },\n})\n")),(0,i.kt)("h2",{id:"batching-approach-and-background"},"Batching Approach and Background"),(0,i.kt)("p",null,"The post ",(0,i.kt)("a",{parentName:"p",href:"https://blog.isquaredsoftware.com/2020/01/blogged-answers-redux-batching-techniques/"},"A Comparison of Redux Batching Techniques"),' describes four different approaches for "batching Redux actions/dispatches"'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a higher-order reducer that accepts multiple actions nested inside one real action, and iterates over them together"),(0,i.kt)("li",{parentName:"ul"},"an enhancer that wraps ",(0,i.kt)("inlineCode",{parentName:"li"},"dispatch")," and debounces the notification callback"),(0,i.kt)("li",{parentName:"ul"},"an enhancer that wraps ",(0,i.kt)("inlineCode",{parentName:"li"},"dispatch")," to accept an array of actions"),(0,i.kt)("li",{parentName:"ul"},"React's ",(0,i.kt)("inlineCode",{parentName:"li"},"unstable_batchedUpdates()"),", which just combines multiple queued renders into one but doesn't affect subscriber notifications")),(0,i.kt)("p",null,'This enhancer is a variation of the "debounce" approach, but with a twist.'),(0,i.kt)("p",null,"Instead of ",(0,i.kt)("em",{parentName:"p"},"just")," debouncing ",(0,i.kt)("em",{parentName:"p"},"all")," subscriber notifications, it watches for any actions with a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"action.meta[SHOULD_AUTOBATCH]: true")," field attached."),(0,i.kt)("p",null,"When it sees an action with that field, it queues a callback. The reducer is updated immediately, but the enhancer does ",(0,i.kt)("em",{parentName:"p"},"not")," notify subscribers right way. If other actions with the same field are dispatched in succession, the enhancer will continue to ",(0,i.kt)("em",{parentName:"p"},"not")," notify subscribers. Then, when the queued callback runs, it finally notifies all subscribers, similar to how React batches re-renders."),(0,i.kt)("p",null,'The additional twist is also inspired by React\'s separation of updates into "low-priority" and "immediate" behavior (such as a render queued by an AJAX request vs a render queued by a user input that should be handled synchronously).'),(0,i.kt)("p",null,"If some low-pri actions have been dispatched and a notification microtask is queued, then a ",(0,i.kt)("em",{parentName:"p"},"normal")," priority action (without the field) is dispatched, the enhancer will go ahead and notify all subscribers synchronously as usual, and ",(0,i.kt)("em",{parentName:"p"},"not")," notify them at the end of the tick."),(0,i.kt)("p",null,"This allows Redux users to selectively tag certain actions for effective batching behavior, making this purely opt-in on a per-action basis, while retaining normal notification behavior for all other actions."),(0,i.kt)("h3",{id:"rtk-query-and-batching"},"RTK Query and Batching"),(0,i.kt)("p",null,"RTK Query already marks several of its key internal action types as batchable. By adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"autoBatchEnhancer")," to the store setup, it improves the overall UI performance, especially when rendering large lists of components that use the RTKQ query hooks."))}f.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);