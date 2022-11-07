import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizza, SearchPizzaParams } from './types';

const dbmock = 'https://62f6ca0ba3bce3eed7c7ca7a.mockapi.io';

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params, thunkAPI) => {
    const { category, sortBy, searchText, currentPage } = params;
    let catQuery = category !== 'all' ? `category=${category}&` : '';
    let searchQuery = searchText !== null ? `&search=${searchText}` : '';
    const { data } = await axios.get<Pizza[]>(
      `${dbmock}/pizzas?page=${currentPage}&limit=8&${catQuery}sortBy=${sortBy.type.replace(
        '-',
        '',
      )}&order=${sortBy.order}${searchQuery}`,
    );
    return data;
  },
);
