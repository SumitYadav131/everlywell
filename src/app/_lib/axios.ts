import Axios from "axios";

Axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

const axios = Axios.create({
    baseURL: process.env.BACKEND_URL,
    headers:{
        'X-Requested-With':'XMLHttpRequest',
        // 'Content-Type':"application/json",
    },
    withCredentials:true
})
export default axios;