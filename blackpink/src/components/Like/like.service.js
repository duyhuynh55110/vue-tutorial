import service from "@services/service"
const resource = "likes";

export default {
    // store newly like to database
    storeLike(like) {
        return service.post(resource, like);
    }
}