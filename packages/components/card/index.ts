import { App } from 'vue'

import Card from './index.vue'

const CardPlugin = {
  install(Vue: App) {
    Vue.component(Card.name, Card)
  }
}

export default CardPlugin
