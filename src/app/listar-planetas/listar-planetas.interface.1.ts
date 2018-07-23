import { Filmes } from './../shared/interface/filmes.interface';
import { ListarPersonagens } from './../listar-personagens/listar-personagens.interface';
export interface ListarPlanetas {
  name: string;
 diameter: string;
 rotation_period: string;
 orbital_period: string;
 gravity: string;
 population: string;
 climate: string;
 terrain: string;
 surface_water: string;
 residents: Array<ListarPersonagens>;
 films: Array<Filmes>;
 url: string;
 created: string;
 edited: string;
}
