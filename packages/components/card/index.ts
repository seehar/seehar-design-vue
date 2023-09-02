import { App } from 'vue'

import Card from './index.vue'

const CardPlugin = {
  install(app: App) {
    app.component(Card.name, Card)
  }
}

export default CardPlugin
