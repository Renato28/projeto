import { ListarNavesEspaciaisService } from './listar-naves-espaciais.service';
import { ListarNavesEspaciais } from './../shared/interface/listar-naves-espaciais.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription} from 'rxjs';


@Component({
  selector: 'app-listar-naves-espaciais',
  templateUrl: './listar-naves-espaciais.component.html',
  styleUrls: ['./listar-naves-espaciais.component.css']
})
export class ListarNavesEspaciaisComponent implements OnInit, OnDestroy {

  public listarNavesEspaciais: Array<ListarNavesEspaciais>;
  public subscription: Subscription;
  constructor(
    private listarNavesEspaciaisService: ListarNavesEspaciaisService,
  ) {}

  ngOnInit() {
    this.carregaNavesEspaciais();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public carregaNavesEspaciais(): any {
    this.subscription = this.listarNavesEspaciaisService.carregaNavesEspaciais().subscribe(
      (naveespacial) => {
        this.listarNavesEspaciais = naveespacial;
        console.log(this.listarNavesEspaciais);
      }
    );
  }
}
