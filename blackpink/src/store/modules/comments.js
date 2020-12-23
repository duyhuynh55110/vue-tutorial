import axios from 'axios'

const comments = {
    namespaced: true,
    state: {
        postComments: [], // List post's comments
    },
    mutations: {
        setPostComments: (state, postComments) => {
            state.postComments = postComments;
        },
    },
    actions: {
        loadPostComments: ({ commit }, id) => {
            axios.get(process.env.VUE_APP_API + "comments/get-post-comments/" + id)
            .then(response => {
                commit('setPostComments', response.data.data);
            });
        },
    }
}

export default comments