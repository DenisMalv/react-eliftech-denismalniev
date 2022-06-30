import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'products',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://eliftech-test-denismalniev.herokuapp.com/api/',
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().token.token;
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: build => ({
    getCompanyItemsRTK: build.query({
      query: () => ({
        url: `/products`,
        method: 'GET',
        // headers: { Authorization: `Bearer ${token}` },
      }),
      providesTags: ['Products'],
    }),
    addCompanyItemRTK: build.mutation({
      query: body => ({
        url: '/products',
        method: 'POST',
        // headers: { Authorization: `Bearer ${body.token}` },
        body: body.contact,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteCompanyItemRTK: build.mutation({
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
  useGetCompanyItemsRTKQuery,
  useAddCompanyItemRTKMutation,
  useDeleteCompanyItemRTKMutation,
} = productsApi;
