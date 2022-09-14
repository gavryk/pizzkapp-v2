import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle as farTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const CartItem = ({ imageUrl, name, type, size, count, price }) => {
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
        <button>
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>
        <span>{count}</span>
        <button>
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
      <div className={styles.cartItemPrice}>
        <span>{price} &#8372;</span>
      </div>
      <div className={styles.cartItemRemove}>
        <button className={styles.btnRemove}>
          <FontAwesomeIcon icon={farTimesCircle} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
