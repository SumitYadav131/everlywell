import { createSlice } from '@reduxjs/toolkit'
import { 
    createBlogPostAction,
    getBlogPostsAction,
    updateBlogPostAction,
    deleteBlogPostAction,
} from '../thunks/blogPostAction';

export interface BlogPostState {
  blogPosts: Array<any>;
}

const initialState: BlogPostState = {
  blogPosts: [],
}

export const blogPostSlice = createSlice({
  name: 'blogPost',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(createBlogPostAction.fulfilled,(state, {payload})=>{
      const blogPosts = (payload.data.data.post);
      state.blogPosts.push(blogPosts);
    })
    // ---------- get
    .addCase(getBlogPostsAction.fulfilled, (state, {payload})=>{
      const blogPosts = payload?.data.data.posts;
      state.blogPosts = blogPosts;
    })
    // --------- delete
    .addCase(deleteBlogPostAction.fulfilled, (state, {payload})=>{
      state.blogPosts = state.blogPosts.filter((post: any) => post._id !== payload);
    })
    // ---------- update
    .addCase(updateBlogPostAction.fulfilled,(state, {payload})=>{
      const updatedPost = (payload.data.data.post);
      const stateBlogPosts = state.blogPosts;
      const getIndex = stateBlogPosts.findIndex((post: any) => post._id === updatedPost._id);
      stateBlogPosts[getIndex] = updatedPost;
    })
  }
})

export default blogPostSlice.reducer;