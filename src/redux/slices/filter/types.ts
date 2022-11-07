export type SortTypes = {
  name: string;
  type: string;
  order: string;
};

export interface FilterSliceState {
  category: number | string;
  searchText: string;
  currentPage: number;
  sortBy: SortTypes;
}
