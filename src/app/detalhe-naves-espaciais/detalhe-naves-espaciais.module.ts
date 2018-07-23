import { DetalhePlanetaComponent } from './../detalhe-planeta/detalhe-planeta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';
import { AppModule } from '../app.module';
import { DetalhesNavesEspaciaisService } from './detalhe-naves-espaciais.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppModule
  ],
  declarations: [
    DetalheNavesEspaciaisModule
  ],
  exports: [DetalheNavesEspaciaisModule],
  providers: [DetalhesNavesEspaciaisService]
})
export class DetalheNavesEspaciaisModule { }
