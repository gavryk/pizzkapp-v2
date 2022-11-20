import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../redux/slices/filter/slice';
import { Logo, Progress, UIButton, UIInput, UISeparator } from '../../components';
import logoImg from '../../assets/images/pizza-logo.png';
import styles from './styles.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { debounce } from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';
import { useState } from 'react';
import { cartSelector } from '../../redux/slices/cart/slice';
import { pizzaSelector } from '../../redux/slices/pizzas/slice';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, totalCount } = useSelector(cartSelector);
  const { isLoaded } = useSelector(pizzaSelector);
  const [value, setValue] = useState('');
  const { pathname } = useLocation();

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearch(str));
    }, 1000),
    [],
  );

  const setSearchValue = (value: string) => {
    setValue(value);
    updateSearchValue(value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <Logo src={logoImg} alt="logo" logoText="PizzaApp" link="/" />
        {pathname === '/' && (
          <UIInput
            type="search"
            placeholder="Search..."
            onChange={(event) => setSearchValue(event.target.value)}
            value={value}
          />
        )}
      </div>
      <Link to="/cart">
        <UIButton color="orange">
          <span>{totalPrice} &#8372;</span>
          <UISeparator color="white" />
          <span>
            <FontAwesomeIcon icon={faShoppingCart} />
            {totalCount}
          </span>
        </UIButton>
      </Link>
      {isLoaded === 'loading' && <Progress />}
    </header>
  );
};
