import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListarPersonagensComponent } from './listar-personagens.component';
import { PersonagemModule } from '../shared/personagem/personagem.module';

@NgModule({
  imports: [
    CommonModule,
    PersonagemModule,
    HttpClientModule,
  ],
  declarations: [ListarPersonagensComponent],
  exports: [ListarPersonagensComponent]
})
export class ListarPersonagensModule { }

