import clsx from 'clsx';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const Pagination = ({ totalItemsCount, pageSize, currentPage, onChangedPage, portionSize = 5 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);

  const [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <>
      <nav className={styles.root}>
        <ul className={styles.paginations}>
          {portionNumber > 1 && (
            <li
              className={styles.pageItem}
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}>
              <span className={styles.pageLink}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </span>
            </li>
          )}
          {pages
            .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map((page) => {
              return (
                <li
                  key={page}
                  onClick={(e) => {
                    onChangedPage(page);
                  }}
                  className={clsx(styles.pageItem, { [styles.currentPage]: currentPage === page })}>
                  <span className={clsx(styles.pageLink)}>{page}</span>
                </li>
              );
            })}
          {portionCount > portionNumber && (
            <li
              className={styles.pageItem}
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}>
              <span className={styles.pageLink}>
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
