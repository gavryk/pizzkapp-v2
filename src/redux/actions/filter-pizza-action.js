export const setSortBy = (name) => {
  return {
    type: 'SET_SORT_BY',
    payload: name,
  };
};

export const setCategory = (catIndex) => {
  return {
    type: 'SET_CATEGORY',
    payload: catIndex,
  };
};

export const setSearch = (searchText) => {
  return {
    type: 'SET_SEARCH',
    payload: searchText,
  };
};
