import { Pokemon } from './pokemon.model';

//Interface representing the structure of a response from the API.
export interface PokemonApiResponse {

    count: number; //Total count of Pokémon in the API response.

    next: string | null; //The URL of the next page of results, or null if there are no more pages.

    previous: string | null; //The URL of the previous page of results, or null if there are no previous pages.

    results: Pokemon[]; //An array of Pokémon objects representing the results.

}

