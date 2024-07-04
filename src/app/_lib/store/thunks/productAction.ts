import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/app/_lib/axios';

export const createProductAction = createAsyncThunk('createProduct',async(data:any)=>{
    const result = axios.post('api/products', data);    
    return result;
})