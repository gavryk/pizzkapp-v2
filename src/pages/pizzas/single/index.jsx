import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UIGrid, UITypography } from '../../../components';
import { setStatus } from '../../../redux/slices/pizzas/slice';
import styles from '../../../styles/pages/Single.module.scss';

export const SinglePizza = () => {
  const dispatch = useDispatch();
  const [pizza, setPizza] = useState();
  const { id } = useParams();

  useEffect(() => {
    dispatch(setStatus('loading'));
    async function fetchSinglePizza() {
      try {
        const { data } = await axios.get(
          `https://62f6ca0ba3bce3eed7c7ca7a.mockapi.io/pizzas/${id}`,
        );
        setPizza(data);
        dispatch(setStatus('success'));
      } catch (error) {
        alert('Oops, something wrong...');
      }
    }
    fetchSinglePizza();
  }, [id, dispatch]);

  // if (!pizza) {
  //   return 'Loading...';
  // }

  return (
    <>
      {!pizza ? (
        <UITypography variant="h2">Loading...</UITypography>
      ) : (
        <div className={styles.singlePage}>
          <UIGrid columns={2} gridGap={5}>
            <div className={styles.singleImage}>
              <div className={styles.image}>
                <img src={pizza.imageUrl} alt={pizza.name} />
              </div>
            </div>
            <div className={styles.singleDescription}>
              <UITypography variant="h1" fontWeight="bold">
                {pizza.name}
              </UITypography>
              <UITypography variant="h5">{pizza.description}</UITypography>
              <div className={styles.info}>
                <UITypography variant="h5" fontWeight="bold">
                  Available Sizes: {pizza.sizes.map((size) => ` ${size}sm, `)}
                </UITypography>
                <UITypography variant="h5" fontWeight="bold">
                  Price: {pizza.price} $
                </UITypography>
              </div>
            </div>
          </UIGrid>
        </div>
      )}
    </>
  );
};
