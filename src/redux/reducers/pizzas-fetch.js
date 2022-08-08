const initState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default pizzas;
