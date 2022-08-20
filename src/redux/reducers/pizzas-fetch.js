const initState = {
  items: [],
  currentPage: 1,
  limit: 8,
  isLoaded: false,
};

const pizzas = (state = initState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoaded: action.payload,
      };
    case 'SET_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default pizzas;
