import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Spinner, UIButton, UIGrid, UITypography } from '../../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/pages/Single.module.scss';
import { setStatus } from '../../../redux/slices/settings/slice';

interface PizzaProps {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  description: string;
  sizes: number[];
}

const SinglePizza: React.FC = () => {
  const dispatch = useDispatch();
  const [pizza, setPizza] = useState<PizzaProps>();
  const { id } = useParams();
  const navigate = useNavigate();

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
        navigate('/');
      }
    }
    fetchSinglePizza();
  }, [id, dispatch, navigate]);

  return (
    <>
      {!pizza ? (
        <Spinner />
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
                <Link to="/">
                  <UIButton color="orange">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    Go Back To Shop
                  </UIButton>
                </Link>
              </div>
            </div>
          </UIGrid>
        </div>
      )}
    </>
  );
};

export default SinglePizza;
