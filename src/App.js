import React from 'react';
import { UIDropdown } from './components';
import { MainLayout } from './layouts';
import { Filter } from './widgets';

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
      <UIDropdown sortList={sortList} />
    </MainLayout>
  );
};

export default App;
