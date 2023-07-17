import{r,j as t,F as S,a,d as F}from"./app-a381c4b7.js";import{L as k}from"./Default-fe2a5c32.js";import{B as l}from"./Index-afd8de48.js";import{B as I}from"./Index-94b538da.js";import{I as c}from"./Index-4f9967a1.js";import{A as m,F as j,I as B}from"./Alert-eada64ef.js";import"./iconBase-17a33e48.js";import"./index.esm-c7a5946b.js";import"./index.esm-b21b6290.js";import"./Button-1729f5c4.js";import"./styled-d729a487.js";import"./ButtonBase-7db9b5bc.js";import"./Stack-89673c8c.js";import"./Typography-ee46d8d6.js";import"./ChevronUpDownIcon-432aa38d.js";import"./use-flags-761c4fb4.js";import"./use-tree-walker-1218e650.js";function W({typeProductPets:i,errors:o}){const[n,u]=r.useState(),[p,h]=r.useState(),[g,y]=r.useState(),[x,b]=r.useState(),[f,v]=r.useState(),[s,_]=r.useState(i[0]),[C,N]=r.useState(""),[d,P]=r.useState(null);return r.useEffect(()=>{v(s.id)},[s]),t(S,{children:t(k,{children:t("div",{className:"container m-5",children:a("div",{className:"flex-col mr-8",children:[t("div",{className:"flex justify-between",children:a("div",{className:"flex-col",children:[t("h1",{className:"text-lg font-semibold text-gray-900",children:"Product"}),t(I,{breadcrumbs:[{name:"Product",href:"/admin/products",key:"1"},{name:"Table",href:"/admin/products",key:"2"},{name:"Create Product",key:"3"}]})]})}),t("div",{className:"mt-6 min-w-full border rounded-md p-5 ",children:t("form",{onSubmit:async e=>{e.preventDefault(),F.Inertia.post("/admin/products",{name_product:n,description_product:p,price_product:g,stock_product:x,type_product_id:f,photo_product:d})},children:a("div",{className:"grid grid-cols-6 gap-6",children:[a("div",{className:"col-span-2  flex flex-col",children:[t("label",{htmlFor:"name_product",className:"text-right my-3 text-gray-500",children:"Product Name"}),t("label",{htmlFor:"description_product",className:" text-right my-6 text-gray-500",children:"Description Product"}),t("label",{htmlFor:"price_product",className:" text-right my-3 text-gray-500",children:"Price Product"}),t("label",{htmlFor:"stock_product",className:" text-right my-7 text-gray-500",children:"Stock Product"}),t("label",{className:"text-right my-2 text-gray-500",children:"Photo Product"}),o.photo_product&&t(m,{customClass:"-mt-4 invisible"}),t("label",{htmlFor:"type_product",className:" text-right my-7 text-gray-500",children:"Type Product"})]}),a("div",{className:"col-span-4  gap-3",children:[t(c,{type:"text",id:"name_product",onChange:e=>{u(e.target.value)},customClass:"mb-5"}),t(c,{type:"text",id:"description_product",onChange:e=>{h(e.target.value)},customClass:"mb-5"}),t(c,{type:"number",id:"price_product",onChange:e=>{y(e.target.value)},customClass:"mb-5"}),t(c,{type:"number",id:"stock_product",onChange:e=>{b(e.target.value)},customClass:"mb-5"}),t(j,{id:"file",value:d,onChange:e=>{P(e.target.files[0])},customClass:o.photo_product?"":"mb-5"}),o.photo_product&&t(m,{message:o.photo_product}),t("div",{className:"relative z-10",children:t(B,{id:"type_product",items:i,selected:s,query:C,setSelected:_,setQuery:N})}),a("div",{className:"mt-7 flex gap-5",children:[t("div",{children:t(l,{variant:"contained",size:"medium",title:"Simpan",backgroundColor:"#124C5F",type:"submit"})}),t("div",{children:t(l,{variant:"contained",size:"medium",title:"Cancel",backgroundColor:"#C7E7E1",textColor:"#124C5F",href:"/admin/products"})})]})]})]})})})]})})})})}export{W as default};