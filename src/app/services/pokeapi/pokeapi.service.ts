import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokedexResponse } from 'src/app/models/pokedex.model';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private apiUrl = "https://pokeapi.co/api/v2/pokedex/2"; // URL da API

  constructor(public http: HttpClient) { }

  getPokedex(): Promise<PokedexResponse> {
    return new Promise((resolve, reject) => {
      this.http.get<PokedexResponse>(this.apiUrl).subscribe(
        (data) => resolve(data),
        (err) => reject(err)
      );
    });
  }
}
