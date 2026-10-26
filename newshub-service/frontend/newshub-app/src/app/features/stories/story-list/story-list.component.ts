import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Story } from '../../../core/models/story.model';

export interface PageChange {
  pageIndex: number;
  pageSize: number;
}

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [
    DatePipe,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryListComponent {
  /** Список историй для отображения. */
  readonly stories = input.required<Story[]>();

  /** Общее количество историй (для пагинатора). */
  readonly totalElements = input.required<number>();

  /** Текущий размер страницы. */
  readonly pageSize = input.required<number>();

  /** Индекс текущей страницы (0-based). */
  readonly pageIndex = input.required<number>();

  /** Флаг загрузки. */
  readonly isLoading = input<boolean>(false);

  /** Ошибка загрузки (unknown, если есть). */
  readonly error = input<unknown>(null);

  /** Событие смены страницы или размера. */
  readonly pageChange = output<PageChange>();

  onPage(event: PageEvent): void {
    this.pageChange.emit({
      pageIndex: event.pageIndex,
      pageSize: event.pageSize,
    });
  }
}
