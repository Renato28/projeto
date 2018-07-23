import { Veiculos } from './../shared/interface/veiculo.interface';
import { Especies } from './../shared/interface/especie.interface';
import { Filmes } from './../shared/interface/filmes.interface';
import { ListarNavesEspaciais } from './../shared/interface/listar-naves-espaciais.interface';
import { ListarPersonagens } from './listar-personagens.interface';

export interface ListarPersonagens {
  name: string;
  birthYear: number;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: string;
  mass: string;
  skinColor: string;
  homeworld: string;
  films: Array<Filmes>;
  species: Array<Especies>;
  starships: Array<ListarNavesEspaciais>;
  vehicles: Array<Veiculos>;
  url: string;
  created: string;
  edited: string;
}
