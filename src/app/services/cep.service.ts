import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { ICepResponse } from '../models/ICepResponse';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private BASE_URL = environment.brasilApiUrl;

  constructor(private http: HttpClient) {}

  getAddressByCep(cep: string): Observable<ICepResponse> {
    return this.http.get<ICepResponse>(`${this.BASE_URL}/cep/v2/${cep}`);
  }
}
