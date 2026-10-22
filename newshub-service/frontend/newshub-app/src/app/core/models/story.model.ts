export interface Story {
  id: number;
  title: string;
  description: string;
  publicationTime: string; // ISO-строка, при необходимости преобразуется в Date
  url: string;
  mediaSourceName: string;
  categoryName: string;
}
