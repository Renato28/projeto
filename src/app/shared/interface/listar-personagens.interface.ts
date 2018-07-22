import { ListarNavesEspaciais } from './listar-naves-espaciais.interface';
import { Filmes } from './filmes.interface';
export interface ListarPersonagens {
  id: number;
  url: string;
  name: string;
  info: Array<ListarPersonagens>;
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
