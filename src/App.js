import React from 'react';
import { MainLayout } from './layouts';
import { FilterWidget } from './widgets';

import pizzas from './assets/db.json';
import { UICard, UIGrid } from './components';

console.log(pizzas);

const App = () => {
  return (
    <MainLayout>
      <FilterWidget />
      <UIGrid columns="4" gap="32">
        {pizzas.map((item) => (
          <UICard key={item.id} {...item} />
        ))}
      </UIGrid>
    </MainLayout>
  );
};

export default App;
