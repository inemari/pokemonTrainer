import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
})
export class PokemonListItemComponent {
  @Input() pokemon?: Pokemon;
  @Input() isCatalogPage?: boolean = false;
  isCollected: boolean = false;

  // Function to capitalize the first letter of the pokemon name, to show in the html page
  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getPokemonImageUrl(pokemonUrl: string): string {
    // Extract the Pokémon ID from the URL
    const pokemonId = pokemonUrl.split('/').reverse()[1];
    // Construct the image URL using the extracted ID
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }
}
