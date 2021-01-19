import axios from "axios";

class CommentsService {
    async getCommentsReply(reply_id) {
        return await axios.get(process.env.VUE_APP_API + "comments/get-comments-reply/" + reply_id);
    }
}

export default new CommentsService();