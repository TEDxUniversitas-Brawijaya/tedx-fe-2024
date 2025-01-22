export interface IGeneralFilter {
  search?: string;
  page: number;
}

export interface ITablePanigation extends IPagination {
  onPageChange: React.Dispatch<React.SetStateAction<IGeneralFilter>>;
}

export interface IPagination {
  previous_page?: number;
  next_page?: number;
  current_page: number;
  total_data: number;
  total_page: number;
}
