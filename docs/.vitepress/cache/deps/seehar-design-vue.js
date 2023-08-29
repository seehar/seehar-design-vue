import {
  createBaseVNode,
  createElementBlock,
  defineComponent,
  normalizeClass,
  openBlock,
  renderSlot
} from "./chunk-7X7VTB6Z.js";

// node_modules/.pnpm/registry.npmjs.org+seehar-design-vue@0.0.1_vue@3.2.37/node_modules/seehar-design-vue/lib/web-vue.mjs
var m = Array.isArray;
var y = (t) => typeof t == "string";
var b = (t) => t !== null && typeof t == "object";
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
var g = {
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
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
};
var _ = defineComponent({
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
});
var h = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [e, s] of n)
    o[e] = s;
  return o;
};
var S = ["disabled"];
var B = { class: "bg-primary" };
function $(t, n, o, e, s, a) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass([t.classString]),
    disabled: t.disabled || t.loading
  }, [
    createBaseVNode("span", B, [
      renderSlot(t.$slots, "default")
    ])
  ], 10, S);
}
var i = h(_, [["render", $]]);
i.install = function(t) {
  return t.component(i.name, i), t;
};
var w = [i];
var j = function(t) {
  w.forEach((n) => {
    t.use(n);
  });
};
var A = {
  install: j
};
export {
  i as Button,
  A as default
};
//# sourceMappingURL=seehar-design-vue.js.map
