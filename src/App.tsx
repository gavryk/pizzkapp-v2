import React, { lazy, Suspense } from 'react';
import { MainLayout } from './layouts';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { Spinner } from './components';

const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ './pages/cart'));
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/404'));
const SinglePizza = lazy(
  () => import(/* webpackChunkName: "SinglePizza" */ './pages/pizzas/single'),
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<Spinner />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <SinglePizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Spinner />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
