import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpErrorResponse } from '@angular/common/http';
import { CepService } from './cep.service';

import { environment } from '../../environments/environment';

describe('CepService', () => {
  let httpMock: HttpTestingController;
  let cepService: CepService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CepService],
    });

    httpMock = TestBed.inject(HttpTestingController);
    cepService = TestBed.inject(CepService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it(`Deve buscar um cep e retornar o endereço`, () => {
    const cep = '37540-000';
    const responseAddress = {
      cep: '37540000',
      state: 'MG',
      city: 'Santa Rita do Sapucaí',
      neighborhood: '',
      street: '',
      service: 'viacep',
      location: {
        type: 'Point',
        coordinates: {
          longitude: '-45.7064507',
          latitude: '-22.2486968',
        },
      },
    };
    const url = `${environment.brasilApiUrl}/cep/v2/37540-000`;

    cepService.getAddressByCep(cep).subscribe(address => {
      expect(address).toEqual(responseAddress);
    });

    const req = httpMock.expectOne(url);

    expect(req.request.method).toBe('GET');

    req.flush(responseAddress);

    httpMock.verify();
  });

  it('Deve buscar um cep inválido e retornar erro 404', () => {
    const invalidCep = '11111111';
    const errorOpts = {
      status: 404,
      statusText: 'Ok',
    };

    cepService.getAddressByCep(invalidCep).subscribe(
      () => fail('Deveria retornar um erro 404'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
      },
    );

    const req = httpMock.expectOne(
      `${environment.brasilApiUrl}/cep/v2/11111111`,
    );

    req.flush({}, errorOpts);
  });
});
