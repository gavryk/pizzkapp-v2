import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

const UIButton = ({ children, color, variants = 'contained', type = 'button', ...props }) => {
  return (
    <button
      type={type}
      key={props.key}
      onClick={() => props.onClick && props.onClick()}
      className={clsx(styles.uibutton, styles[variants], {
        [styles.orange]: color === 'orange',
        [styles.black]: color === 'black',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
      })}>
      {children}
    </button>
  );
};

export default UIButton;
