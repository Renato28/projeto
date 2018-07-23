import { Veiculos } from './veiculo.interface';
import { Especies } from './especie.interface';
import { ListarNavesEspaciais } from './listar-naves-espaciais.interface';
import { Filmes } from './filmes.interface';
export interface ListarPersonagens {
  name: string;
  birth_year: number;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: Array <Filmes>;
  species: Array<Especies>;
  starships: Array<ListarNavesEspaciais>;
  vehicles: Array<Veiculos>;
  url: string;
  created: string;
  edited: string;

}
