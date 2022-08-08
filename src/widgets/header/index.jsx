import React from 'react';
import { Logo, UIButton, UISeparator } from '../../components';
import logoImg from '../../assets/images/pizza-logo.png';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo src={logoImg} alt="logo" logoText="PizzaApp" link="/" />
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
