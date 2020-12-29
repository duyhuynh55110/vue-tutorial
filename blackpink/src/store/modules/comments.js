import axios from 'axios'

const comments = {
    namespaced: true,
    state: {
        postComments: [], // List post's comments
        postCommentsMeta: null, // meta to paginate, summary... comments
    },
    mutations: {
        setPostCommentsMeta: (state, postCommentsMeta) => {
            state.postCommentsMeta = postCommentsMeta;
        },
        setPostComments: (state, postComments) => {
            state.postComments = postComments;
        },
    },
    actions: {
        loadPostComments: ({ commit, state }, {id, loadPage = 1}) => {
            axios.get(process.env.VUE_APP_API + "comments/get-post-comments/" + id + "?page=" + loadPage)
            .then(response => {
                const { ["data"]: responseData, ...responseMeta } = response.data;      
                commit('setPostComments', (loadPage > 1)? [...state.postComments, ...responseData]: responseData);
                commit('setPostCommentsMeta', responseMeta);
            });
        },
    }
}

export default comments