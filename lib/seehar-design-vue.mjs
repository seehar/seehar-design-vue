import { defineComponent as i, openBlock as c, createElementBlock as l, renderSlot as p, createElementVNode as d } from "vue";
const m = i({
  name: "ShButton"
}), u = (r, e) => {
  const t = r.__vccOpts || r;
  for (const [a, s] of e)
    t[a] = s;
  return t;
}, h = { class: "px-4 py-1 rounded cursor-pointer text-sm border border-gray-800/20 active:border-primary/70 focus:border-primary/70 dark:border-white/30 bg-white/0 dark:text-white/80 hover:bg-primary/5 hover:border-primary/60 hover:text-primary dark:hover:bg-primary/5 dark:hover:border-primary/60 dark:hover:text-primary" };
function _(r, e, t, a, s, f) {
  return c(), l("button", h, [
    p(r.$slots, "default")
  ]);
}
const n = /* @__PURE__ */ u(m, [["render", _]]);
n.install = function(r) {
  return r.component(n.name, n), r;
};
const b = i({
  name: "ShCard"
}), v = { class: "rounded border dark:border-white/30 p-3 relative isolate overflow-hidden px-6 lg:px-8" }, y = /* @__PURE__ */ d("div", {
  class: "h-full absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ d("div", {
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
  return c(), l("div", v, [
    y,
    p(r.$slots, "default")
  ]);
}
const o = /* @__PURE__ */ u(b, [["render", $]]);
o.install = function(r) {
  return r.component(o.name, o), r;
};
const x = [n, o], g = function(r) {
  x.forEach((e) => {
    r.use(e);
  });
}, w = {
  install: g
};
export {
  n as Button,
  o as Card,
  w as default
};
