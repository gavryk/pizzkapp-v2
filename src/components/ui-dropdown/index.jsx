import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const UIDropdown = React.memo(({ list }) => {
  const [visibleList, setVisibleList] = useState(false);
  const [selected, setSelected] = useState(0);
  const sortRef = useRef();
  const activeLabel = list[selected].name;

  const toggleSelectItem = (ind) => {
    setSelected(ind);
    setVisibleList(false);
  };

  useEffect(() => {
    const clickOffSortPopup = (event) => {
      let path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(sortRef.current)) {
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
            {activeLabel}
          </span>
        </span>
      </div>
      <ul className={clsx(styles.sortList, { [styles.visibleList]: visibleList })}>
        {list &&
          list.map(function (el, index) {
            return (
              <li
                key={`${el.type}_${index}`}
                onClick={() => toggleSelectItem(index)}
                className={clsx(styles.sortListItem, { [styles.active]: selected === index })}>
                {el.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default UIDropdown;
