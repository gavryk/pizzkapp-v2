import axios from 'axios';

export const fetchPizzas = () => {
  return (dispatch) => {
    axios.get('https://62f6ca0ba3bce3eed7c7ca7a.mockapi.io/pizzas').then(({ data }) => {
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
