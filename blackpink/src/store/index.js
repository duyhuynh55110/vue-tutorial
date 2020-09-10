import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    posts: [], // List post
  },
  mutations: {
    setPosts: (state, posts) => {
        state.posts = posts;
    }
  },
  actions: {
    loadPosts: ({ commit }) => {
        axios.get(process.env.VUE_APP_API + "posts")
        .then(response => {
            commit('setPosts', response.data.data);
        });
    }
  },
  modules: {
    
  }
})
