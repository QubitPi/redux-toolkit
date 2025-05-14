"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["8992"],{1897:function(t,e,r){r.d(e,{e:function(){return a}});var n=r(4070),i=r(2189);let a=(0,i.e)(class extends i.i{constructor(t){var e;if(super(t),t.type!==i.t.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(void 0===this.st){for(let n in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)!e[n]||(null==(r=this.nt)?void 0:r.has(n))||this.st.add(n);return this.render(e)}let a=t.element.classList;for(let t of this.st)t in e||(a.remove(t),this.st.delete(t));for(let t in e){let r=!!e[t];r===this.st.has(t)||(null==(i=this.nt)?void 0:i.has(t))||(r?(a.add(t),this.st.add(t)):(a.remove(t),this.st.delete(t)))}return n.w}})},6336:function(t,e,r){r.r(e),r.d(e,{CanaryModal:function(){return w},MODAL_CLOSE_EVENT:function(){return b}});var n=r(4070),i=r(1303),a=r(7444),o=r(9866),s=r(3070),l=r(8863),d=r(7381),c=r(1897),p=Object.defineProperty,h=Object.getOwnPropertyDescriptor,u=(t,e,r,n)=>{for(var i,a=n>1?void 0:n?h(e,r):e,o=t.length-1;o>=0;o--)(i=t[o])&&(a=(n?i(e,r,a):i(a))||a);return n&&a&&p(e,r,a),a};let y=class extends n.s{constructor(){super(...arguments),this.transition=!1,this.ref=(0,s.e)()}render(){let t={"with-transition":this.transition};return(0,n.x)`
      <dialog
        ${(0,s.n)(this.ref)}
        class=${(0,c.e)(t)}
        @click=${this.handleClick}
        part="dialog"
      >
        <slot></slot>
      </dialog>
    `}handleClick(t){let e=this.ref.value;(null==e?void 0:e.open)&&"DIALOG"===t.target.nodeName&&(e.close(),this.dispatchEvent((0,l.yM)({type:"set_query",data:{text:""}})))}};y.styles=[(0,n.i)`
      dialog::backdrop {
        background-color: var(--canary-color-backdrop-overlay);
        -webkit-backdrop-filter: blur(var(--canary-backdrop-blur, 0.25rem));
        backdrop-filter: blur(var(--canary-backdrop-blur, 0.25rem));
      }
      dialog {
        margin: 0 auto;
        top: 60px;
        padding: 0;
        border: none;
        outline: none;
        border-radius: 8px;
        box-shadow:
          0 20px 25px -5px rgb(0 0 0 / 0.1),
          0 8px 10px -6px rgb(0 0 0 / 0.1);
      }

      dialog.with-transition {
        transition:
          opacity var(--canary-transition-duration, 0.1s)
            var(--canary-transition-timing, linear),
          transform var(--canary-transition-duration, 0.1s)
            var(--canary-transition-timing, linear);
      }

      dialog.with-transition[open] {
        opacity: 1;
      }

      dialog.with-transition:not([open]) {
        opacity: 0;
      }

      @starting-style {
        dialog.with-transition[open] {
          opacity: 0;
        }
      }
    `],u([(0,i.n)({type:Boolean})],y.prototype,"transition",2),y=u([(0,o.r)("canary-dialog")],y);var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,f=(t,e,r,n)=>{for(var i,a=n>1?void 0:n?v(e,r):e,o=t.length-1;o>=0;o--)(i=t[o])&&(a=(n?i(e,r,a):i(a))||a);return n&&a&&g(e,r,a),a};let b="modal-close",w=class extends n.s{constructor(){super(...arguments),this.open=!1,this.transition=!1,this._ref=(0,s.e)()}render(){return(0,n.x)`
      <slot name="trigger" @click=${this._handleOpen}></slot>
      <canary-dialog
        .ref=${this._ref}
        transition=${(0,a.o)(this.transition)}
        exportparts="dialog"
      >
        <slot name="content" @modal-close=${this._handleModalClose}></slot>
      </canary-dialog>
    `}_handleOpen(){var t;null==(t=this._ref.value)||t.showModal()}_handleModalClose(){var t;null==(t=this._ref.value)||t.close(),this.dispatchEvent((0,l.yM)({type:"set_query",data:{text:""}}))}};w.styles=[d.w,(0,n.i)`
      ::slotted([slot="trigger"]) {
        cursor: pointer;
      }
    `],f([(0,i.n)({type:Boolean})],w.prototype,"open",2),f([(0,i.n)({type:Boolean})],w.prototype,"transition",2),w=f([(0,o.r)("canary-modal")],w)},7444:function(t,e,r){r.d(e,{o:function(){return i}});var n=r(4070);let i=t=>t??n.T}}]);