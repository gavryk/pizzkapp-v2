import React from 'react';
import { UIButton, UICartTop } from '../../components';
import styles from '../../styles/pages/Cart.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  return (
    <div className={styles.cartPage}>
      <UICartTop
        title="Cart"
        titleIcon={
          <FontAwesomeIcon icon={faShoppingCart} size="xs" style={{ marginRight: `10px` }} />
        }>
        <UIButton variants="text">
          <FontAwesomeIcon icon={faTrashAlt} />
          <span>Clear Cart</span>
        </UIButton>
      </UICartTop>
    </div>
  );
};

export default Cart;
