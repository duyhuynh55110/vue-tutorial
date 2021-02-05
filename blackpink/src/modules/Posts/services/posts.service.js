import service from "@services/service"

const resource = "posts";

export default {
    // get products
    get: function () {
        return service.get(resource);
    }
}