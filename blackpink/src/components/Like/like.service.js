import axios from "axios";

const url = process.env.VUE_APP_API + "likes";
class LikeService {
    storeLike(like) {
        return axios.post(url, like);
    }
}

export default new LikeService();