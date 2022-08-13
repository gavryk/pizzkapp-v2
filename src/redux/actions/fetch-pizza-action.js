import axios from 'axios';

const dbmock = 'https://62f6ca0ba3bce3eed7c7ca7a.mockapi.io';

export const fetchPizzas = (category, sortBy) => {
  let catQuery = category !== null ? `category=${category}&` : '';
  return (dispatch) => {
    axios
      .get(`${dbmock}/pizzas?${catQuery}sortBy=${sortBy.type}&order=${sortBy.order}`)
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  };
};

export const setPizzas = (items) => {
  return {
    type: 'SET_PIZZAS',
    payload: items,
  };
};
