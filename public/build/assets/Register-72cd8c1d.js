import{u as c,r as p,a as s,j as e,H as f,I as h}from"./app-a381c4b7.js";import{G as w,P as g}from"./PrimaryButton-9a81f850.js";import{T as m,I as n}from"./TextInput-49ae26d6.js";import{I as l}from"./InputLabel-defd8691.js";import"./index.esm-e0c9ef29.js";import"./logo-641cabfd.js";function F(){const{data:r,setData:t,post:i,processing:u,errors:o,reset:d}=c({name:"",email:"",phone:"",password:"",password_confirmation:""});return p.useEffect(()=>()=>{d("password","password_confirmation")},[]),s(w,{children:[e(f,{title:"Register"}),s("form",{onSubmit:a=>{a.preventDefault(),i(route("register"))},children:[s("div",{children:[e(l,{htmlFor:"name",value:"Name"}),e(m,{id:"name",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:a=>t("name",a.target.value),required:!0}),e(n,{message:o.name,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(l,{htmlFor:"email",value:"Email"}),e(m,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>t("email",a.target.value),required:!0}),e(n,{message:o.email,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(l,{htmlFor:"phone",value:"phone"}),e(m,{id:"phone",type:"number",name:"phone",value:r.phone,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>t("phone",a.target.value),required:!0}),e(n,{message:o.phone,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(l,{htmlFor:"password",value:"Password"}),e(m,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>t("password",a.target.value),required:!0}),e(n,{message:o.password,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(l,{htmlFor:"password_confirmation",value:"Confirm Password"}),e(m,{id:"password_confirmation",type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>t("password_confirmation",a.target.value),required:!0}),e(n,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:[e(h,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e(g,{className:"ml-4",disabled:u,children:"Register"})]})]})]})}export{F as default};
