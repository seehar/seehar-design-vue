import { App } from 'vue'

import Button from './button'

const ButtonPlugin: { install(Vue: App): void; name: string } = {
  install(Vue: App) {
    Vue.component(Button.name, Button)
  },
  name: Button.name
}

export default ButtonPlugin
