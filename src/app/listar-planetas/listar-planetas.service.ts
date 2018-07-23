import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { ListarPlanetas } from './../shared/interface/listar-planetas.interface';



@Injectable({
  providedIn: 'root'
})
export class ListarPlanetasService {

  constructor(
    private http: HttpClient,
  ) {}

  public carregaPlaneta(): Observable<ListarPlanetas[]> {
    const url = 'https://swapi.co/api/planets';

    return this.http.get<ListarPlanetas[]>(url,
      { withCredentials: false, responseType: 'json' }
    );
  }
}
