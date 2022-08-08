import { combineReducers } from 'redux';
import pizzas from './pizzas-fetch';

const rootReducer = combineReducers({
  pizzas,
});

export default rootReducer;
