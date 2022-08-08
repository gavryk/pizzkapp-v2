import axios from 'axios';

export const fetchPizzas = () => {
  return (dispatch) => {
    axios.get('https://62efd80f8d7bc7c2eb81138f.mockapi.io/pizzas').then(({ data }) => {
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
