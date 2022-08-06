import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

const UIGrid = ({ children, columns = '3', gap = '16' }) => {
  return (
    <div className={clsx(styles.gridWrapper, styles[`grid_${columns}`], styles[`gap_${gap}`])}>
      {children}
    </div>
  );
};

export default UIGrid;
