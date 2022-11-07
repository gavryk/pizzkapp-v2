import { MainLayout } from './layouts';
import { Cart, Home, NotFound } from './pages';
import { Route, Routes } from 'react-router-dom';
import { SinglePizza } from './pages/pizzas/single';

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
