import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/tailwind.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
