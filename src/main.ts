import { createApp } from 'vue'

import App from './App.vue'
import SeeharDesign from 'seehar-design-vue' // 本地开发
import './assets/css/tailwind.css'

const app = createApp(App)

app.use(SeeharDesign)

app.mount('#app')
