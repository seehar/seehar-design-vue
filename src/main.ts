import { createApp } from 'vue'

import App from './App.vue'
import SeeharDesign from 'seehar-design-vue' // 本地开发
import './assets/css/tailwind.css'
import fullTheme from '../packages/theme/full'

const app = createApp(App)

app.use(SeeharDesign, fullTheme)

app.mount('#app')
