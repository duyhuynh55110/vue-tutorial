import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//styles
import "./scss/styles.scss"

createApp(App)
.use(router)
.mount('#app')
