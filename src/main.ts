import '@/styles/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { PrimeVuePlugin } from './plugins/primevue'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(router)
app.use(PrimeVuePlugin)
app.use(ToastService)

app.mount('#app')
