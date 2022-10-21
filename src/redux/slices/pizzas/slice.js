import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzas } from './asyncAction';

const initialState = {
  items: [],
  limit: 8,
  isLoaded: '', //loading | success | error
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.items = [];
      state.isLoaded = 'loading';
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoaded = 'success';
    },
    [fetchPizzas.rejected]: (state) => {
      state.items = [];
      state.isLoaded = 'error';
    },
  },
});

export const pizzaSelector = (state) => state.pizza;

// Action creators are generated for each case reducer function
export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
