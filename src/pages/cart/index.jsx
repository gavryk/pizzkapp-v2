import React from 'react';
import { UIButton, UICartItem, UICartTop, UICartTotal, UIGrid } from '../../components';
import styles from '../../styles/pages/Cart.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faShoppingCart, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
      <UIGrid columns={1} gridGap={2}>
        <UICartItem
          id="test"
          key="test1"
          name="test"
          type="All"
          size="26sm"
          price="100$"
          totalPricePizzas="100$"
          totalCountPizzas="2"
        />
      </UIGrid>
      <UICartTotal totalCount={10} totalPrice={600} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/">
          <UIButton color="orange" variants="outlined">
            <FontAwesomeIcon icon={faChevronLeft} />
            Come Back
          </UIButton>
        </Link>
        <UIButton color="orange" variants="contained">
          Pay Now
        </UIButton>
      </div>
    </div>
  );
};

export default Cart;
