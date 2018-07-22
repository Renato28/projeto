import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ListarPersonagens } from './../shared/interface/listar-personagens.interface';

@Injectable({
  providedIn: 'root'
})

export class DetalhePersonagemService {

  constructor(
    private http: HttpClient
  ) { }

  public getPersonagemInfo(url: string): Observable<ListarPersonagens> {
    return this.http.get<ListarPersonagens>(url,
      {withCredentials: false, responseType: 'json'}
      );
    }
  }

