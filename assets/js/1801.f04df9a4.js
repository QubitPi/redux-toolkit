"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["1801"],{5032:function(n,t,s){s.r(t),s.d(t,{CanarySearch:function(){return x}});var r=s(4070),e=s(8436),i=s(3070),a=s(3526),u=s(7191),o=s(9866),c=s(8246),d=s(7381),h=s(8863),b=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p=(n,t,s,r)=>{for(var e,i=r>1?void 0:r?l(t,s):t,a=n.length-1;a>=0;a--)(e=n[a])&&(i=(r?e(t,s,i):e(i))||i);return r&&i&&b(t,s,i),i};let x=class extends r.s{constructor(){super(...arguments),this.MODE=c.M,this._containerRef=(0,i.e)()}connectedCallback(){super.connectedCallback(),this.dispatchEvent((0,h.yM)({type:"register_mode",data:this.MODE}))}render(){return this._mode&&this._mode.current===this.MODE?(0,r.x)`
          <div class="container" part="container">
            <div class="head" part="head">
              <slot name="head"></slot>
            </div>
            <div
              class="scroll-container"
              ${(0,i.n)(this._containerRef)}
              part="scroll-container"
            >
              <div class="body" part="body">
                <slot name="body"></slot>
              </div>
            </div>
          </div>
        `:r.T}};x.styles=[d.g,d.s,(0,r.i)`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
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
.sticky{position:sticky;}
.static{position:static;}
.flex{display:flex;};
    `,(0,r.i)`
      .container {
        display: flex;
        flex-direction: column;
      }

      .head {
        position: sticky;
        top: 0px;
        background-color: var(--canary-color-gray-100);
        z-index: 50;
        padding-left: 12px;
        margin-bottom: 4px;
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
    `],p([(0,a.c)({context:u.xd,subscribe:!0}),(0,e.r)()],x.prototype,"_mode",2),x=p([(0,o.r)("canary-search")],x)},3526:function(n,t,s){s.d(t,{c:function(){return e}});var r=s(1066);function e({context:n,subscribe:t}){return(s,e)=>{"object"==typeof e?e.addInitializer(function(){new r.s(this,{context:n,callback:n=>{s.set.call(this,n)},subscribe:t})}):s.constructor.addInitializer(s=>{new r.s(s,{context:n,callback:n=>{s[e]=n},subscribe:t})})}}},1066:function(n,t,s){s.d(t,{s:function(){return e}});var r=s(5996);class e{constructor(n,t,s,r){(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,t)=>{this.unsubscribe&&(this.unsubscribe!==t&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,t)),this.unsubscribe=t},this.host=n,void 0!==t.context)?(this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1):(this.context=t,this.callback=s,this.subscribe=r??!1),this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new r.s(this.context,this.t,this.subscribe))}}},8436:function(n,t,s){s.d(t,{r:function(){return e}});var r=s(1303);function e(n){return(0,r.n)({...n,state:!0,attribute:!1})}}}]);