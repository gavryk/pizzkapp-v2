import Loadable from 'react-loadable';
import React from 'react';
import { MainLayout } from './layouts';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { Spinner } from './components';

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ './pages/cart'),
  loading: () => <Spinner />,
});
const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound" */ './pages/404'),
  loading: () => <Spinner />,
});
const SinglePizza = Loadable({
  loader: () => import(/* webpackChunkName: "SinglePizza" */ './pages/pizzas/single'),
  loading: () => <Spinner />,
});

//React Lazy
// const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ './pages/cart'));
// const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/404'));
// const SinglePizza = lazy(
//   () => import(/* webpackChunkName: "SinglePizza" */ './pages/pizzas/single'),
// );

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<SinglePizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
