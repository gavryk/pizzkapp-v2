import React from 'react';
import { UITypography } from '../../../../components';
import styles from './styles.module.scss';

interface CartTopProps {
  title: string;
  titleIcon: string | JSX.Element;
  children: React.ReactNode;
}

export const CartTop: React.FC<CartTopProps> = ({ title, titleIcon, children }) => {
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
