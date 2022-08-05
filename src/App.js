import React from 'react';
import { MainLayout } from './layouts';
import { Filter, Sort } from './widgets';

const catList = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];
const sortList = [
  { name: 'Popular', type: 'rating', order: 'desc' },
  { name: 'Price', type: 'price', order: 'desc' },
  { name: 'Alphabet', type: 'name', order: 'asc' },
];

const App = () => {
  return (
    <MainLayout>
      <Filter catList={catList} />
      <Sort sortList={sortList} />
    </MainLayout>
  );
};

export default App;
