import React from 'react';
import { UICard, UIGrid } from '../../components';
import { FilterWidget } from '../../widgets';

const Home = ({ items }) => {
  return (
    <>
      <FilterWidget />
      <UIGrid columns="4" gap="32">
        {items.map((item) => (
          <UICard key={item.id} {...item} />
        ))}
      </UIGrid>
    </>
  );
};

export default Home;
