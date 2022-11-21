import clsx from 'clsx';
import React, { useState } from 'react';
import { UIButton, UIDropdown } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { SortTypes } from '../../redux/slices/filter/types';
import { catList, sortList } from './model';
import styles from './styles.module.scss';
interface FilterProps {
  sortBy: SortTypes;
  category: number | string;
  onCategory: (cat: number | string) => void;
  onSort: (obj: SortTypes) => void;
  bgColor?: string;
}

export const FilterWidget: React.FC<FilterProps> = React.memo(
  ({ sortBy, category, onCategory, onSort, bgColor = '#fff' }) => {
    const [mobVisible, setMobVisible] = useState(false);

    return (
      <div className={styles.widgetWrapper}>
        <div
          className={clsx(styles.filterWrapper, { [styles.active]: mobVisible })}
          style={{ backgroundColor: bgColor }}>
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
        <button className={styles.expand} onClick={() => setMobVisible(!mobVisible)}>
          <FontAwesomeIcon icon={!mobVisible ? faChevronDown : faChevronUp} />{' '}
          {mobVisible ? 'Hide' : 'Show'} Filters
        </button>
      </div>
    );
  },
);
