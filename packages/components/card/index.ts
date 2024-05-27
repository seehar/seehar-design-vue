import { App } from 'vue'

import Card from './index.vue'

const CardPlugin: { install(Vue: App): void; name: string } = {
  install(Vue: App) {
    Vue.component(Card.name, Card)
  },
  name: Card.name
}

export default CardPlugin
