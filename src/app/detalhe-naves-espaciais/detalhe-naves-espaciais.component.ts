import { DetalhesNavesEspaciaisService } from './detalhe-naves-espaciais.service';
import { ListarNavesEspaciais } from './../shared/interface/listar-naves-espaciais.interface';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-naves-espaciais',
  templateUrl: './detalhe-naves-espaciais.component.html',
})
export class DetalheNavesEspaciaisComponent implements OnInit {
  public navesespaciais: ListarNavesEspaciais;
  public name: string;
  public getId: string;
  public url: string;

  constructor(
    private detalheNavesEspaciaisService: DetalhesNavesEspaciaisService,
    private router: ActivatedRoute,
  ) {
    this.getId = this.router.snapshot.params['url'];
  }

  ngOnInit() {

    this.carregaInfoNavesEspaciais();

  }

  public carregaInfoNavesEspaciais(): any {
    this.detalheNavesEspaciaisService.getNavesEspaciaisInfo(this.getId).subscribe(
      (navesespaciais) => {
        this.navesespaciais = navesespaciais;
        console.log(this.navesespaciais);
      });
  }
}






