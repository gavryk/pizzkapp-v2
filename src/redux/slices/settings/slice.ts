import { createSlice } from '@reduxjs/toolkit';
import { fetchPizzas } from '../pizzas/asyncAction';
import { SettingsTypes } from './types';

const initialState: SettingsTypes = {
  isLoaded: '', //loading | success | error
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.isLoaded = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.isLoaded = 'loading';
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.isLoaded = 'success';
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.isLoaded = 'error';
    });
  },
});

export const { setStatus } = settingsSlice.actions;

export default settingsSlice.reducer;
