"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["2321"],{1897:function(t,e,n){n.d(e,{e:function(){return s}});var r=n(4070),i=n(2189);let s=(0,i.e)(class extends i.i{constructor(t){var e;if(super(t),t.type!==i.t.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(void 0===this.st){for(let r in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)!e[r]||(null==(n=this.nt)?void 0:n.has(r))||this.st.add(r);return this.render(e)}let s=t.element.classList;for(let t of this.st)t in e||(s.remove(t),this.st.delete(t));for(let t in e){let n=!!e[t];n===this.st.has(t)||(null==(i=this.nt)?void 0:i.has(t))||(n?(s.add(t),this.st.add(t)):(s.remove(t),this.st.delete(t)))}return r.w}})},7023:function(t,e,n){n.r(e),n.d(e,{CanaryInput:function(){return k}});var r=n(4070),i=n(1303),s=n(8436),a=n(1897),o=n(7444),u=n(3070),c=n(3526),l=n(7191),d=n(9866),h=n(7381),p=n(7339),b=n(8863),g=n(8246),f=Object.defineProperty,y=Object.getOwnPropertyDescriptor;let v=class extends r.s{render(){return(0,r.x)` <span class="loader"></span> `}};v.styles=(0,r.i)`
    .loader {
      width: 12px;
      height: 12px;
      border: 1px solid var(--canary-color-gray-40);
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,v=((t,e,n,r)=>{for(var i,s=r>1?void 0:r?y(e,n):e,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(r?i(e,n,s):i(s))||s);return r&&s&&f(e,n,s),s})([(0,d.r)("canary-loading-spinner")],v);var m=Object.defineProperty,x=Object.getOwnPropertyDescriptor,w=(t,e,n,r)=>{for(var i,s=r>1?void 0:r?x(e,n):e,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(r?i(e,n,s):i(s))||s);return r&&s&&m(e,n,s),s};let k=class extends r.s{constructor(){super(...arguments),this.autofocus=!1,this._query={text:"",tags:[]},this._showLoading=!1,this._loadingDebounceTimer=null,this.inputRef=(0,u.e)()}updated(t){var e,n;if(t.has("_execution")){if(null!==this._loadingDebounceTimer&&clearTimeout(this._loadingDebounceTimer),(null==(e=this._execution)?void 0:e.status)===p.T.PENDING||(null==(n=this._execution)?void 0:n.status)===p.T.ERROR){this._showLoading=!0;return}this._loadingDebounceTimer=window.setTimeout(()=>{this._showLoading=!1},100)}}firstUpdated(){if(this.autofocus){let t=this.inputRef.value;setTimeout(()=>{t.focus({preventScroll:!0})},1)}}render(){var t,e,n,i;return(0,r.x)`
      <div class="container" part="container">
        <slot name="before">
          <div class="i-heroicons-magnifying-glass"></div>
        </slot>
        <input
          ${(0,u.n)(this.inputRef)}
          type="text"
          part="input"
          .value=${this._query.text}
          autocomplete="off"
          spellcheck="false"
          placeholder="Search for anything..."
          @input=${this._handleInput}
          @keydown=${this._handleKeyDown}
          onfocus="this.setSelectionRange(this.value.length,this.value.length);"
          autofocus=${(0,o.o)(this.autofocus||null)}
        />
        <span
          class=${(0,a.e)({hidden:!((null==(t=this._mode)?void 0:t.current)===g.a&&(null==(e=this._execution)?void 0:e.status)===p.T.COMPLETE)})}
        >
          <slot name="action-search"> ${this._renderDefaultSearch()} </slot>
        </span>
        <span
          class=${(0,a.e)({hidden:!((null==(n=this._mode)?void 0:n.current)===g.M&&(null==(i=this._execution)?void 0:i.status)===p.T.COMPLETE&&this._is_question(this._query.text))})}
        >
          <slot name="action-ask"> ${this._renderDefaultAsk()} </slot>
        </span>
        <span class=${(0,a.e)({hidden:!this._showLoading})}>
          <slot name="loading">
            <canary-loading-spinner></canary-loading-spinner>
          </slot>
        </span>
      </div>
    `}_renderDefaultSearch(){return(0,r.x)`
      <div class="action">
        <span>Search</span>
        <span class="i-heroicons-backspace"></span>
      </div>
    `}_renderDefaultAsk(){var t;return(null==(t=this._mode)?void 0:t.options.has(g.a))?(0,r.x)`
      <div class="action">
        <span>Ask AI</span>
        <kbd>Tab</kbd>
      </div>
    `:r.T}_handleKeyDown(t){var e,n;"Tab"===t.key&&(null==(e=this._mode)?void 0:e.current)===g.M&&(null==(n=this._mode)?void 0:n.options.has(g.a))&&this._is_question(this._query.text)&&(t.preventDefault(),this.dispatchEvent((0,b.yM)({type:"set_mode",data:g.a})))}_handleInput(t){let e=t.target.value;this.dispatchEvent((0,b.yM)({type:"set_query",data:{text:e}}))}_is_question(t){return t.split(" ").length>2||t.endsWith("?")}};k.styles=[h.g,h.w,(0,r.i)`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-backspace{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
.i-heroicons-magnifying-glass{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.static{position:static;}
.hidden{display:none;}
.flex{display:flex;}
.border{border-width:1px;}
.outline{outline-style:solid;};
    `,(0,r.i)`
      .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        padding: 1px 12px;
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

      .hidden {
        visibility: hidden;
      }
    `,(0,r.i)`
      .action {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
        font-size: 0.7rem;
        line-height: 1;
      }
      .action span {
        line-height: 1;
        white-space: nowrap;
        color: var(--canary-color-gray-60);
      }
      kbd {
        border: 1px solid var(--canary-color-gray-90);
        padding: 2px 4px;
        border-radius: 4px;

        color: var(--canary-is-light, var(--canary-color-gray-50))
          var(--canary-is-dark, var(--canary-color-gray-20));
      }

      span.i-heroicons-backspace {
        height: 1.5em;
        width: 1.5em;
      }
    `],w([(0,i.n)({type:Boolean})],k.prototype,"autofocus",2),w([(0,c.c)({context:l.mT,subscribe:!0}),(0,s.r)()],k.prototype,"_query",2),w([(0,c.c)({context:l.xd,subscribe:!0}),(0,s.r)()],k.prototype,"_mode",2),w([(0,c.c)({context:l.w6,subscribe:!0}),(0,s.r)()],k.prototype,"_execution",2),w([(0,s.r)()],k.prototype,"_showLoading",2),k=w([(0,d.r)("canary-input")],k)},3526:function(t,e,n){n.d(e,{c:function(){return i}});var r=n(1066);function i({context:t,subscribe:e}){return(n,i)=>{"object"==typeof i?i.addInitializer(function(){new r.s(this,{context:t,callback:t=>{n.set.call(this,t)},subscribe:e})}):n.constructor.addInitializer(n=>{new r.s(n,{context:t,callback:t=>{n[i]=t},subscribe:e})})}}},1066:function(t,e,n){n.d(e,{s:function(){return i}});var r=n(5996);class i{constructor(t,e,n,r){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context)?(this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1):(this.context=e,this.callback=n,this.subscribe=r??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new r.s(this.context,this.t,this.subscribe))}}},7444:function(t,e,n){n.d(e,{o:function(){return i}});var r=n(4070);let i=t=>t??r.T},8436:function(t,e,n){n.d(e,{r:function(){return i}});var r=n(1303);function i(t){return(0,r.n)({...t,state:!0,attribute:!1})}}}]);