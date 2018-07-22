import { ListarPlanetas } from './../shared/interface/listar-planetas.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalhePlanetaService {

  constructor(
    private http: HttpClient
  ) { }

  public getPlanetaInfo(url: string): Observable<ListarPlanetas> {
    return this.http.get<ListarPlanetas>(url,
      {withCredentials: false, responseType: 'json'}
    );
  }
}
