import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

import { ICepResponse } from 'src/app/models/ICepResponse';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild(MatTable) table: MatTable<ICepResponse>;

  title = 'Insira seu CEP';

  cep: string;

  erro: string | null = null;

  addresses: ICepResponse[] = [];

  columns = [
    'cep',
    'cidade',
    'estado',
    'rua',
    'bairro',
    'latitude',
    'longitude',
  ];

  constructor(private cepService: CepService) {}

  buscar(): void {
    this.cepService.getAddressByCep(this.cep).subscribe(
      ans => {
        this.erro = null;
        this.addresses.push(ans);
        this.table.renderRows();
      },
      err => {
        this.erro = err.error.message;
      },
    );
  }
}
