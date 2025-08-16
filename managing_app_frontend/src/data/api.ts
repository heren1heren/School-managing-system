// api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', // change to your API base
    withCredentials: true // send cookies with every request
});

export default api;