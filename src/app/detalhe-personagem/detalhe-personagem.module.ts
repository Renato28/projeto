import { AppModule } from './../app.module';
import { RouterModule } from '@angular/router';
import { DetalhePersonagemService } from './detalhe-personagem.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalhePersonagemComponent } from './detalhe-personagem.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppModule
  ],
  declarations: [
      DetalhePersonagemComponent
  ],
  exports: [DetalhePersonagemComponent],
  providers: [DetalhePersonagemService]
})
export class DetalhePersonagemModule { }
