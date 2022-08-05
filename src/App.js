import React from 'react';
import { MainLayout } from './layouts';
import Filter from './widgets/filter-widget';

const catList = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];

const App = () => {
  return (
    <MainLayout>
      <Filter catList={catList} />
    </MainLayout>
  );
};

export default App;
