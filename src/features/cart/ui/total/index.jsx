import React from 'react';
import styles from './styles.module.scss';

const CartTotal = ({ totalCount, totalPrice }) => {
  return (
    <div className={styles.cartTotal}>
      <div className={styles.count}>
        <span>Total Pizzas: </span>
        <span className={styles.num}> {totalCount ? totalCount : 0} pcs</span>
      </div>
      <div className={styles.price}>
        <span>Order amount: </span>
        <span className={styles.num}>{totalPrice ? totalPrice : 0} &#8372;</span>
      </div>
    </div>
  );
};

export default CartTotal;
