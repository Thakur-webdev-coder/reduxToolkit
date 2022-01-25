import {configureStore} from '@reduxjs/toolkit';
// import PostReducer from '../features/postSlice';
import PostReducer from '../features/PostSliceExample';

export const store = configureStore({
  reducer: {
    post: PostReducer,
  },
});
