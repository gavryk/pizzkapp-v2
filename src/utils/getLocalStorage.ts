import { calcCartItems } from './calcCartItems';
import { CartItem } from '../redux/slices/cart/types';

export const getCartLS = () => {
  const data = localStorage.getItem('cart'),
    items = data ? JSON.parse(data) : [],
    total = calcCartItems(items);

  return {
    items: items as CartItem[],
    totalPrice: total.price,
    totalCount: total.count,
  };
};
