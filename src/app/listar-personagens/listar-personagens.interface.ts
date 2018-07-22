import { Filmes } from './../shared/interface/filmes.interface';
import { ListarNavesEspaciais } from './../shared/interface/listar-naves-espaciais.interface';
import { ListarPersonagens } from './listar-personagens.interface';

export interface ListarPersonagens {
  id: number;
  name: string;
  height: number;
  mass: number;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: number;
  gender: string;
  natalPlanet: string;
  movies: Array<Filmes>;
  starship: Array<ListarNavesEspaciais>;
}
