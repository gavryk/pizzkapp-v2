import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle as farTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const UICartItem = ({ imgUrl, name, type, size, totalCountPizzas, totalPricePizzas }) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <img src={imgUrl} alt="name" />
      </div>
      <div className={styles.cartItemName}>
        <h4>{name}</h4>
        <p>
          {type}, {size} sm
        </p>
      </div>
      <div className={styles.cartItemCount}>
        <button className="btn-minus">
          <FontAwesomeIcon icon={faMinusCircle} />
        </button>
        <span>{totalCountPizzas}</span>
        <button className="btn-plus">
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
      <div className={styles.cartItemPrice}>
        <span>{totalPricePizzas} &#8372;</span>
      </div>
      <div className={styles.cartItemRemove}>
        <button className={styles.btnRemove}>
          <FontAwesomeIcon icon={farTimesCircle} />
        </button>
      </div>
    </div>
  );
};

export default UICartItem;
