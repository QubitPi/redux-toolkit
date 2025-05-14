"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["1768"],{8246:function(t,e,r){r.d(e,{M:function(){return s},a:function(){return i}});let s="Search",i="Ask"},1743:function(t,e,r){r.d(e,{i:function(){return o}});var s=r(5996);class i{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){let r=e||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(let[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});let{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}}class n extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class o extends i{constructor(t,e,r){var i,n;super(void 0!==e.context?e.initialValue:r),this.onContextRequest=t=>{let e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{let e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;let r=new Set;for(let[t,{consumerHost:e}]of this.subscriptions)r.has(t)||(r.add(t),e.dispatchEvent(new s.s(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),null==(n=(i=this.host).addController)||n.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new n(this.context))}}},2189:function(t,e,r){r.d(e,{e:function(){return i},i:function(){return n},t:function(){return s}});let s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},7339:function(t,e,r){r.d(e,{E:function(){return l},T:function(){return o}});var s=r(1743),i=r(7919),n=r(7191);let o={INITIAL:0,PENDING:1,COMPLETE:2,ERROR:3},a="manager";class l{constructor(t,e){this._abortController=new AbortController,this._callId=0,this._initialState={status:o.INITIAL,ask:{scratchpad:"",blocks:[]},search:{matches:[],suggestion:{questions:[]}},_search:{matches:[],suggestion:{questions:[]}}},this._options=e,this._ctx=new s.i(t,{context:n.w6,initialValue:this._initialState})}get ctx(){return this._ctx.value}set ctx(t){this._ctx.setValue(t)}abort(){var t;null==(t=this._abortController)||t.abort(a)}transition(t){this.ctx={...this.ctx,...t}}async search(t,e,r,s){var n;if(!r.search)return;this.transition({status:o.PENDING}),this._abortController.abort(a);let l=++this._callId;if(null==(n=r.beforeSearch)||n.call(r,e),await (0,i.gk)(this._options.searchDebounceMs),l===this._callId){this._abortController=new AbortController;try{this.transition({status:o.PENDING});let n=await r.search(e,{session_id:t},this._abortController.signal);this.transition({status:o.COMPLETE,search:{...n,matches:(0,i.O)(n.matches,s)},_search:{...n,matches:n.matches}})}catch(t){if(t===a||t instanceof Error&&"AbortError"===t.name){this.transition({status:o.INITIAL});return}console.error(t),this.transition({status:o.ERROR})}}}async ask(t,e,r,s){if(!r.ask)return;this.transition({...this._initialState,status:o.PENDING}),this._abortController.abort(a);let n=++this._callId;if(await (0,i.gk)(this._options.askDebounceMs),n===this._callId){this._abortController=new AbortController;try{this.transition({...this._initialState,status:o.PENDING}),await r.ask(e,{session_id:t},this._handleDelta.bind(this),this._abortController.signal),this.transition({status:o.COMPLETE})}catch(t){if(t===a||t instanceof Error&&"AbortError"===t.name){this.transition({status:o.INITIAL});return}console.error(t),this.transition({status:o.ERROR})}}}_handleDelta(t){this.transition({ask:t})}}},3070:function(t,e,r){r.d(e,{e:function(){return v},n:function(){return f}});var s=r(4070),i=r(2189);let n=t=>void 0===t.strings,o=(t,e)=>{var r;let s=t._$AN;if(void 0===s)return!1;for(let t of s)null==(r=t._$AO)||r.call(t,e,!1),o(t,e);return!0},a=t=>{let e,r;do{if(void 0===(e=t._$AM))break;(r=e._$AN).delete(t),t=e}while(0===(null==r?void 0:r.size))},l=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(void 0===r)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),h(e)}};function c(t){void 0!==this._$AN?(a(this),this._$AM=t,l(this)):this._$AM=t}function u(t,e=!1,r=0){let s=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size){if(e){if(Array.isArray(s))for(let t=r;t<s.length;t++)o(s[t],!1),a(s[t]);else null!=s&&(o(s,!1),a(s))}else o(this,t)}}let h=t=>{t.type==i.t.CHILD&&(t._$AP??(t._$AP=u),t._$AQ??(t._$AQ=c))};class d extends i.i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),l(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,s;t!==this.isConnected&&(this.isConnected=t,t?null==(r=this.reconnected)||r.call(this):null==(s=this.disconnected)||s.call(this)),e&&(o(this,t),a(this))}setValue(t){if(n(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}let v=()=>new p;class p{}let b=new WeakMap,f=(0,i.e)(class extends d{render(t){return s.T}update(t,[e]){var r;let i=e!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=e,this.ht=null==(r=t.options)?void 0:r.host,this.rt(this.ct=t.element)),s.T}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){let e=this.ht??globalThis,r=b.get(e);void 0===r&&(r=new WeakMap,b.set(e,r)),void 0!==r.get(this.Y)&&this.Y.call(this.ht,void 0),r.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return"function"==typeof this.Y?null==(t=b.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(e=this.Y)?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},8863:function(t,e,r){r.d(e,{MT:function(){return d},W1:function(){return v},yM:function(){return p}});var s=r(1743),i=r(7191),n=r(7339),o=r(8246),a=r(7919);let l="function"==typeof Symbol&&Symbol.observable||"@@observable";function c(t,e,r){var s,i,n;let o="object"==typeof t,a=o?t:void 0;return{next:null==(s=o?t.next:t)?void 0:s.bind(a),error:null==(i=o?t.error:e)?void 0:i.bind(a),complete:null==(n=o?t.complete:r)?void 0:n.bind(a)}}let u=new WeakMap,h=()=>{try{return crypto.randomUUID()}catch(t){return[,,].fill(null).map(()=>Math.random().toString(36).substring(2,15)).join("-")}},d=t=>{var e;return e={session_id:h(),operation:new s.i(t,{context:i.d3,initialValue:{}}),mode:new s.i(t,{context:i.xd,initialValue:{options:new Set([]),default:null,current:null}}),filters:new s.i(t,{context:i.r,initialValue:{}}),query:new s.i(t,{context:i.mT,initialValue:{text:"",tags:[]}}),executionManager:new n.E(t,{searchDebounceMs:50,askDebounceMs:0})},function(t,e,r){var s,i;let n,o;let a={context:t,status:"active",output:void 0,error:void 0},h=a,d=t=>{if(!o)return;let e=t.type,r=o.get(e);r&&r.forEach(e=>e(t))},v=(s=e,(t,e)=>{let r=t.context,i=null==s?void 0:s[e.type],n=[],o={emit:t=>{n.push(t)}};if(!i)return[t,n];if("function"==typeof i){let t;t=r,r=Object.assign({},r,null==i?void 0:i(t,e,o))}else{let t={};for(let s of Object.keys(i)){let n=i[s];t[s]="function"==typeof n?n(r,e,o):n}r=Object.assign({},r,t)}return[{...t,context:r},n]}),p={on(t,e){o||(o=new Map);let r=o.get(t);r||(r=new Set,o.set(t,r));let s=e.bind(void 0);return r.add(s),{unsubscribe(){r.delete(s)}}},sessionId:Math.random().toString(36).slice(6),send(t){var e,r;let s;null==(e=u.get(p))||e.forEach(e=>{var r;null==(r=e.next)||r.call(e,{type:"@xstate.event",event:t,sourceRef:void 0,actorRef:p,rootId:p.sessionId})}),[h,s]=v(h,t),null==(r=u.get(p))||r.forEach(e=>{var r;null==(r=e.next)||r.call(e,{type:"@xstate.snapshot",event:t,snapshot:h,actorRef:p,rootId:p.sessionId})}),null==n||n.forEach(t=>{var e;return null==(e=t.next)?void 0:e.call(t,h)}),s.forEach(d)},getSnapshot:()=>h,getInitialSnapshot:()=>a,subscribe(t){let e=c(t);return n??(n=new Set),n.add(e),{unsubscribe:()=>null==n?void 0:n.delete(e)}},[l](){return this},inspect:t=>{var e,r;let s=c(t);return u.set(p,u.get(p)??new Set),u.get(p).add(s),null==(e=s.next)||e.call(s,{type:"@xstate.actor",actorRef:p,rootId:p.sessionId}),null==(r=s.next)||r.call(s,{type:"@xstate.snapshot",snapshot:a,event:{type:"@xstate.init"},actorRef:p,rootId:p.sessionId}),{unsubscribe(){var t;return null==(t=u.get(p))?void 0:t.delete(s)}}}};return p}(e,{register_operations:(t,{data:e})=>(t.operation.setValue({...t.operation.value,...e}),{operation:t.operation}),register_mode:(t,{data:e})=>(t.mode.setValue({options:t.mode.value.options.add(e),current:t.mode.value.current??e,default:t.mode.value.default??e}),{mode:t.mode}),set_filter:(t,{data:e})=>{let r=t.filters.value,s=t.executionManager.ctx,i={...r,[e.name]:{...r[e.name],...e.filter}},n={...s.search,matches:(0,a.O)(s._search.matches,i)};return t.filters.setValue(i),t.executionManager.ctx={...s,search:n},{filters:t.filters,executionManager:t.executionManager}},set_mode:(t,{data:e})=>(t.mode.setValue({...t.mode.value,current:e}),e===o.M&&(t.executionManager.abort(),t.executionManager.search(t.session_id,t.query.value,t.operation.value,t.filters.value)),e===o.a&&(t.executionManager.abort(),t.executionManager.ask(t.session_id,t.query.value,t.operation.value,t.filters.value)),{mode:t.mode,session_id:h()}),set_query:(t,{data:e})=>{let r={...t.query.value,...e};return t.query.setValue(r,!0),t.mode.setValue({...t.mode.value,current:o.M}),t.executionManager.search(t.session_id,r,t.operation.value,t.filters.value),{query:t.query,mode:t.mode,session_id:0===r.text.length?h():t.session_id}}})},v="canary-broadcast",p=t=>new CustomEvent(v,{detail:t,composed:!0,bubbles:!0})},7381:function(t,e,r){r.d(e,{g:function(){return i},s:function(){return o},w:function(){return n}});var s=r(4070);let i=(0,s.i)`
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
`;(0,s.i)`
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
`,(0,s.i)`
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
`,(0,s.i)`
  :host {
    display: contents;
  }

  svg {
    height: 20px;
    max-width: 50px;
  }
`;let n=(0,s.i)`
  :host {
    display: contents;
  }
`,o=(0,s.i)`
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
`;(0,s.i)`
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
`},7919:function(t,e,r){r.d(e,{FV:function(){return s},O:function(){return a},TV:function(){return n},gk:function(){return i}});let s=t=>o(t).pathname.split("/").map((t,e)=>{let r=t.replace(/[-_]/g," ");return r.charAt(0).toUpperCase()+r.slice(1)}).map(t=>t.includes("#")?t.split("#")[0]:t).map(t=>t.endsWith(".html")?t.replace(".html",""):t).map(decodeURIComponent).filter(Boolean).slice(-4),i=async t=>new Promise(e=>setTimeout(e,t)),n=t=>{try{let{pathname:e,search:r}=o(t);return e+r}catch{return t}},o=t=>new URL(t.startsWith("http")?t:t.startsWith("/")?`https://example.com${t}`:`https://example.com/${t}`),a=(t,e)=>Object.entries(e).reduce((t,[e,{fn:r,args:s}])=>r(t,s),t)}}]);