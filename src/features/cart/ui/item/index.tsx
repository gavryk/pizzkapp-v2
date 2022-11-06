import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle as farTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../../../redux/slices/cart/slice';

interface CartItemProps {
  id: string;
  imageUrl: string;
  name: string;
  size: number;
  type: string;
  count: number;
  price: number;
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  imageUrl,
  name,
  type,
  size,
  count,
  price,
}) => {
  const dispatch = useDispatch();
  const itemProps = { id, imageUrl, name, type, size, count, price };

  const onClickPlus = () => {
    dispatch(addItem(itemProps));
  };
  const onClickMinus = () => {
    dispatch(minusItem(itemProps));
  };
  const onRemoveItem = () => {
    dispatch(removeItem(itemProps));
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.cartItemName}>
        <h4>{name}</h4>
        <p>
          {type}, {size} sm
        </p>
      </div>
      <div className={styles.cartItemCount}>
        <button onClick={onClickMinus}>
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>
        <span>{count}</span>
        <button onClick={onClickPlus}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
      <div className={styles.cartItemPrice}>
        <span>{price} &#8372;</span>
      </div>
      <div className={styles.cartItemRemove}>
        <button className={styles.btnRemove} onClick={onRemoveItem}>
          <FontAwesomeIcon icon={farTimesCircle} />
        </button>
      </div>
    </div>
  );
};
