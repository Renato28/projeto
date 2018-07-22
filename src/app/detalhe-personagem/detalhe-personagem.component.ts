import { DetalhePersonagemService } from './detalhe-personagem.service';
import { ListarPersonagens } from './../shared/interface/listar-personagens.interface';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalhe-personagem',
  templateUrl: './detalhe-personagem.component.html',
  styleUrls: ['./detalhe-personagem.component.css']
})
export class DetalhePersonagemComponent implements OnInit {

      public personagens: ListarPersonagens;
      public getId: number;
      public name: string;
      public url: string;

  constructor(
      private detalhePersonagemService: DetalhePersonagemService,
      private router: ActivatedRoute,
  ) {
    this.getId = this.router.snapshot.params['id'];
  }

  ngOnInit() {
    this.carregaInfoPersonagem();
  }

  public carregaInfoPersonagem(): any {
    this.detalhePersonagemService.getPersonagemInfo(this.url).subscribe(
      (personagens) => {
        this.personagens = personagens;
        console.log(this.personagens);
      });
  }

}