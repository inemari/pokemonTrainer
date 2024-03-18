import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
})


export class TrainerPage implements OnInit {
  constructor(private userService: UserService) { }

  // Get the current user
  get user(): User | undefined {
    return this.userService.user;
  }

  // Get the list of collected Pokemons for this user
  public get collected(): Pokemon[] {

    if (this.user) {
      const collectedPokemons = this.user.pokemon;

      if (sessionStorage) {

        // Read the previously stored Pokemons from session storage
        const sessionPokemons = StorageUtil.sessionStorageRead<Pokemon[]>('pokemons');
        const pokemons: Pokemon[] = [];

        if (sessionPokemons !== undefined) {

          //Iterate through the names of collected Pokemons and find matching Pokemon data
          for (const collectedPokemonName of collectedPokemons) {
            const foundPokemon = sessionPokemons.find(
              (pokemon) => pokemon.name === collectedPokemonName
            );

            //If a matching Pokemon is found, add it to the list of collected pokemons
            if (foundPokemon) {
              pokemons.push(foundPokemon);
            }
          }

          return pokemons;
        }
      }
    }
    return [];
  }
  ngOnInit(): void {
    this.collected;
  }
}
