import { createSlice } from '@reduxjs/toolkit'

export interface LoaderState {
    // taskLoader: boolean;
}

const initialState: LoaderState = {
    // taskLoader: false,
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    // setTaskLoader:(state, action)=>{
    //   state.taskLoader = action.payload;
    // }
  },
})

// Action creators are generated for each case reducer function
export const {
  // setTaskLoader
} = loaderSlice.actions;

export default loaderSlice.reducer;