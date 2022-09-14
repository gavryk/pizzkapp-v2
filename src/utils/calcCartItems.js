export const calcCartItems = (items) => {
  return {
    count: items.reduce((sum, item) => sum + item.count, 0),
    price: items.reduce((sum, obj) => obj.price * obj.count + sum, 0),
  };
};
