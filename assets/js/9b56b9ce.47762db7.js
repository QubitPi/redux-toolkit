"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3633],{3411:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7378),r=n(7140),i="tabItem_wHwb";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},2453:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(2685),r=n(7378),i=n(7140),o=n(362),c=n(56),l=n(5720),d=n(9169),s="tabList_J5MA",u="tabItem_l0OV";function p(e){var t,n,o=e.lazy,p=e.block,m=e.defaultValue,h=e.values,f=e.groupId,g=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,c.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,l.U)(),N=T.tabGroupChoices,x=T.setTabGroupChoices,w=(0,r.useState)(v),C=w[0],A=w[1],R=[],j=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=N[f];null!=S&&S!==C&&k.some((function(e){return e.value===S}))&&A(S)}var I=function(e){var t=e.currentTarget,n=R.indexOf(t),a=k[n].value;a!==C&&(j(t),A(a),null!=f&&x(f,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=R.indexOf(e.currentTarget)+1;n=null!=(a=R[r])?a:R[0];break;case"ArrowLeft":var i,o=R.indexOf(e.currentTarget)-1;n=null!=(i=R[o])?i:R[R.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},g)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return R.push(e)},onKeyDown:P,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},8379:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var a=n(2685),r=n(1244),i=(n(7378),n(5318)),o=n(3411),c=n(2453),l=["components"],d={id:"createReducer",title:"createReducer",sidebar_label:"createReducer",hide_title:!0},s=void 0,u={unversionedId:"api/createReducer",id:"api/createReducer",title:"createReducer",description:"&nbsp;",source:"@site/../docs/api/createReducer.mdx",sourceDirName:"api",slug:"/api/createReducer",permalink:"/api/createReducer",draft:!1,tags:[],version:"current",lastUpdatedAt:1716193556,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"createReducer",title:"createReducer",sidebar_label:"createReducer",hide_title:!0},sidebar:"docs",previous:{title:"autoBatchEnhancer",permalink:"/api/autoBatchEnhancer"},next:{title:"createAction",permalink:"/api/createAction"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Usage with the &quot;Builder Callback&quot; Notation",id:"usage-with-the-builder-callback-notation",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Builder Methods",id:"builder-methods",level:3},{value:"<code>builder.addCase</code>",id:"builderaddcase",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>builder.addMatcher</code>",id:"builderaddmatcher",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>builder.addDefaultCase</code>",id:"builderadddefaultcase",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns",level:3},{value:"Example Usage",id:"example-usage-1",level:3},{value:"Direct State Mutation",id:"direct-state-mutation",level:2},{value:"Multiple Case Reducer Execution",id:"multiple-case-reducer-execution",level:2},{value:"Logging Draft State Values",id:"logging-draft-state-values",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"createreducer"},(0,i.kt)("inlineCode",{parentName:"h1"},"createReducer()")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,'A utility that simplifies creating Redux reducer functions. It uses Immer internally to drastically simplify immutable update logic\nby writing "mutative" code in your reducers, and supports directly mapping specific action types to case reducer functions\nthat will update the state when that action is dispatched.'),(0,i.kt)("p",null,"Redux ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/basics/reducers"},"reducers")," are often implemented using a ",(0,i.kt)("inlineCode",{parentName:"p"},"switch")," statement, with one ",(0,i.kt)("inlineCode",{parentName:"p"},"case")," for every handled action type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const initialState = { value: 0 }\n\nfunction counterReducer(state = initialState, action) {\n  switch (action.type) {\n    case 'increment':\n      return { ...state, value: state.value + 1 }\n    case 'decrement':\n      return { ...state, value: state.value - 1 }\n    case 'incrementByAmount':\n      return { ...state, value: state.value + action.payload }\n    default:\n      return state\n  }\n}\n")),(0,i.kt)("p",null,"This approach works well, but is a bit boilerplate-y and error-prone. For instance, it is easy to forget the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," case or\nsetting the initial state."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"createReducer"),' helper streamlines the implementation of such reducers. It uses a "builder callback" notation to define handlers for specific action types, matching against a range of actions, or handling a default case. This is conceptually similar to a switch statement, but with better TS support.'),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"createReducer"),", your reducers instead look like:"),(0,i.kt)(c.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createAction, createReducer } from '@reduxjs/toolkit'\n\ninterface CounterState {\n  value: number\n}\n\nconst increment = createAction('counter/increment')\nconst decrement = createAction('counter/decrement')\nconst incrementByAmount = createAction<number>('counter/incrementByAmount')\n\nconst initialState = { value: 0 } satisfies CounterState as CounterState\n\nconst counterReducer = createReducer(initialState, (builder) => {\n  builder\n    .addCase(increment, (state, action) => {\n      state.value++\n    })\n    .addCase(decrement, (state, action) => {\n      state.value--\n    })\n    .addCase(incrementByAmount, (state, action) => {\n      state.value += action.payload\n    })\n})\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createAction, createReducer } from '@reduxjs/toolkit'\n\nconst increment = createAction('counter/increment')\nconst decrement = createAction('counter/decrement')\nconst incrementByAmount = createAction('counter/incrementByAmount')\n\nconst initialState = { value: 0 }\n\nconst counterReducer = createReducer(initialState, (builder) => {\n  builder\n    .addCase(increment, (state, action) => {\n      state.value++\n    })\n    .addCase(decrement, (state, action) => {\n      state.value--\n    })\n    .addCase(incrementByAmount, (state, action) => {\n      state.value += action.payload\n    })\n})\n")))),(0,i.kt)("h2",{id:"usage-with-the-builder-callback-notation"},'Usage with the "Builder Callback" Notation'),(0,i.kt)("p",null,"This function accepts a callback that receives a ",(0,i.kt)("inlineCode",{parentName:"p"},"builder")," object as its argument.\nThat builder provides ",(0,i.kt)("inlineCode",{parentName:"p"},"addCase"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"addMatcher")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"addDefaultCase")," functions that may be\ncalled to define what actions this reducer will handle."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"initialState")," ",(0,i.kt)("inlineCode",{parentName:"li"},"State | (() => State)"),': The initial state that should be used when the reducer is called the first time. This may also be a "lazy initializer" function, which should return an initial state value when called. This will be used whenever the reducer is called with ',(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," as its state value, and is primarily useful for cases like reading initial state from ",(0,i.kt)("inlineCode",{parentName:"li"},"localStorage"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"builderCallback")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(builder: Builder) => void")," A callback that receives a ",(0,i.kt)("em",{parentName:"li"},"builder")," object to define\ncase reducers via calls to ",(0,i.kt)("inlineCode",{parentName:"li"},"builder.addCase(actionCreatorOrType, reducer)"),".")),(0,i.kt)("h3",{id:"example-usage"},"Example Usage"),(0,i.kt)(c.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  createAction,\n  createReducer,\n  UnknownAction,\n  PayloadAction,\n} from '@reduxjs/toolkit'\n\nconst increment = createAction<number>('increment')\nconst decrement = createAction<number>('decrement')\n\nfunction isActionWithNumberPayload(\n  action: UnknownAction\n): action is PayloadAction<number> {\n  return typeof action.payload === 'number'\n}\n\nconst reducer = createReducer(\n  {\n    counter: 0,\n    sumOfNumberPayloads: 0,\n    unhandledActions: 0,\n  },\n  (builder) => {\n    builder\n      .addCase(increment, (state, action) => {\n        // action is inferred correctly here\n        state.counter += action.payload\n      })\n      // You can chain calls, or have separate `builder.addCase()` lines each time\n      .addCase(decrement, (state, action) => {\n        state.counter -= action.payload\n      })\n      // You can apply a \"matcher function\" to incoming actions\n      .addMatcher(isActionWithNumberPayload, (state, action) => {})\n      // and provide a default case if no other handlers matched\n      .addDefaultCase((state, action) => {})\n  }\n)\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createAction, createReducer } from '@reduxjs/toolkit'\n\nconst increment = createAction('increment')\nconst decrement = createAction('decrement')\n\nfunction isActionWithNumberPayload(action) {\n  return typeof action.payload === 'number'\n}\n\nconst reducer = createReducer(\n  {\n    counter: 0,\n    sumOfNumberPayloads: 0,\n    unhandledActions: 0,\n  },\n  (builder) => {\n    builder\n      .addCase(increment, (state, action) => {\n        // action is inferred correctly here\n        state.counter += action.payload\n      })\n      // You can chain calls, or have separate `builder.addCase()` lines each time\n      .addCase(decrement, (state, action) => {\n        state.counter -= action.payload\n      })\n      // You can apply a \"matcher function\" to incoming actions\n      .addMatcher(isActionWithNumberPayload, (state, action) => {})\n      // and provide a default case if no other handlers matched\n      .addDefaultCase((state, action) => {})\n  }\n)\n")))),(0,i.kt)("h3",{id:"builder-methods"},"Builder Methods"),(0,i.kt)("h3",{id:"builderaddcase"},(0,i.kt)("inlineCode",{parentName:"h3"},"builder.addCase")),(0,i.kt)("p",null,"Adds a case reducer to handle a single exact action type."),(0,i.kt)("p",null,"All calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"builder.addCase")," must come before any calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"builder.addMatcher")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"builder.addDefaultCase"),"."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"actionCreator")," Either a plain action type string, or an action creator generated by ",(0,i.kt)("a",{parentName:"li",href:"./createAction"},(0,i.kt)("inlineCode",{parentName:"a"},"createAction"))," that can be used to determine the action type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"reducer")," The actual case reducer function.")),(0,i.kt)("h3",{id:"builderaddmatcher"},(0,i.kt)("inlineCode",{parentName:"h3"},"builder.addMatcher")),(0,i.kt)("p",null,"Allows you to match your incoming actions against your own filter function instead of only the ",(0,i.kt)("inlineCode",{parentName:"p"},"action.type")," property."),(0,i.kt)("p",null,"If multiple matcher reducers match, all of them will be executed in the order\nthey were defined in - even if a case reducer already matched.\nAll calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"builder.addMatcher")," must come after any calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"builder.addCase")," and before any calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"builder.addDefaultCase"),"."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"matcher")," A matcher function. In TypeScript, this should be a ",(0,i.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates"},"type predicate"),"\nfunction"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"reducer")," The actual case reducer function.")),(0,i.kt)(c.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  createAction,\n  createReducer,\n  AsyncThunk,\n  UnknownAction,\n} from '@reduxjs/toolkit'\n\ntype GenericAsyncThunk = AsyncThunk<unknown, unknown, any>\n\ntype PendingAction = ReturnType<GenericAsyncThunk['pending']>\ntype RejectedAction = ReturnType<GenericAsyncThunk['rejected']>\ntype FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>\n\nconst initialState: Record<string, string> = {}\nconst resetAction = createAction('reset-tracked-loading-state')\n\nfunction isPendingAction(action: UnknownAction): action is PendingAction {\n  return typeof action.type === 'string' && action.type.endsWith('/pending')\n}\n\nconst reducer = createReducer(initialState, (builder) => {\n  builder\n    .addCase(resetAction, () => initialState)\n    // matcher can be defined outside as a type predicate function\n    .addMatcher(isPendingAction, (state, action) => {\n      state[action.meta.requestId] = 'pending'\n    })\n    .addMatcher(\n      // matcher can be defined inline as a type predicate function\n      (action): action is RejectedAction => action.type.endsWith('/rejected'),\n      (state, action) => {\n        state[action.meta.requestId] = 'rejected'\n      }\n    )\n    // matcher can just return boolean and the matcher can receive a generic argument\n    .addMatcher<FulfilledAction>(\n      (action) => action.type.endsWith('/fulfilled'),\n      (state, action) => {\n        state[action.meta.requestId] = 'fulfilled'\n      }\n    )\n})\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createAction, createReducer } from '@reduxjs/toolkit'\n\nconst initialState = {}\nconst resetAction = createAction('reset-tracked-loading-state')\n\nfunction isPendingAction(action) {\n  return typeof action.type === 'string' && action.type.endsWith('/pending')\n}\n\nconst reducer = createReducer(initialState, (builder) => {\n  builder\n    .addCase(resetAction, () => initialState)\n    // matcher can be defined outside as a type predicate function\n    .addMatcher(isPendingAction, (state, action) => {\n      state[action.meta.requestId] = 'pending'\n    })\n    .addMatcher(\n      // matcher can be defined inline as a type predicate function\n      (action) => action.type.endsWith('/rejected'),\n      (state, action) => {\n        state[action.meta.requestId] = 'rejected'\n      }\n    )\n    // matcher can just return boolean and the matcher can receive a generic argument\n    .addMatcher(\n      (action) => action.type.endsWith('/fulfilled'),\n      (state, action) => {\n        state[action.meta.requestId] = 'fulfilled'\n      }\n    )\n})\n")))),(0,i.kt)("h3",{id:"builderadddefaultcase"},(0,i.kt)("inlineCode",{parentName:"h3"},"builder.addDefaultCase")),(0,i.kt)("p",null,'Adds a "default case" reducer that is executed if no case reducer and no matcher\nreducer was executed for this action.'),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"reducer"),' The fallback "default case" reducer function.')),(0,i.kt)(c.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createReducer } from '@reduxjs/toolkit'\nconst initialState = { otherActions: 0 }\nconst reducer = createReducer(initialState, (builder) => {\n  builder\n    // .addCase(...)\n    // .addMatcher(...)\n    .addDefaultCase((state, action) => {\n      state.otherActions++\n    })\n})\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createReducer } from '@reduxjs/toolkit'\nconst initialState = { otherActions: 0 }\nconst reducer = createReducer(initialState, (builder) => {\n  builder\n    // .addCase(...)\n    // .addMatcher(...)\n    .addDefaultCase((state, action) => {\n      state.otherActions++\n    })\n})\n")))),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"The generated reducer function."),(0,i.kt)("p",null,"The reducer will have a ",(0,i.kt)("inlineCode",{parentName:"p"},"getInitialState")," function attached that will return the initial state when called. This may be useful for tests or usage with React's ",(0,i.kt)("inlineCode",{parentName:"p"},"useReducer")," hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const counterReducer = createReducer(0, (builder) => {\n  builder\n    .addCase('increment', (state, action) => state + action.payload)\n    .addCase('decrement', (state, action) => state - action.payload)\n})\n\nconsole.log(counterReducer.getInitialState()) // 0\n")),(0,i.kt)("h3",{id:"example-usage-1"},"Example Usage"),(0,i.kt)(c.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  createAction,\n  createReducer,\n  UnknownAction,\n  PayloadAction,\n} from '@reduxjs/toolkit'\n\nconst increment = createAction<number>('increment')\nconst decrement = createAction<number>('decrement')\n\nfunction isActionWithNumberPayload(\n  action: UnknownAction\n): action is PayloadAction<number> {\n  return typeof action.payload === 'number'\n}\n\nconst reducer = createReducer(\n  {\n    counter: 0,\n    sumOfNumberPayloads: 0,\n    unhandledActions: 0,\n  },\n  (builder) => {\n    builder\n      .addCase(increment, (state, action) => {\n        // action is inferred correctly here\n        state.counter += action.payload\n      })\n      // You can chain calls, or have separate `builder.addCase()` lines each time\n      .addCase(decrement, (state, action) => {\n        state.counter -= action.payload\n      })\n      // You can apply a \"matcher function\" to incoming actions\n      .addMatcher(isActionWithNumberPayload, (state, action) => {})\n      // and provide a default case if no other handlers matched\n      .addDefaultCase((state, action) => {})\n  }\n)\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createAction, createReducer } from '@reduxjs/toolkit'\n\nconst increment = createAction('increment')\nconst decrement = createAction('decrement')\n\nfunction isActionWithNumberPayload(action) {\n  return typeof action.payload === 'number'\n}\n\nconst reducer = createReducer(\n  {\n    counter: 0,\n    sumOfNumberPayloads: 0,\n    unhandledActions: 0,\n  },\n  (builder) => {\n    builder\n      .addCase(increment, (state, action) => {\n        // action is inferred correctly here\n        state.counter += action.payload\n      })\n      // You can chain calls, or have separate `builder.addCase()` lines each time\n      .addCase(decrement, (state, action) => {\n        state.counter -= action.payload\n      })\n      // You can apply a \"matcher function\" to incoming actions\n      .addMatcher(isActionWithNumberPayload, (state, action) => {})\n      // and provide a default case if no other handlers matched\n      .addDefaultCase((state, action) => {})\n  }\n)\n")))),(0,i.kt)("h2",{id:"direct-state-mutation"},"Direct State Mutation"),(0,i.kt)("p",null,"Redux requires reducer functions to be pure and treat state values as immutable. While this is essential for making state updates predictable and observable, it can sometimes make the implementation of such updates awkward. Consider the following example:"),(0,i.kt)(c.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createAction, createReducer } from '@reduxjs/toolkit'\n\ninterface Todo {\n  text: string\n  completed: boolean\n}\n\nconst addTodo = createAction<Todo>('todos/add')\nconst toggleTodo = createAction<number>('todos/toggle')\n\nconst todosReducer = createReducer([] as Todo[], (builder) => {\n  builder\n    .addCase(addTodo, (state, action) => {\n      const todo = action.payload\n      return [...state, todo]\n    })\n    .addCase(toggleTodo, (state, action) => {\n      const index = action.payload\n      const todo = state[index]\n      return [\n        ...state.slice(0, index),\n        { ...todo, completed: !todo.completed },\n        ...state.slice(index + 1),\n      ]\n    })\n})\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createAction, createReducer } from '@reduxjs/toolkit'\n\nconst addTodo = createAction('todos/add')\nconst toggleTodo = createAction('todos/toggle')\n\nconst todosReducer = createReducer([], (builder) => {\n  builder\n    .addCase(addTodo, (state, action) => {\n      const todo = action.payload\n      return [...state, todo]\n    })\n    .addCase(toggleTodo, (state, action) => {\n      const index = action.payload\n      const todo = state[index]\n      return [\n        ...state.slice(0, index),\n        { ...todo, completed: !todo.completed },\n        ...state.slice(index + 1),\n      ]\n    })\n})\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"addTodo")," reducer is straightforward if you know the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"ES6 spread syntax"),". However, the code for ",(0,i.kt)("inlineCode",{parentName:"p"},"toggleTodo")," is much less straightforward, especially considering that it only sets a single flag."),(0,i.kt)("p",null,"To make things easier, ",(0,i.kt)("inlineCode",{parentName:"p"},"createReducer")," uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mweststrate/immer"},"immer")," to let you write reducers as if they were mutating the state directly. In reality, the reducer receives a proxy state that translates all mutations into equivalent copy operations."),(0,i.kt)(c.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createAction, createReducer } from '@reduxjs/toolkit'\n\ninterface Todo {\n  text: string\n  completed: boolean\n}\n\nconst addTodo = createAction<Todo>('todos/add')\nconst toggleTodo = createAction<number>('todos/toggle')\n\nconst todosReducer = createReducer([] as Todo[], (builder) => {\n  builder\n    .addCase(addTodo, (state, action) => {\n      // This push() operation gets translated into the same\n      // extended-array creation as in the previous example.\n      const todo = action.payload\n      state.push(todo)\n    })\n    .addCase(toggleTodo, (state, action) => {\n      // The \"mutating\" version of this case reducer is much\n      //  more direct than the explicitly pure one.\n      const index = action.payload\n      const todo = state[index]\n      todo.completed = !todo.completed\n    })\n})\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createAction, createReducer } from '@reduxjs/toolkit'\n\nconst addTodo = createAction('todos/add')\nconst toggleTodo = createAction('todos/toggle')\n\nconst todosReducer = createReducer([], (builder) => {\n  builder\n    .addCase(addTodo, (state, action) => {\n      // This push() operation gets translated into the same\n      // extended-array creation as in the previous example.\n      const todo = action.payload\n      state.push(todo)\n    })\n    .addCase(toggleTodo, (state, action) => {\n      // The \"mutating\" version of this case reducer is much\n      //  more direct than the explicitly pure one.\n      const index = action.payload\n      const todo = state[index]\n      todo.completed = !todo.completed\n    })\n})\n")))),(0,i.kt)("p",null,'Writing "mutating" reducers simplifies the code. It\'s shorter, there\'s less indirection, and it eliminates common mistakes made while spreading nested state. However, the use of Immer does add some "magic", and Immer has its own nuances in behavior. You should read through ',(0,i.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/pitfalls"},"pitfalls mentioned in the immer docs")," . Most importantly, ",(0,i.kt)("strong",{parentName:"p"},"you need to ensure that you either mutate the ",(0,i.kt)("inlineCode",{parentName:"strong"},"state")," argument or return a new state, ",(0,i.kt)("em",{parentName:"strong"},"but not both")),". For example, the following reducer would throw an exception if a ",(0,i.kt)("inlineCode",{parentName:"p"},"toggleTodo")," action is passed:"),(0,i.kt)(c.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createAction, createReducer } from '@reduxjs/toolkit'\n\ninterface Todo {\n  text: string\n  completed: boolean\n}\n\nconst toggleTodo = createAction<number>('todos/toggle')\n\nconst todosReducer = createReducer([] as Todo[], (builder) => {\n  builder.addCase(toggleTodo, (state, action) => {\n    const index = action.payload\n    const todo = state[index]\n\n    // This case reducer both mutates the passed-in state...\n    todo.completed = !todo.completed\n\n    // ... and returns a new value. This will throw an\n    // exception. In this example, the easiest fix is\n    // to remove the `return` statement.\n    return [...state.slice(0, index), todo, ...state.slice(index + 1)]\n  })\n})\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createAction, createReducer } from '@reduxjs/toolkit'\n\nconst toggleTodo = createAction('todos/toggle')\n\nconst todosReducer = createReducer([], (builder) => {\n  builder.addCase(toggleTodo, (state, action) => {\n    const index = action.payload\n    const todo = state[index]\n\n    // This case reducer both mutates the passed-in state...\n    todo.completed = !todo.completed\n\n    // ... and returns a new value. This will throw an\n    // exception. In this example, the easiest fix is\n    // to remove the `return` statement.\n    return [...state.slice(0, index), todo, ...state.slice(index + 1)]\n  })\n})\n")))),(0,i.kt)("h2",{id:"multiple-case-reducer-execution"},"Multiple Case Reducer Execution"),(0,i.kt)("p",null,"Originally, ",(0,i.kt)("inlineCode",{parentName:"p"},"createReducer")," always matched a given action type to a single case reducer, and only that one case reducer would execute for a given action."),(0,i.kt)("p",null,"Using action matchers changes that behavior, as multiple matchers may handle a single action."),(0,i.kt)("p",null,"For any dispatched action, the behavior is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If there is an exact match for the action type, the corresponding case reducer will execute first"),(0,i.kt)("li",{parentName:"ul"},"Any matchers that return ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," will execute in the order they were defined"),(0,i.kt)("li",{parentName:"ul"},"If a default case reducer is provided, and ",(0,i.kt)("em",{parentName:"li"},"no")," case or matcher reducers ran, the default case reducer will execute"),(0,i.kt)("li",{parentName:"ul"},"If no case or matcher reducers ran, the original existing state value will be returned unchanged")),(0,i.kt)("p",null,"The executing reducers form a pipeline, and each of them will receive the output of the previous reducer:"),(0,i.kt)(c.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createReducer } from '@reduxjs/toolkit'\n\nconst reducer = createReducer(0, (builder) => {\n  builder\n    .addCase('increment', (state) => state + 1)\n    .addMatcher(\n      (action) => action.type.startsWith('i'),\n      (state) => state * 5\n    )\n    .addMatcher(\n      (action) => action.type.endsWith('t'),\n      (state) => state + 2\n    )\n})\n\nconsole.log(reducer(0, { type: 'increment' }))\n// Returns 7, as the 'increment' case and both matchers all ran in sequence:\n// - case 'increment\": 0 => 1\n// - matcher starts with 'i': 1 => 5\n// - matcher ends with 't': 5 => 7\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createReducer } from '@reduxjs/toolkit'\n\nconst reducer = createReducer(0, (builder) => {\n  builder\n    .addCase('increment', (state) => state + 1)\n    .addMatcher(\n      (action) => action.type.startsWith('i'),\n      (state) => state * 5\n    )\n    .addMatcher(\n      (action) => action.type.endsWith('t'),\n      (state) => state + 2\n    )\n})\n\nconsole.log(reducer(0, { type: 'increment' }))\n// Returns 7, as the 'increment' case and both matchers all ran in sequence:\n// - case 'increment\": 0 => 1\n// - matcher starts with 'i': 1 => 5\n// - matcher ends with 't': 5 => 7\n")))),(0,i.kt)("h2",{id:"logging-draft-state-values"},"Logging Draft State Values"),(0,i.kt)("p",null,"It's very common for a developer to call ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log(state)")," during the development process. However, browsers display Proxies in a format that is hard to read, which can make console logging of Immer-based state difficult."),(0,i.kt)("p",null,"When using either ",(0,i.kt)("inlineCode",{parentName:"p"},"createSlice")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"createReducer"),", you may use the ",(0,i.kt)("a",{parentName:"p",href:"/api/other-exports#current"},(0,i.kt)("inlineCode",{parentName:"a"},"current"))," utility that we re-export from the ",(0,i.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/current"},(0,i.kt)("inlineCode",{parentName:"a"},"immer")," library"),". This utility creates a separate plain copy of the current Immer ",(0,i.kt)("inlineCode",{parentName:"p"},"Draft")," state value, which can then be logged for viewing as normal."),(0,i.kt)(c.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { createSlice, current } from '@reduxjs/toolkit'\n\nconst slice = createSlice({\n  name: 'todos',\n  initialState: [{ id: 1, title: 'Example todo' }],\n  reducers: {\n    addTodo: (state, action) => {\n      console.log('before', current(state))\n      state.push(action.payload)\n      console.log('after', current(state))\n    },\n  },\n})\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createSlice, current } from '@reduxjs/toolkit'\n\nconst slice = createSlice({\n  name: 'todos',\n  initialState: [{ id: 1, title: 'Example todo' }],\n  reducers: {\n    addTodo: (state, action) => {\n      console.log('before', current(state))\n      state.push(action.payload)\n      console.log('after', current(state))\n    },\n  },\n})\n")))))}f.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);