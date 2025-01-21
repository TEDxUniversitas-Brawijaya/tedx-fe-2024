export type DialogType = "create" | "payment" | "success";

export interface DialogState<T> {
  isOpen: boolean;
  type: DialogType;
  data: T | null;
}

export interface IResponsePagination {
  prev: number;
  current: number;
  next: number;
  totalPage: number;
  totalData: number;
}

export interface IRootResponse {
  message: string;
  pagination?: IResponsePagination;
}

export interface IGeneralFilter {
  keyword?: string;
  page: number;
  status?: string;
  limit?: number;
}
