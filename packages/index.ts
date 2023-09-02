/**
 * @Author: seehar
 * @Date: 2022/7/17 15:48
 * @Description: 组件入口
 */
import { App } from 'vue'
import './assets/css/tailwind.css'
export * from './component'
import components from './component'

const SeeharDesign = (app: App): void => {
  components.forEach(component => {
    component.install(app)
  })
}

export default SeeharDesign
