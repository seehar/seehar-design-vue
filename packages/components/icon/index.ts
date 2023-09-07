import { App } from 'vue'

import Icon from './index.vue'

const IconPlugin = {
  install(app: App) {
    app.component(Icon.name, Icon)
  }
}

export default IconPlugin
