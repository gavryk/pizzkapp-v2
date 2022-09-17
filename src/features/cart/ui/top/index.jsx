import React from 'react';
import { UITypography } from '../../../../components';

import styles from './styles.module.scss';

const CartTop = ({ title, titleIcon, children }) => {
  return (
    <div className={styles.cartTop}>
      <UITypography variant="h3" fontWeight="bold" bottomSpace="none">
        {titleIcon}
        {title}
      </UITypography>
      {children}
    </div>
  );
};

export default CartTop;
