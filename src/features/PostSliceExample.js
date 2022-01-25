import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
// import {getPosts} from './postSlice';

export const apiLists = createAsyncThunk('post/apiLists', async data => {
  console.log({data});
  // return fetch('https://jsonplaceholder.typicode.com/posts/')
  //   .then(resp => resp.json())
  //   .catch(error => {
  //     console.log('errrrrrrrrr', error);
  //   });
  return axios
    .get('https://jsonplaceholder.typicode.com/posts/')
    .then(resp => resp.data)
    .catch(error => console.log('Something went wrong', error));
});
export const apiPostNewData = createAsyncThunk(
  'post/apiPostNewData',
  async id => {
    console.log('fething user..', id);
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        params: {
          // userId: 0,
          // id: 0,
          // title: 'wnchevgbj',
        },
        // method: 'GET',
        // headers: {
        //   Accept: 'application/json',
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify(),
      })
      .then(resp => resp.data)
      .catch(error => console.log('Something went wrong', error));
  },
);

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: false,
    edit: false,
    user: {
      id: '',
      userId: '',
      title: '',
      body: '',
    },
  },
  extraReducers: {
    [apiLists.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [apiLists.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [apiLists.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [apiPostNewData.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [apiPostNewData.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [apiPostNewData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default postSlice.reducer;
