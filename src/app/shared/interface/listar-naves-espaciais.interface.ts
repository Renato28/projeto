import { ListarNavesEspaciais } from './../../listar-naves-espaciais/listar-naves-espaciais.interface.1';
export interface ListarNavesEspaciais {
  id: number;
  url: string;
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
