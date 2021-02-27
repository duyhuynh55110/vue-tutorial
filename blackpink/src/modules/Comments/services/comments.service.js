import service from "@services/service"

const resource = "comments";
export default {
    // Add newly comment
    store(comment) {
        return service.post(resource, comment);
    },
    
    // load comments data & paginate
    get(id, { page = 1, reply_id = null } = {}) {
        return service.get(`${resource}/${id}`, {
            params: {
                page: page,
                ...(reply_id) && {reply_id: reply_id}
            }
        });
    }
};