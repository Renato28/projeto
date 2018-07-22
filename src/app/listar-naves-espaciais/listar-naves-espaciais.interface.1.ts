import { ListarNavesEspaciais } from './../shared/interface/listar-naves-espaciais.interface';
export interface ListarNavesEspaciais {
  id: number;
  info: Array<ListarNavesEspaciais>;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  consumables: number;
  hyperdrive_rating: number;
  MGLT: number;
  starship_class: string;
}
