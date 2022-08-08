import React from 'react';
import { MainLayout } from './layouts';
import { Home } from './pages';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
