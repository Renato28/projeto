import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ListarNavesEspaciais } from './../shared/interface/listar-naves-espaciais.interface';

@Injectable({
  providedIn: 'root'
})
export class DetalhesNavesEspaciaisService {

  constructor(
    private http: HttpClient
  ) { }

  public getNavesEspaciaisInfo(url: string): Observable<ListarNavesEspaciais> {
    return this.http.get<ListarNavesEspaciais>(url,
      {withCredentials: false, responseType: 'json'}
    );
  }
}
