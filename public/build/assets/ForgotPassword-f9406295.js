import{a as t,j as e}from"./app-a381c4b7.js";import{G as n,P as d}from"./PrimaryButton-9a81f850.js";import{T as u,I as c}from"./TextInput-49ae26d6.js";import{W as p,a as w}from"./index.esm-e0c9ef29.js";import"./logo-641cabfd.js";function N({status:s}){const{data:o,setData:r,post:m,processing:l,errors:i}=p({email:""});return t(n,{children:[e(w,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),t("form",{onSubmit:a=>{a.preventDefault(),m(route("password.email"))},children:[e(u,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,onChange:a=>r("email",a.target.value)}),e(c,{message:i.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(d,{className:"ml-4",disabled:l,children:"Email Password Reset Link"})})]})]})}export{N as default};