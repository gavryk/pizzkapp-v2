import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPizzas } from './asyncAction';
import { Pizza, PizzaSliceState } from './types';

const initialState: PizzaSliceState = {
  items: [],
  limit: 8,
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas: (state, action: PayloadAction<Pizza[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
