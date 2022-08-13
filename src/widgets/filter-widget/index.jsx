import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UIButton, UIDropdown } from '../../components';
import { setSortBy } from '../../redux/actions/filter-pizza-action';
import styles from './styles.module.scss';

const catList = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];

const sortList = [
  { name: 'Popular', type: 'rating', order: 'desc' },
  { name: 'Price', type: 'price', order: 'desc' },
  { name: 'Alphabet', type: 'name', order: 'asc' },
];

const FilterWidget = ({ sortBy }) => {
  const dispatch = useDispatch();
  const [activeCat, setActiveCat] = useState(null);

  const onToggleCat = (index) => {
    setActiveCat(index);
  };

  const selectSortHandler = (type) => {
    dispatch(setSortBy(type));
  };

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.categoriesWrap}>
        <UIButton active={activeCat === null && true} onClick={() => onToggleCat(null)}>
          All
        </UIButton>
        {catList &&
          catList.map((cat, index) => (
            <UIButton
              key={`${cat}_${index}`}
              active={activeCat === index && true}
              onClick={() => onToggleCat(index)}>
              {cat}
            </UIButton>
          ))}
      </div>
      <UIDropdown onSetSort={selectSortHandler} list={sortList} selected={sortBy} />
    </div>
  );
};

export default FilterWidget;
