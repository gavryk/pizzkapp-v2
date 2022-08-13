import { combineReducers } from 'redux';
import pizzas from './pizzas-fetch';
import filters from './pizzas-filters';

const rootReducer = combineReducers({
  pizzas,
  filters,
});

export default rootReducer;
