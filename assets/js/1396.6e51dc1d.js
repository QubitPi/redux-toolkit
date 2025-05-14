"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["1396"],{1897:function(r,t,e){e.d(t,{e:function(){return i}});var a=e(4070),o=e(2189);let i=(0,o.e)(class extends o.i{constructor(r){var t;if(super(r),r.type!==o.t.ATTRIBUTE||"class"!==r.name||(null==(t=r.strings)?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var e,o;if(void 0===this.st){for(let a in this.st=new Set,void 0!==r.strings&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(r=>""!==r))),t)!t[a]||(null==(e=this.nt)?void 0:e.has(a))||this.st.add(a);return this.render(t)}let i=r.element.classList;for(let r of this.st)r in t||(i.remove(r),this.st.delete(r));for(let r in t){let e=!!t[r];e===this.st.has(r)||(null==(o=this.nt)?void 0:o.has(r))||(e?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return a.w}})},9582:function(r,t,e){e.r(t),e.d(t,{CanaryContent:()=>v});var a,o=e("4070"),i=e("8436");let n=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(r,t,e),e);var s=e("1897"),c=e("3526"),l=e("7191"),d=e("9866"),h=e("7381"),u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,p=(r,t,e,a)=>{for(var o,i=a>1?void 0:a?b(t,e):t,n=r.length-1;n>=0;n--)(o=r[n])&&(i=(a?o(t,e,i):o(i))||i);return a&&i&&u(t,e,i),i};let v=class extends o.s{constructor(){super(...arguments),this._query=""}render(){return(0,o.x)`
      <div class="container" part="container">
        <div class="head-container" part="head-container">
          <slot name="head"></slot>
        </div>
        <slot name="input"></slot>
        <slot name="mode"></slot>
        <div
          class=${(0,s.e)({footer:!0,hide:!this._query||0===this._footers.length})}
        >
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `}};v.styles=[h.g,h.w,(0,o.i)`
      .container {
        width: 300px;

        outline: none;
        padding-top: 6px;
        padding-bottom: 8px;

        border: none;
        border-radius: 8px;
        box-shadow:
          0 20px 25px -5px rgb(0 0 0 / 0.1),
          0 8px 10px -6px rgb(0 0 0 / 0.1);

        background-color: var(--canary-color-gray-100);
      }

      @media (min-width: 40rem) {
        .container {
          width: var(--canary-content-max-width, 550px);
        }
      }

      .head-container {
        padding-left: 12px;
        padding-right: 12px;
      }
    `,(0,o.i)`
      .footer {
        padding-top: 2px;
        padding-right: 6px;
      }

      .hide {
        display: none;
      }
    `],p([(0,c.c)({context:l.mT,subscribe:!0}),(0,i.r)()],v.prototype,"_query",2),p([(a={slot:"footer"},(r,t)=>{let{slot:e,selector:o}=a??{},i="slot"+(e?`[name=${e}]`:":not([name])");return n(r,t,{get(){var r;let t=null==(r=this.renderRoot)?void 0:r.querySelector(i),e=(null==t?void 0:t.assignedElements(a))??[];return void 0===o?e:e.filter(r=>r.matches(o))}})})],v.prototype,"_footers",2),v=p([(0,d.r)("canary-content")],v)},3526:function(r,t,e){e.d(t,{c:function(){return o}});var a=e(1066);function o({context:r,subscribe:t}){return(e,o)=>{"object"==typeof o?o.addInitializer(function(){new a.s(this,{context:r,callback:r=>{e.set.call(this,r)},subscribe:t})}):e.constructor.addInitializer(e=>{new a.s(e,{context:r,callback:r=>{e[o]=r},subscribe:t})})}}},1066:function(r,t,e){e.d(t,{s:function(){return o}});var a=e(5996);class o{constructor(r,t,e,a){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,t)),this.unsubscribe=t},this.host=r,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=e,this.subscribe=a??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new a.s(this.context,this.t,this.subscribe))}}},2189:function(r,t,e){e.d(t,{e:function(){return o},i:function(){return i},t:function(){return a}});let a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=r=>(...t)=>({_$litDirective$:r,values:t});class i{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,t,e){this._$Ct=r,this._$AM=t,this._$Ci=e}_$AS(r,t){return this.update(r,t)}update(r,t){return this.render(...t)}}},8436:function(r,t,e){e.d(t,{r:function(){return o}});var a=e(1303);function o(r){return(0,a.n)({...r,state:!0,attribute:!1})}},7381:function(r,t,e){e.d(t,{g:function(){return o},s:function(){return n},w:function(){return i}});var a=e(4070);let o=(0,a.i)`
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
`;let i=(0,a.i)`
  :host {
    display: contents;
  }
`,n=(0,a.i)`
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
`}}]);