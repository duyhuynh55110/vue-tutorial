import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Modules
import posts from "./modules/posts.js"

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  modules: {
      posts,
  }
})
