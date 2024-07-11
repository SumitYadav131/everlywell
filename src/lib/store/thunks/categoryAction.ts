import { createAsyncThunk } from '@reduxjs/toolkit';
import { 
    creactPostRequest,
    updatePutRequest,
    getDataRequest,
    deleteRecordRequest
} from './commonAction';
import { 
    getCreateResponse, 
    getDeletedDataResponse, 
    getDataResponse, 
    getUpdatedRecordResponse
} from './getPromise';


export const createCategoryAction = createAsyncThunk(
    'category/createCategory',
    async(data: FormData, thunkAPI)=>{
    const result = creactPostRequest('api/categories', data);
    
    getCreateResponse(result, thunkAPI);
    return result;
});

export const getCategoriesAction = createAsyncThunk(
    "category/getCategories",
    async (_, thunkAPI) => {
        try {
            const result = getDataRequest('api/categories');
            getDataResponse(result, thunkAPI);
            return result;
        } catch (err) {
        }
    }
);

export const deleteCategoryAction = createAsyncThunk(
    "category/deleteCategory",
    async (id: string, thunkAPI) => {
        try {
            const result = deleteRecordRequest('api/categories/'+ id);
            getDeletedDataResponse(result, thunkAPI);
            return id;
        } catch (err) {
        }
    }
);

export const updateCategoryAction = createAsyncThunk(
    'category/updateCategory',
    async(data: FormData, thunkAPI)=>{
    const id = data.get("id");
    const result = updatePutRequest('api/categories/'+id, data);
    getUpdatedRecordResponse(result, thunkAPI);
    return result;
});