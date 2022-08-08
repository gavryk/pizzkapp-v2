import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

const UISeparator = ({ color = 'black' }) => {
  return <div className={clsx(styles.root, styles[color])}></div>;
};

export default UISeparator;
