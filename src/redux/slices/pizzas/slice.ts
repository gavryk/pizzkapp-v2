import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { fetchPizzas } from './asyncAction';
import { Pizza, PizzaSliceState } from './types';

const initialState: PizzaSliceState = {
  items: [],
  limit: 8,
  isLoaded: '', //loading | success | error
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas: (state, action: PayloadAction<Pizza[]>) => {
      state.items = action.payload;
    },
    setStatus: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = [];
      state.isLoaded = 'loading';
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoaded = 'success';
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = [];
      state.isLoaded = 'error';
    });
  },
});

export const pizzaSelector = (state: RootState) => state.pizza;

// Action creators are generated for each case reducer function
export const { setPizzas, setStatus } = pizzaSlice.actions;

export default pizzaSlice.reducer;
