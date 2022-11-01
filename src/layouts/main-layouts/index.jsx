import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../widgets/header';
import styles from './styles.module.scss';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className={styles.mainWrapper}>
        <Header />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
