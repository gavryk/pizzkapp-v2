import React, { useState } from 'react';
import UIButton from '../ui-button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import clsx from 'clsx';

const UICard = ({ id, imageUrl, name, price, types, sizes, addToCart, inCartCount }) => {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const availableTypes = ['thin', 'traditional'];
  const availableSizes = [26, 30, 40];

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={imageUrl} alt={name} />
      </div>
      <h5 className={styles.cardTitle}>{name}</h5>
      <div className={styles.cardSelector}>
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={type}
              onClick={() => setActiveType(index)}
              className={clsx({
                [styles.active]: activeType === index,
                [styles.disabled]: !types.includes(index),
              })}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              onClick={() => setActiveSize(index)}
              className={clsx({
                [styles.active]: activeSize === index,
                [styles.disabled]: !sizes.includes(size),
              })}
              key={size}>
              {size} sm
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.cardPrice}>
          <span>From {price} &#8372;</span>
        </div>
        <UIButton variants="outlined" color="orange">
          <FontAwesomeIcon icon={faPlus} />
          Add
          {inCartCount && <span className={styles.countInCart}>{inCartCount}</span>}
        </UIButton>
      </div>
    </div>
  );
};

export default UICard;
