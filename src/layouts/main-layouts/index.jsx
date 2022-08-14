import React from 'react';
import Header from '../../widgets/header';
import styles from './styles.module.scss';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className={styles.mainWrapper}>
        <Header />
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
