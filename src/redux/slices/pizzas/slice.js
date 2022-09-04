import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  limit: 8,
  isLoaded: false,
};

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPizzas, setLoading } = pizzasSlice.actions;

export default pizzasSlice.reducer;
