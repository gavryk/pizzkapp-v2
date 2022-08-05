import React from 'react';
import { UIDropdown } from './components';
import { MainLayout } from './layouts';
import { FilterWidget } from './widgets';

const catList = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];
const sortList = [
  { name: 'Popular', type: 'rating', order: 'desc' },
  { name: 'Price', type: 'price', order: 'desc' },
  { name: 'Alphabet', type: 'name', order: 'asc' },
];

const App = () => {
  return (
    <MainLayout>
      <FilterWidget catList={catList} sortList={sortList} />
    </MainLayout>
  );
};

export default App;
