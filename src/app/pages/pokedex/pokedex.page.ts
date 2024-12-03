import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';
import { PokemonEntry } from 'src/app/models/pokedex.model';
import { PokemonNamePipe } from 'src/app/pipes/pokemon-name.pipe';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, PokemonNamePipe],
})
export class PokedexPage implements OnInit {
  pokemons: PokemonEntry[] = [];
  buscar: string = '';

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    this.getPokedex();
  }

  async getPokedex(): Promise<void> {
    try {
      const data = await this.pokeapiService.getPokedex();
      this.pokemons = data.pokemon_entries as PokemonEntry[];
    } catch (err) {
      console.error('Erro ao carregar a Pokédex:', err);
    }
  }
}
