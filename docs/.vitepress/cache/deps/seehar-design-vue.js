import {
  createBaseVNode,
  createElementBlock,
  defineComponent,
  openBlock,
  renderSlot
} from "./chunk-7X7VTB6Z.js";

// node_modules/.pnpm/registry.npmjs.org+seehar-design-vue@0.0.4_vue@3.2.37/node_modules/seehar-design-vue/lib/seehar-design-vue.mjs
var m = defineComponent({
  name: "ShButton"
});
var u = (r, e) => {
  const t = r.__vccOpts || r;
  for (const [a, s] of e)
    t[a] = s;
  return t;
};
var h = { class: "px-4 py-1 rounded cursor-pointer text-sm border border-gray-800/20 active:border-primary/70 focus:border-primary/70 dark:border-white/30 bg-white/0 dark:text-white/80 hover:bg-primary/5 hover:border-primary/60 hover:text-primary dark:hover:bg-primary/5 dark:hover:border-primary/60 dark:hover:text-primary" };
function _(r, e, t, a, s, f) {
  return openBlock(), createElementBlock("button", h, [
    renderSlot(r.$slots, "default")
  ]);
}
var n = u(m, [["render", _]]);
n.install = function(r) {
  return r.component(n.name, n), r;
};
var b = defineComponent({
  name: "ShCard"
});
var v = { class: "rounded border dark:border-white/30 p-3 relative isolate overflow-hidden px-6 lg:px-8" };
var y = createBaseVNode("div", {
  class: "h-full absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl",
  "aria-hidden": "true"
}, [
  createBaseVNode("div", {
    class: "relative h-full w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]",
    style: { "clip-path": `polygon(
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
                    )` }
  })
], -1);
function $(r, e, t, a, s, f) {
  return openBlock(), createElementBlock("div", v, [
    y,
    renderSlot(r.$slots, "default")
  ]);
}
var o = u(b, [["render", $]]);
o.install = function(r) {
  return r.component(o.name, o), r;
};
var x = [n, o];
var g = function(r) {
  x.forEach((e) => {
    r.use(e);
  });
};
var w = {
  install: g
};
export {
  n as Button,
  o as Card,
  w as default
};
//# sourceMappingURL=seehar-design-vue.js.map
