import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UICard, UIGrid, UITitle, SkeletonCard } from '../../components';
import { fetchPizzas } from '../../redux/actions/fetch-pizza-action';
import { FilterWidget } from '../../widgets';

const Home = () => {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  const pizzas = items.map((item) => <UICard key={item.id} {...item} />);
  const skeletons = [...new Array(8)].map((_, index) => <SkeletonCard key={index} />);

  return (
    <>
      <FilterWidget />
      <UITitle variant="h2" fontWeight="bold" bottomSpace="md">
        All Pizzas
      </UITitle>
      <UIGrid columns={4} gridGap={8}>
        {isLoaded ? pizzas : skeletons}
      </UIGrid>
    </>
  );
};

export default Home;
