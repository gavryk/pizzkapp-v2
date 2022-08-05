import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const UIDropdown = React.memo(({ sortList }) => {
  const [visibleSort, setVisibleSort] = useState(false);
  const sortRef = useRef();

  const toggleVisibleList = () => {
    setVisibleSort(!visibleSort);
  };

  const clickOffSortPopup = (event) => {
    let path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisibleSort(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', clickOffSortPopup);
  }, []);

  return (
    <div ref={sortRef} className={styles.sortWidget}>
      <div className={styles.sortLabel}>
        <span onClick={toggleVisibleList}>
          <b className={clsx(styles.caret, { [styles.caretActive]: visibleSort })}>
            <FontAwesomeIcon icon={faCaretDown} />
            Sort By:
          </b>
          <span className={styles.selectSort}>Test</span>
        </span>
      </div>
      <ul className={clsx(styles.sortList, { [styles.visibleSortList]: visibleSort })}>
        {sortList &&
          sortList.map(function (el, index) {
            return (
              <li key={`${el.type}_${index}`} className={clsx(styles.sortListItem)}>
                {el.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

export default UIDropdown;
