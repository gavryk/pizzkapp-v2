import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter/slice';
import pizza from './slices/pizzas/slice';

export const store = configureStore({
  reducer: {
    pizza,
    filter,
  },
});
