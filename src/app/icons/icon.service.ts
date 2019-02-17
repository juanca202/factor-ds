import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  endpoint = `${environment.icons.metadataPath}`;

  constructor(
    private http: HttpClient
  ) { }

  find(params?) {
    const url = `${this.endpoint}`;
    return this.http.get(url);
  }
}
