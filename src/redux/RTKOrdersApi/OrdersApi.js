import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersApi = createApi({
  reducerPath: 'orders',
  tagTypes: ['Orders'],
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
    // getOrdersRTK: build.query({
    //   query: option => ({
    //     url: `/orders`,
    //     method: 'GET',
    //     // headers: { Authorization: `Bearer ${token}` },
    //   }),
    //   providesTags: ['Orders'],
    // }),
    getOrdersRTK: build.mutation({
      query: data => ({
        url: `/orders/userOrders`,
        method: 'POST',
        // headers: { Authorization: `Bearer ${token}` },
        body: data,
      }),
      providesTags: ['Orders'],
    }),
    addOrderRTK: build.mutation({
      query: body => ({
        url: '/orders',
        method: 'POST',
        // headers: { Authorization: `Bearer ${body.token}` },
        body: body,
      }),
      invalidatesTags: ['Orders'],
    }),
    deleteOrderRTK: build.mutation({
      query: body => ({
        url: `/orders/${body.id}`,
        method: 'DELETE',
        // headers: { Authorization: `Bearer ${body.token}` },
      }),
      invalidatesTags: ['Orders'],
    }),
  }),
});

export const {
  useAddOrderRTKMutation,
  useDeleteOrderRTKMutation,
  // useGetOrdersRTKQuery,
  useGetOrdersRTKMutation,
} = ordersApi;
