import axios from 'axios'

const baseUrl = process.env.VUE_APP_API 

export default axios.create({
    baseUrl,
    // header: {'Authorization': 'Bearer ...'}
})