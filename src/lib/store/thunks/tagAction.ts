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

// create
export const createTagAction = createAsyncThunk(
    'tag/createTag',
    async(data: FormData, thunkAPI)=>{
    const result = creactPostRequest('api/tags', data);
    
    getCreateResponse(result, thunkAPI);
    return result;
});

// get tags
export const getTagsAction = createAsyncThunk(
    "tag/getTags",
    async (_, thunkAPI) => {
        try {
            const result = getDataRequest('api/tags');
            getDataResponse(result, thunkAPI);
            return result;
        } catch (err) {
        }
    }
);

// delete
export const deleteTagAction = createAsyncThunk(
    "tag/deleteTag",
    async (id: string, thunkAPI) => {
        try {
            const result = deleteRecordRequest('api/tags/'+ id);
            getDeletedDataResponse(result, thunkAPI);
            return id;
        } catch (err) {
        }
    }
);

// update
export const updateTagAction = createAsyncThunk(
    'tag/updateTag',
    async(data: FormData, thunkAPI)=>{
    const id = data.get("id");
    const result = updatePutRequest('api/tags/' + id, data);
    getUpdatedRecordResponse(result, thunkAPI);
    return result;
});