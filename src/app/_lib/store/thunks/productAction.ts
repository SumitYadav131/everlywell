import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/app/_lib/axios';
import { setFormDialogOpen } from '../features/dialog/formDialogSlice';
import { setTaskLoader } from '../features/loader/loaderSlice';

export const createProductAction = createAsyncThunk('createProduct',async(data:any, thunkAPI)=>{
    const result = axios.post('api/products', data);

    result.then((data)=>{
        thunkAPI.dispatch(setFormDialogOpen({isOpen: false, title: ""}));
        thunkAPI.dispatch(setTaskLoader(false));
    },(error)=>{
        thunkAPI.dispatch(setTaskLoader(false));
    })

    return result;
})