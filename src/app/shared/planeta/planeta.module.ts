import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetaComponent } from './planeta.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    PlanetaComponent
  ],
  exports: [PlanetaComponent]
})
export class PlanetaModule { }
