import React from 'react';
import { UIButton, UIDropdown } from '../../components';
import styles from './styles.module.scss';

const FilterWidget = ({ catList, sortList }) => {
  return (
    <div className={styles.filterWrapper}>
      <div className={styles.categoriesWrap}>
        <UIButton active>All</UIButton>
        {catList && catList.map((cat, index) => <UIButton key={`${cat}_${index}`}>{cat}</UIButton>)}
      </div>
      <div className={styles.sortWrap}>
        <UIDropdown sortList={sortList} />
      </div>
    </div>
  );
};

export default FilterWidget;
