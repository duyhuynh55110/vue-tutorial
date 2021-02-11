import axios from 'axios'

const baseUrl = process.env.VUE_APP_API + "posts/";

export default {
  namespaced: true,
  state: {
    post: null,
    posts: [], // List posts
    popularPosts: [], // List popular posts
    relatedPosts: [], // List related posts
  },
  mutations: {
    setRelatedPosts: (state, relatedPosts) => {
      state.relatedPosts = relatedPosts;
    },
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
    loadRelatedPosts: ({ commit }, id) => {
      axios.get(baseUrl + "related-posts/" + id)
        .then(response => {
          commit('setRelatedPosts', response.data.data);
        });
    },
    loadPost: ({ commit }, id) => {
      axios.get(baseUrl + id)
        .then(response => {
          commit('setPost', response.data.data);
        })
    },
    loadPosts: ({ commit }) => {
      axios.get(baseUrl, {
        params: {
          sort: "-created_at"
        }
      })
        .then(response => {
          commit('setPosts', response.data.data);
        });
    },
    loadPopularPosts: ({ commit }) => {
      axios.get(baseUrl, {
        params: {
          sort: "-views_count",
          limit: 6,
        }
      })
        .then(response => {
          commit('setPopularPosts', response.data.data);
        });
    }
  },
}