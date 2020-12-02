import axios from 'axios'

const posts = {
  namespaced: true,
  state: {
    post: null,
    posts: [], // List posts
    popularPosts: [], // List popular posts
  },
  mutations: {
    setPost: (state, post) => {
      state.post = post;
    },
    setPosts: (state, posts) => {
        state.posts = posts;
    },
    setPopularPosts: (state, popularPosts) => {
        state.popularPosts = popularPosts;
    }
  },
  actions: {
    loadPost: ({ commit }, id) => {
        axios.get(process.env.VUE_APP_API + "posts/" + id)
        .then(response => {
          commit('setPost', response.data);
        })
    },
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