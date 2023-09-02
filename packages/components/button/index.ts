import { App } from 'vue'

import Button from './index.vue'

const ButtonPlugin = {
  install(app: App) {
    app.component(Button.name, Button)
  }
}

export default ButtonPlugin
