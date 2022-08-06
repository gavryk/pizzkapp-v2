import React from 'react';
import { UIDropdown } from './components';
import { MainLayout } from './layouts';
import { FilterWidget } from './widgets';

const App = () => {
  return (
    <MainLayout>
      <FilterWidget />
    </MainLayout>
  );
};

export default App;
