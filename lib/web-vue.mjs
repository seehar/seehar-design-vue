import { defineComponent as r, openBlock as c, createElementBlock as d, normalizeClass as f, createElementVNode as u, renderSlot as p } from "vue";
const m = Array.isArray, y = (t) => typeof t == "string", b = (t) => t !== null && typeof t == "object";
function l(...t) {
  const n = [];
  for (let o = 0; o < t.length; o++) {
    const e = t[o];
    if (!!e) {
      if (y(e))
        n.push(e);
      else if (m(e))
        for (let s = 0; s < e.length; s++) {
          const a = l(e[s]);
          a && n.push(a);
        }
      else if (b(e))
        for (const s in e)
          e[s] && n.push(s);
    }
  }
  return n.join(" ");
}
const g = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "md"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  }
}, _ = r({
  name: "WeButton",
  props: g,
  setup(t) {
    return {
      classString: l([
        "we-button",
        `we-button-type-${t.type}`,
        t.disabled ? "we-button-disabled" : ""
      ])
    };
  }
}), h = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [e, s] of n)
    o[e] = s;
  return o;
}, S = ["disabled"], B = { class: "bg-primary" };
function $(t, n, o, e, s, a) {
  return c(), d("button", {
    class: f([t.classString]),
    disabled: t.disabled || t.loading
  }, [
    u("span", B, [
      p(t.$slots, "default")
    ])
  ], 10, S);
}
const i = /* @__PURE__ */ h(_, [["render", $]]);
i.install = function(t) {
  return t.component(i.name, i), t;
};
const w = [i], j = function(t) {
  w.forEach((n) => {
    t.use(n);
  });
}, A = {
  install: j
};
export {
  i as Button,
  A as default
};
