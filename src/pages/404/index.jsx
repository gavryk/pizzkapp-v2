import React from 'react';
import { Link } from 'react-router-dom';
import { UIButton, UITypography } from '../../components';
import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className={styles.page404}>
      <UITypography variant="h2" fontWeight="bold">
        Page Not Found
      </UITypography>
      <Link to="/">
        <UIButton color="orange" variant="contained">
          Back To Pizzas
        </UIButton>
      </Link>
    </div>
  );
};

export default NotFound;
