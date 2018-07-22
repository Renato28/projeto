import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListarPersonagensComponent } from './listar-personagens.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

  ],
  declarations: [ ListarPersonagensComponent],
  exports: [ListarPersonagensComponent]
})
export class ListarPersonagensModule { }

