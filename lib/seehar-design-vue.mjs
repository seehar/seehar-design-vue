import { defineComponent as o, openBlock as r, createElementBlock as s, normalizeClass as a, renderSlot as l, createElementVNode as p, toDisplayString as c } from "vue";
const i = {
  name: "ShButton"
}, n = /* @__PURE__ */ o({
  ...i,
  props: {
    type: {}
  },
  setup(t) {
    return (e, d) => (r(), s("button", {
      class: a(["border rounded px-2 py-1", e.type === "primary" ? "bg-primary text-white" : ""])
    }, [
      l(e.$slots, "default"),
      p("span", null, c(e.type), 1)
    ], 2));
  }
}), m = {
  install(t) {
    t.component(n.name, n);
  }
}, u = [m], y = (t) => {
  u.forEach((e) => {
    e.install(t);
  });
};
export {
  m as ButtonPlugin,
  y as default
};
