const c=t=>{const s=String(t.getFullYear()),n=String(101+t.getMonth()).substring(1),r=String(100+t.getDate()).substring(1),g=String(100+t.getHours()).substring(1),o=String(100+t.getMinutes()).substring(1),i=String(100+t.getSeconds()).substring(1),e=String(1e3+t.getMilliseconds()).substring(1);return`${s}-${n}-${r}T${g}:${o}:${i}.${e}Z`},u=c;export{u as D};