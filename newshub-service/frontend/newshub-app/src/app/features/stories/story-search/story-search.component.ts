import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { form, FormRoot } from '@angular/forms/signals';
import { StoryService } from '../../../core/services/story.service';
import { CategoryService } from '../../../core/services/category.service';
import { MediaSourceService } from '../../../core/services/media-source.service';
import { StoryFilter } from '../../../core/models/story-filter.model';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatHint, MatInput, MatLabel, MatSuffix } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
//import { range } from 'rxjs';

import { StoryListComponent, PageChange } from '../story-list/story-list.component';

@Component({
  selector: 'app-story-search',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    StoryListComponent,
    MatCard,
    MatFormField,
    MatSelect,
    MatInput,
    MatButton,
    FormRoot,
    MatCardContent,
    MatLabel,
    MatOption,
    MatIcon,
    MatSuffix,
  ],
  templateUrl: './story-search.component.html',
  styleUrl: './story-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StorySearchComponent {
  private readonly storyService = inject(StoryService);
  private readonly categoryService = inject(CategoryService);
  private readonly mediaSourceService = inject(MediaSourceService);

  readonly categories = this.categoryService.categories;
  readonly sources = this.mediaSourceService.sources;

  readonly filterModel = signal<StoryFilter>({
    categoryIds: [],
    mediaSourceIds: [],
    dateFrom: null,
    dateTo: null,
    keyword: '',
    page: 0,
    size: 20,
  });

  readonly filterForm = form(this.filterModel);

  readonly storiesResource = this.storyService.createSearchResource(() => this.filterModel());

  readonly stories = computed(() => this.storiesResource.value()?.content ?? []);
  readonly totalElements = computed(() => this.storiesResource.value()?.totalElements ?? 0);

  // --- Обработчики формы ---

  onCategoriesChange(ids: number[]): void {
    this.filterModel.update((f) => ({ ...f, categoryIds: ids, page: 0 }));
  }

  onSourcesChange(ids: number[]): void {
    this.filterModel.update((f) => ({ ...f, mediaSourceIds: ids, page: 0 }));
  }

  onDateFromChange(date: Date | null): void {
    this.filterModel.update((f) => ({
      ...f,
      dateFrom: date ? formatDate(date, 'yyyy-MM-dd', 'en') : null,
      page: 0,
    }));
  }

  onDateToChange(date: Date | null): void {
    this.filterModel.update((f) => ({
      ...f,
      dateTo: date ? formatDate(date, 'yyyy-MM-dd', 'en') : null,
      page: 0,
    }));
  }

  onKeywordChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.filterModel.update((f) => ({ ...f, keyword: value, page: 0 }));
  }

  onSearch(event: Event): void {
    event.preventDefault();
    this.filterModel.update((f) => ({ ...f, page: 0 }));
  }

  // --- Обработчик пагинации от дочернего компонента ---

  onPageChange(event: PageChange): void {
    this.filterModel.update((f) => ({
      ...f,
      page: event.pageIndex,
      size: event.pageSize,
    }));
  }
}
