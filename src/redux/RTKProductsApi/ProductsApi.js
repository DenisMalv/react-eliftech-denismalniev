import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'products',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().token.token;
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: build => ({
    getMacdonnyItemsRTK: build.query({
      query: () => ({
        url: `/products`,
        method: 'GET',
        // headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ['Products'],
    }),
    addMacdonnyItemRTK: build.mutation({
      query: body => ({
        url: '/products',
        method: 'POST',
        // headers: { Authorization: `Bearer ${body.token}` },
        body: body.contact,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteMacdonnyItemRTK: build.mutation({
      query: body => ({
        url: `/products/${body.id}`,
        method: 'DELETE',
        // headers: { Authorization: `Bearer ${body.token}` },
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useGetMacdonnyItemsRTKQuery,
  useAddMacdonnyItemRTKMutation,
  useDeleteMacdonnyItemRTKMutation,
} = productsApi;
