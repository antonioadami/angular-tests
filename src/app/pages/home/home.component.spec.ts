import {
  async,
  ComponentFixture,
  getTestBed,
  TestBed,
} from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { CepService } from 'src/app/services/cep.service';
import { ICepResponse } from 'src/app/models/ICepResponse';
import { HomeComponent } from './home.component';

class MockCepService {
  getAddressByCep(cep: string): Observable<ICepResponse> | null {
    return null;
  }
}

describe('HomeComponent', () => {
  let injector: TestBed;

  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let cepService: CepService;

  let botao: any;
  let input: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,

        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
      ],
      providers: [{ provide: CepService, useClass: MockCepService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    cepService = injector.get(CepService);

    botao = fixture.nativeElement.querySelector('.buscar-button');

    fixture.detectChanges();
  });

  it('Uma instância do componente deve ser criada', () => {
    expect(component).toBeTruthy();
  });

  it(`Deve conter o título 'Insira seu CEP'`, async(() => {
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Insira seu CEP');
  }));

  it(`Deve buscar endereço ao inserir um cep no input e apertar o botão`, async(() => {
    const mockResponse: ICepResponse = {
      cep: '01311000',
      state: 'SP',
      city: 'São Paulo',
      neighborhood: 'Bela Vista',
      street: 'Avenida Paulista',
      service: 'viacep',
      location: {
        type: 'Point',
        coordinates: { longitude: '-46.6618604', latitude: '-23.5564529' },
      },
    };

    spyOn(cepService, 'getAddressByCep').and.returnValue(of(mockResponse));

    component.cep = '01311000';
    botao.click();

    fixture.detectChanges();

    expect(cepService.getAddressByCep).toHaveBeenCalledTimes(1);
    expect(cepService.getAddressByCep).toHaveBeenCalledWith('01311000');
    expect(component.addresses).toContain(mockResponse);
  }));

  it(`Deve buscar um cep inválido e retornar um erro`, async(() => {
    const erroResponse = {
      name: 'CepPromiseError',
      message: 'Todos os serviços de CEP retornaram erro.',
      type: 'service_error',
      errors: [
        { name: 'ServiceError', message: 'CEP INVÁLIDO', service: 'correios' },
        {
          name: 'ServiceError',
          message: 'CEP não encontrado na base do ViaCEP.',
          service: 'viacep',
        },
        {
          name: 'ServiceError',
          message: 'Erro ao se conectar com o serviço WideNet.',
          service: 'widenet',
        },
      ],
    };

    spyOn(cepService, 'getAddressByCep').and.returnValue(
      throwError(new HttpErrorResponse({ error: erroResponse })),
    );

    component.cep = '11111111';
    botao.click();

    fixture.detectChanges();

    expect(cepService.getAddressByCep).toHaveBeenCalledTimes(1);
    expect(cepService.getAddressByCep).toHaveBeenCalledWith('11111111');
    expect(component.erro).toBe(erroResponse.message);
  }));
});
