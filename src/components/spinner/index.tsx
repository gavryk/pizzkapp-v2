import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStatus } from '../../redux/slices/settings/slice';
import styles from './styles.module.scss';

export const Spinner: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus('loading'));
    return () => {
      dispatch(setStatus('success'));
    };
  }, [dispatch]);

  return (
    <div className={clsx(styles.spinnerController)}>
      <div className={styles.loadingioSpinnerDoubleRing9cvpyj0e2mm}>
        <div className={styles.ldioXiup40jhy1}>
          <div></div>
          <div></div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
