import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: null,
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
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearch: (state, action) => {
      state.searchText = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.sortBy = action.payload.sortBy;
      state.category = action.payload.category;
      state.searchText = action.payload.searchText;
      state.currentPage = Number(action.payload.currentPage);
    },
  },
});

export const filterSelector = (state) => state.filter;

// Action creators are generated for each case reducer function
export const { setSortBy, setCategory, setSearch, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
