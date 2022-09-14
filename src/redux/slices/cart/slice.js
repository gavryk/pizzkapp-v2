import { createSlice } from '@reduxjs/toolkit';
import { calcCartItems } from '../../../utils/calcCartItems';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalCount = calcCartItems(state.items).count;
      state.totalPrice = calcCartItems(state.items).price;
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
      state.totalCount = calcCartItems(state.items).count;
      state.totalPrice = calcCartItems(state.items).price;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalCount = calcCartItems(state.items).count;
      state.totalPrice = calcCartItems(state.items).price;
    },
    clearItems: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;
export default cartSlice.reducer;
