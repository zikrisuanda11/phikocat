import{r as n,j as e,F as l,a as t,d as s}from"./app-a381c4b7.js";import{L as o}from"./Default-fe2a5c32.js";import{B as m}from"./Index-afd8de48.js";import{B as c}from"./Index-94b538da.js";import{I as p}from"./Index-4f9967a1.js";import"./iconBase-17a33e48.js";import"./index.esm-c7a5946b.js";import"./index.esm-b21b6290.js";import"./Button-1729f5c4.js";import"./styled-d729a487.js";import"./ButtonBase-7db9b5bc.js";import"./Stack-89673c8c.js";import"./Typography-ee46d8d6.js";function j({typeProductPet:r}){const[i,d]=n.useState(r.name_type);return e(l,{children:e(o,{children:e("div",{className:"container m-5",children:t("div",{className:"flex-col mr-8",children:[e("div",{className:"flex justify-between",children:t("div",{className:"flex-col",children:[e("h1",{className:"text-lg font-semibold text-gray-900",children:"Product"}),e(c,{breadcrumbs:[{name:"TypeProduct",href:"/admin/type-products",key:"1"},{name:"Table",href:"/admin/type-products",key:"2"},{name:"Edit TypeProduct",key:"3"}]})]})}),e("div",{className:"mt-6 min-w-full border rounded-md p-5 ",children:e("form",{onSubmit:async a=>{a.preventDefault(),s.Inertia.put(`/admin/type-products/${r.id}`,{name_type:i})},children:t("div",{className:"grid grid-cols-6 gap-6",children:[e("div",{className:"col-span-2  flex flex-col",children:e("label",{htmlFor:"name_product",className:" text-right my-3 text-gray-500",children:"Name"})}),t("div",{className:"col-span-4  gap-3",children:[e(p,{type:"text",id:"name_type",value:i,onChange:a=>{d(a.target.value)},customClass:"mb-5"}),t("div",{className:"mt-5 flex gap-5",children:[e("div",{children:e(m,{variant:"contained",size:"medium",title:"Simpan",backgroundColor:"#124C5F",type:"submit"})}),e("div",{children:e(m,{variant:"contained",size:"medium",title:"Cancel",backgroundColor:"#C7E7E1",textColor:"#124C5F",href:"/admin/type-products"})})]})]})]})})})]})})})})}export{j as default};