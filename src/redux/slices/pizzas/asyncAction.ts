import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dbmock = 'https://62f6ca0ba3bce3eed7c7ca7a.mockapi.io';

type Pizza = {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

type SearchPizzaParams = {
  sortBy: SortByParams;
  category: string;
  searchText: string;
  currentPage: string;
};

type SortByParams = {
  name: string;
  type: string;
  order: string;
};

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async (params, thunkAPI) => {
    const { category, sortBy, searchText, currentPage } = params;
    let catQuery = category !== null ? `category=${category}&` : '';
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
