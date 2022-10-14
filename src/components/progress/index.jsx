import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

const Progress = () => {
  return (
    <div className={clsx(styles.progressBar)}>
      <span className={styles.progress}></span>
    </div>
  );
};

export default Progress;
