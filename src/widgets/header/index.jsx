import React from 'react';
import { Logo } from '../../components';
import logoImg from '../../assets/images/pizza-logo.png';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo src={logoImg} alt="logo" logoText="PizzaApp" />
    </header>
  );
};

export default Header;
