export type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

export interface CartSlideProps {
  items: CartItem[];
  totalPrice: number;
  totalCount: number;
}
