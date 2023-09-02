import { defineComponent as d, openBlock as c, createElementBlock as p, normalizeClass as i, renderSlot as l } from "vue";
const _ = {
  name: "ShButton"
}, s = /* @__PURE__ */ d({
  ..._,
  props: {
    type: {}
  },
  setup(t) {
    return (n, e) => (c(), p("button", {
      class: i(["border rounded px-2 py-1", n.type === "primary" ? "bg-primary text-white" : ""])
    }, [
      l(n.$slots, "default")
    ], 2));
  }
}), u = {
  install(t) {
    t.component(s.name, s);
  }
}, m = {
  name: "ShCard"
}, f = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, r] of n)
    e[o] = r;
  return e;
}, h = { class: "border rounded p-3 dark:border-white/30" };
function $(t, n, e, o, r, g) {
  return c(), p("div", h, [
    l(t.$slots, "default")
  ]);
}
const a = /* @__PURE__ */ f(m, [["render", $]]), y = {
  install(t) {
    t.component(a.name, a);
  }
}, b = [u, y], k = (t) => {
  b.forEach((n) => {
    n.install(t);
  });
};
export {
  u as ButtonPlugin,
  y as CardPlugin,
  k as default
};
