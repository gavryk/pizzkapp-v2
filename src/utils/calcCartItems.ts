import { CartItem } from '../redux/slices/cart/types';

export const calcCartItems = (items: CartItem[]) => {
  return {
    count: items.reduce((sum, item) => sum + item.count, 0),
    price: items.reduce((sum, obj) => obj.price * obj.count + sum, 0),
  };
};
