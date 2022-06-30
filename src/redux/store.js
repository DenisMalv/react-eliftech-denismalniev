import { configureStore } from '@reduxjs/toolkit';
// import { contactsSliceReducer } from './filterSlice/filterSlice';
import { productsApi } from './RTKProductsApi/ProductsApi';
import { ordersApi } from './RTKOrdersApi/OrdersApi';
import { persistedUserBasketReducer } from './orderBasketSlice/orderBasketSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';

// store
export const store = configureStore({
  reducer: {
    orderBasket: persistedUserBasketReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    productsApi.middleware,
    ordersApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
