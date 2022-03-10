export interface SwapiResponseObject {
  count: number;
  next?: string;
  previous?: any;
  results: Character[]; // add more types when needed
}

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export const RESULTS_PER_PAGE = 10;
