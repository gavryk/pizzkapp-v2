import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzas } from './asyncAction';

const initialState = {
  items: [],
  limit: 8,
  isLoaded: false,
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
      state.isLoaded = false;
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoaded = true;
    },
    [fetchPizzas.rejected]: (state) => {
      state.items = [];
      state.isLoaded = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
