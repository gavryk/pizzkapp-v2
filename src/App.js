import React from 'react';
import { MainLayout } from './layouts';
import { Cart, Home, NotFound } from './pages';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
