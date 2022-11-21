import React, { Suspense } from 'react';
import { MainLayout } from './layouts';
import { Home } from './pages';
import { Route, Routes } from 'react-router-dom';
import { SinglePizza } from './pages/pizzas/single';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/cart'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/404'));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route path="pizza/:id" element={<SinglePizza />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
