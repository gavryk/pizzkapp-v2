import React from 'react';
import { UIButton } from '../../components';
import styles from './styles.module.scss';

const Filter = ({ catList }) => {
  return (
    <div className={styles.filterWrap}>
      <UIButton active>All</UIButton>
      {catList && catList.map((cat, index) => <UIButton key={`${cat}_${index}`}>{cat}</UIButton>)}
    </div>
  );
};

export default Filter;
