// Import necessary modules and components
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { StorageUtil } from 'src/app/utils/storage.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public currentPage: string = ""; // Store the current route here

  constructor(
    private readonly userService: UserService,
    private readonly router: Router  
  ) { }

  ngOnInit(): void {
    // Initialize the currentPage property with the current route
    this.currentPage = this.router.url;
  }

  // Getter for accessing the user data from UserService
  public get user(): User | undefined {
    return this.userService.user;
  }

  // Function to handle user logout
  logout(): void {
    if (this.userService.user) {
      const { username } = this.userService.user;
      StorageUtil.localStorageDelete(username);  // Delete user data from local storage
      this.userService.user = undefined;  // Clear the user data in UserService
      this.router.navigateByUrl('/login');  // Navigate to the login page
    }
  }

  catalogClick(): void {
    this.router.navigateByUrl('/catalog'); 
  }

  trainerClick(): void {
    this.router.navigateByUrl('/trainer');  
  }
}

