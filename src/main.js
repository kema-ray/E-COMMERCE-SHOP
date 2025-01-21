import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')