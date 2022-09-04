import rootReducers from './reducers';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: rootReducers,
});
