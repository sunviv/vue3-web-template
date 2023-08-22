import { createApp } from 'vue'
// import 'animate.css'
import 'virtual:windi.css'
import 'virtual:svg-icons-register'
// import './styles/css/global.scss'

import { setupRouter } from '@/router'
import { setupStore } from './store'
import App from './App.vue'




async function setupApp() {
  const app = createApp(App)

  setupStore(app)


  await setupRouter(app)
  app.mount('#app')
}

setupApp()