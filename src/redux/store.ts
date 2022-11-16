import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter/slice';
import pizza from './slices/pizzas/slice';
import cart from './slices/cart/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    pizza,
    filter,
    cart,
  },
});

//Export type for selectors
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
