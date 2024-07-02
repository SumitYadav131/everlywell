import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '@/app/_lib/axios';

import Cookies from "js-cookie";

import { CookiesProvider, useCookies } from 'react-cookie'
// import { getCookie } from 'cookies-next';
// import { cookies } from "next/headers";
// const cookieStore = cookies();
// const token = cookieStore.get("jwt");
// const token = getCookie('jwt');
// const token = Cookies.get("jwt");
// Cookies.set('language', "language");
const getLanguageCookie = () => {
    // return Cookies.get("language");
    return Cookies.get("jwt");
};
const language = getLanguageCookie();
console.log(language);

export const createProductAction = createAsyncThunk('createProduct',async(data:any)=>{
    const result = axios.post('api/movies', data, {
        headers: {
          'Authorization': `Bearer ff` 
        }});
    return result;
})