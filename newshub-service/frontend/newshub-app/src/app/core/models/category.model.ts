export interface Category {
  id: number;
  name: string;
}

// core/models/story-filter.model.ts — параметры поиска
export interface StoryFilter {
  categoryIds: number[];
  mediaSourceIds: number[];
  dateFrom: string | null; // ISO-дата (yyyy-MM-dd)
  dateTo: string | null;
  keyword: string;
  page: number;
  size: number;
}
