import{r as u,_ as h,b as d,j as t,F as N,a as l,d as m,m as S}from"./app-a381c4b7.js";import{c as w,I as b}from"./index-0c4cce5b.js";import{R as M}from"./index-7a7f9693.js";import{G as R}from"./iconBase-17a33e48.js";import{_,I as k}from"./index-bfdd4c98.js";import{g as f,a as g,b as C,d as v,c as x,e as y}from"./styled-d729a487.js";import{M as I}from"./Menu-e827a689.js";import"./logo-641cabfd.js";import"./Index-afd8de48.js";import"./Button-1729f5c4.js";import"./ButtonBase-7db9b5bc.js";import"./MenuItem-ddd3f184.js";import"./dividerClasses-477e93d8.js";function P(e){return f("MuiCard",e)}g("MuiCard",["root"]);const j=["className","raised"],A=e=>{const{classes:s}=e;return y({root:["root"]},P,s)},U=C(I,{name:"MuiCard",slot:"Root",overridesResolver:(e,s)=>s.root})(()=>({overflow:"hidden"})),$=u.forwardRef(function(s,a){const o=v({props:s,name:"MuiCard"}),{className:i,raised:r=!1}=o,c=h(o,j),n=d({},o,{raised:r}),p=A(n);return t(U,d({className:x(p.root,i),elevation:r?8:void 0,ref:a,ownerState:n},c))}),F=$;function z(e){return f("MuiCardActions",e)}g("MuiCardActions",["root","spacing"]);const D=["disableSpacing","className"],E=e=>{const{classes:s,disableSpacing:a}=e;return y({root:["root",!a&&"spacing"]},z,s)},L=C("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:a}=e;return[s.root,!a.disableSpacing&&s.spacing]}})(({ownerState:e})=>d({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),Q=u.forwardRef(function(s,a){const o=v({props:s,name:"MuiCardActions"}),{disableSpacing:i=!1,className:r}=o,c=h(o,D),n=d({},o,{disableSpacing:i}),p=E(n);return t(L,d({className:x(p.root,r),ownerState:n,ref:a},c))}),B=Q;function G(e){return f("MuiCardContent",e)}g("MuiCardContent",["root"]);const T=["className","component"],q=e=>{const{classes:s}=e;return y({root:["root"]},G,s)},H=C("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,s)=>s.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),K=u.forwardRef(function(s,a){const o=v({props:s,name:"MuiCardContent"}),{className:i,component:r="div"}=o,c=h(o,T),n=d({},o,{component:r}),p=q(n);return t(H,d({as:r,className:x(p.root,i),ownerState:n,ref:a},c))}),W=K;var J=w("shopping-cart-plus","IconShoppingCartPlus",[["path",{d:"M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M17 17h-11v-14h-2",key:"svg-2"}],["path",{d:"M6 5l6 .429m7.138 6.573l-.143 1h-13",key:"svg-3"}],["path",{d:"M15 6h6m-3 -3v6",key:"svg-4"}]]);function O(e){return R({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M16.604 15.868l-5.173-5.173c0.975-1.137 1.569-2.611 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.736 0-3.369 0.676-4.598 1.903-1.227 1.228-1.903 2.861-1.902 4.597 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.087-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 11.972c-3.032 0-5.5-2.467-5.5-5.5-0.001-1.47 0.571-2.851 1.61-3.889 1.038-1.039 2.42-1.611 3.89-1.611 3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5z"}}]})(e)}function V({url:e}){const[s,a]=u.useState("");return t(N,{children:t("div",{className:"flex w-full justify-center ",children:l("div",{className:"flex w-1/2 border border-gray-300 rounded-md px-3",children:[t("div",{className:" flex items-center",children:t(O,{size:24,className:"text-gray-500"})}),t("input",{id:"search",type:"text",className:"border-none rounded-md w-full focus:ring-0 appearance-none",onChange:r=>{a(r.target.value)},onKeyDown:r=>{r.key=="Enter"&&m.Inertia.get(route(e),{keywords:s},{replace:!0,preserveState:!0})},placeholder:"Cari Produk"})]})})})}function de({product:e,flash:s,count_product:a}){const{auth:o}=S().props;u.useEffect(()=>{s.message&&_.success(s.message),m.Inertia.post("/clear-flash")},[s.message]);const i=(r,c)=>{r.preventDefault(),m.Inertia.post("/cart",{product_id:c},{preserveScroll:!0})};return l(b,{children:[l("div",{className:"flex flex-col mt-10  justify-center items-center",children:[t("h4",{className:"text-3xl my-4",children:"Produk Pet"}),t(V,{url:"product.index"}),t(k,{position:"center-bottom"})]}),t("div",{className:"px-10 py-10 flex flex-wrap gap-10 justify-center",children:e?e.map((r,c)=>t("div",{className:"shadow-md",children:l(F,{sx:{width:250,boxShadow:0,border:1,borderColor:"#e2e8f0",height:"100%"},children:[t("div",{className:"flex justify-center m-4",children:t("img",{src:r.photo_product,className:"h-44 w-auto",alt:""})}),l(W,{sx:{display:"grid",gap:1},children:[l("div",{children:[t("p",{className:"font-semibold text-lg",children:"Nama Produk :"}),t("p",{className:"",children:r.name_product})]}),l("div",{children:[console.log(r),t("p",{className:"font-semibold text-lg",children:"Deskripsi :"}),t("p",{className:"",children:r.description_product})]}),l("div",{children:[t("p",{className:"font-semibold text-lg",children:"Harga :"}),t("p",{className:"",children:M(r.price_product)})]})]}),t(B,{sx:{display:"flex",justifyContent:"end",padding:3},children:o.user!=null&&t("form",{onSubmit:n=>i(n,r.id),children:t("button",{type:"submit",children:t(J,{})})})})]},r.id)},r.id)):""})]})}export{de as default};
