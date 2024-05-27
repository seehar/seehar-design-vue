import { App } from 'vue'

import Button from './index.vue'

const ButtonPlugin: { install(Vue: App): void; name: string } = {
  install(Vue: App) {
    Vue.component(Button.name, Button)
  },
  name: Button.name
}

export default ButtonPlugin

// Button.install = (Vue: App) => {
//   Vue.component(Button.name, Button)
// }
//
// export default Button
