import { defineComponent as l, openBlock as d, createElementBlock as i, renderSlot as p, createElementVNode as s } from "vue";
const _ = l({
  name: "ShButton"
  // props: Props
}), u = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, r] of t)
    e[o] = r;
  return e;
}, m = { class: "px-4 py-1 rounded cursor-pointer text-sm border border-gray-800/20" };
function h(n, t, e, o, r, f) {
  return d(), i("button", m, [
    p(n.$slots, "default")
  ]);
}
const a = /* @__PURE__ */ u(_, [["render", h]]), $ = {
  install(n) {
    n.component(a.name, a);
  }
}, g = l({
  name: "ShCard"
}), b = { class: "rounded border dark:border-white/30 p-3 relative isolate overflow-hidden px-6 lg:px-8" }, v = /* @__PURE__ */ s("div", {
  class: "h-full absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ s("div", {
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
function x(n, t, e, o, r, f) {
  return d(), i("div", b, [
    v,
    p(n.$slots, "default")
  ]);
}
const c = /* @__PURE__ */ u(g, [["render", x]]), w = {
  install(n) {
    n.component(c.name, c);
  }
}, y = [$, w], k = (n) => {
  y.forEach((t) => {
    t.install(n);
  });
};
export {
  $ as ButtonPlugin,
  w as CardPlugin,
  k as default
};
