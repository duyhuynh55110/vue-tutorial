import Vue from 'vue'
import App from './App.vue'
import router from './router'

//styles
import "./scss/styles.scss"

import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
