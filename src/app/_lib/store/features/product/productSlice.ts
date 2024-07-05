import { createSlice } from '@reduxjs/toolkit'
import { createProductAction } from '../../thunks/productAction';

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
      // console.log(productData);
      state.products = productData;
    })
    .addCase(createProductAction.rejected,(state)=>{})
  }
})

export default productSlice.reducer;