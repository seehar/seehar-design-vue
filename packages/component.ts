/**
 * 导出所有组件
 */
import ButtonPlugin from './components/button/index'
import CardPlugin from './components/card/index'
import IconPlugin from './components/icon/index'
import { App } from 'vue'

export default [ButtonPlugin, CardPlugin, IconPlugin]

export { ButtonPlugin, CardPlugin, IconPlugin }

export const components: Record<string, { install(Vue: App): void; name: string }> = {
  ButtonPlugin,
  CardPlugin,
  IconPlugin
}
