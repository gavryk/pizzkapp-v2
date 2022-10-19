import React from 'react';
import styles from '../../styles/pages/Cart.module.scss';
import { CartTab } from '../../features/cart/ui';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UIButton, UITypography } from '../../components';
import emptyCartImage from '../../assets/images/empty-cart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { cartSelector } from '../../redux/slices/cart/slice';

const Cart = () => {
  const { items, totalCount, totalPrice } = useSelector(cartSelector);

  return (
    <>
      {totalCount > 0 ? (
        <div className={styles.cartPage}>
          <CartTab items={items} totalCount={totalCount} totalPrice={totalPrice} />
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <UITypography variant="h1" fontWeight="bold" bottomSpace="sm" textAlign="center">
            Cart is empty <i>😕</i>
          </UITypography>
          <UITypography variant="h5" bottomSpace="sm" textAlign="center">
            Most likely you haven't ordered pizza yet.
            <br />
            To order pizza, go to the main page.
          </UITypography>
          <div className={styles.emptyCart__image}>
            <img src={emptyCartImage} alt="Empty cart" />
          </div>
          <UIButton color="black" variants="outlined">
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              Come Back
            </Link>
          </UIButton>
        </div>
      )}
    </>
  );
};

export default Cart;
