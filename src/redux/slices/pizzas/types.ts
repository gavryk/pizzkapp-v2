export type Pizza = {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export type SearchPizzaParams = {
  sortBy: SortByParams;
  category: string;
  searchText: string;
  currentPage: string;
};

export type SortByParams = {
  name: string;
  type: string;
  order: string;
};
