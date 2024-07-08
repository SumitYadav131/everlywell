import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/app/_lib/axios';
import { setFormDialogOpen } from '../features/dialog/formDialogSlice';
import { setTaskLoader } from '../features/loader/loaderSlice';
import { setNotification } from '../features/notification/notificationSlice';

export const createProductAction = createAsyncThunk('product/createProduct',async(data:any, thunkAPI)=>{
    const result = axios.post('api/products', data);
    result.then((response)=>{
        thunkAPI.dispatch(setFormDialogOpen({isOpen: false, title: ""}));
        thunkAPI.dispatch(setTaskLoader(false));

        thunkAPI.dispatch(setNotification({
            isOpenSnackbar: true, 
            messageText:'Product saved successfully.',
            getSeverity: 'success'
        }))
    },(error)=>{
        thunkAPI.dispatch(setTaskLoader(false));

        // error notification
        thunkAPI.dispatch(setNotification({
            isOpenSnackbar: true, 
            messageText:'Product could not be saved!', 
            getSeverity: 'error'
        }))
    })
    return result;
});

export const getProductsAction = createAsyncThunk(
    "product/getProducts",
    async (data:any,thunkAPI) => {
        try {            
            const result = axios.get('api/products');

            result.then((res)=>{
            },(err)=>{
                thunkAPI.dispatch(setNotification({
                    isOpenSnackbar: true, 
                    messageText: err.message,
                    getSeverity: 'error'
                }))
            })

            return result;
        } catch (err) {
        }
    }
);

export const deleteProductsAction = createAsyncThunk(
    "product/deleteProduct",
    async (data:any, thunkAPI) => {
        try {            
            const result = axios.delete('api/products/'+ data.id);

            result.then((res)=>{
                thunkAPI.dispatch(setNotification({
                    isOpenSnackbar: true, 
                    messageText:'Product deleted successfully.',
                    getSeverity: 'success'
                }))
            },(err)=>{
                thunkAPI.dispatch(setNotification({
                    isOpenSnackbar: true, 
                    messageText: err.message,
                    getSeverity: 'error'
                }))
            })

            return result;
        } catch (err) {
        }
    }
);