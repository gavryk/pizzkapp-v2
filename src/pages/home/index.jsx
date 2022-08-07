import React from 'react';
import { UICard, UIGrid, UITitle, SkeletonCard } from '../../components';
import { FilterWidget } from '../../widgets';

const Home = ({ items }) => {
  const load = false;

  const pizzas = items.map((item) => <UICard key={item.id} {...item} />);
  const skeletons = [...new Array(8)].map((_, index) => <SkeletonCard key={index} />);
  return (
    <>
      <FilterWidget />
      <UITitle variant="h2" fontWeight="bold" bottomSpace="md">
        All Pizzas
      </UITitle>
      <UIGrid columns="4" gap="32">
        {!load ? pizzas : skeletons}
      </UIGrid>
    </>
  );
};

export default Home;
