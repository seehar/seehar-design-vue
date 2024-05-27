import { App } from 'vue'

import Icon from './index.vue'

const IconPlugin: { install(Vue: App): void; name: string } = {
  install(Vue: App) {
    Vue.component(Icon.name, Icon)
  },
  name: Icon.name
}

export default IconPlugin
