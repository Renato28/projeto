import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { NaveespacialComponent } from './naveespacial.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    NaveespacialComponent
  ],
  exports: [NaveespacialComponent]
})
export class NaveespacialModule { }
