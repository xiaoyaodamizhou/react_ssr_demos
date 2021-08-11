import axios from "axios";

const instance = axios.create({
    baseURL: 'http://49.235.72.243:3001',
})

export default instance
