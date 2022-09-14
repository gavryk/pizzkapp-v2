import React from 'react';
import styles from '../../styles/pages/Cart.module.scss';
import { CartTab } from '../../features/cart/ui';
import { useSelector } from 'react-redux';

const Cart = () => {
  const { items, totalCount, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className={styles.cartPage}>
      <CartTab items={items} totalCount={totalCount} totalPrice={totalPrice} />
    </div>
  );
};

export default Cart;
