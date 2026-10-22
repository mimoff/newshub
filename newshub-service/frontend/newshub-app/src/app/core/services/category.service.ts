import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Category } from '../models/category.model';
import {environment} from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private apiUrl = environment.apiUrl;
  readonly categoriesResource = httpResource<Category[]>(() => ({
    url: this.apiUrl+'api/categories',
    method: 'GET',
  }));

  readonly categories = this.categoriesResource.value.asReadonly();
  readonly isLoading = this.categoriesResource.isLoading;
  readonly error = this.categoriesResource.error;
}
