import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faShoppingCart, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CartTop } from './top';
import { UIButton, UIGrid } from '../../../components';
import { CartItemBlock } from './item';
import { CartTotal } from './total';
import { useDispatch } from 'react-redux';
import { clearItems } from '../../../redux/slices/cart/slice';

interface CartTabProps {
  items: ItemsProps[];
  totalCount: number;
  totalPrice: number;
}

type ItemsProps = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  size: number;
  type: string;
  count: number;
};

export const CartTab: React.FC<CartTabProps> = ({ items, totalCount, totalPrice }) => {
  const dispath = useDispatch();

  const clearCart = () => {
    if (window.confirm('Clear Cart?')) {
      dispath(clearItems());
    }
  };

  return (
    <>
      <CartTop
        title="Cart"
        titleIcon={
          <FontAwesomeIcon icon={faShoppingCart} size="xs" style={{ marginRight: `10px` }} />
        }>
        <UIButton variants="text" onClick={clearCart}>
          <FontAwesomeIcon icon={faTrashAlt} />
          <span>Clear Cart</span>
        </UIButton>
      </CartTop>
      <UIGrid columns={1} gridGap={2}>
        {items &&
          items.map((item) => (
            <CartItemBlock key={`${item.id}_${item.size}_${item.type}`} {...item} />
          ))}
      </UIGrid>
      <CartTotal totalCount={totalCount} totalPrice={totalPrice} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/">
          <UIButton color="orange" variants="outlined">
            <FontAwesomeIcon icon={faChevronLeft} />
            Come Back
          </UIButton>
        </Link>
        <UIButton color="orange" variants="contained">
          Pay Now
        </UIButton>
      </div>
    </>
  );
};
