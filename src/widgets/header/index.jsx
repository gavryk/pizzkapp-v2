import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/filter/slice';
import { Logo, UIButton, UIInput, UISeparator } from '../../components';
import logoImg from '../../assets/images/pizza-logo.png';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearch(str));
    }, 1000),
    [],
  );

  const setSearchValue = (value) => {
    setValue(value);
    updateSearchValue(value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftHeader}>
        <Logo src={logoImg} alt="logo" logoText="PizzaApp" link="/" />
        <UIInput
          type="search"
          placeholder="Search..."
          onChange={(event) => setSearchValue(event.target.value)}
          value={value}
        />
      </div>
      <Link to="/cart">
        <UIButton color="orange">
          <span>0 &#8372;</span>
          <UISeparator color="white" />
          <span>
            <FontAwesomeIcon icon={faShoppingCart} />0
          </span>
        </UIButton>
      </Link>
    </header>
  );
};

export default Header;
