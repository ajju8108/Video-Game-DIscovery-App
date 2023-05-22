import axios from "axios";
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '66c9397b3ac24909a7129f6d1bae89a6'
    }
})