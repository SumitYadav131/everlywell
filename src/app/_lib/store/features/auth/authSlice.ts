import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from '../../actions/auth/authAction';

export interface AuthUserState {
  authUser:Object;
}

const initialState: AuthUserState = {
  authUser: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(loginUser.pending, (state, action)=>{})
    .addCase(loginUser.fulfilled,(state, {payload})=>{
      const userData = payload.data;
      // console.log(userData);
      
      let data = {
        name: userData.data.user.name,
        token:userData.token
      }
      state.authUser = data;
    })
    .addCase(loginUser.rejected,(state)=>{
      // 
    })
  }
})

export default authSlice.reducer;