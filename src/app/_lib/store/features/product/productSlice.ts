import { createSlice } from '@reduxjs/toolkit'
import { createProductAction } from '../../thunks/auth/productAction';

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

export const authSlice = createSlice({
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
    .addCase(createProductAction.rejected,(state)=>{
      // 
    })
  }
})

export default authSlice.reducer;