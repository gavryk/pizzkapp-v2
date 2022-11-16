import React from 'react';
import { useState } from 'react';
import { UIButton } from '../ui-button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { cartItemByIdSelector } from '../../redux/slices/cart/slice';
import { Link } from 'react-router-dom';
import { CartItem } from '../../redux/slices/cart/types';

interface CardProps {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  types: number[];
  sizes: number[];
  addToCart: (item: CartItem) => void;
}

export const UICard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ id, imageUrl, name, price, types, sizes, addToCart }, ref) => {
    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(0);
    const cartItem = useSelector(cartItemByIdSelector(id));
    const addedCount =
      cartItem.length !== 0
        ? cartItem
            .map((item: CartItem) => item.count)
            .reduce((sum: number, acc: number) => sum + acc)
        : 0;

    const availableTypes = ['thin', 'traditional'];

    const addItem = () => {
      const item = {
        id,
        name,
        imageUrl,
        price,
        size: sizes[activeSize],
        type: availableTypes[activeType],
        count: 0,
      };
      addToCart(item);
    };

    return (
      <div className={styles.card} ref={ref}>
        <Link to={`/pizza/${id}`}>
          <div className={styles.cardImage}>
            <img src={imageUrl} alt={name} />
          </div>
        </Link>
        <h5 className={styles.cardTitle}>{name}</h5>
        <div className={styles.cardSelector}>
          <ul>
            {types.map((type, index) => (
              <li
                key={type}
                onClick={() => setActiveType(index)}
                className={clsx({
                  [styles.active]: activeType === type,
                })}>
                {availableTypes[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
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
          <UIButton variants="outlined" color="orange" onClick={addItem}>
            <FontAwesomeIcon icon={faPlus} />
            Add
            {addedCount > 0 && <span className="count">{addedCount}</span>}
          </UIButton>
        </div>
      </div>
    );
  },
);
