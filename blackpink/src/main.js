import Vue from 'vue'
import App from './App.vue'
import router from './router'

// fortawesome
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// styles
import "./scss/styles.scss"

import moment from "moment"
import store from './store'

Vue.config.productionTip = false

Vue.use(moment)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
