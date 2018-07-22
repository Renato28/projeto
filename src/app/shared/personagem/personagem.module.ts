import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { PersonagemComponent } from './personagem.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    PersonagemComponent
  ],
  exports: [PersonagemComponent]
})
export class PersonagemModule { }
