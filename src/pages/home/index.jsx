import React from 'react';
import { UICard, UIGrid, UITitle } from '../../components';
import { FilterWidget } from '../../widgets';

const Home = ({ items }) => {
  return (
    <>
      <FilterWidget />
      <UITitle variant="h2" fontWeight="bold" bottomSpace="md">
        All Pizzas
      </UITitle>
      <UIGrid columns="4" gap="32">
        {items.map((item) => (
          <UICard key={item.id} {...item} />
        ))}
      </UIGrid>
    </>
  );
};

export default Home;
