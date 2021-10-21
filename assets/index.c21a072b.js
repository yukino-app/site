var $=Object.defineProperty;var R=(e,s,o)=>s in e?$(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o;var k=(e,s,o)=>(R(e,typeof s!="symbol"?s+"":s,o),o);import{c as B,a as S,d as L,r as x,o as c,b as u,t as C,e as h,w as v,f as D,g as N,h as n,i as l,F as g,j as E,k as H,T as j,p as V,l as F,m as q,n as z,q as G,s as T,u as U,v as M,x as W,y as Y,z as K,A as J,B as Q,C as X,D as Z,E as ee,G as te,H as se,I as oe,J as ae,K as ne,L as re}from"./vendor.8d1bb6f7.js";const ie=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}};ie();const ce="modulepreload",P={},le="/",b=function(s,o){return!o||o.length===0?s():Promise.all(o.map(a=>{if(a=`${le}${a}`,a in P)return;P[a]=!0;const t=a.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":ce,t||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),t)return new Promise((d,y)=>{i.addEventListener("load",d),i.addEventListener("error",y)})})).then(()=>s())},m={discord:"https://discord.gg/dUHbfHNUmE",github:"https://github.com/yukino-app/yukino",patreon:"https://patreon.com/zyrouge",releasesCdn:"https://api.github.com/repos/yukino-app/yukino/releases",guide:"/guide"},de=[["/discord",m.discord],["/guide",m.guide],["/guides",m.guide]],ue=(e,s)=>({path:e,component:()=>b(()=>import("./Redirect.37c64f6a.js"),["assets/Redirect.37c64f6a.js","assets/vendor.8d1bb6f7.js"]),props:{redirect:s}}),A=[{name:"Home",route:{path:"/",component:()=>b(()=>import("./Home.243f6458.js"),["assets/Home.243f6458.js","assets/vendor.8d1bb6f7.js"])}},{route:{path:"/download",redirect:"/download/latest"}},{route:{path:"/download/:version",component:()=>b(()=>import("./Download.b2da0a46.js"),["assets/Download.b2da0a46.js","assets/vendor.8d1bb6f7.js"])}},...de.map(e=>({route:ue(...e)})),{route:{path:"/:pathMatch(.*)*",component:()=>b(()=>import("./404.c78e7c16.js"),["assets/404.c78e7c16.js","assets/vendor.8d1bb6f7.js"])}}],fe=B({history:S(),routes:A.map(e=>e.route)});class f{static update(){switch(localStorage.getItem(this.key)){case"0":this.isDark=!1;break;case"1":this.isDark=!0;break;default:this.isDark=matchMedia("(prefers-color-scheme: dark)").matches;break}this.isDark?document.documentElement.classList.add(this.className):document.documentElement.classList.remove(this.className),this.listeners.forEach(s=>s(this.isDark))}static swap(){localStorage.setItem(this.key,this.isDark?"0":"1"),this.update()}}k(f,"key","dark-theme"),k(f,"className","dark"),k(f,"isDark",!1),k(f,"listeners",[]);var w=(e,s)=>{for(const[o,a]of s)e[o]=a;return e};const pe=["href"],me=L({props:{item:{type:Object,required:!0},afterClick:{type:Function,required:!1}},setup(e){return(s,o)=>{const a=x("router-link");return e.item.ext?(c(),u("a",{key:0,class:"nav-link",href:e.item.path,target:"_blank",onClick:o[0]||(o[0]=(...t)=>e.afterClick&&e.afterClick(...t))},C(e.item.name),9,pe)):(c(),h(a,{key:1,class:"nav-link",to:e.item.path,"active-class":"active",onClick:e.afterClick},{default:v(()=>[D(C(e.item.name),1)]),_:1},8,["to","onClick"]))}}});var O=w(me,[["__scopeId","data-v-65d734dd"]]);const _e=e=>(V("data-v-9496677a"),e=e(),F(),e),he={class:"flex flex-row justify-between lg:justify-around items-center w-full px-6 py-3"},ve=D(" Yukino "),ke={class:"hidden lg:flex flex-row gap-8 py-3"},ge={class:"flex flex-row gap-8 py-3"},ye={class:"hidden md:block"},xe={key:0,class:"lg:hidden fixed h-screen w-screen inset-0 bg-gray-100 dark:bg-gray-800 z-50 oveflow-hidden"},be={class:"flex justify-end items-center w-full p-6 gap-6"},we={class:"overflow-y-auto",style:{height:"calc(100vh - 4rem)"}},Le={class:"wx py-4"},Ce={class:"text-2xl mb-2"},De=_e(()=>n("hr",null,null,-1)),Ee=L({setup(e){const s=[...A.filter(d=>d.name!=null).map(d=>({name:d.name,path:d.route.path,ext:!1})),...[["Guides",m.guide],["GitHub",m.github],["Discord",m.discord],["Patreon",m.patreon]].map(([d,y])=>({name:d,path:y,ext:!0}))],o=[{text:"Get Yukino",path:"/download"}],a=N(f.isDark);f.listeners.push(d=>{a.value=d});const t=()=>f.swap(),r=N(!1),i=()=>{r.value=!r.value};return(d,y)=>{const I=x("router-link"),p=x("Icon");return c(),u(g,null,[n("div",he,[l(I,{to:"/",class:"font-bold text-3xl text-indigo-500 dark:text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-600 transition duration-200"},{default:v(()=>[ve]),_:1}),n("div",ke,[(c(),u(g,null,E(s,_=>n("div",null,[l(O,{item:_},null,8,["item"])])),64))]),n("div",ge,[n("button",{class:"hidden md:flex justify-center items-center nav-link text-lg",onClick:t},[a.value?(c(),h(p,{key:0,icon:"moon"})):(c(),h(p,{key:1,icon:"sun"}))]),(c(),u(g,null,E(o,_=>n("div",ye,[l(I,{class:"bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-500 text-white dark:text-white hover:text-white dark:hover:text-white rounded-md px-3 py-1 shadow relative after:transition after:duration-200 hover:after:bg-white/20 after:absolute after:inset-0 after:rounded-md",to:_.path},{default:v(()=>[l(p,{class:"mr-1 text-sm",icon:"download"}),D(" "+C(_.text),1)]),_:2},1032,["to"])])),64)),n("button",{class:"flex lg:hidden justify-center items-center nav-link text-lg",onClick:i},[l(p,{icon:"bars"})])])]),l(j,{name:"nav"},{default:v(()=>[r.value?(c(),u("div",xe,[n("div",be,[n("button",{class:"flex justify-center items-center nav-link text-lg",onClick:t},[a.value?(c(),h(p,{key:0,icon:"moon"})):(c(),h(p,{key:1,icon:"sun"}))]),n("button",{class:"flex lg:hidden justify-center items-center nav-link text-lg",onClick:i},[l(p,{icon:"times"})])]),n("div",we,[n("div",Le,[(c(),u(g,null,E(s,_=>n("div",Ce,[l(O,{item:_,"after-click":i},null,8,["item"])])),64))])])])):H("",!0)]),_:1}),De],64)}}});var Ie=w(Ee,[["__scopeId","data-v-9496677a"]]);const Ne={},je=n("div",{class:"flex flex-col justify-center items-center w-full bg-gray-100 dark:bg-gray-800 text-gray-400 px-10 md:px-16 py-8 gap-3"},[n("p",{class:"font-bold text-2xl text-center"},"Yukino"),n("p",{class:"text-sm"},"Licensed under GPL-3.0")],-1),Pe=[je];function Ae(e,s){return c(),u("footer",null,Pe)}var Oe=w(Ne,[["render",Ae]]);const $e={class:"pb-10"},Re=L({setup(e){return(s,o)=>{const a=x("router-view");return c(),u(g,null,[l(Ie),n("div",$e,[l(a,null,{default:v(({Component:t})=>[l(j,{name:"page",mode:"out-in"},{default:v(()=>[(c(),h(q(t)))]),_:2},1024)]),_:1})]),l(Oe)],64)}}});var Be=w(Re,[["__scopeId","data-v-59a32d7b"]]);z.add(G,T,U,M,W,Y,K,J,Q,X,Z,ee,te,se,oe,ae);f.update();ne(Be).use(fe).component("Icon",re).mount("#app");export{m as U,w as _};
