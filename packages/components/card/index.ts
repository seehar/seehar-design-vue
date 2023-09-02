import { App } from 'vue'

import Card from './src/index.vue'

const CardPlugin = {
  install(app: App) {
    app.component(Card.name, Card)
  }
}

export default CardPlugin
