import React, { useEffect, useRef } from 'react';
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
import { cartSelector } from '../../redux/slices/cart/selectors';
import { settingsSelector } from '../../redux/slices/settings/selectors';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalPrice, totalCount } = useSelector(cartSelector);
  const { isLoaded } = useSelector(settingsSelector);
  const [value, setValue] = useState('');
  const { pathname } = useLocation();
  const isMounted = useRef(false);

  // eslint-disable-next-line
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

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

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
