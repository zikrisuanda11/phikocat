import{r,d,j as e,F as m,a}from"./app-a381c4b7.js";import{I as n}from"./index-0c4cce5b.js";import{F as c}from"./index.esm-678b91c6.js";import{R as o}from"./index-7a7f9693.js";import{_ as p,I as h}from"./index-bfdd4c98.js";import{D as f}from"./Divider-1d99539a.js";import"./logo-641cabfd.js";import"./Index-afd8de48.js";import"./Button-1729f5c4.js";import"./styled-d729a487.js";import"./ButtonBase-7db9b5bc.js";import"./Menu-e827a689.js";import"./MenuItem-ddd3f184.js";import"./dividerClasses-477e93d8.js";import"./iconBase-17a33e48.js";function P({flash:t,transaction:s,detailTransaction:l,admin:i}){return r.useEffect(()=>{},[s]),r.useEffect(()=>{t.message&&p(t.message,{icon:"✅"}),d.Inertia.post("/clear-flash")},[t.message]),e(m,{children:a(n,{children:[e(h,{toastOptions:{duration:5e3},position:"bottom-center"}),a("div",{className:"flex flex-col w-full items-center justify-center my-10",children:[e("h1",{className:"text-3xl font-serif",children:"Status Payment"}),e("div",{className:"w-full",children:a("div",{className:"flex gap-5 mx-56 justify-center  mt-10",children:[e("div",{className:"border rounded-md shadow-md w-5/12",children:a("div",{className:"bg-grey_pink m-5 p-5 rounded-xl",children:[a("header",{className:"flex justify-between items-center mb-3",children:[e(c,{size:32}),e("div",{className:"text-primary",children:o(s.amount)})]}),e(f,{}),a("div",{className:"my-3",children:[e("div",{className:"text-xs text-slate-500",children:"Transaction ID"}),a("p",{className:"font-bold",children:["#",s.id]})]}),a("div",{className:"my-3",children:[e("div",{className:"text-xs text-slate-500",children:"Date Grooming"}),e("p",{className:"font-bold",children:l.date_service})]}),a("div",{className:"my-3",children:[e("div",{className:"text-xs text-slate-500",children:"Tipe Pembayaran"}),e("p",{className:"font-bold",children:s.type_payment=="cod"?"Tunai":"Transfer"})]}),a("div",{className:"my-3",children:[e("div",{className:"text-xs text-slate-500",children:"Status Pembayaran"}),e("p",{className:"font-bold",children:s.status_transaction})]})]})}),e("div",{className:"border rounded-md shadow-md w-3/12 h-fit",children:a("div",{className:"p-5 text-xs gap-5 flex flex-col bg-grey_pink",children:[e("div",{children:e("p",{children:"Punya pertanyaan tentang pesanan?"})}),a("div",{children:[e("h3",{className:"font-bold",children:"Email"}),e("p",{className:"text-primary",children:i.email})]}),a("div",{children:[e("h3",{className:"font-bold",children:"Whatsapp"}),e("p",{className:"text-primary",children:i.phone})]})]})})]})})]})]})})}export{P as default};
