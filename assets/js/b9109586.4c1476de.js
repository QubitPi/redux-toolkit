"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8706],{3411:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7378),r=n(7140),i="tabItem_wHwb";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},2453:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(2685),r=n(7378),i=n(7140),o=n(362),s=n(56),u=n(5720),l=n(9169),d="tabList_J5MA",p="tabItem_l0OV";function c(e){var t,n,o=e.lazy,c=e.block,h=e.defaultValue,m=e.values,f=e.groupId,y=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===h?h:null!=(t=null!=h?h:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var P=(0,u.U)(),w=P.tabGroupChoices,T=P.setTabGroupChoices,q=(0,r.useState)(b),N=q[0],x=q[1],C=[],M=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=w[f];null!=E&&E!==N&&v.some((function(e){return e.value===E}))&&x(E)}var I=function(e){var t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==N&&(M(t),x(a),null!=f&&T(f,String(a)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=C.indexOf(e.currentTarget)+1;n=null!=(a=C[r])?a:C[0];break;case"ArrowLeft":var i,o=C.indexOf(e.currentTarget)-1;n=null!=(i=C[o])?i:C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},y)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function h(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},8162:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var a=n(2685),r=n(1244),i=(n(7378),n(5318)),o=n(3411),s=n(2453),u=["components"],l={id:"mutations",title:"Mutations",sidebar_label:"Mutations",hide_title:!0,description:"RTK Query > Usage > Mutations: sending updates to the server"},d=void 0,p={unversionedId:"rtk-query/usage/mutations",id:"rtk-query/usage/mutations",title:"Mutations",description:"RTK Query > Usage > Mutations: sending updates to the server",source:"@site/../docs/rtk-query/usage/mutations.mdx",sourceDirName:"rtk-query/usage",slug:"/rtk-query/usage/mutations",permalink:"/rtk-query/usage/mutations",draft:!1,tags:[],version:"current",lastUpdatedAt:1716195420,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"mutations",title:"Mutations",sidebar_label:"Mutations",hide_title:!0,description:"RTK Query > Usage > Mutations: sending updates to the server"},sidebar:"docs",previous:{title:"Queries",permalink:"/rtk-query/usage/queries"},next:{title:"Cache Behavior",permalink:"/rtk-query/usage/cache-behavior"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"Defining Mutation Endpoints",id:"defining-mutation-endpoints",level:2},{value:"Performing Mutations with React Hooks",id:"performing-mutations-with-react-hooks",level:2},{value:"Mutation Hook Behavior",id:"mutation-hook-behavior",level:3},{value:"Frequently Used Mutation Hook Return Values",id:"frequently-used-mutation-hook-return-values",level:3},{value:"Shared Mutation Results",id:"shared-mutation-results",level:3},{value:"Standard Mutation Example",id:"standard-mutation-example",level:3},{value:"Advanced Mutations with Revalidation",id:"advanced-mutations-with-revalidation",level:2},{value:"Revalidation Example",id:"revalidation-example",level:3}],m={toc:h};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mutations"},"Mutations"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Mutations are used to send data updates to the server and apply the changes to the local cache. Mutations can also invalidate cached data and force re-fetches."),(0,i.kt)("h2",{id:"defining-mutation-endpoints"},"Defining Mutation Endpoints"),(0,i.kt)("p",null,"Mutation endpoints are defined by returning an object inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoints")," section of ",(0,i.kt)("inlineCode",{parentName:"p"},"createApi"),", and defining the fields using the ",(0,i.kt)("inlineCode",{parentName:"p"},"build.mutation()")," method."),(0,i.kt)("p",null,"Mutation endpoints should define either a ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," callback that constructs the URL (including any URL query params), or ",(0,i.kt)("a",{parentName:"p",href:"/rtk-query/usage/customizing-queries#customizing-queries-with-queryfn"},"a ",(0,i.kt)("inlineCode",{parentName:"a"},"queryFn")," callback")," that may do arbitrary async logic and return a result. The ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," callback may also return an object containing the URL, the HTTP method to use and a request body."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),' callback needs additional data to generate the URL, it should be written to take a single argument. If you need to pass in multiple parameters, pass them formatted as a single "options object".'),(0,i.kt)("p",null,'Mutation endpoints may also modify the response contents before the result is cached, define "tags" to identify cache invalidation, and provide cache entry lifecycle callbacks to run additional logic as cache entries are added and removed.'),(0,i.kt)("p",null,"When used with TypeScript, you should supply generics for the return type and the expected query argument: ",(0,i.kt)("inlineCode",{parentName:"p"},"build.mutation<ReturnType, ArgType>"),". If there is no argument, use ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," for the arg type instead."),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Example of all mutation endpoint options"',title:'"Example',of:!0,all:!0,mutation:!0,endpoint:!0,'options"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\nimport type { Post } from './types'\n\nconst api = createApi({\n  baseQuery: fetchBaseQuery({\n    baseUrl: '/',\n  }),\n  tagTypes: ['Post'],\n  endpoints: (build) => ({\n    // The mutation accepts a `Partial<Post>` arg, and returns a `Post`\n    updatePost: build.mutation<Post, Partial<Post> & Pick<Post, 'id'>>({\n      // highlight-start\n      // note: an optional `queryFn` may be used in place of `query`\n      query: ({ id, ...patch }) => ({\n        url: `post/${id}`,\n        method: 'PATCH',\n        body: patch,\n      }),\n      // Pick out data and prevent nested properties in a hook or selector\n      transformResponse: (response: { data: Post }, meta, arg) => response.data,\n      // Pick out errors and prevent nested properties in a hook or selector\n      transformErrorResponse: (\n        response: { status: string | number },\n        meta,\n        arg\n      ) => response.status,\n      invalidatesTags: ['Post'],\n      // onQueryStarted is useful for optimistic updates\n      // The 2nd parameter is the destructured `MutationLifecycleApi`\n      async onQueryStarted(\n        arg,\n        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }\n      ) {},\n      // The 2nd parameter is the destructured `MutationCacheLifecycleApi`\n      async onCacheEntryAdded(\n        arg,\n        {\n          dispatch,\n          getState,\n          extra,\n          requestId,\n          cacheEntryRemoved,\n          cacheDataLoaded,\n          getCacheEntry,\n        }\n      ) {},\n      // highlight-end\n    }),\n  }),\n})\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Example of all mutation endpoint options"',title:'"Example',of:!0,all:!0,mutation:!0,endpoint:!0,'options"':!0},"import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'\n\nconst api = createApi({\n  baseQuery: fetchBaseQuery({\n    baseUrl: '/',\n  }),\n  tagTypes: ['Post'],\n  endpoints: (build) => ({\n    // The mutation accepts a `Partial<Post>` arg, and returns a `Post`\n    updatePost: build.mutation({\n      // highlight-start\n      // note: an optional `queryFn` may be used in place of `query`\n      query: ({ id, ...patch }) => ({\n        url: `post/${id}`,\n        method: 'PATCH',\n        body: patch,\n      }),\n      // Pick out data and prevent nested properties in a hook or selector\n      transformResponse: (response, meta, arg) => response.data,\n      // Pick out errors and prevent nested properties in a hook or selector\n      transformErrorResponse: (response, meta, arg) => response.status,\n      invalidatesTags: ['Post'],\n      // onQueryStarted is useful for optimistic updates\n      // The 2nd parameter is the destructured `MutationLifecycleApi`\n      async onQueryStarted(\n        arg,\n        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }\n      ) {},\n      // The 2nd parameter is the destructured `MutationCacheLifecycleApi`\n      async onCacheEntryAdded(\n        arg,\n        {\n          dispatch,\n          getState,\n          extra,\n          requestId,\n          cacheEntryRemoved,\n          cacheDataLoaded,\n          getCacheEntry,\n        }\n      ) {},\n      // highlight-end\n    }),\n  }),\n})\n")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"onQueryStarted")," method can be used for ",(0,i.kt)("a",{parentName:"p",href:"/rtk-query/usage/manual-cache-updates#optimistic-updates"},"optimistic updates"))),(0,i.kt)("h2",{id:"performing-mutations-with-react-hooks"},"Performing Mutations with React Hooks"),(0,i.kt)("h3",{id:"mutation-hook-behavior"},"Mutation Hook Behavior"),(0,i.kt)("p",null,"Unlike ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"useMutation"),' returns a tuple. The first item in the tuple is the "trigger" function and the second element contains an object with ',(0,i.kt)("inlineCode",{parentName:"p"},"status"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"error"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,i.kt)("p",null,"Unlike the ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," hook, the ",(0,i.kt)("inlineCode",{parentName:"p"},"useMutation")," hook doesn't execute automatically. To run a mutation you have to call the trigger function returned as the first tuple value from the hook."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/rtk-query/api/created-api/hooks#usemutation"},(0,i.kt)("inlineCode",{parentName:"a"},"useMutation"))," for the hook signature and additional details."),(0,i.kt)("h3",{id:"frequently-used-mutation-hook-return-values"},"Frequently Used Mutation Hook Return Values"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"useMutation"),' hook returns a tuple containing a "mutation trigger" function, as well as an object containing properties about the "mutation result".'),(0,i.kt)("p",null,'The "mutation trigger" is a function that when called, will fire off the mutation request for that endpoint. Calling the "mutation trigger" returns a promise with an ',(0,i.kt)("inlineCode",{parentName:"p"},"unwrap")," property, which can be called to unwrap the mutation call and provide the raw response/error. This can be useful if you wish to determine whether the mutation succeeds/fails inline at the call-site."),(0,i.kt)("p",null,'The "mutation result" is an object containing properties such as the latest ',(0,i.kt)("inlineCode",{parentName:"p"},"data")," for the mutation request, as well as status booleans for the current request lifecycle state."),(0,i.kt)("p",null,'Below are some of the most frequently used properties on the "mutation result" object. Refer to ',(0,i.kt)("a",{parentName:"p",href:"/rtk-query/api/created-api/hooks#usemutation"},(0,i.kt)("inlineCode",{parentName:"a"},"useMutation"))," for an extensive list of all returned properties."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")," - The data returned from the latest trigger response, if present. If subsequent triggers from the same hook instance are called, this will return undefined until the new data is received. Consider component level caching if the previous response data is required for a smooth transition to new data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error")," - The error result if present."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isUninitialized")," - When true, indicates that the mutation has not been fired yet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isLoading")," - When true, indicates that the mutation has been fired and is awaiting a response."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isSuccess")," - When true, indicates that the last mutation fired has data from a successful request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isError")," - When true, indicates that the last mutation fired resulted in an error state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reset")," - A method to reset the hook back to it's original state and remove the current result from the cache")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"With RTK Query, a mutation does not contain a semantic distinction between 'loading' and 'fetching' in the way that a ",(0,i.kt)("a",{parentName:"p",href:"/rtk-query/usage/queries#frequently-used-query-hook-return-values"},"query does"),". For a mutation, subsequent calls are not assumed to be necessarily related, so a mutation is either 'loading' or 'not loading', with no concept of 're-fetching'.")),(0,i.kt)("h3",{id:"shared-mutation-results"},"Shared Mutation Results"),(0,i.kt)("p",null,"By default, separate instances of a ",(0,i.kt)("inlineCode",{parentName:"p"},"useMutation")," hook are not inherently related to each other.\nTriggering one instance will not affect the result for a separate instance. This applies regardless\nof whether the hooks are called within the same component, or different components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"no-transpile","no-transpile":!0},"export const ComponentOne = () => {\n  // Triggering `updatePostOne` will affect the result in this component,\n  // but not the result in `ComponentTwo`, and vice-versa\n  const [updatePost, result] = useUpdatePostMutation()\n\n  return <div>...</div>\n}\n\nexport const ComponentTwo = () => {\n  const [updatePost, result] = useUpdatePostMutation()\n\n  return <div>...</div>\n}\n")),(0,i.kt)("p",null,"RTK Query provides an option to share results across mutation hook instances using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"fixedCacheKey")," option.\nAny ",(0,i.kt)("inlineCode",{parentName:"p"},"useMutation")," hooks with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"fixedCacheKey")," string will share results between each other\nwhen any of the trigger functions are called. This should be a unique string shared between each\nmutation hook instance you wish to share results."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"no-transpile","no-transpile":!0},"export const ComponentOne = () => {\n  // Triggering `updatePostOne` will affect the result in both this component,\n  // but as well as the result in `ComponentTwo`, and vice-versa\n  const [updatePost, result] = useUpdatePostMutation({\n    fixedCacheKey: 'shared-update-post',\n  })\n\n  return <div>...</div>\n}\n\nexport const ComponentTwo = () => {\n  const [updatePost, result] = useUpdatePostMutation({\n    fixedCacheKey: 'shared-update-post',\n  })\n\n  return <div>...</div>\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"fixedCacheKey"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"originalArgs")," property is not able to be shared and will always be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),".")),(0,i.kt)("h3",{id:"standard-mutation-example"},"Standard Mutation Example"),(0,i.kt)("p",null,"This is a modified version of the complete example you can see at the bottom of the page to highlight the ",(0,i.kt)("inlineCode",{parentName:"p"},"updatePost")," mutation. In this scenario, a post is fetched with ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery"),", and then an ",(0,i.kt)("inlineCode",{parentName:"p"},"EditablePostName")," component is rendered that allows us to edit the name of the post."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'no-transpile title="src/features/posts/PostDetail.tsx"',"no-transpile":!0,title:'"src/features/posts/PostDetail.tsx"'},"export const PostDetail = () => {\n  const { id } = useParams<{ id: any }>()\n\n  const { data: post } = useGetPostQuery(id)\n\n  // highlight-start\n  const [\n    updatePost, // This is the mutation trigger\n    { isLoading: isUpdating }, // This is the destructured mutation result\n  ] = useUpdatePostMutation()\n  // highlight-end\n\n  return (\n    <Box p={4}>\n      <EditablePostName\n        name={post.name}\n        onUpdate={(name) => {\n          // If you want to immediately access the result of a mutation, you need to chain `.unwrap()`\n          // if you actually want the payload or to catch the error.\n          // Example: `updatePost().unwrap().then(fulfilled => console.log(fulfilled)).catch(rejected => console.error(rejected))\n\n          return (\n            // highlight-start\n            // Execute the trigger with the `id` and updated `name`\n            updatePost({ id, name })\n            // highlight-end\n          )\n        }}\n        // highlight-start\n        isLoading={isUpdating}\n        // highlight-end\n      />\n    </Box>\n  )\n}\n")),(0,i.kt)("h2",{id:"advanced-mutations-with-revalidation"},"Advanced Mutations with Revalidation"),(0,i.kt)("p",null,'In the real world, it\'s very common that a developer would want to resync their local data cache with the server after performing a mutation (aka "revalidation"). RTK Query takes a more centralized approach to this and requires you to configure the invalidation behavior in your API service definition. See ',(0,i.kt)("a",{parentName:"p",href:"./automated-refetching#advanced-invalidation-with-abstract-tag-ids"},"Advanced Invalidation with abstract tag IDs")," for details on advanced invalidation handling with RTK Query."),(0,i.kt)("h3",{id:"revalidation-example"},"Revalidation Example"),(0,i.kt)("p",null,"This is an example of a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD service")," for Posts. This implements the ",(0,i.kt)("a",{parentName:"p",href:"./automated-refetching#selectively-invalidating-lists"},"Selectively invalidating lists")," strategy and will most likely serve as a good foundation for real applications."),(0,i.kt)(s.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/app/services/posts.ts"',title:'"src/app/services/posts.ts"'},"// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\nexport interface Post {\n  id: number\n  name: string\n}\n\ntype PostsResponse = Post[]\n\nexport const postApi = createApi({\n  reducerPath: 'postsApi',\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  tagTypes: ['Posts'],\n  endpoints: (build) => ({\n    getPosts: build.query<PostsResponse, void>({\n      query: () => 'posts',\n      // Provides a list of `Posts` by `id`.\n      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.\n      // The `LIST` id is a \"virtual id\" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.\n      providesTags: (result) =>\n        // is result available?\n        result\n          ? // successful query\n            [\n              ...result.map(({ id }) => ({ type: 'Posts', id } as const)),\n              { type: 'Posts', id: 'LIST' },\n            ]\n          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated\n            [{ type: 'Posts', id: 'LIST' }],\n    }),\n    addPost: build.mutation<Post, Partial<Post>>({\n      query(body) {\n        return {\n          url: `post`,\n          method: 'POST',\n          body,\n        }\n      },\n      // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,\n      // that newly created post could show up in any lists.\n      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],\n    }),\n    getPost: build.query<Post, number>({\n      query: (id) => `post/${id}`,\n      providesTags: (result, error, id) => [{ type: 'Posts', id }],\n    }),\n    updatePost: build.mutation<Post, Partial<Post>>({\n      query(data) {\n        const { id, ...body } = data\n        return {\n          url: `post/${id}`,\n          method: 'PUT',\n          body,\n        }\n      },\n      // Invalidates all queries that subscribe to this Post `id` only.\n      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.\n      invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],\n    }),\n    deletePost: build.mutation<{ success: boolean; id: number }, number>({\n      query(id) {\n        return {\n          url: `post/${id}`,\n          method: 'DELETE',\n        }\n      },\n      // Invalidates all queries that subscribe to this Post `id` only.\n      invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],\n    }),\n  }),\n})\n\nexport const {\n  useGetPostsQuery,\n  useAddPostMutation,\n  useGetPostQuery,\n  useUpdatePostMutation,\n  useDeletePostMutation,\n} = postApi\n"))),(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/app/services/posts.js"',title:'"src/app/services/posts.js"'},"// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks\nimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'\n\nexport const postApi = createApi({\n  reducerPath: 'postsApi',\n  baseQuery: fetchBaseQuery({ baseUrl: '/' }),\n  tagTypes: ['Posts'],\n  endpoints: (build) => ({\n    getPosts: build.query({\n      query: () => 'posts',\n      // Provides a list of `Posts` by `id`.\n      // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.\n      // The `LIST` id is a \"virtual id\" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.\n      providesTags: (result) =>\n        // is result available?\n        result\n          ? // successful query\n            [\n              ...result.map(({ id }) => ({ type: 'Posts', id })),\n              { type: 'Posts', id: 'LIST' },\n            ]\n          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated\n            [{ type: 'Posts', id: 'LIST' }],\n    }),\n    addPost: build.mutation({\n      query(body) {\n        return {\n          url: `post`,\n          method: 'POST',\n          body,\n        }\n      },\n      // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,\n      // that newly created post could show up in any lists.\n      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],\n    }),\n    getPost: build.query({\n      query: (id) => `post/${id}`,\n      providesTags: (result, error, id) => [{ type: 'Posts', id }],\n    }),\n    updatePost: build.mutation({\n      query(data) {\n        const { id, ...body } = data\n        return {\n          url: `post/${id}`,\n          method: 'PUT',\n          body,\n        }\n      },\n      // Invalidates all queries that subscribe to this Post `id` only.\n      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.\n      invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],\n    }),\n    deletePost: build.mutation({\n      query(id) {\n        return {\n          url: `post/${id}`,\n          method: 'DELETE',\n        }\n      },\n      // Invalidates all queries that subscribe to this Post `id` only.\n      invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],\n    }),\n  }),\n})\n\nexport const {\n  useGetPostsQuery,\n  useAddPostMutation,\n  useGetPostQuery,\n  useUpdatePostMutation,\n  useDeletePostMutation,\n} = postApi\n")))),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/github/reduxjs/redux-toolkit/tree/master/examples/query/react/mutations?fontsize=14&runonclick=1&hidenavigation=1&module=%2Fsrc%2Fapp%2Fservices%2Fposts.ts&theme=dark",style:{width:"100%",height:"600px",border:0,borderRadius:"4px",overflow:"hidden"},title:"RTK Query - Mutations Example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}f.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,m=c["".concat(u,".").concat(h)]||c[h]||p[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);