import { ListarPersonagensModule } from './listar-personagens/listar-personagens.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListarPlanetasComponent } from './listar-planetas/listar-planetas.component';
import { DetalhePlanetaComponent } from './detalhe-planeta/detalhe-planeta.component';
import { ListarNavesEspaciaisComponent } from './listar-naves-espaciais/listar-naves-espaciais.component';
import { DetalheNavesEspaciaisComponent } from './detalhe-naves-espaciais/detalhe-naves-espaciais.component';
import { AppRoutingModule } from './app-routing.module';
import { AutenticaRota } from './guards/autentica-rota.guard';
import { ListarPersonagensComponent } from './listar-personagens/listar-personagens.component';
import { DetalhePersonagemComponent } from './detalhe-personagem/detalhe-personagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPersonagensComponent,
    DetalhePersonagemComponent,
    ListarPlanetasComponent,
    DetalhePlanetaComponent,
    ListarNavesEspaciaisComponent,
    DetalheNavesEspaciaisComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AutenticaRota],
  bootstrap: [AppComponent]
})
export class AppModule { }