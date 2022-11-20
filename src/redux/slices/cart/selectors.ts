import { RootState } from '../../store';

export const cartSelector = (state: RootState) => state.cart;
export const cartItemByIdSelector = (id: string) => (state: RootState) =>
  state.cart.items.filter((obj) => obj.id === id);
