/**
 * 导出所有组件
 */
import ButtonPlugin from './components/button/index'
import CardPlugin from './components/card/index'
// import fullTheme from './theme/full'
import { App } from 'vue'

export default [ButtonPlugin, CardPlugin]

export { ButtonPlugin, CardPlugin }

export const components: Record<string, { install(Vue: App): void; name: string }> = {
  ButtonPlugin,
  CardPlugin
}
