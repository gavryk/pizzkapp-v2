import React from 'react';
import styles from '../../styles/pages/Cart.module.scss';
import { CartTab } from '../../features/cart/ui';

const Cart = () => {
  return (
    <div className={styles.cartPage}>
      <CartTab />
    </div>
  );
};

export default Cart;
