import { Filmes } from './filmes.interface';
import { ListarPersonagens } from './listar-personagens.interface';
import { ListarPlanetas } from './listar-planetas.interface';
export interface Especies {
  id: number;
  name: string;
  classification: string;
  designation: string;
  average_height: number;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: number;
  homeworld: Array<ListarPlanetas>;
  language: string;
  people: Array<ListarPersonagens>;
  films: Array<Filmes>;
  created: Date;
  edited: Date;
  url: string;
}
