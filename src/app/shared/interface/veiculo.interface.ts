import { Filmes } from './filmes.interface';
import { ListarPersonagens } from './listar-personagens.interface';
export interface Veiculos {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: number;
  max_atmosphering_speed: number;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  consumables: string;
  vehicle_class: string;
  pilots: Array<ListarPersonagens>;
  filmes: Array<Filmes>;
  created: Date;
  edited: Date;
  url: string;

}
