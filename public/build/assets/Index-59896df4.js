import{r as n,j as e,F as m,a as i,d as w}from"./app-a381c4b7.js";import{L as k}from"./Default-fe2a5c32.js";import{B as l}from"./Index-afd8de48.js";import{B as x}from"./Index-94b538da.js";import{M as y,a as N}from"./Delete-35dd5aa1.js";import{D as b,G as M}from"./DataGrid-c39744b7.js";import"./iconBase-17a33e48.js";import"./index.esm-c7a5946b.js";import"./index.esm-b21b6290.js";import"./Button-1729f5c4.js";import"./styled-d729a487.js";import"./ButtonBase-7db9b5bc.js";import"./Stack-89673c8c.js";import"./Typography-ee46d8d6.js";import"./Menu-e827a689.js";import"./MenuItem-ddd3f184.js";import"./dividerClasses-477e93d8.js";import"./TextField-2216dd29.js";import"./FormControl-515196c9.js";import"./Divider-1d99539a.js";import"./FormControlLabel-d3a4d516.js";function J({datas:p,flash:a}){const r=n.useRef({title:"",message:"",id:null,actionConfirm:null}),[u,d]=n.useState(!1),[h,c]=n.useState(!1),o=()=>{c(!1),d(!1)},g=()=>{c(!0)};n.useEffect(()=>{a.message&&d(!0)},[a.message]);const f=()=>{w.Inertia.delete(`/admin/type-products/${r.current.id}`),o()},C=p.map((t,s)=>({id:t.id,no:s+1,name_type:t.name_type})),v=[{field:"no",headerName:"No",width:120,headerAlign:"center",align:"center"},{field:"name_type",headerName:"Nama Product",width:200},{field:"id",sortable:!1,headerName:"Action",headerAlign:"center",align:"center",width:200,renderCell:t=>{const s=()=>{r.current={title:"Hapus Data",message:"Yakin ingin menghapus data?",id:t.id,actionConfirm:f},g()};return e(m,{children:i("div",{className:"grid gap-3 grid-cols-2",children:[e(l,{variant:"contained",size:"medium",title:"Edit",backgroundColor:"#C7E7E1",textColor:"#124C5F",href:`/admin/type-products/${t.id}/edit`}),e(l,{variant:"contained",size:"small",title:"Hapus",textColor:"#B91C1C",backgroundColor:"#FDE2E2",onClick:s})]})})}}];return e(m,{children:i(k,{children:[e(y,{icon:e("span",{className:"text-red-600",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})})}),title:r.current.title,message:"Apakah anda yakin ingin menghapus data?",isOpen:h,onClose:o,actionConfirm:r.current.actionConfirm}),a.message&&e(N,{icon:e("span",{className:"text-green-600",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-6 w-6",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),title:"Success",message:a.message,isOpen:u,onClose:o}),e("div",{className:"container m-5",children:i("div",{className:"flex-col mr-8",children:[i("div",{className:"flex justify-between",children:[i("div",{className:"flex-col",children:[e("h1",{className:"text-lg font-semibold text-gray-900",children:"Type product"}),e(x,{breadcrumbs:[{name:"TypeProduct",href:"/admin/type-products",color:"inherit",key:"1"},{name:"Table",color:"text.primary",key:"2"}]})]}),e("div",{children:e(l,{href:"/admin/type-products/create",variant:"contained",size:"medium",title:"Tambah Data",backgroundColor:"#124C5F"})})]}),e("div",{className:"mt-6 inline-block align-middle min-w-full",children:e("div",{style:{height:480,width:"100%"},children:e(b,{getRowId:t=>t.id,rows:C,columns:v,initialState:{pagination:{paginationModel:{pageSize:25}}},components:{Toolbar:M}})})})]})})]})})}export{J as default};
