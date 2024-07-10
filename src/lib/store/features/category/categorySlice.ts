import { createSlice } from '@reduxjs/toolkit'
import { 
  createCategoryAction, 
//   deleteProductAction, 
//   getProductsAction, 
//   updateProductAction 
} from '../../thunks/categoryAction';

export interface CategoryState {
  categories: any;
//   productsDataLoading: boolean;
}

const initialState: CategoryState = {
    categories: [],
//   productsDataLoading: false,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(createCategoryAction.pending, (state, action)=>{})
    .addCase(createCategoryAction.fulfilled,(state, {payload})=>{
      let getInsertedCategory = (payload.data.data.category);
      state.categories.push(getInsertedCategory);
    })
    .addCase(createCategoryAction.rejected,(state)=>{})
    // ---------- get products
    // .addCase(getProductsAction.pending, (state, action)=>{
    //   state.productsDataLoading = true;
    // })
    // .addCase(getProductsAction.fulfilled, (state, {payload})=>{
    //   state.productsDataLoading = false;
    //   const productsData = payload?.data.data.products;
    //   state.products = productsData;
    // })
    // .addCase(getProductsAction.rejected, (state, action)=>{
    //   state.productsDataLoading = false;
    // })
    // --------- delete
    // .addCase(deleteProductAction.pending, (state, action)=>{
    // })
    // .addCase(deleteProductAction.fulfilled, (state, {payload})=>{
    //   state.products = state.products.filter((product:any) => product._id !== payload);
    // })
    // .addCase(deleteProductAction.rejected, (state, action)=>{
    // })
    // ---------- update
    // .addCase(updateProductAction.pending, (state, action)=>{})
    // .addCase(updateProductAction.fulfilled,(state, {payload})=>{
    //   let getUpdatedProduct = (payload.data.data.product);
    //   const products = state.products;
    //   const getIndex = products.findIndex((product:any) => product._id === getUpdatedProduct._id);      
    //   products[getIndex] = getUpdatedProduct;
    // })
    // .addCase(updateProductAction.rejected,(state)=>{})
  }
})

export default categorySlice.reducer;