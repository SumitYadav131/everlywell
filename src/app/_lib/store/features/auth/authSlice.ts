import axios from '@/app/_lib/axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthUserState {
  authUser:string[];
}

const initialState: AuthUserState = {
  authUser: [],
}

export const signupUser = createAsyncThunk('signupUser',async(data)=>{
  // const res = await fetch("",{
  //   method:"post",
  //   headers:{
  //     'Content-Type':"application/json",
  //   }
  // })
  console.log(data)
  
  // const result = axios.post('api/auth/login', data);
  // return result;
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser:(state, action)=>{
      state.authUser.push(action.payload);
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(signupUser.fulfilled,(state, action)=>{
      console.log('reducer');
      
      // state.authUser=action.payload;
    })
  }
})

// Action creators are generated for each case reducer function
export const {loginUser} = authSlice.actions;

export default authSlice.reducer;