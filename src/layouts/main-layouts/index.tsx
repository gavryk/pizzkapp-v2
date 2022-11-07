import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../widgets/header';
import styles from './styles.module.scss';

export const MainLayout: React.FC = () => {
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
