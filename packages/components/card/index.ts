import { App } from 'vue'

import Card from './card'

const CardPlugin: { install(Vue: App): void; name: string } = {
  install(Vue: App) {
    Vue.component(Card.name, Card)
  },
  name: Card.name
}

export default CardPlugin
