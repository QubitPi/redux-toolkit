"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["4607"],{1576:function(r,t,a){a.r(t),a.d(t,{CanaryRoot:()=>m});var e=a("4070"),o=a("1303"),n=a("9866"),s=a("8863"),i=a("7381"),c=a("1743"),l=a("7191");class h{constructor(r,{target:t,config:a,callback:e,skipInitial:o}){this.t=new Set,this.o=!1,this.i=!1,this.h=r,null!==t&&this.t.add(t??r),this.l=a,this.o=o??this.o,this.callback=e,window.MutationObserver?(this.u=new MutationObserver(r=>{this.handleChanges(r),this.h.requestUpdate()}),r.addController(this)):console.warn("MutationController error: browser does not support MutationObserver.")}handleChanges(r){var t;this.value=null==(t=this.callback)?void 0:t.call(this,r,this.u)}hostConnected(){for(let r of this.t)this.observe(r)}hostDisconnected(){this.disconnect()}async hostUpdated(){let r=this.u.takeRecords();(r.length||!this.o&&this.i)&&this.handleChanges(r),this.i=!1}observe(r){this.t.add(r),this.u.observe(r,this.l),this.i=!0,this.h.requestUpdate()}disconnect(){this.u.disconnect()}}var u=Object.defineProperty,y=Object.getOwnPropertyDescriptor,d=(r,t,a,e)=>{for(var o,n=e>1?void 0:e?y(t,a):t,s=r.length-1;s>=0;s--)(o=r[s])&&(n=(e?o(t,a,n):o(n))||n);return e&&n&&u(t,a,n),n};let v=class extends e.s{constructor(){super(...arguments),this.framework="starlight",this.theme="light"}connectedCallback(){super.connectedCallback(),this._handleThemeChange()}render(){return(0,e.x)`<slot></slot>`}_handleThemeChange(){let[r]=document.getElementsByTagName("html"),t=["vitepress","nextra"].includes(this.framework),a=r=>t?r.classList.contains("dark")?"dark":"light":r.getAttribute("data-theme")||this.theme;this.theme=a(r),new h(this,{target:r,config:{attributeFilter:[t?"class":"data-theme"]},callback:r=>{var t;let e=null==(t=r[0])?void 0:t.target;if(!e)return this.theme;this.theme=a(e)}})}};v.styles=[i.w,(0,e.i)`
      :host {
        font-family: var(
          --canary-font-family-base,
          Arial,
          Helvetica,
          sans-serif
        );
        --canary-font-family-mono: Consolas, Monaco, Lucida Console;
      }
    `,(0,e.i)`
      :host {
        --canary-is-light: initial;
        --canary-is-dark: ;

        --l-0: 0%;
        --l-5: 0%;
        --l-10: 10%;
        --l-20: 20%;
        --l-30: 30%;
        --l-40: 40%;
        --l-50: 50%;
        --l-60: 60%;
        --l-70: 70%;
        --l-80: 80%;
        --l-90: 90%;
        --l-95: 95%;
        --l-100: 100%;
      }

      :host([theme="dark"]) {
        --canary-is-light: ;
        --canary-is-dark: initial;

        --l-0: 100%;
        --l-5: 95%;
        --l-10: 90%;
        --l-20: 80%;
        --l-30: 70%;
        --l-40: 60%;
        --l-50: 50%;
        --l-60: 40%;
        --l-70: 30%;
        --l-80: 20%;
        --l-90: 10%;
        --l-95: 5%;
        --l-100: 0%;
      }
    `,(0,e.i)`
      :host {
        --_canary-color-primary-c: var(--canary-color-primary-c, 0.1);
        --_canary-color-primary-h: var(--canary-color-primary-h, 270);
        --canary-color-primary-ch: var(--_canary-color-primary-c) var(--_canary-color-primary-h);

        --_canary-color-gray-c: var(--canary-color-gray-c, 0);
        --_canary-color-gray-h: var(--canary-color-gray-h, 0);
        --canary-color-gray-ch: var(--_canary-color-gray-c) var(--_canary-color-gray-h);

        --canary-color-backdrop-overlay: oklch(var(--l-80) var(--_canary-color-gray-ch) / 0.66);

        --canary-color-primary-0: oklch(var(--l-0) var(--canary-color-primary-ch));
        --canary-color-primary-5: oklch(var(--l-5) var(--canary-color-primary-ch));
        --canary-color-primary-10: oklch(var(--l-10) var(--canary-color-primary-ch));
        --canary-color-primary-20: oklch(var(--l-20) var(--canary-color-primary-ch));
        --canary-color-primary-30: oklch(var(--l-30) var(--canary-color-primary-ch));
        --canary-color-primary-40: oklch(var(--l-40) var(--canary-color-primary-ch));
        --canary-color-primary-50: oklch(var(--l-50) var(--canary-color-primary-ch));
        --canary-color-primary-60: oklch(var(--l-60) var(--canary-color-primary-ch));
        --canary-color-primary-70: oklch(var(--l-70) var(--canary-color-primary-ch));
        --canary-color-primary-80: oklch(var(--l-80) var(--canary-color-primary-ch));
        --canary-color-primary-90: oklch(var(--l-90) var(--canary-color-primary-ch));
        --canary-color-primary-95: oklch(var(--l-95) var(--canary-color-primary-ch));
        --canary-color-primary-100: oklch(var(--l-100) var(--canary-color-primary-ch));
        
        --canary-color-gray-0: oklch(var(--l-0) var(--canary-color-gray-ch));
        --canary-color-gray-5: oklch(var(--l-5) var(--canary-color-gray-ch));
        --canary-color-gray-10: oklch(var(--l-10) var(--canary-color-gray-ch));
        --canary-color-gray-20: oklch(var(--l-20) var(--canary-color-gray-ch));
        --canary-color-gray-30: oklch(var(--l-30) var(--canary-color-gray-ch));
        --canary-color-gray-40: oklch(var(--l-40) var(--canary-color-gray-ch));
        --canary-color-gray-50: oklch(var(--l-50) var(--canary-color-gray-ch));
        --canary-color-gray-60: oklch(var(--l-60) var(--canary-color-gray-ch));
        --canary-color-gray-70: oklch(var(--l-70) var(--canary-color-gray-ch));
        --canary-color-gray-80: oklch(var(--l-80) var(--canary-color-gray-ch));
        --canary-color-gray-90: oklch(var(--l-90) var(--canary-color-gray-ch));
        --canary-color-gray-95: oklch(var(--l-95) var(--canary-color-gray-ch));
        --canary-color-gray-100: oklch(var(--l-100) var(--canary-color-gray-ch));
      }
    `],d([(0,o.n)({type:String})],v.prototype,"framework",2),d([function({context:r}){return(t,a)=>{let e=new WeakMap;if("object"==typeof a)return a.addInitializer(function(){e.set(this,new c.i(this,{context:r}))}),{get(){return t.get.call(this)},set(r){var a;return null==(a=e.get(this))||a.setValue(r),t.set.call(this,r)},init(r){var t;return null==(t=e.get(this))||t.setValue(r),r}};{let o;t.constructor.addInitializer(t=>{e.set(t,new c.i(t,{context:r}))});let n=Object.getOwnPropertyDescriptor(t,a);if(void 0===n){let r=new WeakMap;o={get(){return r.get(this)},set(t){e.get(this).setValue(t),r.set(this,t)},configurable:!0,enumerable:!0}}else{let r=n.set;o={...n,set(t){e.get(this).setValue(t),null==r||r.call(this,t)}}}return void Object.defineProperty(t,a,o)}}}({context:l.nN}),(0,o.n)({type:String,reflect:!0})],v.prototype,"theme",2),v=d([(0,n.r)("canary-styles")],v);var p=Object.defineProperty,g=Object.getOwnPropertyDescriptor,b=(r,t,a,e)=>{for(var o,n=e>1?void 0:e?g(t,a):t,s=r.length-1;s>=0;s--)(o=r[s])&&(n=(e?o(t,a,n):o(n))||n);return e&&n&&p(t,a,n),n};let m=class extends e.s{constructor(){super(...arguments),this.framework="starlight",this.query="",this._store=(0,s.MT)(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(s.W1,r=>{this._store.send(r.detail)})}firstUpdated(){this.query&&(this._store.send({type:"set_query",data:{text:"..."}}),setTimeout(()=>{this._store.send({type:"set_query",data:{text:this.query}})},200))}render(){return(0,e.x)`<canary-styles framework=${this.framework}>
      <slot></slot>
    </canary-styles>`}};m.styles=i.w,b([(0,o.n)({type:String})],m.prototype,"framework",2),b([(0,o.n)({type:String})],m.prototype,"query",2),m=b([(0,n.r)("canary-root")],m)},8246:function(r,t,a){a.d(t,{M:function(){return e},a:function(){return o}});let e="Search",o="Ask"},1743:function(r,t,a){a.d(t,{i:function(){return s}});var e=a(5996);class o{get value(){return this.o}set value(r){this.setValue(r)}setValue(r,t=!1){let a=t||!Object.is(r,this.o);this.o=r,a&&this.updateObservers()}constructor(r){this.subscriptions=new Map,this.updateObservers=()=>{for(let[r,{disposer:t}]of this.subscriptions)r(this.o,t)},void 0!==r&&(this.value=r)}addCallback(r,t,a){if(!a)return void r(this.value);this.subscriptions.has(r)||this.subscriptions.set(r,{disposer:()=>{this.subscriptions.delete(r)},consumerHost:t});let{disposer:e}=this.subscriptions.get(r);r(this.value,e)}clearCallbacks(){this.subscriptions.clear()}}class n extends Event{constructor(r){super("context-provider",{bubbles:!0,composed:!0}),this.context=r}}class s extends o{constructor(r,t,a){var o,n;super(void 0!==t.context?t.initialValue:a),this.onContextRequest=r=>{let t=r.composedPath()[0];r.context===this.context&&t!==this.host&&(r.stopPropagation(),this.addCallback(r.callback,t,r.subscribe))},this.onProviderRequest=r=>{let t=r.composedPath()[0];if(r.context!==this.context||t===this.host)return;let a=new Set;for(let[r,{consumerHost:t}]of this.subscriptions)a.has(r)||(a.add(r),t.dispatchEvent(new e.s(this.context,r,!0)));r.stopPropagation()},this.host=r,void 0!==t.context?this.context=t.context:this.context=t,this.attachListeners(),null==(n=(o=this.host).addController)||n.call(o,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new n(this.context))}}},7339:function(r,t,a){a.d(t,{E:function(){return c},T:function(){return s}});var e=a(1743),o=a(7919),n=a(7191);let s={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},i="manager";class c{constructor(r,t){this._abortController=new AbortController,this._callId=0,this._initialState={status:s.INITIAL,ask:{scratchpad:"",blocks:[]},search:{matches:[],suggestion:{questions:[]}},_search:{matches:[],suggestion:{questions:[]}}},this._options=t,this._ctx=new e.i(r,{context:n.w6,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(r){this._ctx.setValue(r)}abort(){var r;null==(r=this._abortController)||r.abort(i)}transition(r){this.ctx={...this.ctx,...r}}async search(r,t,a,e){var n;if(!a.search)return;this.transition({status:s.PENDING}),this._abortController.abort(i);let c=++this._callId;if(null==(n=a.beforeSearch)||n.call(a,t),await (0,o.gk)(this._options.searchDebounceMs),c===this._callId){this._abortController=new AbortController;try{this.transition({status:s.PENDING});let n=await a.search(t,{session_id:r},this._abortController.signal);this.transition({status:s.COMPLETE,search:{...n,matches:(0,o.O)(n.matches,e)},_search:{...n,matches:n.matches}})}catch(r){if(r===i||r instanceof Error&&"AbortError"===r.name){this.transition({status:s.INITIAL});return}console.error(r),this.transition({status:s.ERROR})}}}async ask(r,t,a,e){if(!a.ask)return;this.transition({...this._initialState,status:s.PENDING}),this._abortController.abort(i);let n=++this._callId;if(await (0,o.gk)(this._options.askDebounceMs),n===this._callId){this._abortController=new AbortController;try{this.transition({...this._initialState,status:s.PENDING}),await a.ask(t,{session_id:r},this._handleDelta.bind(this),this._abortController.signal),this.transition({status:s.COMPLETE})}catch(r){if(r===i||r instanceof Error&&"AbortError"===r.name){this.transition({status:s.INITIAL});return}console.error(r),this.transition({status:s.ERROR})}}}_handleDelta(r){this.transition({ask:r})}}},8863:function(r,t,a){a.d(t,{MT:function(){return y},W1:function(){return d},yM:function(){return v}});var e=a(1743),o=a(7191),n=a(7339),s=a(8246),i=a(7919);let c="function"==typeof Symbol&&Symbol.observable||"@@observable";function l(r,t,a){var e,o,n;let s="object"==typeof r,i=s?r:void 0;return{next:null==(e=s?r.next:r)?void 0:e.bind(i),error:null==(o=s?r.error:t)?void 0:o.bind(i),complete:null==(n=s?r.complete:a)?void 0:n.bind(i)}}let h=new WeakMap,u=()=>{try{return crypto.randomUUID()}catch(r){return[,,].fill(null).map(()=>Math.random().toString(36).substring(2,15)).join("-")}},y=r=>{var t;return t={session_id:u(),operation:new e.i(r,{context:o.d3,initialValue:{}}),mode:new e.i(r,{context:o.xd,initialValue:{options:new Set([]),default:null,current:null}}),filters:new e.i(r,{context:o.r,initialValue:{}}),query:new e.i(r,{context:o.mT,initialValue:{text:"",tags:[]}}),executionManager:new n.E(r,{searchDebounceMs:50,askDebounceMs:0})},function(r,t,a){var e,o;let n,s;let i={context:r,status:"active",output:void 0,error:void 0},u=i,y=r=>{if(!s)return;let t=r.type,a=s.get(t);a&&a.forEach(t=>t(r))},d=(e=t,(r,t)=>{let a=r.context,o=null==e?void 0:e[t.type],n=[],s={emit:r=>{n.push(r)}};if(!o)return[r,n];if("function"==typeof o){let r;r=a,a=Object.assign({},a,null==o?void 0:o(r,t,s))}else{let r={};for(let e of Object.keys(o)){let n=o[e];r[e]="function"==typeof n?n(a,t,s):n}a=Object.assign({},a,r)}return[{...r,context:a},n]}),v={on(r,t){s||(s=new Map);let a=s.get(r);a||(a=new Set,s.set(r,a));let e=t.bind(void 0);return a.add(e),{unsubscribe(){a.delete(e)}}},sessionId:Math.random().toString(36).slice(6),send(r){var t,a;let e;null==(t=h.get(v))||t.forEach(t=>{var a;null==(a=t.next)||a.call(t,{type:"@xstate.event",event:r,sourceRef:void 0,actorRef:v,rootId:v.sessionId})}),[u,e]=d(u,r),null==(a=h.get(v))||a.forEach(t=>{var a;null==(a=t.next)||a.call(t,{type:"@xstate.snapshot",event:r,snapshot:u,actorRef:v,rootId:v.sessionId})}),null==n||n.forEach(r=>{var t;return null==(t=r.next)?void 0:t.call(r,u)}),e.forEach(y)},getSnapshot:()=>u,getInitialSnapshot:()=>i,subscribe(r){let t=l(r);return n??(n=new Set),n.add(t),{unsubscribe:()=>null==n?void 0:n.delete(t)}},[c](){return this},inspect:r=>{var t,a;let e=l(r);return h.set(v,h.get(v)??new Set),h.get(v).add(e),null==(t=e.next)||t.call(e,{type:"@xstate.actor",actorRef:v,rootId:v.sessionId}),null==(a=e.next)||a.call(e,{type:"@xstate.snapshot",snapshot:i,event:{type:"@xstate.init"},actorRef:v,rootId:v.sessionId}),{unsubscribe(){var r;return null==(r=h.get(v))?void 0:r.delete(e)}}}};return v}(t,{register_operations:(r,{data:t})=>(r.operation.setValue({...r.operation.value,...t}),{operation:r.operation}),register_mode:(r,{data:t})=>(r.mode.setValue({options:r.mode.value.options.add(t),current:r.mode.value.current??t,default:r.mode.value.default??t}),{mode:r.mode}),set_filter:(r,{data:t})=>{let a=r.filters.value,e=r.executionManager.ctx,o={...a,[t.name]:{...a[t.name],...t.filter}},n={...e.search,matches:(0,i.O)(e._search.matches,o)};return r.filters.setValue(o),r.executionManager.ctx={...e,search:n},{filters:r.filters,executionManager:r.executionManager}},set_mode:(r,{data:t})=>(r.mode.setValue({...r.mode.value,current:t}),t===s.M&&(r.executionManager.abort(),r.executionManager.search(r.session_id,r.query.value,r.operation.value,r.filters.value)),t===s.a&&(r.executionManager.abort(),r.executionManager.ask(r.session_id,r.query.value,r.operation.value,r.filters.value)),{mode:r.mode,session_id:u()}),set_query:(r,{data:t})=>{let a={...r.query.value,...t};return r.query.setValue(a,!0),r.mode.setValue({...r.mode.value,current:s.M}),r.executionManager.search(r.session_id,a,r.operation.value,r.filters.value),{query:r.query,mode:r.mode,session_id:0===a.text.length?u():r.session_id}}})},d="canary-broadcast",v=r=>new CustomEvent(d,{detail:r,composed:!0,bubbles:!0})},7381:function(r,t,a){a.d(t,{g:function(){return o},s:function(){return s},w:function(){return n}});var e=a(4070);let o=(0,e.i)`
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
`;(0,e.i)`
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
`,(0,e.i)`
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
`,(0,e.i)`
  :host {
    display: contents;
  }

  svg {
    height: 20px;
    max-width: 50px;
  }
`;let n=(0,e.i)`
  :host {
    display: contents;
  }
`,s=(0,e.i)`
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
`;(0,e.i)`
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
`},7919:function(r,t,a){a.d(t,{FV:function(){return e},O:function(){return i},TV:function(){return n},gk:function(){return o}});let e=r=>s(r).pathname.split("/").map((r,t)=>{let a=r.replace(/[-_]/g," ");return a.charAt(0).toUpperCase()+a.slice(1)}).map(r=>r.includes("#")?r.split("#")[0]:r).map(r=>r.endsWith(".html")?r.replace(".html",""):r).map(decodeURIComponent).filter(Boolean).slice(-4),o=async r=>new Promise(t=>setTimeout(t,r)),n=r=>{try{let{pathname:t,search:a}=s(r);return t+a}catch{return r}},s=r=>new URL(r.startsWith("http")?r:r.startsWith("/")?`https://example.com${r}`:`https://example.com/${r}`),i=(r,t)=>Object.entries(t).reduce((r,[t,{fn:a,args:e}])=>a(r,e),r)}}]);