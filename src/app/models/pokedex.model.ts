export interface PokemonEntry {
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  };
}

export interface PokedexResponse {
  pokemon_entries: PokemonEntry[];
}
