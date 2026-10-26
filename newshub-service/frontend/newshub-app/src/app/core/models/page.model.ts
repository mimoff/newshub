export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number; // текущая страница (0-based)
  size: number;
}
