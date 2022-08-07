import React, { useEffect, useState } from 'react';
import { MainLayout } from './layouts';
import { Home } from './pages';

import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('https://62efd80f8d7bc7c2eb81138f.mockapi.io/pizzas').then(({ data }) => {
      setPizzas(data);
    });
  }, []);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home items={pizzas} />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
