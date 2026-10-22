import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { StoryFilter } from '../models/story-filter.model';
import { Page } from '../models/page.model';
import { Story } from '../models/story.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StoryService {
  /**
   * Реактивный ресурс для поиска историй.
   * Ресурс автоматически перезапрашивается при изменении сигнала filter.
   */
  private apiUrl = environment.apiUrl;

  createSearchResource(filter: () => StoryFilter) {
    return httpResource<Page<Story>>(() => {
      const f = filter();

      return {
        url: this.apiUrl+'api/stories',
        method: 'GET',
        params: {
          // Массивы передаются как повторяющиеся query-параметры (Spring @RequestParam List<Long>)
          categoryIds: f.categoryIds,
          mediaSourceIds: f.mediaSourceIds,
          dateFrom: f.dateFrom ?? '',
          dateTo: f.dateTo ?? '',
          keyword: f.keyword,
          page: f.page.toString(),
          size: f.size.toString(),
        },
      };
    });
  }
}
