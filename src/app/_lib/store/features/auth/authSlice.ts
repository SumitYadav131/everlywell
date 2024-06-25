import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from '../../actions/auth/authAction';

export interface AuthUserState {
  authUser:{
    id:string,
    name:string,
    email:string,
    role:string,
    passwordChangedAt:string,
    status:string,
    token:string,
  };
}

const initialState: AuthUserState = {
  authUser: {
    id: "",
    name: "",
    email: "",
    role: "",
    passwordChangedAt: "",
    status: "",
    token: "",
  },
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
      let data = {
        id: userData.data.user._id,
        name: userData.data.user.name,
        email: userData.data.user.email,
        role: userData.data.user.role,
        passwordChangedAt: userData.data.user.passwordChangedAt,
        status: userData.status,
        token: userData.token,
      }
      state.authUser = data;
    })
    .addCase(loginUser.rejected,(state)=>{
      // 
    })
  }
})

export default authSlice.reducer;