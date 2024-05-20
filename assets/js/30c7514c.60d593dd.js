"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1304],{3411:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7378),r=n(7140),s="tabItem_wHwb";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},2453:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(2685),r=n(7378),s=n(7140),o=n(362),i=n(56),l=n(5720),u=n(9169),p="tabList_J5MA",d="tabItem_l0OV";function m(e){var t,n,o=e.lazy,m=e.block,c=e.defaultValue,h=e.values,y=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),C=N.tabGroupChoices,T=N.setTabGroupChoices,w=(0,r.useState)(v),q=w[0],x=w[1],j=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var Q=C[y];null!=Q&&Q!==q&&g.some((function(e){return e.value===Q}))&&x(Q)}var B=function(e){var t=e.currentTarget,n=j.indexOf(t),a=g[n].value;a!==q&&(S(t),x(a),null!=y&&T(y,String(a)))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=j.indexOf(e.currentTarget)+1;n=null!=(a=j[r])?a:j[0];break;case"ArrowLeft":var s,o=j.indexOf(e.currentTarget)-1;n=null!=(s=j[o])?s:j[j.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},k)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:function(e){return j.push(e)},onKeyDown:A,onFocus:B,onClick:B},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":q===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}function c(e){var t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},6660:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c}});var a=n(2685),r=n(1244),s=(n(7378),n(5318)),o=n(3411),i=n(2453),l=["components"],u={id:"fetchBaseQuery",title:"fetchBaseQuery",sidebar_label:"fetchBaseQuery",hide_title:!0,hide_table_of_contents:!1,description:"RTK Query > API: fetchBaseQuery reference"},p=void 0,d={unversionedId:"rtk-query/api/fetchBaseQuery",id:"rtk-query/api/fetchBaseQuery",title:"fetchBaseQuery",description:"RTK Query > API: fetchBaseQuery reference",source:"@site/../docs/rtk-query/api/fetchBaseQuery.mdx",sourceDirName:"rtk-query/api",slug:"/rtk-query/api/fetchBaseQuery",permalink:"/rtk-query/api/fetchBaseQuery",draft:!1,tags:[],version:"current",lastUpdatedAt:1716193556,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"fetchBaseQuery",title:"fetchBaseQuery",sidebar_label:"fetchBaseQuery",hide_title:!0,hide_table_of_contents:!1,description:"RTK Query > API: fetchBaseQuery reference"},sidebar:"docs",previous:{title:"createApi",permalink:"/rtk-query/api/createApi"},next:{title:"ApiProvider",permalink:"/rtk-query/api/ApiProvider"}},m={},c=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Signature",id:"signature",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>baseUrl</code>",id:"baseurl",level:3},{value:"<code>prepareHeaders</code>",id:"prepareheaders",level:3},{value:"<code>paramsSerializer</code>",id:"paramsserializer",level:3},{value:"<code>fetchFn</code>",id:"fetchfn",level:3},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>isJsonContentType</code>",id:"isjsoncontenttype",level:3},{value:"<code>jsonContentType</code>",id:"jsoncontenttype",level:3},{value:"Common Usage Patterns",id:"common-usage-patterns",level:2},{value:"Setting default headers on requests",id:"setting-default-headers-on-requests",level:3},{value:"Individual query options",id:"individual-query-options",level:2},{value:"Setting the body",id:"setting-the-body",level:3},{value:"json",id:"json",level:4},{value:"text",id:"text",level:4},{value:"Setting the query string",id:"setting-the-query-string",level:3},{value:"Parsing a Response",id:"parsing-a-response",level:3},{value:"Handling non-standard Response status codes",id:"handling-non-standard-response-status-codes",level:3},{value:"Adding a custom timeout to requests",id:"adding-a-custom-timeout-to-requests",level:3}],h={toc:c};function y(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"fetchbasequery"},(0,s.kt)("inlineCode",{parentName:"h1"},"fetchBaseQuery")),(0,s.kt)("p",null,"This is a very small wrapper around ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},(0,s.kt)("inlineCode",{parentName:"a"},"fetch"))," that aims to simplify HTTP requests. It is not a full-blown replacement for ",(0,s.kt)("inlineCode",{parentName:"p"},"axios"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"superagent"),", or any other more heavyweight library, but it will cover the vast majority of your HTTP request needs."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," is a factory function that generates a data fetching method compatible with RTK Query's ",(0,s.kt)("inlineCode",{parentName:"p"},"baseQuery")," configuration option. It takes all standard options from fetch's ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"},(0,s.kt)("inlineCode",{parentName:"a"},"RequestInit"))," interface, as well as ",(0,s.kt)("inlineCode",{parentName:"p"},"baseUrl"),", a ",(0,s.kt)("inlineCode",{parentName:"p"},"prepareHeaders")," function, an optional ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch")," function, a ",(0,s.kt)("inlineCode",{parentName:"p"},"paramsSerializer")," function, and a ",(0,s.kt)("inlineCode",{parentName:"p"},"timeout"),"."),(0,s.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,s.kt)("p",null,"To use it, import it when you are ",(0,s.kt)("a",{parentName:"p",href:"../../tutorials/rtk-query#create-an-api-service"},"creating an API service definition"),", call it as ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery(options)"),", and pass the result as the ",(0,s.kt)("inlineCode",{parentName:"p"},"baseQuery")," field in ",(0,s.kt)("inlineCode",{parentName:"p"},"createApi"),":"),(0,s.kt)(i.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/services/pokemon.ts"',title:'"src/services/pokemon.ts"'},"// Or from '@reduxjs/toolkit/query/react'\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const pokemonApi = createApi({\n  // Set the baseUrl for every endpoint below\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  endpoints: (builder) => ({\n    getPokemonByName: builder.query({\n      // Will make a request like https://pokeapi.co/api/v2/pokemon/bulbasaur\n      query: (name: string) => `pokemon/${name}`,\n    }),\n    updatePokemon: builder.mutation({\n      query: ({ name, patch }) => ({\n        url: `pokemon/${name}`,\n        // When performing a mutation, you typically use a method of\n        // PATCH/PUT/POST/DELETE for REST endpoints\n        method: 'PATCH',\n        // fetchBaseQuery automatically adds `content-type: application/json` to\n        // the Headers and calls `JSON.stringify(patch)`\n        body: patch,\n      }),\n    }),\n  }),\n})\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/services/pokemon.js"',title:'"src/services/pokemon.js"'},"// Or from '@reduxjs/toolkit/query/react'\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const pokemonApi = createApi({\n  // Set the baseUrl for every endpoint below\n  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),\n  endpoints: (builder) => ({\n    getPokemonByName: builder.query({\n      // Will make a request like https://pokeapi.co/api/v2/pokemon/bulbasaur\n      query: (name) => `pokemon/${name}`,\n    }),\n    updatePokemon: builder.mutation({\n      query: ({ name, patch }) => ({\n        url: `pokemon/${name}`,\n        // When performing a mutation, you typically use a method of\n        // PATCH/PUT/POST/DELETE for REST endpoints\n        method: 'PATCH',\n        // fetchBaseQuery automatically adds `content-type: application/json` to\n        // the Headers and calls `JSON.stringify(patch)`\n        body: patch,\n      }),\n    }),\n  }),\n})\n")))),(0,s.kt)("h2",{id:"signature"},"Signature"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="fetchBaseQuery signature" no-transpile',title:'"fetchBaseQuery','signature"':!0,"no-transpile":!0},"type FetchBaseQuery = (\n  args: FetchBaseQueryArgs,\n) => (\n  args: string | FetchArgs,\n  api: BaseQueryApi,\n  extraOptions: ExtraOptions,\n) => FetchBaseQueryResult\n\ntype FetchBaseQueryArgs = {\n  baseUrl?: string\n  prepareHeaders?: (\n    headers: Headers,\n    api: Pick<\n      BaseQueryApi,\n      'getState' | 'extra' | 'endpoint' | 'type' | 'forced'\n    >,\n  ) => MaybePromise<Headers | void>\n  fetchFn?: (\n    input: RequestInfo,\n    init?: RequestInit | undefined,\n  ) => Promise<Response>\n  paramsSerializer?: (params: Record<string, any>) => string\n  isJsonContentType?: (headers: Headers) => boolean\n  jsonContentType?: string\n  timeout?: number\n} & RequestInit\n\ntype FetchBaseQueryResult = Promise<\n  | {\n      data: any\n      error?: undefined\n      meta?: { request: Request; response: Response }\n    }\n  | {\n      error: {\n        status: number\n        data: any\n      }\n      data?: undefined\n      meta?: { request: Request; response: Response }\n    }\n>\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("h3",{id:"baseurl"},(0,s.kt)("inlineCode",{parentName:"h3"},"baseUrl")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(required)")),(0,s.kt)("p",null,"Typically a string like ",(0,s.kt)("inlineCode",{parentName:"p"},"https://api.your-really-great-app.com/v1/"),". If you don't provide a ",(0,s.kt)("inlineCode",{parentName:"p"},"baseUrl"),", it defaults to a relative path from where the request is being made. ",(0,s.kt)("strong",{parentName:"p"},"You should most likely ",(0,s.kt)("em",{parentName:"strong"},"always")," specify this"),"."),(0,s.kt)("h3",{id:"prepareheaders"},(0,s.kt)("inlineCode",{parentName:"h3"},"prepareHeaders")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(optional)")),(0,s.kt)("p",null,"Allows you to inject headers on every request. You can specify headers at the endpoint level, but you'll typically want to set common headers like ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," here. As a convenience mechanism, the second argument allows you to use ",(0,s.kt)("inlineCode",{parentName:"p"},"getState")," to access your redux store in the event you store information you'll need there such as an auth token. Additionally, it provides access to ",(0,s.kt)("inlineCode",{parentName:"p"},"extra"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"endpoint"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"type"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"forced")," to unlock more granular conditional behaviors."),(0,s.kt)("p",null,"You can mutate the ",(0,s.kt)("inlineCode",{parentName:"p"},"headers")," argument directly, and returning it is optional."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="prepareHeaders signature" no-transpile',title:'"prepareHeaders','signature"':!0,"no-transpile":!0},"type prepareHeaders = (\n  headers: Headers,\n  api: {\n    getState: () => unknown\n    extra: unknown\n    endpoint: string\n    type: 'query' | 'mutation'\n    forced: boolean | undefined\n  },\n) => Headers | void\n")),(0,s.kt)("h3",{id:"paramsserializer"},(0,s.kt)("inlineCode",{parentName:"h3"},"paramsSerializer")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(optional)")),(0,s.kt)("p",null,"A function that can be used to apply custom transformations to the data passed into ",(0,s.kt)("a",{parentName:"p",href:"#setting-the-query-string"},(0,s.kt)("inlineCode",{parentName:"a"},"params")),". If you don't provide this, ",(0,s.kt)("inlineCode",{parentName:"p"},"params")," will be given directly to ",(0,s.kt)("inlineCode",{parentName:"p"},"new URLSearchParams()"),". With some API integrations, you may need to leverage this to use something like the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/query-string"},(0,s.kt)("inlineCode",{parentName:"a"},"query-string"))," library to support different array types."),(0,s.kt)("h3",{id:"fetchfn"},(0,s.kt)("inlineCode",{parentName:"h3"},"fetchFn")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(optional)")),(0,s.kt)("p",null,"A fetch function that overrides the default on the window. Can be useful in SSR environments where you may need to leverage ",(0,s.kt)("inlineCode",{parentName:"p"},"isomorphic-fetch")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"cross-fetch"),"."),(0,s.kt)("h3",{id:"timeout"},(0,s.kt)("inlineCode",{parentName:"h3"},"timeout")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(optional)")),(0,s.kt)("p",null,"A number in milliseconds that represents the maximum time a request can take before timing out."),(0,s.kt)("h3",{id:"isjsoncontenttype"},(0,s.kt)("inlineCode",{parentName:"h3"},"isJsonContentType")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(optional)")),(0,s.kt)("p",null,"A callback that receives a ",(0,s.kt)("inlineCode",{parentName:"p"},"Headers")," object and determines the ",(0,s.kt)("inlineCode",{parentName:"p"},"body")," field of the ",(0,s.kt)("inlineCode",{parentName:"p"},"FetchArgs")," argument should be stringified via ",(0,s.kt)("inlineCode",{parentName:"p"},"JSON.stringify()"),"."),(0,s.kt)("p",null,"The default implementation inspects the ",(0,s.kt)("inlineCode",{parentName:"p"},"content-type")," header, and will match values like ",(0,s.kt)("inlineCode",{parentName:"p"},'"application/json"')," and ",(0,s.kt)("inlineCode",{parentName:"p"},'"application/vnd.api+json"'),"."),(0,s.kt)("h3",{id:"jsoncontenttype"},(0,s.kt)("inlineCode",{parentName:"h3"},"jsonContentType")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(optional)")),(0,s.kt)("p",null,"Used when automatically setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"content-type")," header for a request with a jsonifiable body that does not have an explicit ",(0,s.kt)("inlineCode",{parentName:"p"},"content-type")," header. Defaults to ",(0,s.kt)("inlineCode",{parentName:"p"},'"application/json"'),"."),(0,s.kt)("h2",{id:"common-usage-patterns"},"Common Usage Patterns"),(0,s.kt)("h3",{id:"setting-default-headers-on-requests"},"Setting default headers on requests"),(0,s.kt)("p",null,"The most common use case for ",(0,s.kt)("inlineCode",{parentName:"p"},"prepareHeaders")," would be to automatically include ",(0,s.kt)("inlineCode",{parentName:"p"},"authorization")," headers for your API requests."),(0,s.kt)(i.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Setting a token from a redux store value',title:'"Setting',a:!0,token:!0,from:!0,redux:!0,store:!0,value:!0},"import { fetchBaseQuery } from '@reduxjs/toolkit/query'\nimport type { RootState } from './store'\n\nconst baseQuery = fetchBaseQuery({\n  baseUrl: '/',\n  prepareHeaders: (headers, { getState }) => {\n    const token = (getState() as RootState).auth.token\n\n    // If we have a token set in state, let's assume that we should be passing it.\n    if (token) {\n      headers.set('authorization', `Bearer ${token}`)\n    }\n\n    return headers\n  },\n})\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Setting a token from a redux store value',title:'"Setting',a:!0,token:!0,from:!0,redux:!0,store:!0,value:!0},"import { fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nconst baseQuery = fetchBaseQuery({\n  baseUrl: '/',\n  prepareHeaders: (headers, { getState }) => {\n    const token = getState().auth.token\n\n    // If we have a token set in state, let's assume that we should be passing it.\n    if (token) {\n      headers.set('authorization', `Bearer ${token}`)\n    }\n\n    return headers\n  },\n})\n")))),(0,s.kt)("h2",{id:"individual-query-options"},"Individual query options"),(0,s.kt)("p",null,"There is more behavior that you can define on a per-request basis. The ",(0,s.kt)("inlineCode",{parentName:"p"},"query")," field may return an object containing any of the default ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch")," options available to the ",(0,s.kt)("inlineCode",{parentName:"p"},"RequestInit")," interface, as well as these additional options:"),(0,s.kt)(i.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="endpoint request options"',title:'"endpoint',request:!0,'options"':!0},"interface FetchArgs extends RequestInit {\n  url: string\n  params?: Record<string, any>\n  body?: any\n  responseHandler?:\n    | 'json'\n    | 'text'\n    | `content-type`\n    | ((response: Response) => Promise<any>)\n  validateStatus?: (response: Response, body: any) => boolean\n  timeout?: number\n}\n\nconst defaultValidateStatus = (response: Response) =>\n  response.status >= 200 && response.status <= 299\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="endpoint request options"',title:'"endpoint',request:!0,'options"':!0},"const defaultValidateStatus = (response) =>\n  response.status >= 200 && response.status <= 299\n")))),(0,s.kt)("h3",{id:"setting-the-body"},"Setting the body"),(0,s.kt)("p",null,"By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," assumes that every request you make will be ",(0,s.kt)("inlineCode",{parentName:"p"},"json"),", so in those cases all you have to do is set the ",(0,s.kt)("inlineCode",{parentName:"p"},"url")," and pass a ",(0,s.kt)("inlineCode",{parentName:"p"},"body")," object when appropriate. For other implementations, you can manually set the ",(0,s.kt)("inlineCode",{parentName:"p"},"Headers")," to specify the content type."),(0,s.kt)("h4",{id:"json"},"json"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0}," // omitted\n  endpoints: (builder) => ({\n    updateUser: builder.query({\n      query: (user: Record<string, string>) => ({\n        url: `users`,\n        method: 'PUT',\n        body: user // Body is automatically converted to json with the correct headers\n      }),\n    }),\n")),(0,s.kt)("h4",{id:"text"},"text"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0}," // omitted\n  endpoints: (builder) => ({\n    updateUser: builder.query({\n      query: (user: Record<string, string>) => ({\n        url: `users`,\n        method: 'PUT',\n        headers: {\n            'content-type': 'text/plain',\n        },\n        body: user\n      }),\n    }),\n")),(0,s.kt)("h3",{id:"setting-the-query-string"},"Setting the query string"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," provides a simple mechanism that converts an ",(0,s.kt)("inlineCode",{parentName:"p"},"object")," to a serialized query string by passing the object to ",(0,s.kt)("inlineCode",{parentName:"p"},"new URLSearchParms()"),". If this doesn't suit your needs, you have two options:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Pass the ",(0,s.kt)("inlineCode",{parentName:"li"},"paramsSerializer")," option to ",(0,s.kt)("inlineCode",{parentName:"li"},"fetchBaseQuery")," to apply custom transformations"),(0,s.kt)("li",{parentName:"ol"},"Build your own querystring and set it in the ",(0,s.kt)("inlineCode",{parentName:"li"},"url"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0}," // omitted\n  endpoints: (builder) => ({\n    updateUser: builder.query({\n      query: (user: Record<string, string>) => ({\n        url: `users`,\n        // Assuming no `paramsSerializer` is specified, the user object is automatically converted\n        // and produces a url like /api/users?first_name=test&last_name=example\n        params: user\n      }),\n    }),\n")),(0,s.kt)("h3",{id:"parsing-a-response"},"Parsing a Response"),(0,s.kt)("p",null,"By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," assumes that every ",(0,s.kt)("inlineCode",{parentName:"p"},"Response")," you get will be parsed as ",(0,s.kt)("inlineCode",{parentName:"p"},"json"),". In the event that you don't want that to happen, you can customize the behavior by specifying an alternative response handler like ",(0,s.kt)("inlineCode",{parentName:"p"},"text"),", or take complete control and use a custom function that accepts the raw ",(0,s.kt)("inlineCode",{parentName:"p"},"Response")," object ","\u2014"," allowing you to use any ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},(0,s.kt)("inlineCode",{parentName:"a"},"Response")," method"),"."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"responseHandler")," field can be either:"),(0,s.kt)(i.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"type ResponseHandler =\n  | 'content-type'\n  | 'json'\n  | 'text'\n  | ((response: Response) => Promise<any>)\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"")))),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},'"json"')," and ",(0,s.kt)("inlineCode",{parentName:"p"},'"text"')," values instruct ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," to the corresponding fetch response methods for reading the body. ",(0,s.kt)("inlineCode",{parentName:"p"},"content-type")," will check the header field to first determine if this appears to be JSON, and then use one of those two methods. The callback allows you to process the body yourself."),(0,s.kt)(i.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Parse a Response as text"',title:'"Parse',a:!0,Response:!0,as:!0,'text"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const customApi = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),\n  endpoints: (builder) => ({\n    getUsers: builder.query({\n      query: () => ({\n        url: `users`,\n        // This is the same as passing 'text'\n        responseHandler: (response) => response.text(),\n      }),\n    }),\n  }),\n})\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Parse a Response as text"',title:'"Parse',a:!0,Response:!0,as:!0,'text"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const customApi = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),\n  endpoints: (builder) => ({\n    getUsers: builder.query({\n      query: () => ({\n        url: `users`,\n        // This is the same as passing 'text'\n        responseHandler: (response) => response.text(),\n      }),\n    }),\n  }),\n})\n")))),(0,s.kt)("admonition",{title:"Note about responses that return an undefined body",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"If you make a ",(0,s.kt)("inlineCode",{parentName:"p"},"json")," request to an API that only returns a ",(0,s.kt)("inlineCode",{parentName:"p"},"200")," with an undefined body, ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," will pass that through as ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined")," and will not try to parse it as ",(0,s.kt)("inlineCode",{parentName:"p"},"json"),". This can be common with some APIs, especially on ",(0,s.kt)("inlineCode",{parentName:"p"},"delete")," requests.")),(0,s.kt)("h3",{id:"handling-non-standard-response-status-codes"},"Handling non-standard Response status codes"),(0,s.kt)("p",null,"By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," will ",(0,s.kt)("inlineCode",{parentName:"p"},"reject")," any ",(0,s.kt)("inlineCode",{parentName:"p"},"Response")," that does not have a status code of ",(0,s.kt)("inlineCode",{parentName:"p"},"2xx")," and set it to ",(0,s.kt)("inlineCode",{parentName:"p"},"error"),". This is the same behavior you've most likely experienced with ",(0,s.kt)("inlineCode",{parentName:"p"},"axios")," and other popular libraries. In the event that you have a non-standard API you're dealing with, you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"validateStatus")," option to customize this behavior."),(0,s.kt)(i.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Using a custom validateStatus"',title:'"Using',a:!0,custom:!0,'validateStatus"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const customApi = createApi({\n  // Set the baseUrl for every endpoint below\n  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),\n  endpoints: (builder) => ({\n    getUsers: builder.query({\n      query: () => ({\n        url: `users`,\n        // Example: we have a backend API always returns a 200,\n        // but sets an `isError` property when there is an error.\n        validateStatus: (response, result) =>\n          response.status === 200 && !result.isError,\n      }),\n    }),\n  }),\n})\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Using a custom validateStatus"',title:'"Using',a:!0,custom:!0,'validateStatus"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const customApi = createApi({\n  // Set the baseUrl for every endpoint below\n  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),\n  endpoints: (builder) => ({\n    getUsers: builder.query({\n      query: () => ({\n        url: `users`,\n        // Example: we have a backend API always returns a 200,\n        // but sets an `isError` property when there is an error.\n        validateStatus: (response, result) =>\n          response.status === 200 && !result.isError,\n      }),\n    }),\n  }),\n})\n")))),(0,s.kt)("h3",{id:"adding-a-custom-timeout-to-requests"},"Adding a custom timeout to requests"),(0,s.kt)("p",null,"By default, ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery")," has no default timeout value set, meaning your requests will stay pending until your api resolves the request(s) or it reaches the browser's default timeout (normally 5 minutes). Most of the time, this isn't what you'll want. When using ",(0,s.kt)("inlineCode",{parentName:"p"},"fetchBaseQuery"),", you have the ability to set a ",(0,s.kt)("inlineCode",{parentName:"p"},"timeout")," on the ",(0,s.kt)("inlineCode",{parentName:"p"},"baseQuery")," or on individual endpoints. When specifying both options, the endpoint value will take priority."),(0,s.kt)(i.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Setting a timeout value"',title:'"Setting',a:!0,timeout:!0,'value"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const api = createApi({\n  // Set a default timeout of 10 seconds\n  baseQuery: fetchBaseQuery({ baseUrl: '/api/', timeout: 10000 }),\n  endpoints: (builder) => ({\n    getUsers: builder.query({\n      query: () => ({\n        url: `users`,\n        // Example: we know the users endpoint is _really fast_ because it's always cached.\n        // We can assume if its over > 1000ms, something is wrong and we should abort the request.\n        timeout: 1000,\n      }),\n    }),\n  }),\n})\n"))),(0,s.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Setting a timeout value"',title:'"Setting',a:!0,timeout:!0,'value"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nexport const api = createApi({\n  // Set a default timeout of 10 seconds\n  baseQuery: fetchBaseQuery({ baseUrl: '/api/', timeout: 10000 }),\n  endpoints: (builder) => ({\n    getUsers: builder.query({\n      query: () => ({\n        url: `users`,\n        // Example: we know the users endpoint is _really fast_ because it's always cached.\n        // We can assume if its over > 1000ms, something is wrong and we should abort the request.\n        timeout: 1000,\n      }),\n    }),\n  }),\n})\n")))))}y.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);