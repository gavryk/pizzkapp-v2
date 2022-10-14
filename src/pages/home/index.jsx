import React, { useEffect } from 'react';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { UICard, UIGrid, UITypography, SkeletonCard, Pagination } from '../../components';
import {
  setCategory,
  setCurrentPage,
  setSortBy,
  setFilters,
} from '../../redux/slices/filter/slice';
import { fetchPizzas } from '../../redux/slices/pizzas/asyncAction';
import { FilterWidget, sortList } from '../../widgets';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { addItem } from '../../redux/slices/cart/slice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, isLoaded, limit } = useSelector((state) => state.pizza);
  const { category, sortBy, searchText, currentPage } = useSelector((state) => state.filter);
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  //First Fatching Pizzas
  useEffect(() => {
    if (!isSearch.current) {
      dispatch(fetchPizzas({ category, sortBy, searchText, currentPage }));
    }
    isSearch.current = false;
  }, [dispatch, category, sortBy, searchText, currentPage]);

  //Set Query String
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortBy: sortBy.type,
        category,
        searchText,
        currentPage,
      });
      navigate(`/?${queryString}`);
    }
    isMounted.current = true;
  }, [category, sortBy, searchText, currentPage, navigate]);

  //Parse Query String and set in state
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortParams = sortList.find((obj) => obj.type === params.sortBy);
      dispatch(
        setFilters({
          sortBy: sortParams,
          category: params.category !== '' ? Number(params.category) : null,
          searchText: params.searchText,
          currentPage: params.currentPage,
        }),
      );
      isSearch.current = true;
    }
  }, [dispatch]);

  const selectCatHandler = (index) => {
    dispatch(setCategory(index));
  };

  const selectSortHandler = (type) => {
    dispatch(setSortBy(type));
  };

  const selectCurrentPage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  const pizzas = items.map((item) => <UICard key={item.id} {...item} addToCart={addToCart} />);
  const skeletons = [...new Array(8)].map((_, index) => <SkeletonCard key={index} />);

  return (
    <>
      <FilterWidget
        sortBy={sortBy}
        category={category}
        onCategory={selectCatHandler}
        onSort={selectSortHandler}
      />
      <UITypography variant="h2" fontWeight="bold" bottomSpace="md">
        All Pizzas
      </UITypography>
      <UIGrid columns={4} gridGap={8}>
        {isLoaded === 'success' ? pizzas : skeletons}
      </UIGrid>
      <Pagination
        totalItemsCount={25}
        pageSize={limit}
        currentPage={currentPage}
        onChangedPage={selectCurrentPage}
      />
    </>
  );
};

export default Home;
