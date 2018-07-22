import { Veiculos } from './veiculo.interface';
import { ListarNavesEspaciais } from './listar-naves-espaciais.interface';
import { ListarPlanetas } from './listar-planetas.interface';
import { ListarPersonagens } from './listar-personagens.interface';
import { Especies } from './especie.interface';
export interface Filmes {
  episodio_id: number;
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: Array<ListarPersonagens>;
  planets: Array<ListarPlanetas>;
  starships: Array<ListarNavesEspaciais>;
  vehicles: Array<Veiculos>;
  species: Array<Especies>;
  created: Date;
  edited: Date;
  url: string;
}
