import { App } from 'vue'

import Icon from './index.vue'

const IconPlugin = {
  install(Vue: App) {
    Vue.component(Icon.name, Icon)
  }
}

export default IconPlugin
