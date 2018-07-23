import { ListarPersonagens } from './../../listar-personagens/listar-personagens.interface';
import { Filmes } from './filmes.interface';
import { ListarNavesEspaciais } from './../../listar-naves-espaciais/listar-naves-espaciais.interface.1';
export interface ListarNavesEspaciais {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: Array<Filmes>;
  pilots: Array<ListarPersonagens>;
  url: string;
  created: string;
  edited: string;
}
