import { Injectable } from '@angular/core';
import { PokemonCatalogService } from './pokemon-catalog.service';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const { apiKey, apiUsers } = environment

@Injectable({
  providedIn: 'root'
})
export class CollectedService {

  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogService,
    private readonly userService: UserService
  ) { }

  //Method for collecting or releasing a Pokémon.
  public collectPokemon(pokemonName: string): Observable<User> {
    if (!this.userService.user) {
      throw new Error('User not logged in')
    }

    const user: User = this.userService.user
    const pokemon: Pokemon | undefined = this.pokemonService.findPokemonByName(pokemonName)

    if (!pokemon) {
      throw new Error('collectPokemon: Pokemon not found ' + pokemonName)
    }

    //Checks if the Pokémon is already collceted by the user.
    if (this.userService.isCollected(pokemonName)) {
      this.userService.releasePokemon(pokemonName); //If collected, release the Pokémon.
    } else {
      this.userService.collectPokemon(pokemonName); //If not collected, collect the Pokémon.
    }

    //Define the HTTP headers.
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    })

    //Send a PATCH request to update the user's Pokémon collection.
    return this.http.patch<User>(`${apiUsers}/${user.id}`, {
      pokemon: [...user.pokemon]
    }, {
      headers
    })
      .pipe(
        tap((updatedUser: User) => {
          this.userService.user = updatedUser; //Update the user information in the UserService. 
        }))
  }
}