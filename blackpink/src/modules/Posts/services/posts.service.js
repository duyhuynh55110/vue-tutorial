import service from "@services/service"
import { PER_PAGE_10 } from "@/common";

const resource = "posts";

export default {
    // get products
    get: function ({page = 1, limit = PER_PAGE_10} = {}) {
        return service.get(resource, {
            params: {
                page: page,
                limit: limit
            }
        });
    }
}