import React from 'react';
import styles from './styles.module.scss';

const UICartTotal = ({ totalCount, totalPrice }) => {
  return (
    <div className={styles.cartTotal}>
      <div className={styles.count}>
        <span>Total Pizzas: </span>
        <span className={styles.count}> {totalCount} pcs</span>
      </div>
      <div className={styles.price}>
        <span>Order amount: </span>
        <span className={styles.price}>{totalPrice} &#8372;</span>
      </div>
    </div>
  );
};

export default UICartTotal;
