import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faShoppingCart, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CartTop from './top';
import { UIButton, UIGrid } from '../../../components';
import CartItem from './item';
import CartTotal from './total';

export const CartTab = ({ items, totalCount, totalPrice }) => {
  return (
    <>
      <CartTop
        title="Cart"
        titleIcon={
          <FontAwesomeIcon icon={faShoppingCart} size="xs" style={{ marginRight: `10px` }} />
        }>
        <UIButton variants="text">
          <FontAwesomeIcon icon={faTrashAlt} />
          <span>Clear Cart</span>
        </UIButton>
      </CartTop>
      <UIGrid columns={1} gridGap={2}>
        {items &&
          items.map((item) => (
            <CartItem
              id={item.id}
              key={item.id}
              name={item.name}
              type={item.type}
              size={item.size}
              price={item.price}
              totalPricePizzas="100$"
              totalCountPizzas="2"
            />
          ))}
      </UIGrid>
      <CartTotal totalCount={totalCount} totalPrice={totalPrice} />
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
    </>
  );
};
