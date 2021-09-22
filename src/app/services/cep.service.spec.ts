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

  it(`should get address as an Observable`, () => {
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

    cepService.getAddressByCep(cep).subscribe(address => {
      expect(address).toEqual(jasmine.objectContaining(responseAddress));
    });

    const req = httpMock.expectOne(
      `${environment.brasilApiUrl}/cep/v2/37540-000`,
    );
    expect(req.request.method).toBe('GET');

    req.flush(responseAddress);
  });

  it('can test for 404 error', () => {
    const emsg = 'deliberate 404 error';
    const emptyCep = '';
    const sendError = { status: 404, statusText: 'Not Found' };

    cepService.getAddressByCep(emptyCep).subscribe(
      () => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      },
    );

    const req = httpMock.expectOne(`${environment.brasilApiUrl}/cep/v2/`);

    req.flush(emsg, sendError);
  });
});
