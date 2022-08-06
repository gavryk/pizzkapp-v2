import React, { useState } from 'react';
import { UIButton, UIDropdown } from '../../components';
import styles from './styles.module.scss';

const catList = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];

const sortList = [
  { name: 'Popular', type: 'rating', order: 'desc' },
  { name: 'Price', type: 'price', order: 'desc' },
  { name: 'Alphabet', type: 'name', order: 'asc' },
];

const FilterWidget = () => {
  const [activeCat, setActiveCat] = useState(null);

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.categoriesWrap}>
        <UIButton active={activeCat === null && true} onClick={() => setActiveCat(null)}>
          All
        </UIButton>
        {catList &&
          catList.map((cat, index) => (
            <UIButton
              key={`${cat}_${index}`}
              active={activeCat === index && true}
              onClick={() => setActiveCat(index)}>
              {cat}
            </UIButton>
          ))}
      </div>
      <UIDropdown sortList={sortList} />
    </div>
  );
};

export default FilterWidget;
