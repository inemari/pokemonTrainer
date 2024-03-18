import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html'
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Pokemon[] = [];
  @Input() isCatalogPage: boolean = false


  constructor() {

  }
  ngOnInit(): void {

  }
}
