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

export const apiFetchById = createAsyncThunk('post/apiFetchById', async id => {
  console.log('fething myuser..', id);
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resp => resp.data)
    .catch(error => console.log('Something went wrong', error));
});

export const addNewUser = createAsyncThunk('post/addNewUser', async values => {
  console.log('adding user..', values);
  return (
    axios('https://jsonplaceholder.typicode.com/posts/', {
      method: 'POST',
      body: JSON.stringify({
        id: values.id,
        title: values.title,
        body: values.body,
        userId: values.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      // .then(resp => resp.data)
      .then(resp => console.log(resp, 'resp'))
      .catch(error => console.log('Something went wrong', error))
  );
});
export const deleteUser = createAsyncThunk('post/deleteUser', async id => {
  console.log('deletingUser..', id);
  return (
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      // .then(resp => resp.data)
      .then(resp => console.log(resp, 'resp'))
      .catch(error => console.log('Something went wrong', error))
  );
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: false,
    edit: false,
    postData: {},
    userData: {
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
    [apiFetchById.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [apiFetchById.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    [apiFetchById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [addNewUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [addNewUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.postsData = action.payload;
    },
    [addNewUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteUser.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.postsData = action.payload;
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
