(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.SeeharDesignVue={},t.Vue))})(this,function(t,e){"use strict";const g="",l=e.defineComponent({name:"ShButton"}),c=(n,i)=>{const d=n.__vccOpts||n;for(const[s,a]of i)d[s]=a;return d},f={class:"px-4 py-1 rounded cursor-pointer text-sm border border-gray-800/20 active:border-primary/70 focus:border-primary/70 dark:border-white/30 bg-white/0 dark:text-white/80 hover:bg-primary/5 hover:border-primary/60 hover:text-primary dark:hover:bg-primary/5 dark:hover:border-primary/60 dark:hover:text-primary"};function u(n,i,d,s,a,$){return e.openBlock(),e.createElementBlock("button",f,[e.renderSlot(n.$slots,"default")])}const r=c(l,[["render",u]]);r.install=function(n){return n.component(r.name,r),n};const p=e.defineComponent({name:"ShCard"}),m={class:"rounded border dark:border-white/30 p-3 relative isolate overflow-hidden px-6 lg:px-8"},h=e.createElementVNode("div",{class:"h-full absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl","aria-hidden":"true"},[e.createElementVNode("div",{class:"relative h-full w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]",style:{"clip-path":`polygon(
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
                    )`}})],-1);function _(n,i,d,s,a,$){return e.openBlock(),e.createElementBlock("div",m,[h,e.renderSlot(n.$slots,"default")])}const o=c(p,[["render",_]]);o.install=function(n){return n.component(o.name,o),n};const b=[r,o],y={install:function(n){b.forEach(i=>{n.use(i)})}};t.Button=r,t.Card=o,t.default=y,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
