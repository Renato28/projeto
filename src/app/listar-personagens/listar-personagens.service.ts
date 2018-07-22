import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

import { ListarPersonagens } from './../shared/interface/listar-personagens.interface';

@Injectable({
  providedIn: 'root'
})
export class ListarPersonagensService {

  constructor(private http: HttpClient
  ) {}

  public carregaPersonagem(): Observable<ListarPersonagens[]> {
    const url = 'https://swapi.co/api/people';

    return this.http.get<ListarPersonagens[]>(url,
    {withCredentials: false, responseType: 'json'}
    );
  }
}
