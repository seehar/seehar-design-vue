import {
  createElementBlock,
  defineComponent,
  normalizeClass,
  openBlock,
  renderSlot
} from "./chunk-7X7VTB6Z.js";

// node_modules/.pnpm/seehar-design-vue@0.0.6_vue@3.2.37/node_modules/seehar-design-vue/lib/seehar-design-vue.mjs
var _ = {
  name: "ShButton"
};
var s = defineComponent({
  ..._,
  props: {
    type: {}
  },
  setup(t) {
    return (n, e) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(["border rounded px-2 py-1", n.type === "primary" ? "bg-primary text-white" : ""])
    }, [
      renderSlot(n.$slots, "default")
    ], 2));
  }
});
var u = {
  install(t) {
    t.component(s.name, s);
  }
};
var m = {
  name: "ShCard"
};
var f = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, r] of n)
    e[o] = r;
  return e;
};
var h = { class: "border rounded p-3 dark:border-white/30" };
function $(t, n, e, o, r, g) {
  return openBlock(), createElementBlock("div", h, [
    renderSlot(t.$slots, "default")
  ]);
}
var a = f(m, [["render", $]]);
var y = {
  install(t) {
    t.component(a.name, a);
  }
};
var b = [u, y];
var k = (t) => {
  b.forEach((n) => {
    n.install(t);
  });
};
export {
  u as ButtonPlugin,
  y as CardPlugin,
  k as default
};
//# sourceMappingURL=seehar-design-vue.js.map
