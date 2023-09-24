import { App } from 'vue'

import Button from './index.vue'

const ButtonPlugin = {
  install(Vue: App) {
    Vue.component(Button.name, Button)
  }
}

export default ButtonPlugin
