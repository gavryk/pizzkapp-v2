import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const SinglePizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchSinglePizza() {
      try {
        const { data } = await axios.get(
          `https://62f6ca0ba3bce3eed7c7ca7a.mockapi.io/pizzas/${id}`,
        );
        setPizza(data);
      } catch (error) {
        alert('Oops, something wrong...');
      }
    }
    fetchSinglePizza();
  }, []);

  if (!pizza) {
    return 'Loading...';
  }

  return (
    <div>
      <h1>{pizza.name}</h1>
    </div>
  );
};
