import{j as e,u as w,r as n,d as x,a,H as v}from"./app-a381c4b7.js";import{G as N,P as I}from"./PrimaryButton-9a81f850.js";import{T as c,I as d}from"./TextInput-49ae26d6.js";import{I as u}from"./InputLabel-defd8691.js";import{_ as p,I as k}from"./index-bfdd4c98.js";import"./index.esm-e0c9ef29.js";import"./logo-641cabfd.js";function y({className:t="",...i}){return e("input",{...i,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+t})}function H({status:t,canResetPassword:i,flash:r,auth:C}){const{data:m,setData:o,post:g,processing:f,errors:l,reset:b}=w({email:"",password:"",remember:!1});n.useEffect(()=>()=>{b("password")},[]);const h=s=>{s.preventDefault(),g(route("login"))};return n.useEffect(()=>{r.message&&p.success(r.message),r.error&&p.error(r.error),x.Inertia.post("/clear-flash")},[r.message,r.error]),a(N,{children:[e(v,{title:"Log in"}),e(k,{position:"center-bottom"}),t&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),a("form",{onSubmit:h,children:[a("div",{children:[e(u,{htmlFor:"email",value:"Email"}),e(c,{id:"email",type:"email",name:"email",value:m.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value)}),e(d,{message:l.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(u,{htmlFor:"password",value:"Password"}),e(c,{id:"password",type:"password",name:"password",value:m.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e(d,{message:l.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:a("label",{className:"flex items-center",children:[e(y,{name:"remember",checked:m.remember,onChange:s=>o("remember",s.target.checked)}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),e("div",{className:"flex items-center justify-end mt-4",children:e(I,{className:"ml-4",disabled:f,children:"Log in"})})]})]})}export{H as default};
