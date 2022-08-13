import React from 'react';
import UITitle from '../../../../components/ui-title';

import styles from './styles.module.scss';

const CartTop = ({ title, titleIcon, children }) => {
  return (
    <div className={styles.cartTop}>
      <UITitle variant="h3" fontWeight="bold" bottomSpace="none">
        {titleIcon}
        {title}
      </UITitle>
      {children}
    </div>
  );
};

export default CartTop;
