import { ListarPersonagens } from './../listar-personagens/listar-personagens.interface';
import { Filmes } from './../shared/interface/filmes.interface';
import { ListarNavesEspaciais } from './../shared/interface/listar-naves-espaciais.interface';
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
