import React from 'react';
import { MainLayout } from './layouts';
import { Home } from './pages';

import pizzas from './assets/db.json';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home items={pizzas} />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
