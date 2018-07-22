import { ActivatedRoute } from '@angular/router';
import { DetalhePlanetaService } from './detalhe-planeta.service';
import { ListarPlanetas } from './../shared/interface/listar-planetas.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalhe-planeta',
  templateUrl: './detalhe-planeta.component.html',
  styleUrls: ['./detalhe-planeta.component.css']
})
export class DetalhePlanetaComponent implements OnInit {

  public planetas: ListarPlanetas;
  public getId: number;
  public name: string;
  public url: string;

  constructor(
    private detalhePlanetaService: DetalhePlanetaService,
    private router: ActivatedRoute,
  ) {
    this.getId = this.router.snapshot.params['id'];
  }

  ngOnInit() {
    this.carregaInfoPlaneta();
  }

  public carregaInfoPlaneta(): any {
    this.detalhePlanetaService.getPlanetaInfo(this.url).subscribe(
      (planetas) => {
        this.planetas = planetas;
        console.log(this.planetas);
      });
  }

}
