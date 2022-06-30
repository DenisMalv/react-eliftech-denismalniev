import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const orderBasketSlice = createSlice({
  name: 'orderBasket',
  initialState: {
    userProducts: [],
  },
  reducers: {
    addProductInBasket: (state, action) => {
      console.log(action);
      //------------------------------------------
      const findDuplicateProduct = state.userProducts.find(
        product => product.id === action.payload.id
      );
      if (findDuplicateProduct) {
        return;
      }
      //------------------------------------------
      state.userProducts.push(action.payload);
    },
    deleteProductFromBasket: (state, action) => {
      console.log(action);
      state.userProducts = state.userProducts.filter(
        product => product.id !== action.payload.id
      );
    },
    updateProductFromBasket: (state, action) => {
      const index = state.userProducts.findIndex(
        ({ id }) => id === action.payload.id
      );
      const count = action.payload.count;
      console.log('state.userProducts[index]', state.userProducts[index]);
      state.userProducts[index] = { ...state.userProducts[index], count };
    },
    resetProductInBasket: (state, action) => {
      state.userProducts = action.payload;
    },
  },
});

export const {
  addProductInBasket,
  deleteProductFromBasket,
  updateProductFromBasket,
  resetProductInBasket,
} = orderBasketSlice.actions;
export const orderBasketSliceReducer = orderBasketSlice.reducer;

//LS
const userBasketPersistConfig = {
  key: 'userBasket',
  storage,
};
export const persistedUserBasketReducer = persistReducer(
  userBasketPersistConfig,
  orderBasketSliceReducer
);
// Selectors
export const getUserProductsInBasket = state => state.orderBasket.userProducts;
