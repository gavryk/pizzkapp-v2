import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

interface DropdownProps {
  list: ListProps[];
  selected: ListProps;
  onSetSort: (obj: ListProps) => void;
}

interface ListProps {
  name: string;
  type: string;
  order: string;
}

type PopupClick = MouseEvent & {
  path: Node[];
};

export const UIDropdown: React.FC<DropdownProps> = React.memo(({ list, selected, onSetSort }) => {
  const [visibleList, setVisibleList] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const toggleSelectItem = (obj: ListProps) => {
    onSetSort(obj);
    setVisibleList(false);
  };

  useEffect(() => {
    const clickOffSortPopup = (event: MouseEvent) => {
      const _event = event as PopupClick;
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setVisibleList(false);
      }
    };

    document.body.addEventListener('click', clickOffSortPopup);

    return () => document.body.removeEventListener('click', clickOffSortPopup);
  }, []);

  return (
    <div ref={sortRef} className={styles.uiDropdown}>
      <div className={styles.sortLabel}>
        <span>
          <b className={clsx(styles.caret, { [styles.caretActive]: visibleList })}>
            <FontAwesomeIcon icon={faCaretDown} />
            Sort By:
          </b>
          <span onClick={() => setVisibleList(!visibleList)} className={styles.selectSort}>
            {selected.name}
          </span>
        </span>
      </div>
      <ul className={clsx(styles.sortList, { [styles.visibleList]: visibleList })}>
        {list &&
          list.map((el, index) => {
            return (
              <li
                key={`${el.type}_${index}`}
                onClick={() => toggleSelectItem(el)}
                className={clsx(styles.sortListItem, {
                  [styles.active]: selected.type === el.type,
                })}>
                {el.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
});
