import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UICard, UIGrid, UITitle, SkeletonCard, Pagination } from '../../components';
import { fetchPizzas, setCurrentPage } from '../../redux/actions/fetch-pizza-action';
import { setCategory, setSortBy } from '../../redux/actions/filter-pizza-action';
import { FilterWidget } from '../../widgets';

const Home = () => {
  const dispatch = useDispatch();
  const { items, isLoaded, currentPage, limit } = useSelector(({ pizzas }) => pizzas);
  const { category, sortBy, searchText } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy, searchText, currentPage));
  }, [dispatch, category, sortBy, searchText, currentPage]);

  const selectCatHandler = (index) => {
    dispatch(setCategory(index));
  };

  const selectSortHandler = (type) => {
    dispatch(setSortBy(type));
  };

  const selectCurrentPage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const pizzas = items.map((item) => <UICard key={item.id} {...item} />);
  const skeletons = [...new Array(8)].map((_, index) => <SkeletonCard key={index} />);

  return (
    <>
      <FilterWidget
        sortBy={sortBy}
        category={category}
        onCategory={selectCatHandler}
        onSort={selectSortHandler}
      />
      <UITitle variant="h2" fontWeight="bold" bottomSpace="md">
        All Pizzas
      </UITitle>
      <UIGrid columns={4} gridGap={8}>
        {isLoaded ? pizzas : skeletons}
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
