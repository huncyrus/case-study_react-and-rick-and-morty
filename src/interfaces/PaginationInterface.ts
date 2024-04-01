export interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

export interface PreviousButtonProps {
  page: number;
  setPage: (page: number) => void;
}

export interface NextButtonProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export interface PageCounterProps {
  page: number;
  totalPages: number;
}
