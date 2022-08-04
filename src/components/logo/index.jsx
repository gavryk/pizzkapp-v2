import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Logo = ({ src, alt, logoText, size = 'md' }) => {
  return (
    <div className={clsx(styles.logo, styles[size])}>
      <Link to="/">
        <img src={src} alt={alt} />
        <span className={styles.logoText}>{logoText}</span>
      </Link>
    </div>
  );
};

export default Logo;
