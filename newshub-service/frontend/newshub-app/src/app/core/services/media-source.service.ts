import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { MediaSource } from '../models/media-source.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MediaSourceService {
  private apiUrl = environment.apiUrl;
  readonly sourcesResource = httpResource<MediaSource[]>(() => ({
    url: this.apiUrl+'api/mediasources',
    method: 'GET',
  }));

  readonly sources = this.sourcesResource.value.asReadonly();
  readonly isLoading = this.sourcesResource.isLoading;
  readonly error = this.sourcesResource.error;
}
