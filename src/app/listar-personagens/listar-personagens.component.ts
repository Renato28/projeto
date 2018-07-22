import { ListarPersonagensService } from './listar-personagens.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { ListarPersonagens } from './../shared/interface/listar-personagens.interface';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-listar-personagens',
  templateUrl: './listar-personagens.component.html',
  styleUrls: ['./listar-personagens.component.css']
})
export class ListarPersonagensComponent implements OnInit, OnDestroy {
  public listarPersonagens: Array<ListarPersonagens>;
  public subscription: Subscription;

  constructor(
    private listarPersonagensService: ListarPersonagensService,
  ) { }

  ngOnInit() {
    this.carregaPersonagens();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public carregaPersonagens(): any {
    this.subscription = this.listarPersonagensService.carregaPersonagem().subscribe(
      (personagem) => {
        this.listarPersonagens = personagem;
        console.log(this.listarPersonagens);
      }
    );
  }
}
