import{b as r,o as a,w as u,j as f,N as d,k as o,c as i,e as h,aA as m,H as y,K as g,F as x,B as b,T as _}from"./framework.hObu1goC.js";import{x as v,aV as w}from"./eo-dash.CqjNF9IV.js";import{V as k}from"./VMain-eZDKIfmJ.CgIvmaaU.js";import"./commonjsHelpers.BosuxZz1.js";import"./ssrBoot-BP7SYRyC.BZHEI38S.js";class A extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(s,n,t){n!==t&&(this[s]=t),this.render()}}class L extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;

          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(s,n,t){n!==t&&(this[s]=t),this.render()}}customElements.define("eox-layout",A);customElements.define("eox-layout-item",L);const $=["gap"],C=["id","h","w","x","y"],E={__name:"DashboardLayout",setup(c){const{bgWidget:s,importedWidgets:n,gap:t}=w();return(T,B)=>(a(),r(k,null,{default:u(()=>{var p;return[f("eox-layout",{gap:o(t),style:d(`padding: ${o(t)}px`)},[(p=o(s))!=null&&p.component?(a(),i("eox-layout-item",{key:o(s).id,class:"bg-panel bg-surface",style:d(`margin: -${o(t)+1}px;`),x:"0",y:"0",h:"12",w:"12"},[(a(),r(m,null,{default:u(()=>{var e,l;return[(a(),r(y((e=o(s))==null?void 0:e.component),g({id:"bg-widget"},(l=o(s))==null?void 0:l.props),null,16))]}),_:1}))],4)):h("v-if",!0),(a(!0),i(x,null,b(o(n),(e,l)=>(a(),r(_,{key:l,name:"fade"},{default:u(()=>[e.value.component?(a(),i("eox-layout-item",{id:e.value.id.toString(),key:e.value.id,class:"panel bg-surface",h:e.value.layout.h,w:e.value.layout.w,x:e.value.layout.x,y:e.value.layout.y},[(a(),r(m,null,{default:u(()=>[(a(),r(y(e.value.component),g({key:e.value.id,ref_for:!0},e.value.props),null,16))]),_:2},1024))],8,C)):h("v-if",!0)]),_:2},1024))),128))],12,$)]}),_:1}))}},N=v(E,[["__scopeId","data-v-7294ae56"]]);export{N as default};
