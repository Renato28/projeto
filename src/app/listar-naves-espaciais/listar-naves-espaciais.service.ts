import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ListarNavesEspaciais } from './../shared/interface/listar-naves-espaciais.interface';



@Injectable({
  providedIn: 'root'
})
export class ListarNavesEspaciaisService {

  constructor(
    private http: HttpClient
  ) {}

  public carregaNavesEspaciais(): Observable<ListarNavesEspaciais[]> {
    const url = 'https://swapi.co/api/starships';

    return this.http.get<ListarNavesEspaciais[]>(url,
      { withCredentials: false, responseType: 'json' }
    );
  }
}
