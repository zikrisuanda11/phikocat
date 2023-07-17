import{b as c,r as N,_ as z,a as T,j as A,c as U}from"./app-a381c4b7.js";import{g as D,a as O,b as L,c as _,e as W,d as X}from"./styled-d729a487.js";import{u as H,f as Y}from"./FormControl-515196c9.js";import{B as Z}from"./ButtonBase-7db9b5bc.js";import{a as ee}from"./Menu-e827a689.js";import{T as j}from"./Typography-ee46d8d6.js";function oe(e){return D("PrivateSwitchBase",e)}O("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const te=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ae=e=>{const{classes:o,checked:s,disabled:l,edge:a}=e,t={root:["root",s&&"checked",l&&"disabled",a&&`edge${U(a)}`],input:["input"]};return W(t,oe,o)},se=L(Z)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),re=L("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),le=N.forwardRef(function(o,s){const{autoFocus:l,checked:a,checkedIcon:t,className:h,defaultChecked:F,disabled:p,disableFocusRipple:g=!1,edge:R=!1,icon:v,id:S,inputProps:x,inputRef:w,name:$,onBlur:m,onChange:C,onFocus:b,readOnly:B,required:q=!1,tabIndex:P,type:n,value:f}=o,d=z(o,te),[u,G]=ee({controlled:a,default:!!F,name:"SwitchBase",state:"checked"}),i=H(),J=r=>{b&&b(r),i&&i.onFocus&&i.onFocus(r)},K=r=>{m&&m(r),i&&i.onBlur&&i.onBlur(r)},Q=r=>{if(r.nativeEvent.defaultPrevented)return;const M=r.target.checked;G(M),C&&C(r,M)};let y=p;i&&typeof y>"u"&&(y=i.disabled);const V=n==="checkbox"||n==="radio",I=c({},o,{checked:u,disabled:y,disableFocusRipple:g,edge:R}),E=ae(I);return T(se,c({component:"span",className:_(E.root,h),centerRipple:!0,focusRipple:!g,disabled:y,tabIndex:null,role:void 0,onFocus:J,onBlur:K,ownerState:I,ref:s},d,{children:[A(re,c({autoFocus:l,checked:a,defaultChecked:F,className:E.input,disabled:y,id:V?S:void 0,name:$,onChange:Q,readOnly:B,ref:w,required:q,ownerState:I,tabIndex:P,type:n},n==="checkbox"&&f===void 0?{}:{value:f},x)),u?t:v]}))}),ye=le;function ne(e){return D("MuiFormControlLabel",e)}const ie=O("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),k=ie,ce=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],de=e=>{const{classes:o,disabled:s,labelPlacement:l,error:a,required:t}=e,h={root:["root",s&&"disabled",`labelPlacement${U(l)}`,a&&"error",t&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",a&&"error"]};return W(h,ne,o)},ue=L("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[{[`& .${k.label}`]:o.label},o.root,o[`labelPlacement${U(s.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>c({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${k.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${k.label}`]:{[`&.${k.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),pe=L("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${k.error}`]:{color:(e.vars||e).palette.error.main}})),me=N.forwardRef(function(o,s){var l,a;const t=X({props:o,name:"MuiFormControlLabel"}),{className:h,componentsProps:F={},control:p,disabled:g,disableTypography:R,label:v,labelPlacement:S="end",required:x,slotProps:w={}}=t,$=z(t,ce),m=H(),C=(l=g??p.props.disabled)!=null?l:m==null?void 0:m.disabled,b=x??p.props.required,B={disabled:C,required:b};["checked","name","onChange","value","inputRef"].forEach(u=>{typeof p.props[u]>"u"&&typeof t[u]<"u"&&(B[u]=t[u])});const q=Y({props:t,muiFormControl:m,states:["error"]}),P=c({},t,{disabled:C,labelPlacement:S,required:b,error:q.error}),n=de(P),f=(a=w.typography)!=null?a:F.typography;let d=v;return d!=null&&d.type!==j&&!R&&(d=A(j,c({component:"span"},f,{className:_(n.label,f==null?void 0:f.className),children:d}))),T(ue,c({className:_(n.root,h),ownerState:P,ref:s},$,{children:[N.cloneElement(p,B),d,b&&T(pe,{ownerState:P,"aria-hidden":!0,className:n.asterisk,children:[" ","*"]})]}))}),ke=me;export{ke as F,ye as S};
