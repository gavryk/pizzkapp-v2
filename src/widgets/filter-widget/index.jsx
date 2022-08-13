import React from 'react';
import { useDispatch } from 'react-redux';
import { UIButton, UIDropdown } from '../../components';
import { setCategory, setSortBy } from '../../redux/actions/filter-pizza-action';
import styles from './styles.module.scss';

const catList = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];

const sortList = [
  { name: 'Popular', type: 'rating', order: 'desc' },
  { name: 'Price', type: 'price', order: 'desc' },
  { name: 'Alphabet', type: 'name', order: 'asc' },
];

const FilterWidget = ({ sortBy, category }) => {
  const dispatch = useDispatch();

  const selectCatHandler = (index) => {
    dispatch(setCategory(index));
  };

  const selectSortHandler = (type) => {
    dispatch(setSortBy(type));
  };

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.categoriesWrap}>
        <UIButton active={category === null && true} onClick={() => selectCatHandler(null)}>
          All
        </UIButton>
        {catList &&
          catList.map((cat, index) => (
            <UIButton
              key={`${cat}_${index}`}
              active={category === index && true}
              onClick={() => selectCatHandler(index)}>
              {cat}
            </UIButton>
          ))}
      </div>
      <UIDropdown onSetSort={selectSortHandler} list={sortList} selected={sortBy} />
    </div>
  );
};

export default FilterWidget;
