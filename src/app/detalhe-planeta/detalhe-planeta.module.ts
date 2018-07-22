import { AppModule } from './../app.module';
import { DetalhePlanetaService } from './detalhe-planeta.service';
import { DetalhePlanetaComponent } from './detalhe-planeta.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppModule
  ],
  declarations: [
    DetalhePlanetaComponent,
  ],
  exports: [DetalhePlanetaComponent],
  providers: [DetalhePlanetaService]
})
export class DetalhePlanetaModule { }
