import Axios from "axios";
import { getCookie } from 'cookies-next';


Axios.interceptors.request.use(
    (config) => {
        // let cookieArr = document.cookie.split(";");
        // let token = '';
        // for(let i = 0; i < cookieArr.length; i++) {
        //     let cookiePair = cookieArr[i].split("=");
        //     if("jwt" == cookiePair[0].trim()) {
        //         token = decodeURIComponent(cookiePair[1]);
        //     }
        // }
        // const token = getCookie('jwt');
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
        'Content-Type':"application/json",
        'Accept': "application/json",
    },
    withCredentials:true
})
export default axios;