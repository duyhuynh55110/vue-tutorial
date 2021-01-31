import axios from "axios"

const url = process.env.VUE_APP_API + "comments";
class CommentsService {
    // Add newly comment
    store(comment) {
        return axios.post(url, comment);
    }

    // load comments data & paginate
    get(id, { page = 1, reply_id = null } = {}) {
        return axios.get(url + "/get-comments/" + id, {
            params: {
                page: page,
                ...(reply_id) && {reply_id: reply_id}
            }
        });
    }
}

export default new CommentsService();