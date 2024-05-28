/**
 * @Author: seehar
 * @Date: 2022/7/17 15:48
 * @Description: 组件入口
 */
import { App } from 'vue'
// import './assets/css/tailwind.css'
export * from './component'
import { components } from './component'
import { SeeharUIConfiguration } from './types/variant'

const SeeharDesign = (Vue: App, configuration: SeeharUIConfiguration): void => {
  for (const component in components) {
    components[component].install(Vue)
  }
  Vue.config.globalProperties.$Seehar = {
    drawers: [],
    modals: []
  }

  Vue.provide('config', configuration)
}

export default SeeharDesign
