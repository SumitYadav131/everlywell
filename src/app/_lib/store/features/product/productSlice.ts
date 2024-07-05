import { createSlice } from '@reduxjs/toolkit'
import { createProductAction, getProductsAction } from '../../thunks/productAction';

// export interface AuthUserState {
//   authUser:{
//     id:string,
//     name:string,
//     email:string,
//     role:string,
//     passwordChangedAt:string,
//     status:string,
//     token:string,
//   };
// }

const initialState = {
  products: {},
  productsDataLoading: false,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(createProductAction.pending, (state, action)=>{})
    .addCase(createProductAction.fulfilled,(state, {payload})=>{
      const productData = payload.data;
      state.products = productData;
    })
    .addCase(createProductAction.rejected,(state)=>{})

    .addCase(getProductsAction.pending, (state, action)=>{
      state.productsDataLoading = true;
    })
    .addCase(getProductsAction.fulfilled, (state, {payload})=>{
      state.productsDataLoading = false;
      const productsData = payload?.data.data.products;
      state.products = productsData;
    })
    .addCase(getProductsAction.rejected, (state, action)=>{
      state.productsDataLoading = false;
    })
  }
})

export default productSlice.reducer;