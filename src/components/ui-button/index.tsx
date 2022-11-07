import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  active?: boolean;
  color?: 'orange' | 'black' | 'red' | 'green';
  variants?: 'contained' | 'outlined' | 'text';
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const UIButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, active, color, onClick, variants = 'contained', type = 'button' }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={clsx(styles.uibutton, styles[variants], {
          [styles.orange]: color === 'orange',
          [styles.black]: color === 'black',
          [styles.red]: color === 'red',
          [styles.green]: color === 'green',
          [styles.active]: active,
        })}>
        {children}
      </button>
    );
  },
);
