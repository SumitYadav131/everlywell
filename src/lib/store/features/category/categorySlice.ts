import { createSlice } from '@reduxjs/toolkit'
import { 
  createCategoryAction,
  deleteCategoryAction,
  getCategoriesAction,
  updateCategoryAction,
} from '../../thunks/categoryAction';

export interface CategoryState {
  categories: Array<any>;
}

const initialState: CategoryState = {
  categories: [],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(createCategoryAction.fulfilled,(state, {payload})=>{
      let getInsertedCategory = (payload.data.data.category);
      state.categories.push(getInsertedCategory);
    })
    // ---------- get
    .addCase(getCategoriesAction.fulfilled, (state, {payload})=>{
      const categories = payload?.data.data.categories;
      state.categories = categories;
    })
    // --------- delete
    .addCase(deleteCategoryAction.fulfilled, (state, {payload})=>{
      state.categories = state.categories.filter((category: any) => category._id !== payload);
    })
    // ---------- update
    .addCase(updateCategoryAction.fulfilled,(state, {payload})=>{
      let getUpdatedCategory = (payload.data.data.category);
      const categories = state.categories;
      const getIndex = categories.findIndex((category: any) => category._id === getUpdatedCategory._id);      
      categories[getIndex] = getUpdatedCategory;      
    })
  }
})

export default categorySlice.reducer;