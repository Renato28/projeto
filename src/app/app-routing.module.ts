import { AutenticaRota } from './guards/autentica-rota.guard';
import { NgModule, } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ListarPersonagensComponent } from './listar-personagens/listar-personagens.component';
import { DetalhePersonagemComponent } from './detalhe-personagem/detalhe-personagem.component';
import { ListarPlanetasComponent } from './listar-planetas/listar-planetas.component';
import { DetalhePlanetaComponent } from './detalhe-planeta/detalhe-planeta.component';
import { ListarNavesEspaciaisComponent } from './listar-naves-espaciais/listar-naves-espaciais.component';
import { DetalheNavesEspaciaisComponent } from './detalhe-naves-espaciais/detalhe-naves-espaciais.component';


const routes: Routes = [
  { path: 'personagem', component: ListarPersonagensComponent},
  { path: 'personagem/:id', component: DetalhePersonagemComponent,
  canActivate: [AutenticaRota]},
  { path: 'planeta', component: ListarPlanetasComponent},
  { path: 'planeta/:id', component: DetalhePlanetaComponent,
  canActivate: [AutenticaRota]},
  { path: 'naveespacial', component: ListarNavesEspaciaisComponent},
  { path: 'naveespacial/:id', component: DetalheNavesEspaciaisComponent,
  canActivate: [AutenticaRota]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
