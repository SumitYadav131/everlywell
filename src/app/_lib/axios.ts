import Axios from "axios";

// import { getCookie } from 'cookies-next';
// const token = getCookie('jwt');

// import Cookies from "js-cookie";
// const token = Cookies.get("jwt");

// Axios.interceptors.request.use(
//     (config) => {
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         Promise.reject(error);
//     }
// );

const axios = Axios.create({
    baseURL: process.env.BACKEND_URL,
    headers:{
        'X-Requested-With':'XMLHttpRequest',
        'Content-Type':"application/json",
        'Accept': "application/json",
    },
    withCredentials:true
})
export default axios;