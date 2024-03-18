import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalogService } from 'src/app/services/pokemon-catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './pokemon-catalog.page.html'
})
export class CatalogPage implements OnInit {
  // Tracks whether data has been loaded
  public isDataLoaded: boolean = false;

  // Array to hold Pokemon data
  private _pokemons: Pokemon[] = [];

  // Getter to provide access to the Pokemon data
  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  // Getter for loading state
  get loading(): boolean {
    return this.pokemonCatalogService.loading;
  }

  // Getter for error message
  get error(): string {
    return this.pokemonCatalogService.error;
  }

  constructor(
    private readonly pokemonCatalogService: PokemonCatalogService
  ) { }

  ngOnInit(): void {
    // Fetch Pokemon data and handle success/error
    this.pokemonCatalogService.findAllPokemon().subscribe(
      (data: Pokemon[]) => {
        this._pokemons = data;
        this.isDataLoaded = true; // Data has been loaded successfully
      },
      (error: any) => {
        console.error("Error fetching Pokemon data:", error);
        this.isDataLoaded = true; // Even if there's an error, data has been attempted to load
      }
    );
  }
}
