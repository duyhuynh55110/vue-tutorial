import service from "@services/service"

const resource = "posts";

export default {
    // get products
    get: function ({page = 1} = {}) {
        return service.get(resource, {
            params: {
                page: page
            }
        });
    }
}