(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.SeeharDesign={},t.Vue))})(this,function(t,e){"use strict";const S="",u=e.defineComponent({name:"ShButton"}),l=(n,o)=>{const r=n.__vccOpts||n;for(const[s,d]of o)r[s]=d;return r},p={class:"px-4 py-1 rounded cursor-pointer text-sm border border-gray-800/20"};function _(n,o,r,s,d,B){return e.openBlock(),e.createElementBlock("button",p,[e.renderSlot(n.$slots,"default")])}const i=l(u,[["render",_]]),c={install(n){n.component(i.name,i)}},m=e.defineComponent({name:"ShCard"}),h={class:"rounded border dark:border-white/30 p-3 relative isolate overflow-hidden px-6 lg:px-8"},g=e.createElementVNode("div",{class:"h-full absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl","aria-hidden":"true"},[e.createElementVNode("div",{class:"relative h-full w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]",style:{"clip-path":`polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          )`}})],-1);function $(n,o,r,s,d,B){return e.openBlock(),e.createElementBlock("div",h,[g,e.renderSlot(n.$slots,"default")])}const a=l(m,[["render",$]]),f={install(n){n.component(a.name,a)}},b=[c,f],y=n=>{b.forEach(o=>{o.install(n)})};t.ButtonPlugin=c,t.CardPlugin=f,t.default=y,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
