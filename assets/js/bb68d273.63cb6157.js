"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3509],{3411:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7378),r=n(7140),o="tabItem_wHwb";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},2453:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(2685),r=n(7378),o=n(7140),i=n(362),s=n(56),l=n(5720),u=n(9169),p="tabList_J5MA",d="tabItem_l0OV";function c(e){var t,n,i=e.lazy,c=e.block,m=e.defaultValue,h=e.values,f=e.groupId,y=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.l)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),x=w.tabGroupChoices,T=w.setTabGroupChoices,N=(0,r.useState)(b),A=N[0],R=N[1],q=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=x[f];null!=P&&P!==A&&k.some((function(e){return e.value===P}))&&R(P)}var I=function(e){var t=e.currentTarget,n=q.indexOf(t),a=k[n].value;a!==A&&(j(t),R(a),null!=f&&T(f,String(a)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=q.indexOf(e.currentTarget)+1;n=null!=(a=q[r])?a:q[0];break;case"ArrowLeft":var o,i=q.indexOf(e.currentTarget)-1;n=null!=(o=q[i])?o:q[q.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},y)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return q.push(e)},onKeyDown:O,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":A===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function m(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},5769:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=n(2685),r=n(1244),o=(n(7378),n(5318)),i=n(3411),s=n(2453),l=["components"],u={id:"rtk-query",title:"RTK Query",sidebar_label:"RTK Query Quick Start",hide_title:!0},p=void 0,d={unversionedId:"tutorials/rtk-query",id:"tutorials/rtk-query",title:"RTK Query",description:"&nbsp;",source:"@site/../docs/tutorials/rtk-query.mdx",sourceDirName:"tutorials",slug:"/tutorials/rtk-query",permalink:"/tutorials/rtk-query",draft:!1,tags:[],version:"current",lastUpdatedAt:1716193556,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"rtk-query",title:"RTK Query",sidebar_label:"RTK Query Quick Start",hide_title:!0},sidebar:"docs",previous:{title:"TypeScript Quick Start",permalink:"/tutorials/typescript"},next:{title:"Migrating to Modern Redux",permalink:"/usage/migrating-to-modern-redux"}},c={},m=[{value:"Introduction",id:"introduction",level:2},{value:"How to Read This Tutorial",id:"how-to-read-this-tutorial",level:3},{value:"Setting up your store and API service",id:"setting-up-your-store-and-api-service",level:2},{value:"Create an API service",id:"create-an-api-service",level:3},{value:"Add the service to your store",id:"add-the-service-to-your-store",level:3},{value:"Wrap your application with the <code>Provider</code>",id:"wrap-your-application-with-the-provider",level:3},{value:"Use the query in a component",id:"use-the-query-in-a-component",level:2},{value:"Basic Example",id:"basic-example",level:4},{value:"Advanced example",id:"advanced-example",level:4}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rtk-query-quick-start"},"RTK Query Quick Start"),(0,o.kt)("admonition",{title:"What You'll Learn",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},'How to set up and use Redux Toolkit\'s "RTK Query" data fetching functionality'))),(0,o.kt)("admonition",{title:"Prerequisites",type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Understanding of ",(0,o.kt)("a",{parentName:"li",href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow"},"Redux terms and concepts")))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Welcome to the Redux Toolkit Query tutorial! ",(0,o.kt)("strong",{parentName:"p"},'This tutorial will briefly introduce you to Redux Toolkit\'s "RTK Query" data fetching capability and teach you how to start using it correctly'),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For a more in-depth tutorial on RTK Query, see the full ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics"},'"Redux Essentials" tutorial')," on the Redux core docs site.")),(0,o.kt)("p",null,"RTK Query is an advanced data fetching and caching tool, designed to simplify common cases for loading data in a web application. RTK Query itself is built on top of the Redux Toolkit core, and leverages RTK's APIs like ",(0,o.kt)("a",{parentName:"p",href:"/api/createSlice"},(0,o.kt)("inlineCode",{parentName:"a"},"createSlice"))," and ",(0,o.kt)("a",{parentName:"p",href:"/api/createAsyncThunk"},(0,o.kt)("inlineCode",{parentName:"a"},"createAsyncThunk"))," to implement its capabilities."),(0,o.kt)("p",null,"RTK Query is included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@reduxjs/toolkit")," package as an additional addon. You are not required to use the RTK Query APIs when you use Redux Toolkit, but we think many users will benefit from RTK Query's data fetching and caching in their apps."),(0,o.kt)("h3",{id:"how-to-read-this-tutorial"},"How to Read This Tutorial"),(0,o.kt)("p",null,"For this tutorial, we assume that you're using Redux Toolkit with React, but you can also use it with other UI layers as well. The examples are based on ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/folder-structure"},"a typical Create-React-App folder structure")," where all the application code is in a ",(0,o.kt)("inlineCode",{parentName:"p"},"src"),", but the patterns can be adapted to whatever project or folder setup you're using."),(0,o.kt)("h2",{id:"setting-up-your-store-and-api-service"},"Setting up your store and API service"),(0,o.kt)("p",null,"To see how RTK Query works, let's walk through a basic usage example. For this example, we'll assume you're using React and want to make use of RTK Query's auto-generated React hooks."),(0,o.kt)("h3",{id:"create-an-api-service"},"Create an API service"),(0,o.kt)("p",null,"First, we'll create a service definition that queries the publicly available ",(0,o.kt)("a",{parentName:"p",href:"https://pokeapi.co/"},"PokeAPI"),"."),(0,o.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/pokemon.ts"',title:'"src/services/pokemon.ts"'},"// Need to use the React-specific entry point to import createApi\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\nimport type { Pokemon } from './types'\n\n// highlight-start\n// Define a service using a base URL and expected endpoints\nexport const pokemonApi = createApi({\n  reducerPath: 'pokemonApi',\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  endpoints: (builder) => ({\n    getPokemonByName: builder.query<Pokemon, string>({\n      query: (name) => `pokemon/${name}`,\n    }),\n  }),\n})\n//highlight-end\n\n// highlight-start\n// Export hooks for usage in functional components, which are\n// auto-generated based on the defined endpoints\nexport const { useGetPokemonByNameQuery } = pokemonApi\n// highlight-end\n"))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/services/pokemon.js"',title:'"src/services/pokemon.js"'},"// Need to use the React-specific entry point to import createApi\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\n// highlight-start\n// Define a service using a base URL and expected endpoints\nexport const pokemonApi = createApi({\n  reducerPath: 'pokemonApi',\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  endpoints: (builder) => ({\n    getPokemonByName: builder.query({\n      query: (name) => `pokemon/${name}`,\n    }),\n  }),\n})\n//highlight-end\n\n// highlight-start\n// Export hooks for usage in functional components, which are\n// auto-generated based on the defined endpoints\nexport const { useGetPokemonByNameQuery } = pokemonApi\n// highlight-end\n")))),(0,o.kt)("p",null,"With RTK Query, you usually define your entire API definition in one place. This is most likely different from what you see with other libraries such as ",(0,o.kt)("inlineCode",{parentName:"p"},"swr")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"react-query"),", and there are several reasons for that. Our perspective is that it's ",(0,o.kt)("em",{parentName:"p"},"much")," easier to keep track of how requests, cache invalidation, and general app configuration behave when they're all in one central location in comparison to having X number of custom hooks in different files throughout your application."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Typically, you should only have one API slice per base URL that your application needs to communicate with. For example, if your site fetches data from both ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/posts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/users"),", you would have a single API slice with ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/")," as the base URL, and separate endpoint definitions for ",(0,o.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"users"),". This allows you to effectively take advantage of ",(0,o.kt)("a",{parentName:"p",href:"/rtk-query/usage/automated-refetching"},"automated re-fetching")," by defining ",(0,o.kt)("a",{parentName:"p",href:"/rtk-query/usage/automated-refetching#tags"},"tag")," relationships across endpoints."),(0,o.kt)("p",{parentName:"admonition"},"For maintainability purposes, you may wish to split up endpoint definitions across multiple files, while still maintaining a single API slice which includes all of these endpoints. See ",(0,o.kt)("a",{parentName:"p",href:"/rtk-query/usage/code-splitting"},"code splitting")," for how you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"injectEndpoints")," property to inject API endpoints from other files into a single API slice definition.")),(0,o.kt)("h3",{id:"add-the-service-to-your-store"},"Add the service to your store"),(0,o.kt)("p",null,'An RTKQ service generates a "slice reducer" that should be included in the Redux root reducer, and a custom middleware that handles the data fetching. Both need to be added to the Redux store.'),(0,o.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/store.ts"',title:'"src/store.ts"'},"import { configureStore } from '@reduxjs/toolkit'\n// Or from '@reduxjs/toolkit/query/react'\nimport { setupListeners } from '@reduxjs/toolkit/query'\nimport { pokemonApi } from './services/pokemon'\n\nexport const store = configureStore({\n  reducer: {\n    // highlight-start\n    // Add the generated reducer as a specific top-level slice\n    [pokemonApi.reducerPath]: pokemonApi.reducer,\n    // highlight-end\n  },\n  // highlight-start\n  // Adding the api middleware enables caching, invalidation, polling,\n  // and other useful features of `rtk-query`.\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().concat(pokemonApi.middleware),\n  // highlight-end\n})\n\n// optional, but required for refetchOnFocus/refetchOnReconnect behaviors\n// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization\nsetupListeners(store.dispatch)\n"))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/store.js"',title:'"src/store.js"'},"import { configureStore } from '@reduxjs/toolkit'\n// Or from '@reduxjs/toolkit/query/react'\nimport { setupListeners } from '@reduxjs/toolkit/query'\nimport { pokemonApi } from './services/pokemon'\n\nexport const store = configureStore({\n  reducer: {\n    // highlight-start\n    // Add the generated reducer as a specific top-level slice\n    [pokemonApi.reducerPath]: pokemonApi.reducer,\n    // highlight-end\n  },\n  // highlight-start\n  // Adding the api middleware enables caching, invalidation, polling,\n  // and other useful features of `rtk-query`.\n  middleware: (getDefaultMiddleware) =>\n    getDefaultMiddleware().concat(pokemonApi.middleware),\n  // highlight-end\n})\n\n// optional, but required for refetchOnFocus/refetchOnReconnect behaviors\n// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization\nsetupListeners(store.dispatch)\n")))),(0,o.kt)("h3",{id:"wrap-your-application-with-the-provider"},"Wrap your application with the ",(0,o.kt)("inlineCode",{parentName:"h3"},"Provider")),(0,o.kt)("p",null,"If you haven't already done so, follow the standard pattern for providing the Redux store to the rest of your React application component tree:"),(0,o.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},"import * as React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\n\nimport App from './App'\nimport { store } from './store'\n\nconst rootElement = document.getElementById('root')\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  rootElement\n)\n"))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/index.jsx"',title:'"src/index.jsx"'},"import * as React from 'react'\nimport { render } from 'react-dom'\nimport { Provider } from 'react-redux'\n\nimport App from './App'\nimport { store } from './store'\n\nconst rootElement = document.getElementById('root')\nrender(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  rootElement\n)\n")))),(0,o.kt)("h2",{id:"use-the-query-in-a-component"},"Use the query in a component"),(0,o.kt)("p",null,"Once a service has been defined, you can import the hooks to make a request."),(0,o.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import * as React from 'react'\n// highlight-next-line\nimport { useGetPokemonByNameQuery } from './services/pokemon'\n\nexport default function App() {\n  // highlight-start\n  // Using a query hook automatically fetches data and returns query values\n  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')\n  // Individual hooks are also accessible under the generated endpoints:\n  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')\n  // highlight-end\n\n  return (\n    <div className=\"App\">\n      {error ? (\n        <>Oh no, there was an error</>\n      ) : isLoading ? (\n        <>Loading...</>\n      ) : data ? (\n        <>\n          <h3>{data.species.name}</h3>\n          <img src={data.sprites.front_shiny} alt={data.species.name} />\n        </>\n      ) : null}\n    </div>\n  )\n}\n"))),(0,o.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/App.jsx"',title:'"src/App.jsx"'},"import * as React from 'react'\n// highlight-next-line\nimport { useGetPokemonByNameQuery } from './services/pokemon'\n\nexport default function App() {\n  // highlight-start\n  // Using a query hook automatically fetches data and returns query values\n  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')\n  // Individual hooks are also accessible under the generated endpoints:\n  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')\n  // highlight-end\n\n  return (\n    <div className=\"App\">\n      {error ? (\n        <>Oh no, there was an error</>\n      ) : isLoading ? (\n        <>Loading...</>\n      ) : data ? (\n        <>\n          <h3>{data.species.name}</h3>\n          <img src={data.sprites.front_shiny} alt={data.species.name} />\n        </>\n      ) : null}\n    </div>\n  )\n}\n")))),(0,o.kt)("p",null,"When making a request, you're able to track the state in several ways. You can always check ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"status"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," to determine the right UI to render. In addition, ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery")," also provides utility booleans like ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoading"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isFetching"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"isSuccess"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"isError")," for the latest request."),(0,o.kt)("h4",{id:"basic-example"},"Basic Example"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/basic?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"rtk-query-getting-started-basic",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,o.kt)("p",null,"Okay, that's interesting... but what if you wanted to show multiple pokemon at the same time? What happens if multiple components load the same pokemon?"),(0,o.kt)("h4",{id:"advanced-example"},"Advanced example"),(0,o.kt)("p",null,"RTK Query ensures that any component that subscribes to the same query will always use the same data. RTK Query automatically de-dupes requests so you don't have to worry about checking in-flight requests and performance optimizations on your end. Let's evaluate the sandbox below - make sure to check the Network panel in your browser's dev tools. You will see 3 requests, even though there are 4 subscribed components - ",(0,o.kt)("inlineCode",{parentName:"p"},"bulbasaur")," only makes one request, and the loading state is synchronized between the two components. For fun, try changing the value of the dropdown from ",(0,o.kt)("inlineCode",{parentName:"p"},"Off")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"1s")," to see this behavior continue when a query is re-ran."),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/advanced?file=/src/App.tsx?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"rtk-query-getting-started-advanced",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}f.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);