import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Logo = ({ src, alt, logoText }) => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src={src} alt={alt} />
        <h3>{logoText}</h3>
      </Link>
    </div>
  );
};

export default Logo;
