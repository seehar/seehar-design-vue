import{ah as ce,h as w,R as te,l as fe,ai as pe,j as de,O as re,g as j,x as A,aj as ve,ak as me,y as _e,E as ge,d as ye,C as Oe,o as M,c as R,F as he,D as we,k as V,H as be,t as Pe}from"./framework.7d54c1e1.js";var Q;const k=typeof window<"u",Se=e=>typeof e=="function",Ee=e=>typeof e=="string",$e=()=>{};k&&((Q=window==null?void 0:window.navigator)!=null&&Q.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function $(e){return typeof e=="function"?e():fe(e)}function Ie(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const ne=e=>e();function je(e=ne){const t=w(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:te(t),pause:r,resume:n,eventFilter:a}}function Ce(e){return e}function L(e){return ve()?(me(e),!0):!1}function Ae(e){return typeof e=="function"?j(e):w(e)}function ae(e,t=!0){pe()?de(e):t?e():re(e)}function Ne(e,t,r={}){const{immediate:n=!0}=r,a=w(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function s(){a.value=!1,l()}function f(...u){l(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...u)},$(t))}return n&&(a.value=!0,k&&f()),L(s),{isPending:te(a),start:f,stop:s}}function ht(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=ce(e),o=w(e);function l(s){if(arguments.length)return o.value=s,o.value;{const f=$(r);return o.value=o.value===f?$(n):f,o.value}}return a?l:[o,l]}var B=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,De=(e,t)=>{var r={};for(var n in e)ke.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&B)for(var n of B(e))t.indexOf(n)<0&&xe.call(e,n)&&(r[n]=e[n]);return r};function Te(e,t,r={}){const n=r,{eventFilter:a=ne}=n,o=De(n,["eventFilter"]);return A(e,Ie(a,t),o)}var Fe=Object.defineProperty,Le=Object.defineProperties,Me=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Re=(e,t)=>{for(var r in t||(t={}))oe.call(t,r)&&W(e,r,t[r]);if(N)for(var r of N(t))se.call(t,r)&&W(e,r,t[r]);return e},Ve=(e,t)=>Le(e,Me(t)),Qe=(e,t)=>{var r={};for(var n in e)oe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&N)for(var n of N(e))t.indexOf(n)<0&&se.call(e,n)&&(r[n]=e[n]);return r};function Be(e,t,r={}){const n=r,{eventFilter:a}=n,o=Qe(n,["eventFilter"]),{eventFilter:l,pause:s,resume:f,isActive:u}=je(a);return{stop:Te(e,t,Ve(Re({},o),{eventFilter:l})),pause:s,resume:f,isActive:u}}function We(e){var t;const r=$(e);return(t=r==null?void 0:r.$el)!=null?t:r}const C=k?window:void 0,ze=k?window.navigator:void 0;function D(...e){let t,r,n,a;if(Ee(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=C):[t,r,n,a]=e,!t)return $e;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],l=()=>{o.forEach(d=>d()),o.length=0},s=(d,v,O,m)=>(d.addEventListener(v,O,m),()=>d.removeEventListener(v,O,m)),f=A(()=>[We(t),$(a)],([d,v])=>{l(),d&&o.push(...r.flatMap(O=>n.map(m=>s(d,O,m,v))))},{immediate:!0,flush:"post"}),u=()=>{f(),l()};return L(u),u}function ie(e,t=!1){const r=w(),n=()=>r.value=!!e();return n(),ae(n,t),r}function He(e,t={}){const{window:r=C}=t,n=ie(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=w(!1),l=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s))},s=()=>{n.value&&(l(),a=r.matchMedia(Ae(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",s):a.addListener(s))};return _e(s),L(()=>l()),o}function wt(e={}){const{navigator:t=ze,read:r=!1,source:n,copiedDuring:a=1500,legacy:o=!1}=e,l=["copy","cut"],s=ie(()=>t&&"clipboard"in t),f=j(()=>s.value||o),u=w(""),d=w(!1),v=Ne(()=>d.value=!1,a);function O(){s.value?t.clipboard.readText().then(c=>{u.value=c}):u.value=h()}if(f.value&&r)for(const c of l)D(c,O);async function m(c=$(n)){f.value&&c!=null&&(s.value?await t.clipboard.writeText(c):g(c),u.value=c,d.value=!0,v.start())}function g(c){const p=document.createElement("textarea");p.value=c??"",p.style.position="absolute",p.style.opacity="0",document.body.appendChild(p),p.select(),document.execCommand("copy"),p.remove()}function h(){var c,p,_;return(_=(p=(c=document==null?void 0:document.getSelection)==null?void 0:c.call(document))==null?void 0:p.toString())!=null?_:""}return{isSupported:f,text:u,copied:d,copy:m}}const T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F="__vueuse_ssr_handlers__";T[F]=T[F]||{};const Je=T[F];function le(e,t){return Je[e]||t}function Ue(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Ke=Object.defineProperty,z=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,H=(e,t,r)=>t in e?Ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,J=(e,t)=>{for(var r in t||(t={}))Ge.call(t,r)&&H(e,r,t[r]);if(z)for(var r of z(t))qe.call(t,r)&&H(e,r,t[r]);return e};const Xe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},U="vueuse-storage";function Ye(e,t,r,n={}){var a;const{flush:o="pre",deep:l=!0,listenToStorageChanges:s=!0,writeDefaults:f=!0,mergeDefaults:u=!1,shallow:d,window:v=C,eventFilter:O,onError:m=i=>{console.error(i)}}=n,g=(d?ge:w)(t);if(!r)try{r=le("getDefaultStorage",()=>{var i;return(i=C)==null?void 0:i.localStorage})()}catch(i){m(i)}if(!r)return g;const h=$(t),c=Ue(h),p=(a=n.serializer)!=null?a:Xe[c],{pause:_,resume:P}=Be(g,()=>S(g.value),{flush:o,deep:l,eventFilter:O});return v&&s&&(D(v,"storage",b),D(v,U,x)),b(),g;function S(i){try{if(i==null)r.removeItem(e);else{const y=p.write(i),E=r.getItem(e);E!==y&&(r.setItem(e,y),v&&v.dispatchEvent(new CustomEvent(U,{detail:{key:e,oldValue:E,newValue:y,storageArea:r}})))}}catch(y){m(y)}}function I(i){const y=i?i.newValue:r.getItem(e);if(y==null)return f&&h!==null&&r.setItem(e,p.write(h)),h;if(!i&&u){const E=p.read(y);return Se(u)?u(E,h):c==="object"&&!Array.isArray(E)?J(J({},h),E):E}else return typeof y!="string"?y:p.read(y)}function x(i){b(i.detail)}function b(i){if(!(i&&i.storageArea!==r)){if(i&&i.key==null){g.value=h;return}if(!(i&&i.key!==e)){_();try{g.value=I(i)}catch(y){m(y)}finally{i?re(P):P()}}}}}function ue(e){return He("(prefers-color-scheme: dark)",e)}var Ze=Object.defineProperty,K=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,G=(e,t,r)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,rt=(e,t)=>{for(var r in t||(t={}))et.call(t,r)&&G(e,r,t[r]);if(K)for(var r of K(t))tt.call(t,r)&&G(e,r,t[r]);return e};function nt(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=C,storage:o,storageKey:l="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:f,emitAuto:u}=e,d=rt({auto:"",light:"light",dark:"dark"},e.modes||{}),v=ue({window:a}),O=j(()=>v.value?"dark":"light"),m=f||(l==null?w(n):Ye(l,n,o,{window:a,listenToStorageChanges:s})),g=j({get(){return m.value==="auto"&&!u?O.value:m.value},set(_){m.value=_}}),h=le("updateHTMLAttrs",(_,P,S)=>{const I=a==null?void 0:a.document.querySelector(_);if(I)if(P==="class"){const x=S.split(/\s/g);Object.values(d).flatMap(b=>(b||"").split(/\s/g)).filter(Boolean).forEach(b=>{x.includes(b)?I.classList.add(b):I.classList.remove(b)})}else I.setAttribute(P,S)});function c(_){var P;const S=_==="auto"?O.value:_;h(t,r,(P=d[S])!=null?P:S)}function p(_){e.onChanged?e.onChanged(_,c):c(_)}return A(g,p,{flush:"post",immediate:!0}),u&&A(O,()=>p(g.value),{flush:"post"}),ae(()=>p(g.value)),g}var at=Object.defineProperty,ot=Object.defineProperties,st=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ut=(e,t)=>{for(var r in t||(t={}))it.call(t,r)&&X(e,r,t[r]);if(q)for(var r of q(t))lt.call(t,r)&&X(e,r,t[r]);return e},ct=(e,t)=>ot(e,st(t));function ft(e={}){const{valueDark:t="dark",valueLight:r="",window:n=C}=e,a=nt(ct(ut({},e),{onChanged:(s,f)=>{var u;e.onChanged?(u=e.onChanged)==null||u.call(e,s==="dark"):f(s)},modes:{dark:t,light:r}})),o=ue({window:n});return j({get(){return a.value==="dark"},set(s){s===o.value?a.value="auto":a.value=s?"dark":"light"}})}var Y;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Y||(Y={}));var pt=Object.defineProperty,Z=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,ee=(e,t,r)=>t in e?pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,mt=(e,t)=>{for(var r in t||(t={}))dt.call(t,r)&&ee(e,r,t[r]);if(Z)for(var r of Z(t))vt.call(t,r)&&ee(e,r,t[r]);return e};const _t={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};mt({linear:Ce},_t);const gt={class:"flex flex-wrap"},yt={class:"text-xs mt-1"},bt=ye({__name:"showAll",setup(e){const t=ft({storageKey:"vitepress-theme-appearance"}),r=j(()=>t.value?"#fff":""),n=["location","notebook","mine","setting","star","close","arrowRight","arrowDown","arrowLeft","arrawUp","circlePlus","circleMinus"];return(a,o)=>{const l=Oe("sh-icon");return M(),R("div",gt,[(M(),R(he,null,we(n,s=>V("div",{class:"bg-black:10 hover:bg-black/20 mr-4 mb-4 dark:bg-white/10 dark:hover:bg-white/20 rounded-md inline-flex justify-center items-center cursor-pointer h-20 w-20 flex-col",key:s},[be(l,{name:s,class:"text-white",size:"2rem",color:r.value},null,8,["name","color"]),V("span",yt,Pe(s),1)])),64))])}}});export{bt as _,wt as a,ht as b,ft as u};