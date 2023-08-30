import {
  createElementBlock,
  defineComponent,
  openBlock,
  renderSlot
} from "./chunk-7X7VTB6Z.js";

// node_modules/.pnpm/registry.npmjs.org+seehar-design-vue@0.0.2_vue@3.2.37/node_modules/seehar-design-vue/lib/web-vue.mjs
var f = defineComponent({
  name: "ShButton"
});
var l = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [s, c] of n)
    o[s] = c;
  return o;
};
var _ = { class: "bg-primary px-2 py-1 rounded text-white border-0 cursor-pointer hover:opacity-90 shadow" };
function m(t, n, o, s, c, p) {
  return openBlock(), createElementBlock("button", _, [
    renderSlot(t.$slots, "default")
  ]);
}
var e = l(f, [["render", m]]);
e.install = function(t) {
  return t.component(e.name, e), t;
};
var $ = defineComponent({
  name: "ShCard"
});
var h = { class: "rounded border p-3 bg-gradient-to-tr from-white to-blue-600" };
function b(t, n, o, s, c, p) {
  return openBlock(), createElementBlock("div", h, [
    renderSlot(t.$slots, "default")
  ]);
}
var r = l($, [["render", b]]);
r.install = function(t) {
  return t.component(r.name, r), t;
};
var x = [e, r];
var g = function(t) {
  x.forEach((n) => {
    t.use(n);
  });
};
var w = {
  install: g
};
export {
  e as Button,
  r as Card,
  w as default
};
//# sourceMappingURL=seehar-design-vue.js.map
