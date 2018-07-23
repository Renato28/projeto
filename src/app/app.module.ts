import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListarPlanetasComponent } from './listar-planetas/listar-planetas.component';
import { DetalhePlanetaComponent } from './detalhe-planeta/detalhe-planeta.component';
import { ListarNavesEspaciaisComponent } from './listar-naves-espaciais/listar-naves-espaciais.component';
import { DetalheNavesEspaciaisComponent } from './detalhe-naves-espaciais/detalhe-naves-espaciais.component';
import { AppRoutingModule } from './app-routing.module';
import { ListarPersonagensComponent } from './listar-personagens/listar-personagens.component';
import { DetalhePersonagemComponent } from './detalhe-personagem/detalhe-personagem.component';
import { PersonagemComponent } from './shared/personagem/personagem.component';
import { PlanetaComponent } from './shared/planeta/planeta.component';
import { NaveespacialComponent } from './shared/naveespacial/naveespacial.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarPersonagensComponent,
    DetalhePersonagemComponent,
    ListarPlanetasComponent,
    DetalhePlanetaComponent,
    ListarNavesEspaciaisComponent,
    DetalheNavesEspaciaisComponent,
    PersonagemComponent,
    PlanetaComponent,
    NaveespacialComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
