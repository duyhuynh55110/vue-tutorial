class Utils {
    async responsePaginate(fetch) {
        const { data: response } = await fetch;
        const {["data"]: data, ...meta} = response;
        
        return {
            data,
            meta,
        }
    } 
} 

export default new Utils()