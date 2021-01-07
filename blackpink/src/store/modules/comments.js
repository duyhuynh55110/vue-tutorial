import axios from 'axios'

const comments = {
    namespaced: true,
    state: {
        comments: [], // List post's comments
        commentsMeta: null, // meta to paginate, summary... comments
    },
    mutations: {
        setCommentsMeta: (state, commentsMeta) => {
            state.commentsMeta = commentsMeta;
        },
        setComments: (state, comments) => {
            state.comments = comments;
        },
    },
    actions: {
        loadComments: ({ commit, state }, {id, loadPage = 1}) => {
            axios.get(process.env.VUE_APP_API + "comments/get-comments/" + id + "?page=" + loadPage)
            .then(response => {
                const { ["data"]: responseData, ...responseMeta } = response.data;      
                commit('setComments', (loadPage > 1)? [...state.comments, ...responseData]: responseData);
                commit('setCommentsMeta', responseMeta);
            });
        },
    }
}

export default comments