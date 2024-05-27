import { createApp } from 'vue'

import App from './App.vue'
import install from 'seehar-design-vue' // 本地开发
import './assets/css/tailwind.css'
import lightTheme from '../packages/theme/light'

const app = createApp(App)

app.use(install, lightTheme)

app.mount('#app')
