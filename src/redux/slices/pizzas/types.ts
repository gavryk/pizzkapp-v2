export type Pizza = {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number | string;
  rating: number;
};

export type SearchPizzaParams = {
  sortBy: SortByParams;
  category: number | string;
  searchText: string;
  currentPage: number;
};

export type SortByParams = {
  name: string;
  type: string;
  order: string;
};

// export enum Status {
//   LOADING = 'loading',
//   SUCCESS = 'success',
//   ERROR = 'error',
// }

export interface PizzaSliceState {
  items: Pizza[];
  limit: number;
  isLoaded: string;
}
