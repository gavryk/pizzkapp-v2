import React from 'react';
import { UIButton, UIDropdown } from '../../components';
import { SortTypes } from '../../redux/slices/filter/types';
import styles from './styles.module.scss';

const catList = ['Meat', 'Vegetarian', 'Grill', 'Cheese', 'BBQ'];

export const sortList = [
  { name: 'Popular (DESC)', type: 'rating', order: 'desc' },
  { name: 'Popular (ASC)', type: '-rating', order: 'asc' },
  { name: 'Price (DESC)', type: 'price', order: 'desc' },
  { name: 'Price (ASC)', type: '-price', order: 'asc' },
  { name: 'Alphabet (DESC)', type: 'name', order: 'desc' },
  { name: 'Alphabet (ASC)', type: '-name', order: 'asc' },
];

interface FilterProps {
  sortBy: SortTypes;
  category: number | string;
  onCategory: (cat: number | string) => void;
  onSort: (obj: SortTypes) => void;
  bgColor?: string;
}

export const FilterWidget: React.FC<FilterProps> = ({
  sortBy,
  category,
  onCategory,
  onSort,
  bgColor = '#fff',
}) => {
  return (
    <>
      <div className={styles.filterWrapper} style={{ backgroundColor: bgColor }}>
        <div className={styles.categoriesWrap}>
          <UIButton active={category === 'all' && true} onClick={() => onCategory('all')}>
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
