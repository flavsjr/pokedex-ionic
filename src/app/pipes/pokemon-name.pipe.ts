import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName',
  standalone: true
})
export class PokemonNamePipe implements PipeTransform {

  transform(pokemons: any[], name: string): any[] {
    if (!name || !pokemons) {
      return pokemons;
    }

    return pokemons.filter(item =>
      item.pokemon_species.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}
