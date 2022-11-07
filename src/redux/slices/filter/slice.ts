import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { FilterSliceState, SortTypes } from './types';

const initialState: FilterSliceState = {
  category: 'all',
  searchText: '',
  currentPage: 1,
  sortBy: {
    name: 'Popular (DESC)',
    type: 'rating',
    order: 'desc',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<SortTypes>) => {
      state.sortBy = action.payload;
    },
    setCategory: (state, action: PayloadAction<number | string>) => {
      state.category = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action: PayloadAction<FilterSliceState>) => {
      state.sortBy = action.payload.sortBy;
      state.category = action.payload.category;
      state.searchText = action.payload.searchText;
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const filterSelector = (state: RootState) => state.filter;

// Action creators are generated for each case reducer function
export const { setSortBy, setCategory, setSearch, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
