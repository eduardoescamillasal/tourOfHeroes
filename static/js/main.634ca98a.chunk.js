(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(32)},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),o=a.n(r),c=a(4),s=a(1),i=a(3);a(22);var m=e=>{let{onClick:t,children:a}=e;return l.a.createElement("div",null,l.a.createElement("button",{className:"hero-button",onClick:t},a))};a(23);var d=e=>{let{value:t,onChange:a,placeholder:n,type:r="text"}=e;return l.a.createElement("input",{type:r,value:t,onChange:a,placeholder:n,className:"hero-input"})};const u=e=>({type:"INCREMENT_FAVORITE_COUNT",payload:e});a(24);var h=e=>{let{onClose:t}=e;const[a,r]=Object(n.useState)({name:""}),o=Object(i.c)(),c=Object(i.d)(e=>e.hero.heroes);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal-backdrop",onClick:t}),l.a.createElement("div",{className:"modal"},l.a.createElement("form",{onSubmit:e=>{e.preventDefault();const t=c.reduce((e,t)=>Math.max(t.id,e),0)+1;o((e=>({type:"ADD_HERO",payload:e}))({...a,id:t})),r({name:""})}},l.a.createElement("label",{htmlFor:"heroName"},"Hero Name:"),l.a.createElement(d,{id:"heroName",type:"text",value:a.name,onChange:e=>{r({...a,name:e.target.value})},required:!0}),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly"}},l.a.createElement(m,{type:"submit"},"Add Hero"),l.a.createElement(m,{type:"button",onClick:e=>{e.preventDefault(),t()}},"Close")))))};a(25);var E=e=>{let{hero:t}=e;return l.a.createElement("div",{className:"module hero hero-card"},l.a.createElement("h4",null,t.name))};a(26);var v=()=>{const e=Object(n.useRef)(null),t=Object(n.useRef)(null);return Object(n.useEffect)(()=>{let a=void 0,n=void 0,l=1,r=1;const o=()=>{const e=Date.now(),t=Math.floor(128*(Math.sin(1e-4*e)+1)),a=Math.floor(128*(Math.sin(2e-4*e+Math.PI/3)+1)),n=Math.floor(128*(Math.sin(3e-4*e+2*Math.PI/3)+1));return"rgb(".concat(t,",").concat(a,",").concat(n,")")};return a=setInterval(()=>{const e=t.current;if(!e)return;let a=[],n=[];l+=.07,r+=.03;let c=Math.cos(l),s=Math.sin(l),i=Math.cos(r),m=Math.sin(r);for(let t=0;t<1760;t++)a[t]=t%80==79?"\n":" ",n[t]=0;for(let t=0;t<6.28;t+=.07){let e=Math.cos(t),l=Math.sin(t);for(let t=0;t<6.28;t+=.02){let r=Math.sin(t),d=Math.cos(t),u=e+2,h=1/(r*u*s+l*c+5),E=r*u*c-l*s,v=0|40+30*h*(d*u*i-E*m),f=0|12+15*h*(d*u*m+E*i),p=v+80*f,b=0|8*((l*s-r*e*c)*i-r*e*s-l*c-d*e*m);if(f<22&&f>=0&&v>=0&&v<79&&h>n[p]){n[p]=h;let e=".,-~:;=!*#$@"[b>0?b:0],t=o();a[p]='<span style="color: '.concat(t,';">').concat(e,"</span>")}}}e.innerHTML=a.join("")},50),n=setInterval(()=>{const t=e.current;if(!t)return;let n=t.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,n.canvas.width,n.canvas.height),void 0===a&&(l+=.07,r+=.03);let o=Math.cos(l),c=Math.sin(l),s=Math.cos(r),i=Math.sin(r);for(let e=0;e<6.28;e+=.3){let t=Math.cos(e),a=Math.sin(e);for(let e=0;e<6.28;e+=.1){let l=Math.sin(e),r=Math.cos(e),m=2+1*t,d=1*a,u=1/(5+o*m*l+c*d),h=150+150*u*(m*(s*r+c*i*l)-d*o*i),E=120-150*u*(m*(i*r-c*s*l)+d*o*s),v=.7*(r*t*i-o*t*l-c*a+s*(o*a-t*c*l));v>0&&(n.fillStyle="rgba(255,255,255,"+v+")",n.fillRect(h,E,1.5,1.5))}}},50),()=>{clearInterval(a),clearInterval(n)}},[]),l.a.createElement("div",null,l.a.createElement("pre",{ref:t}))};var f=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{style:{fontSize:35,fontWeight:700,color:"#3c1518"}},"Tour of Heroes"),l.a.createElement(v,null),l.a.createElement("div",{style:{marginTop:10,display:"flex",justifyContent:"start"}},l.a.createElement("nav",null,l.a.createElement(c.b,{to:"/"},"Dashboard")," ",l.a.createElement(c.b,{to:"/heroes"},"Heroes"))));a(27);var p=Object(i.b)(e=>({heroes:e.hero.heroes}))(e=>{let{heroes:t}=e;const[a,r]=Object(n.useState)(!1),o=()=>{r(!a)},s=[...t].sort((e,t)=>e.favId-t.favId);return Array.isArray(t)&&0!==t.length?l.a.createElement("div",{className:"dashboard"},l.a.createElement(f,null),l.a.createElement("h3",{className:"top-heroes"},"Top Heroes"),l.a.createElement("div",{className:"grid grid-pad"},s.map(e=>l.a.createElement(c.b,{to:"/detail/".concat(e.id),className:"col-1-4",key:e.id},l.a.createElement(E,{hero:e})))),l.a.createElement(m,{onClick:o},"Add New Hero"),a&&l.a.createElement(h,{onClose:o})):l.a.createElement("div",null,"Loading...")});a(28);var b=Object(i.b)(e=>({heroes:e.hero.heroes}))(e=>{let{heroes:t}=e;const a=Object(i.c)(),n=[...t].sort((e,t)=>(t.favoriteCount||0)-(e.favoriteCount||0));return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("h2",null,"Heroes"),l.a.createElement("ul",{className:"hero-list"},n.map(e=>l.a.createElement("li",{key:e.id,className:"hero-item"},l.a.createElement(c.b,{to:"/detail/".concat(e.id),className:"hero-link"},l.a.createElement("span",{className:"badge"},e.id),l.a.createElement("span",{className:"hero-name"},e.name)),l.a.createElement("button",{className:"favorite-button",onClick:()=>(e=>{a(u(e))})(e.id)},"Favorite")))))});a(29);const y={deleteHero:e=>({type:"DELETE_HERO",payload:e}),editHero:e=>({type:"EDIT_HERO",payload:e}),incrementFavoriteCount:u};var M=Object(i.b)((e,t)=>{const a=parseInt(t.id||t.match.params.id);return{hero:e.hero.heroes.find(e=>e.id===a)}},y)(e=>{let{hero:t,deleteHero:a,editHero:r,incrementFavoriteCount:o}=e;const c=Object(i.c)(),m=Object(s.o)(),[d,u]=Object(n.useState)(t||{id:null,name:"Unknown"});Object(n.useEffect)(()=>{t&&u(t)},[t]);return l.a.createElement("div",{className:"hero-detail"},l.a.createElement("h2",null,d.name," Details"),l.a.createElement("div",null,l.a.createElement("label",null,"ID: "),d.id),l.a.createElement("div",null,l.a.createElement("label",null,"Name: "),l.a.createElement("input",{type:"text",value:d.name,onChange:e=>{u({...d,name:e.target.value})}})),l.a.createElement("button",{className:"button-hero",onClick:()=>{c(a(d.id)),m("/heroes")}},"Delete Hero"),l.a.createElement("button",{className:"button-hero",onClick:()=>{c(r(d)),m("/heroes")}},"Save Hero"),l.a.createElement("button",{className:"button-hero",onClick:()=>{o(t.id)}},"Favorite"))});var O=()=>{const{id:e}=Object(s.q)();return l.a.createElement(M,{id:e})};var N=()=>l.a.createElement("div",{style:{textAlign:"center",marginTop:"50px"}},l.a.createElement("h1",null,"404 - Not Found"),l.a.createElement("p",null,"Sorry, the page you are looking for does not exist."),l.a.createElement("p",null,"You can always go back to the ",l.a.createElement(c.b,{to:"/"},"homepage"),"."));a(30);var g=()=>{const[e,t]=Object(n.useState)(!1);Object(n.useEffect)(()=>{e?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",e)},[e]),Object(n.useEffect)(()=>{const e="true"===localStorage.getItem("darkMode");t(e)},[]);return l.a.createElement(c.a,null,l.a.createElement("div",{className:"main-content"},l.a.createElement(m,{onClick:()=>{t(!e)}},e?"Switch to Light Mode":"Switch to Dark Mode"),l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",element:l.a.createElement(p,null)}),l.a.createElement(s.a,{path:"/heroes",element:l.a.createElement(b,null)}),l.a.createElement(s.a,{path:"/detail/:id",element:l.a.createElement(O,null)}),l.a.createElement(s.a,{path:"*",element:l.a.createElement(N,null)}))))},C=a(6);const I={ADD_HERO:(e,t)=>({...e,heroes:[...e.heroes,t.payload]}),EDIT_HERO:(e,t)=>({...e,heroes:e.heroes.map(e=>e.id===t.payload.id?t.payload:e)}),DELETE_HERO:(e,t)=>({...e,heroes:e.heroes.filter(e=>e.id!==t.payload)}),MARK_AS_FAVORITE:(e,t)=>{const a=Math.max(...e.heroes.map(e=>e.favId||0));return{...e,heroes:e.heroes.map(e=>e.id===t.payload?{...e,favId:a+1}:e)}},INCREMENT_FAVORITE_COUNT:(e,t)=>({...e,heroes:e.heroes.map(e=>e.id===t.payload?{...e,favoriteCount:(e.favoriteCount||0)+1}:e)})},j={heroes:[{id:1,name:"Spider-Man",favId:1},{id:2,name:"Iron Man",favId:2},{id:3,name:"Narco",favId:3},{id:4,name:"Magneta",favId:15},{id:5,name:"RubberMan",favId:14}]};var k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;const a=I[t.type];return a?a(e,t):e};var _=Object(C.a)({hero:k});var D=Object(C.b)(_,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a(31);o.a.createRoot(document.getElementById("root")).render(l.a.createElement(i.a,{store:D},l.a.createElement(g,null)))}],[[11,1,2]]]);
//# sourceMappingURL=main.634ca98a.chunk.js.map