// import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ViteSSG } from 'vite-ssg/single-page'
// import { createHead } from '@unhead/vue/server'



// createApp(App).mount('#app')

export const createApp = ViteSSG(App)
