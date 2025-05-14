"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["4396"],{7985:function(t,e,r){r.r(e),r.d(e,{CanaryProviderPagefind:()=>p});var a=r("4070"),n=r("1303"),o=r("8436"),s=r("8863"),i=r("7919"),l=r("7381"),c=r("9866"),u=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d=(t,e,r,a)=>{for(var n,o=a>1?void 0:a?h(e,r):e,s=t.length-1;s>=0;s--)(n=t[s])&&(o=(a?n(e,r,o):n(o))||o);return a&&o&&u(e,r,o),o};let p=class extends a.s{constructor(){super(...arguments),this.options={},this._pagefind=null,this.beforeSearch=async({text:t})=>{this._pagefind.preload(t)},this.search=async({text:t,tags:e},r,a)=>{let n=this.options.maxPages??20,{results:o}=await this._pagefind.search(t),s=await Promise.all(o.slice(0,n).map(t=>t.data())).then(t=>t.filter(({meta:t})=>{let r=(t.tags??"").split(",").map(t=>t.trim()).filter(Boolean);return 0===r.length||r.some(t=>e.includes(t))}));return a.throwIfAborted(),{matches:this._transform(s)}}}async connectedCallback(){var t;super.connectedCallback();let e=window.pagefind;if(!e)try{e=await import((null==(t=this.options)?void 0:t.path)??"/pagefind/pagefind.js")}catch(t){console.info("Failed to import pagefind. Try serving app with production build.",t);return}this._initPagefind(e),this.dispatchEvent((0,s.yM)({type:"register_operations",data:{search:function(t){let e=new Map;return(...r)=>{let a=JSON.stringify(r);if(e.has(a))return e.get(a);let n=t(...r);return e.set(a,n),Promise.resolve(n).catch(()=>{e.delete(a)}),n}}(this.search),beforeSearch:this.beforeSearch}}))}async _initPagefind(t){try{t.init(),this.options.pagefind&&await t.options(this.options.pagefind),this._pagefind=t}catch(t){throw Error(`Failed to initialize pagefind': ${t}`)}}render(){return(0,a.x)`<slot></slot>`}_transform(t){let e=this.options.maxSubResults??3,r=t=>this.options._base?this.options._base+(0,i.TV)(t.replace(this.options._replace||"","")):t,a=t=>t.weighted_locations.reduce((t,e)=>Math.max(t,e.balanced_score),-1);return t.sort((t,e)=>a(e.sub_results[0])-a(t.sub_results[0])).map(t=>{let a=t.sub_results.slice(0,e).map(t=>({url:r(t.url),title:t.title,excerpt:t.excerpt})).filter(({title:e},r)=>!(0==r&&e==t.meta.title));return{type:"webpage",meta:{},title:t.meta.title,url:r(t.url),excerpt:t.excerpt,sub_results:a}})}};p.styles=l.w,d([(0,n.n)({type:Object})],p.prototype,"options",2),d([(0,o.r)()],p.prototype,"_pagefind",2),p=d([(0,c.r)("canary-provider-pagefind")],p)},8246:function(t,e,r){r.d(e,{M:function(){return a},a:function(){return n}});let a="Search",n="Ask"},1743:function(t,e,r){r.d(e,{i:function(){return s}});var a=r(5996);class n{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){let r=e||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(let[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});let{disposer:a}=this.subscriptions.get(t);t(this.value,a)}clearCallbacks(){this.subscriptions.clear()}}class o extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class s extends n{constructor(t,e,r){var n,o;super(void 0!==e.context?e.initialValue:r),this.onContextRequest=t=>{let e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{let e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;let r=new Set;for(let[t,{consumerHost:e}]of this.subscriptions)r.has(t)||(r.add(t),e.dispatchEvent(new a.s(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),null==(o=(n=this.host).addController)||o.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new o(this.context))}}},7339:function(t,e,r){r.d(e,{E:function(){return l},T:function(){return s}});var a=r(1743),n=r(7919),o=r(7191);let s={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},i="manager";class l{constructor(t,e){this._abortController=new AbortController,this._callId=0,this._initialState={status:s.INITIAL,ask:{scratchpad:"",blocks:[]},search:{matches:[],suggestion:{questions:[]}},_search:{matches:[],suggestion:{questions:[]}}},this._options=e,this._ctx=new a.i(t,{context:o.w6,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}abort(){var t;null==(t=this._abortController)||t.abort(i)}transition(t){this.ctx={...this.ctx,...t}}async search(t,e,r,a){var o;if(!r.search)return;this.transition({status:s.PENDING}),this._abortController.abort(i);let l=++this._callId;if(null==(o=r.beforeSearch)||o.call(r,e),await (0,n.gk)(this._options.searchDebounceMs),l===this._callId){this._abortController=new AbortController;try{this.transition({status:s.PENDING});let o=await r.search(e,{session_id:t},this._abortController.signal);this.transition({status:s.COMPLETE,search:{...o,matches:(0,n.O)(o.matches,a)},_search:{...o,matches:o.matches}})}catch(t){if(t===i||t instanceof Error&&"AbortError"===t.name){this.transition({status:s.INITIAL});return}console.error(t),this.transition({status:s.ERROR})}}}async ask(t,e,r,a){if(!r.ask)return;this.transition({...this._initialState,status:s.PENDING}),this._abortController.abort(i);let o=++this._callId;if(await (0,n.gk)(this._options.askDebounceMs),o===this._callId){this._abortController=new AbortController;try{this.transition({...this._initialState,status:s.PENDING}),await r.ask(e,{session_id:t},this._handleDelta.bind(this),this._abortController.signal),this.transition({status:s.COMPLETE})}catch(t){if(t===i||t instanceof Error&&"AbortError"===t.name){this.transition({status:s.INITIAL});return}console.error(t),this.transition({status:s.ERROR})}}}_handleDelta(t){this.transition({ask:t})}}},8436:function(t,e,r){r.d(e,{r:function(){return n}});var a=r(1303);function n(t){return(0,a.n)({...t,state:!0,attribute:!1})}},8863:function(t,e,r){r.d(e,{MT:function(){return d},W1:function(){return p},yM:function(){return b}});var a=r(1743),n=r(7191),o=r(7339),s=r(8246),i=r(7919);let l="function"==typeof Symbol&&Symbol.observable||"@@observable";function c(t,e,r){var a,n,o;let s="object"==typeof t,i=s?t:void 0;return{next:null==(a=s?t.next:t)?void 0:a.bind(i),error:null==(n=s?t.error:e)?void 0:n.bind(i),complete:null==(o=s?t.complete:r)?void 0:o.bind(i)}}let u=new WeakMap,h=()=>{try{return crypto.randomUUID()}catch(t){return[,,].fill(null).map(()=>Math.random().toString(36).substring(2,15)).join("-")}},d=t=>{var e;return e={session_id:h(),operation:new a.i(t,{context:n.d3,initialValue:{}}),mode:new a.i(t,{context:n.xd,initialValue:{options:new Set([]),default:null,current:null}}),filters:new a.i(t,{context:n.r,initialValue:{}}),query:new a.i(t,{context:n.mT,initialValue:{text:"",tags:[]}}),executionManager:new o.E(t,{searchDebounceMs:50,askDebounceMs:0})},function(t,e,r){var a,n;let o,s;let i={context:t,status:"active",output:void 0,error:void 0},h=i,d=t=>{if(!s)return;let e=t.type,r=s.get(e);r&&r.forEach(e=>e(t))},p=(a=e,(t,e)=>{let r=t.context,n=null==a?void 0:a[e.type],o=[],s={emit:t=>{o.push(t)}};if(!n)return[t,o];if("function"==typeof n){let t;t=r,r=Object.assign({},r,null==n?void 0:n(t,e,s))}else{let t={};for(let a of Object.keys(n)){let o=n[a];t[a]="function"==typeof o?o(r,e,s):o}r=Object.assign({},r,t)}return[{...t,context:r},o]}),b={on(t,e){s||(s=new Map);let r=s.get(t);r||(r=new Set,s.set(t,r));let a=e.bind(void 0);return r.add(a),{unsubscribe(){r.delete(a)}}},sessionId:Math.random().toString(36).slice(6),send(t){var e,r;let a;null==(e=u.get(b))||e.forEach(e=>{var r;null==(r=e.next)||r.call(e,{type:"@xstate.event",event:t,sourceRef:void 0,actorRef:b,rootId:b.sessionId})}),[h,a]=p(h,t),null==(r=u.get(b))||r.forEach(e=>{var r;null==(r=e.next)||r.call(e,{type:"@xstate.snapshot",event:t,snapshot:h,actorRef:b,rootId:b.sessionId})}),null==o||o.forEach(t=>{var e;return null==(e=t.next)?void 0:e.call(t,h)}),a.forEach(d)},getSnapshot:()=>h,getInitialSnapshot:()=>i,subscribe(t){let e=c(t);return o??(o=new Set),o.add(e),{unsubscribe:()=>null==o?void 0:o.delete(e)}},[l](){return this},inspect:t=>{var e,r;let a=c(t);return u.set(b,u.get(b)??new Set),u.get(b).add(a),null==(e=a.next)||e.call(a,{type:"@xstate.actor",actorRef:b,rootId:b.sessionId}),null==(r=a.next)||r.call(a,{type:"@xstate.snapshot",snapshot:i,event:{type:"@xstate.init"},actorRef:b,rootId:b.sessionId}),{unsubscribe(){var t;return null==(t=u.get(b))?void 0:t.delete(a)}}}};return b}(e,{register_operations:(t,{data:e})=>(t.operation.setValue({...t.operation.value,...e}),{operation:t.operation}),register_mode:(t,{data:e})=>(t.mode.setValue({options:t.mode.value.options.add(e),current:t.mode.value.current??e,default:t.mode.value.default??e}),{mode:t.mode}),set_filter:(t,{data:e})=>{let r=t.filters.value,a=t.executionManager.ctx,n={...r,[e.name]:{...r[e.name],...e.filter}},o={...a.search,matches:(0,i.O)(a._search.matches,n)};return t.filters.setValue(n),t.executionManager.ctx={...a,search:o},{filters:t.filters,executionManager:t.executionManager}},set_mode:(t,{data:e})=>(t.mode.setValue({...t.mode.value,current:e}),e===s.M&&(t.executionManager.abort(),t.executionManager.search(t.session_id,t.query.value,t.operation.value,t.filters.value)),e===s.a&&(t.executionManager.abort(),t.executionManager.ask(t.session_id,t.query.value,t.operation.value,t.filters.value)),{mode:t.mode,session_id:h()}),set_query:(t,{data:e})=>{let r={...t.query.value,...e};return t.query.setValue(r,!0),t.mode.setValue({...t.mode.value,current:s.M}),t.executionManager.search(t.session_id,r,t.operation.value,t.filters.value),{query:t.query,mode:t.mode,session_id:0===r.text.length?h():t.session_id}}})},p="canary-broadcast",b=t=>new CustomEvent(p,{detail:t,composed:!0,bubbles:!0})},7381:function(t,e,r){r.d(e,{g:function(){return n},s:function(){return s},w:function(){return o}});var a=r(4070);let n=(0,a.i)`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  :host {
    -webkit-font-smoothing: antialiased;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`;(0,a.i)`
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    background-color: var(--canary-is-light, var(--canary-color-primary-90))
      var(--canary-is-dark, var(--canary-color-primary-80));
  }
  button:hover {
    background-color: var(--canary-is-light, var(--canary-color-primary-95))
      var(--canary-is-dark, var(--canary-color-primary-70));
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  span {
    font-weight: bold;
    color: var(--canary-color-gray-0);
  }
`,(0,a.i)`
  :host {
    display: contents;
  }

  input {
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    font-size: 1rem;
    color: var(--canary-color-gray-10);
    background-color: var(--canary-color-gray-100);
  }

  input::placeholder {
    color: var(--canary-color-gray-40);
    font-size: 0.875rem;
  }
`,(0,a.i)`
  :host {
    display: contents;
  }

  svg {
    height: 20px;
    max-width: 50px;
  }
`;let o=(0,a.i)`
  :host {
    display: contents;
  }
`,s=(0,a.i)`
  .scroll-container {
    overflow-y: auto;
    max-height: var(--canary-content-max-height, 650px);
    padding-left: 12px;
    padding-right: 2px;

    scrollbar-gutter: stable;

    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: var(--canary-color-gray-100);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--canary-is-light, var(--canary-color-gray-90));
      background-color: var(--canary-is-dark, var(--canary-color-gray-60));
      border-radius: 4px;
    }

    scrollbar-color: var(--canary-is-light, var(--canary-color-gray-90))
      var(--canary-is-dark, var(--canary-color-gray-60))
      var(--canary-color-gray-100);
  }
`;(0,a.i)`
  pre code {
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: var(--canary-color-gray-100);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--canary-is-light, var(--canary-color-gray-90));
      background-color: var(--canary-is-dark, var(--canary-color-gray-60));
      border-radius: 4px;
    }

    scrollbar-color: var(--canary-is-light, var(--canary-color-gray-90))
      var(--canary-is-dark, var(--canary-color-gray-60))
      var(--canary-color-gray-100);
  }
`},7919:function(t,e,r){r.d(e,{FV:function(){return a},O:function(){return i},TV:function(){return o},gk:function(){return n}});let a=t=>s(t).pathname.split("/").map((t,e)=>{let r=t.replace(/[-_]/g," ");return r.charAt(0).toUpperCase()+r.slice(1)}).map(t=>t.includes("#")?t.split("#")[0]:t).map(t=>t.endsWith(".html")?t.replace(".html",""):t).map(decodeURIComponent).filter(Boolean).slice(-4),n=async t=>new Promise(e=>setTimeout(e,t)),o=t=>{try{let{pathname:e,search:r}=s(t);return e+r}catch{return t}},s=t=>new URL(t.startsWith("http")?t:t.startsWith("/")?`https://example.com${t}`:`https://example.com/${t}`),i=(t,e)=>Object.entries(e).reduce((t,[e,{fn:r,args:a}])=>r(t,a),t)}}]);