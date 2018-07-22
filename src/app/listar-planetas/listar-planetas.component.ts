import { ListarPlanetasService } from './listar-planetas.service';
import { Subscription } from 'rxjs';
import { ListarPlanetas } from './../shared/interface/listar-planetas.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-listar-planetas',
  templateUrl: './listar-planetas.component.html',
  styleUrls: ['./listar-planetas.component.css']
})
export class ListarPlanetasComponent implements OnInit, OnDestroy {

  public listarPlanetas: Array<ListarPlanetas>;
  public subscription: Subscription;

  constructor(
    private listarPlanetaService: ListarPlanetasService,
  ) {}

  ngOnInit() {
    this.carregaPlanetas();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public carregaPlanetas(): any {
    this.subscription = this.listarPlanetaService.carregaPlaneta().subscribe(
      (planeta) => {
        this.listarPlanetas = planeta;
        console.log(this.listarPlanetas);
      }
    );
  }
}
