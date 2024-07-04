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
  taskLoader:false,
  isDialogOpen: false,
  dialogTitle:'',
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setDialogState:(state, action)=>{
      state.isDialogOpen = action.payload.isOpen;
      state.dialogTitle = action.payload.title;
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(createProductAction.pending, (state, action)=>{
      state.taskLoader = true;
    })
    .addCase(createProductAction.fulfilled,(state, {payload})=>{
      state.taskLoader = false;
      state.isDialogOpen = false;
      state.dialogTitle = "";

      const productData = payload.data;
      
      // console.log(productData);
      
      state.products = productData;
    })
    .addCase(createProductAction.rejected,(state)=>{
      state.taskLoader = false;
    })
  }
})

export const {setDialogState} = productSlice.actions;


export default productSlice.reducer;