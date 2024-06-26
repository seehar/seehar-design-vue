/**
 * @Author: seehar
 * @Date: 2022/7/23 21:25
 * @Description: 主题配置
 */
import DefaultTheme from 'vitepress/theme'
import '../vitepress/style/tailwind.css'

import { VPDemo } from '../vitepress'
import type { EnhanceAppContext } from "vitepress";

// console.log(import.meta.env)
console.log(
  '%c seehar love tt forever ',
  'padding: 1px; border-radius: 3px; color: #fff; background: #ff2d51'
)

// 版本及打包日期
console.log(
  `%c Version %c ${import.meta.env.DOC_VERSION}`,
  'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060',
  'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2'
)
console.log(
  `%c BuildTime %c ${import.meta.env.DOC_BUILD_TIME}`,
  'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060',
  'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2'
)

export default {
  extends: DefaultTheme, // 默认主题
  enhanceApp: async (ctx: EnhanceAppContext) => {
    const {app} = ctx
    app.component("demo", VPDemo)
    DefaultTheme.enhanceApp(ctx)

    // const SeeharDesign = await import("../../../packages//index")
    const SeeharDesign = await import("seehar-design-vue")
    const fullTheme = await import("../../../packages/theme/full")
    // const fullTheme = await import("seehar-design-vue/lib/theme/full")
    app.use(SeeharDesign.default, fullTheme.default)

    // const SeeharDesign = await import("seehar-design-vue")
    // const fullTheme = await import("seehar-design-vue/lib/theme/full")
    // app.use(SeeharDesign.default, fullTheme)
    // if (import.meta.env.MODE === "development") {
    //   // const SeeharDesign = await import("../../../packages/index")
    //   const SeeharDesign = await import("../../../lib/seehar-design-vue.mjs")
    //   const fullTheme = await import("../../../lib/theme/full")
    //   app.use(SeeharDesign.default, fullTheme.default)
    // } else {
    //   const SeeharDesign = await import("seehar-design-vue")
    //   const fullTheme = await import("seehar-design-vue/lib/theme/full")
    //   app.use(SeeharDesign.default, fullTheme.default)
    // }
  }
}
