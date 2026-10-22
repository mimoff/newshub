export interface StoryFilter {
  categoryIds: number[];
  mediaSourceIds: number[];
  dateFrom: string | null; // ISO-дата (yyyy-MM-dd)
  dateTo: string | null;
  keyword: string;
  page: number;
  size: number;
}
