import React from 'react';
import { Link } from 'react-router-dom';
import { UIButton, UITitle } from '../../components';
import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className={styles.page404}>
      <UITitle variant="h2" fontWeight="bold">
        Page Not Found
      </UITitle>
      <Link to="/">
        <UIButton color="orange" variant="contained">
          Back To Pizzas
        </UIButton>
      </Link>
    </div>
  );
};

export default NotFound;
