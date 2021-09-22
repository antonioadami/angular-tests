import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

interface ICepResponse {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
  location: {
    type: string;
    coordinates: {
      longitude: string;
      latitude: string;
    };
  };
}

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
