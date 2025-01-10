export interface IGeneralFilter {
  search?: string;
  page: number;
}

export interface ITablePanigation extends IPagination {
  onPageChange: React.Dispatch<React.SetStateAction<IGeneralFilter>>;
}

export interface IPagination {
  previous_page: number | null;
  next_page: number | null;
  current_page: number;
  total_data: number;
  total_page: number;
}
