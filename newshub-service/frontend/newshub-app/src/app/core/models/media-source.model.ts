import { Category } from './category.model';

export interface MediaSource {
  id: number;
  name: string;
  type: string;
  url: string;
  category: Category;
}
