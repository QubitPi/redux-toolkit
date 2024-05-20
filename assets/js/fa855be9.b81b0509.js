"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4983],{3411:function(e,n,t){t.d(n,{Z:function(){return o}});var i=t(7378),a=t(7140),r="tabItem_wHwb";function o(e){var n=e.children,t=e.hidden,o=e.className;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:t},n)}},2453:function(e,n,t){t.d(n,{Z:function(){return f}});var i=t(2685),a=t(7378),r=t(7140),o=t(362),l=t(56),s=t(5720),d=t(9169),p="tabList_J5MA",c="tabItem_l0OV";function u(e){var n,t,o=e.lazy,u=e.block,f=e.defaultValue,m=e.values,h=e.groupId,g=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.l)(b,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===f?f:null!=(n=null!=f?f:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),E=w.tabGroupChoices,T=w.setTabGroupChoices,N=(0,a.useState)(k),I=N[0],O=N[1],j=[],A=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var P=E[h];null!=P&&P!==I&&b.some((function(e){return e.value===P}))&&O(P)}var C=function(e){var n=e.currentTarget,t=j.indexOf(n),i=b[t].value;i!==I&&(A(n),O(i),null!=h&&T(h,String(i)))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i,a=j.indexOf(e.currentTarget)+1;t=null!=(i=j[a])?i:j[0];break;case"ArrowLeft":var r,o=j.indexOf(e.currentTarget)-1;t=null!=(r=j[o])?r:j[j.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},g)},b.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return j.push(e)},onKeyDown:x,onFocus:C,onClick:C},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":I===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function f(e){var n=(0,o.Z)();return a.createElement(u,(0,i.Z)({key:String(n)},e))}},5547:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return f}});var i=t(2685),a=t(1244),r=(t(7378),t(5318)),o=t(3411),l=t(2453),s=["components"],d={id:"code-splitting",title:"API Slices: Code Splitting and Generation",sidebar_label:"Code Splitting",hide_title:!0},p=void 0,c={unversionedId:"rtk-query/api/created-api/code-splitting",id:"rtk-query/api/created-api/code-splitting",title:"API Slices: Code Splitting and Generation",description:"&nbsp;",source:"@site/../docs/rtk-query/api/created-api/code-splitting.mdx",sourceDirName:"rtk-query/api/created-api",slug:"/rtk-query/api/created-api/code-splitting",permalink:"/rtk-query/api/created-api/code-splitting",draft:!1,tags:[],version:"current",lastUpdatedAt:1716195420,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"code-splitting",title:"API Slices: Code Splitting and Generation",sidebar_label:"Code Splitting",hide_title:!0},sidebar:"docs",previous:{title:"Endpoints",permalink:"/rtk-query/api/created-api/endpoints"},next:{title:"API Slice Utilities",permalink:"/rtk-query/api/created-api/api-slice-utils"}},u={},f=[{value:"<code>injectEndpoints</code>",id:"injectendpoints",level:2},{value:"Signature",id:"signature",level:4},{value:"Description",id:"description",level:4},{value:"<code>enhanceEndpoints</code>",id:"enhanceendpoints",level:2},{value:"Signature",id:"signature-1",level:4},{value:"Description",id:"description-1",level:4}],m={toc:f};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-slices-code-splitting-and-generation"},"API Slices: Code Splitting and Generation"),(0,r.kt)("p",null,"Each API slice allows ",(0,r.kt)("a",{parentName:"p",href:"/rtk-query/usage/code-splitting"},"additional endpoint definitions to be injected at runtime")," after the initial API slice has been defined. This can be beneficial for apps that may have ",(0,r.kt)("em",{parentName:"p"},"many")," endpoints."),(0,r.kt)("p",null,"The individual API slice endpoint definitions can also be split across multiple files. This is primarily useful for working with API slices that were ",(0,r.kt)("a",{parentName:"p",href:"/rtk-query/usage/code-generation"},"code-generated from an API schema file"),", allowing you to add additional custom behavior and configuration to a set of automatically-generated endpoint definitions."),(0,r.kt)("p",null,"Each API slice object has ",(0,r.kt)("inlineCode",{parentName:"p"},"injectEndpoints")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"enhanceEndpoints")," functions to support these use cases."),(0,r.kt)("h2",{id:"injectendpoints"},(0,r.kt)("inlineCode",{parentName:"h2"},"injectEndpoints")),(0,r.kt)("h4",{id:"signature"},"Signature"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"const injectEndpoints = (endpointOptions: InjectedEndpointOptions) =>\n  EnhancedApiSlice\n\ninterface InjectedEndpointOptions {\n  endpoints: (build: EndpointBuilder) => NewEndpointDefinitions\n  /**\n   * Optionally allows endpoints to be overridden if defined by multiple `injectEndpoints` calls.\n   *\n   * If set to `true`, will override existing endpoints with the new definition.\n   * If set to `'throw'`, will throw an error if an endpoint is redefined with a different definition.\n   * If set to `false` (or unset), will not override existing endpoints with the new definition, and log a warning in development.\n   */\n  overrideExisting?: boolean | 'throw'\n}\n")),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Accepts an options object containing the same ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoints")," builder callback you would pass to ",(0,r.kt)("a",{parentName:"p",href:"/rtk-query/api/createApi#endpoints"},(0,r.kt)("inlineCode",{parentName:"a"},"createApi.endpoints")),". Any endpoint definitions defined using that builder will be merged into the existing endpoint definitions for this API slice using a shallow merge, so any new endpoint definitions will override existing endpoints with the same name."),(0,r.kt)("p",null,"Returns an updated and enhanced version of the API slice object, containing the combined endpoint definitions."),(0,r.kt)("p",null,"Endpoints will not be overridden unless ",(0,r.kt)("inlineCode",{parentName:"p"},"overrideExisting")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". If not, a development mode warning will be shown to notify you if there is a name clash between endpoint definitions."),(0,r.kt)("p",null,"This method is primarily useful for code splitting and hot reloading."),(0,r.kt)("h2",{id:"enhanceendpoints"},(0,r.kt)("inlineCode",{parentName:"h2"},"enhanceEndpoints")),(0,r.kt)("h4",{id:"signature-1"},"Signature"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"no-transpile","no-transpile":!0},"const enhanceEndpoints = (endpointOptions: EnhanceEndpointsOptions) =>\n  EnhancedApiSlice\n\ninterface EnhanceEndpointsOptions {\n  addTagTypes?: readonly string[]\n  endpoints?: Record<string, Partial<EndpointDefinition>>\n}\n")),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"Any provided tag types or endpoint definitions will be merged into the existing endpoint definitions for this API slice. Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"injectEndpoints"),", the partial endpoint definitions will not ",(0,r.kt)("em",{parentName:"p"},"replace")," existing definitions, but are rather merged together on a per-definition basis (ie, ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.assign(existingEndpoint, newPartialEndpoint)"),")."),(0,r.kt)("p",null,"Returns an updated and enhanced version of the API slice object, containing the combined endpoint definitions."),(0,r.kt)("p",null,"This is primarily useful for taking an API slice object that was code-generated from an API schema file like OpenAPI, and adding additional specific hand-written configuration for cache invalidation management on top of the generated endpoint definitions."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"enhanceEndpoints")," can be used to modify caching behavior by changing the values of ",(0,r.kt)("inlineCode",{parentName:"p"},"providesTags"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"invalidatesTags"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"keepUnusedDataFor"),":"),(0,r.kt)(l.Z,{groupId:"language",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { api } from './api'\n\nconst enhancedApi = api.enhanceEndpoints({\n  addTagTypes: ['User'],\n  endpoints: {\n    getUserByUserId: {\n      providesTags: ['User'],\n    },\n    patchUserByUserId: {\n      invalidatesTags: ['User'],\n    },\n    // alternatively, define a function which is called with the endpoint definition as an argument\n    getUsers(endpoint) {\n      endpoint.providesTags = ['User']\n      endpoint.keepUnusedDataFor = 120\n    },\n  },\n})\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { api } from './api'\n\nconst enhancedApi = api.enhanceEndpoints({\n  addTagTypes: ['User'],\n  endpoints: {\n    getUserByUserId: {\n      providesTags: ['User'],\n    },\n    patchUserByUserId: {\n      invalidatesTags: ['User'],\n    },\n    // alternatively, define a function which is called with the endpoint definition as an argument\n    getUsers(endpoint) {\n      endpoint.providesTags = ['User']\n      endpoint.keepUnusedDataFor = 120\n    },\n  },\n})\n")))))}h.isMDXComponent=!0},5318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var i=t(7378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||r;return t?i.createElement(m,o(o({ref:n},p),{},{components:t})):i.createElement(m,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);