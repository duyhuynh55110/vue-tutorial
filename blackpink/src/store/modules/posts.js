import axios from 'axios'

const posts = {
  namespaced: true,
  state: {
    posts: [], // List posts
    popularPosts: [], // List popular posts
  },
  mutations: {
    setPosts: (state, posts) => {
        state.posts = posts;
    },
    setPopularPosts: (state, popularPosts) => {
        state.popularPosts = popularPosts;
    }
  },
  actions: {
    loadPosts: ({ commit }) => {
        axios.get(process.env.VUE_APP_API + "posts")
        .then(response => {
            commit('setPosts', response.data.data);
        });
    },
    loadPopularPosts: ({ commit }) => {
      axios.get(process.env.VUE_APP_API + "posts/get-popular-posts")
      .then(response => {
          commit('setPopularPosts', response.data);
      });
    }
  },
}

export default posts