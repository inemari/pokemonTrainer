import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CollectedService } from 'src/app/services/collected.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-collect-button',
  templateUrl: './collect-button.component.html'
})
export class CollectButtonComponent implements OnInit {

  public loading: boolean = false;     // Indicates if a data operation, for further implementation
  public collected: boolean = false;   // Indicates if the pokemon has been collected
  @Input() pokemonName: string = "";  // Input property to specify the name of the Pokemon

  constructor(
    private userService: UserService,
    private readonly collectedService: CollectedService,
  ) { }

  ngOnInit() {
    // Check if the Pokemon is already collected for the current user when the component initializes
    this.collected = this.userService.isCollected(this.pokemonName);
  }

  // Function to handle the collect button click event
  onCollectClick(): void {

    // Make request to collect the Pokemon
    this.collectedService.collectPokemon(this.pokemonName)
      .subscribe({

        // When the operation is successful, update the loading state and collected status
        next: (user: User) => {
          this.loading = false;
          this.collected = this.userService.isCollected(this.pokemonName);
        },
        // If an error occurs, log the error message to the console
        error: (error: HttpErrorResponse) => {
          console.log("ERROR", error.message);
        }
      });
  }
}
