import React from 'react';
import { UIButton, UIDropdown } from '../../components';
import styles from './styles.module.scss';

const catList = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];

const sortList = [
  { name: 'Popular', type: 'rating', order: 'desc' },
  { name: 'Price', type: 'price', order: 'desc' },
  { name: 'Alphabet', type: 'name', order: 'asc' },
];

const FilterWidget = ({ sortBy, category, onCategory, onSort, bgColor = '#fff' }) => {
  return (
    <>
      <div className={styles.filterWrapper} style={{ backgroundColor: bgColor }}>
        <div className={styles.categoriesWrap}>
          <UIButton active={category === null && true} onClick={() => onCategory(null)}>
            All
          </UIButton>
          {catList &&
            catList.map((cat, index) => (
              <UIButton
                key={`${cat}_${index}`}
                active={category === index && true}
                onClick={() => onCategory(index)}>
                {cat}
              </UIButton>
            ))}
        </div>
        <UIDropdown onSetSort={onSort} list={sortList} selected={sortBy} />
      </div>
    </>
  );
};

export default FilterWidget;
