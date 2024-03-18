import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CollectedService } from 'src/app/services/collected.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-remove-button',
  templateUrl: './remove-button.component.html',
})
export class RemoveButtonComponent implements OnInit {
  public loading: boolean = false; // Indicates if a data operation is in progress
  public collected: boolean = true; // Indicates if the item (in this case, a Pokemon) is already collected
  @Input() pokemonName: string = ''; // Input property to specify the name of the Pokemon

  constructor(
    private userService: UserService,
    private readonly collectedService: CollectedService
  ) {}

  ngOnInit() {
    // When the component initializes, check if the Pokemon is already collected for the current user
    this.collected = this.userService.isCollected(this.pokemonName);
  }

  // Function to handle the click event when the user wants to remove the Pokemon from their collection
  onDeleteClick(): void {
    this.loading = true;

    // Call the collectPokemon method of CollectedService to remove the Pokemon from the user's collection
    this.collectedService.collectPokemon(this.pokemonName).subscribe({
      // When the operation is successful, update loading to false and check if the Pokemon is now uncollected
      next: (user: User) => {
        this.loading = false;
        this.collected = this.userService.isCollected(this.pokemonName);
      },
      // If an error occurs, log the error message to the console
      error: (error: HttpErrorResponse) => {
        console.log('ERROR', error.message);
      },
    });
  }
}
