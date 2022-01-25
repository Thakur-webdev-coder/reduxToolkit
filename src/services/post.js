import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: builder => ({
    getAllUsers: builder.query({
      query: () => 'users',
    }),
  }),
});

export const {useGetAllUsersQuery} = userApi;
