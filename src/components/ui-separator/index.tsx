import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

interface SeperatorProps {
  color?: 'black' | 'white';
}

export const UISeparator = ({ color = 'black' }: SeperatorProps) => {
  return <div className={clsx(styles.root, styles[color])}></div>;
};
