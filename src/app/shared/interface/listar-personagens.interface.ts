import { Veiculos } from './veiculo.interface';
import { Especies } from './especie.interface';
import { ListarNavesEspaciais } from './listar-naves-espaciais.interface';
import { Filmes } from './filmes.interface';
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
