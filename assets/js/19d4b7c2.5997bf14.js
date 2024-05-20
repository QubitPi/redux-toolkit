"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5],{3411:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7378),r=n(7140),i="tabItem_wHwb";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},2453:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(2685),r=n(7378),i=n(7140),o=n(362),s=n(56),l=n(5720),u=n(9169),p="tabList_J5MA",d="tabItem_l0OV";function c(e){var t,n,o=e.lazy,c=e.block,g=e.defaultValue,m=e.values,h=e.groupId,f=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===g?g:null!=(t=null!=g?g:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var P=(0,l.U)(),T=P.tabGroupChoices,w=P.setTabGroupChoices,x=(0,r.useState)(k),A=x[0],I=x[1],q=[],L=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var N=T[h];null!=N&&N!==A&&v.some((function(e){return e.value===N}))&&I(N)}var E=function(e){var t=e.currentTarget,n=q.indexOf(t),a=v[n].value;a!==A&&(L(t),I(a),null!=h&&w(h,String(a)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=q.indexOf(e.currentTarget)+1;n=null!=(a=q[r])?a:q[0];break;case"ArrowLeft":var i,o=q.indexOf(e.currentTarget)-1;n=null!=(i=q[o])?i:q[q.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return q.push(e)},onKeyDown:j,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":A===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(y.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function g(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},7829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return g}});var a=n(2685),r=n(1244),i=(n(7378),n(5318)),o=n(3411),s=n(2453),l=["components"],u={id:"pagination",title:"Pagination",sidebar_label:"Pagination",hide_title:!0,description:"RTK Query > Usage > Pagination: suggestions for handling paginated data"},p=void 0,d={unversionedId:"rtk-query/usage/pagination",id:"rtk-query/usage/pagination",title:"Pagination",description:"RTK Query > Usage > Pagination: suggestions for handling paginated data",source:"@site/../docs/rtk-query/usage/pagination.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/pagination",permalink:"/rtk-query/usage/pagination",draft:!1,tags:[],version:"current",lastUpdatedAt:1716193556,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"pagination",title:"Pagination",sidebar_label:"Pagination",hide_title:!0,description:"RTK Query > Usage > Pagination: suggestions for handling paginated data"},sidebar:"docs",previous:{title:"Error Handling",permalink:"/rtk-query/usage/error-handling"},next:{title:"Prefetching",permalink:"/rtk-query/usage/prefetching"}},c={},g=[{value:"Pagination Recipes",id:"pagination-recipes",level:2},{value:"Setup an endpoint to accept a page <code>arg</code>",id:"setup-an-endpoint-to-accept-a-page-arg",level:3},{value:"Trigger the next page by incrementing the <code>page</code> state variable",id:"trigger-the-next-page-by-incrementing-the-page-state-variable",level:3},{value:"Automated Re-fetching of Paginated Queries",id:"automated-re-fetching-of-paginated-queries",level:3},{value:"General Pagination Example",id:"general-pagination-example",level:2}],m={toc:g};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"RTK Query does not include any built-in pagination behavior. However, RTK Query does make it straightforward to integrate with a standard index-based pagination API. This is the most common form of pagination that you'll need to implement."),(0,i.kt)("h2",{id:"pagination-recipes"},"Pagination Recipes"),(0,i.kt)("h3",{id:"setup-an-endpoint-to-accept-a-page-arg"},"Setup an endpoint to accept a page ",(0,i.kt)("inlineCode",{parentName:"h3"},"arg")),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/services/posts.ts"',title:'"src/app/services/posts.ts"'},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\ninterface Post {\n  id: number\n  name: string\n}\ninterface ListResponse<T> {\n  page: number\n  per_page: number\n  total: number\n  total_pages: number\n  data: T[]\n}\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: (builder) => ({\n    listPosts: builder.query<ListResponse<Post>, number | void>({\n      query: (page = 1) => `posts?page=${page}`,\n    }),\n  }),\n})\n\nexport const { useListPostsQuery } = api\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/app/services/posts.js"',title:'"src/app/services/posts.js"'},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\nexport const api = createApi({\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  endpoints: (builder) => ({\n    listPosts: builder.query({\n      query: (page = 1) => `posts?page=${page}`,\n    }),\n  }),\n})\n\nexport const { useListPostsQuery } = api\n")))),(0,i.kt)("h3",{id:"trigger-the-next-page-by-incrementing-the-page-state-variable"},"Trigger the next page by incrementing the ",(0,i.kt)("inlineCode",{parentName:"h3"},"page")," state variable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'no-transpile title="src/features/posts/PostsManager.tsx"',"no-transpile":!0,title:'"src/features/posts/PostsManager.tsx"'},"const PostList = () => {\n  const [page, setPage] = useState(1)\n  const { data: posts, isLoading, isFetching } = useListPostsQuery(page)\n\n  if (isLoading) {\n    return <div>Loading</div>\n  }\n\n  if (!posts?.data) {\n    return <div>No posts :(</div>\n  }\n\n  return (\n    <div>\n      {posts.data.map(({ id, title, status }) => (\n        <div key={id}>\n          {title} - {status}\n        </div>\n      ))}\n      <button onClick={() => setPage(page - 1)} isLoading={isFetching}>\n        Previous\n      </button>\n      <button onClick={() => setPage(page + 1)} isLoading={isFetching}>\n        Next\n      </button>\n    </div>\n  )\n}\n")),(0,i.kt)("h3",{id:"automated-re-fetching-of-paginated-queries"},"Automated Re-fetching of Paginated Queries"),(0,i.kt)("p",null,"It is a common use-case to utilize tag invalidation to perform\n",(0,i.kt)("a",{parentName:"p",href:"/rtk-query/usage/automated-refetching"},"automated re-fetching")," with RTK Query."),(0,i.kt)("p",null,"A potential pitfall when combining this with pagination is that your paginated query may only\nprovide a ",(0,i.kt)("em",{parentName:"p"},"partial")," list at any given time, and hence not ",(0,i.kt)("inlineCode",{parentName:"p"},"provide")," tags for entity IDs that\nfall on pages which aren't currently shown. If a specific entity is deleted that falls on an\nearlier page, the paginated query will not be providing a tag for that specific ID, and will\nnot be invalidated to trigger re-fetching data. As a result, items on the current page that\nshould shift one item up will not have done so, and the total count of items and/or pages\nmay be incorrect."),(0,i.kt)("p",null,"A strategy to overcome this is to ensure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," mutation always ",(0,i.kt)("inlineCode",{parentName:"p"},"invalidates")," the\npaginated query, even if the deleted item is not ",(0,i.kt)("em",{parentName:"p"},"currently")," provided on that page. We can\nleverage the concept of\n",(0,i.kt)("a",{parentName:"p",href:"/rtk-query/usage/automated-refetching#advanced-invalidation-with-abstract-tag-ids"},"advanced invalidation with abstract tag ids"),"\nto do this by ",(0,i.kt)("inlineCode",{parentName:"p"},"providing")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"'Posts'")," tag with the ",(0,i.kt)("inlineCode",{parentName:"p"},"'PARTIAL-LIST'")," ID in our paginated query,\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"invalidating")," that corresponding tag for any mutation that should affect it."),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Example of invalidating cache for paginated queries"',title:'"Example',of:!0,invalidating:!0,cache:!0,for:!0,paginated:!0,'queries"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\ninterface Post {\n  id: number\n  name: string\n}\ninterface ListResponse<T> {\n  page: number\n  per_page: number\n  total: number\n  total_pages: number\n  data: T[]\n}\n\nexport const postApi = createApi({\n  reducerPath: 'postsApi',\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  tagTypes: ['Posts'],\n  endpoints: (build) => ({\n    listPosts: build.query<ListResponse<Post>, number | void>({\n      query: (page = 1) => `posts?page=${page}`,\n      // highlight-start\n      providesTags: (result, error, page) =>\n        result\n          ? [\n              // Provides a tag for each post in the current page,\n              // as well as the 'PARTIAL-LIST' tag.\n              ...result.data.map(({ id }) => ({ type: 'Posts' as const, id })),\n              { type: 'Posts', id: 'PARTIAL-LIST' },\n            ]\n          : [{ type: 'Posts', id: 'PARTIAL-LIST' }],\n      // highlight-end\n    }),\n    deletePost: build.mutation<{ success: boolean; id: number }, number>({\n      query(id) {\n        return {\n          url: `post/${id}`,\n          method: 'DELETE',\n        }\n      },\n      // Invalidates the tag for this Post `id`, as well as the `PARTIAL-LIST` tag,\n      // causing the `listPosts` query to re-fetch if a component is subscribed to the query.\n      // highlight-start\n      invalidatesTags: (result, error, id) => [\n        { type: 'Posts', id },\n        { type: 'Posts', id: 'PARTIAL-LIST' },\n      ],\n      // highlight-end\n    }),\n  }),\n})\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example of invalidating cache for paginated queries"',title:'"Example',of:!0,invalidating:!0,cache:!0,for:!0,paginated:!0,'queries"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\nexport const postApi = createApi({\n  reducerPath: 'postsApi',\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  tagTypes: ['Posts'],\n  endpoints: (build) => ({\n    listPosts: build.query({\n      query: (page = 1) => `posts?page=${page}`,\n      // highlight-start\n      providesTags: (result, error, page) =>\n        result\n          ? [\n              // Provides a tag for each post in the current page,\n              // as well as the 'PARTIAL-LIST' tag.\n              ...result.data.map(({ id }) => ({ type: 'Posts', id })),\n              { type: 'Posts', id: 'PARTIAL-LIST' },\n            ]\n          : [{ type: 'Posts', id: 'PARTIAL-LIST' }],\n      // highlight-end\n    }),\n    deletePost: build.mutation({\n      query(id) {\n        return {\n          url: `post/${id}`,\n          method: 'DELETE',\n        }\n      },\n      // Invalidates the tag for this Post `id`, as well as the `PARTIAL-LIST` tag,\n      // causing the `listPosts` query to re-fetch if a component is subscribed to the query.\n      // highlight-start\n      invalidatesTags: (result, error, id) => [\n        { type: 'Posts', id },\n        { type: 'Posts', id: 'PARTIAL-LIST' },\n      ],\n      // highlight-end\n    }),\n  }),\n})\n")))),(0,i.kt)("h2",{id:"general-pagination-example"},"General Pagination Example"),(0,i.kt)("p",null,"In the following example, you'll see ",(0,i.kt)("inlineCode",{parentName:"p"},"Loading")," on the initial query, but then as you move forward we'll use the next/previous buttons as a ",(0,i.kt)("em",{parentName:"p"},"fetching")," indicator while any non-cached query is performed. When you go back, the cached data will be served instantaneously."),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/pagination?fontsize=12&runonclick=1&hidenavigation=1&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query Pagination Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}h.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);