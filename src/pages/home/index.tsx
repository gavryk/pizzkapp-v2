import React, { useEffect } from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { UICard, UIGrid, UITypography, SkeletonCard, Pagination } from '../../components';
import {
  setCategory,
  setCurrentPage,
  setSortBy,
  setFilters,
  filterSelector,
} from '../../redux/slices/filter/slice';
import { fetchPizzas } from '../../redux/slices/pizzas/asyncAction';
import { FilterWidget } from '../../widgets';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { addItem } from '../../redux/slices/cart/slice';
import { pizzaSelector } from '../../redux/slices/pizzas/slice';
import { SortTypes } from '../../redux/slices/filter/types';
import { sortList } from '../../widgets/filter-widget/model';
import { Pizza } from '../../redux/slices/pizzas/types';
import { CartItem } from '../../redux/slices/cart/types';
import { useAppDispatch } from '../../redux/store';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items, isLoaded, limit } = useSelector(pizzaSelector);
  const { category, sortBy, searchText, currentPage } = useSelector(filterSelector);
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  //First Fatching Pizzas
  useEffect(() => {
    if (!isSearch.current) {
      dispatch(fetchPizzas({ category, sortBy, searchText, currentPage }));
    }
    isSearch.current = false;
    window.scrollTo(0, 0);
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
          sortBy: Object(sortParams),
          category: params.category !== 'all' ? Number(params.category) : 'all',
          searchText: String(params.searchText),
          currentPage: Number(params.currentPage),
        }),
      );
      isSearch.current = true;
    }
  }, [dispatch]);

  const selectCatHandler = (cat: number | string) => {
    dispatch(setCategory(cat));
  };

  const selectSortHandler = (type: SortTypes) => {
    dispatch(setSortBy(type));
  };

  const selectCurrentPage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const addToCart = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const pizzas = items.map((item: Pizza) => (
    <UICard key={item.id} {...item} addToCart={addToCart} />
  ));
  const skeletons = [...new Array(8)].map((_, index) => <SkeletonCard key={index} />);

  return isLoaded === 'error' ? (
    <>
      <UITypography variant="h2" fontWeight="bold" bottomSpace="sm" textAlign="center">
        An error has occurred!
      </UITypography>
      <UITypography variant="h5" fontWeight="regular" bottomSpace="none" textAlign="center">
        Sorry, we couldn't get pizzas. Please try again later.
      </UITypography>
    </>
  ) : (
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
