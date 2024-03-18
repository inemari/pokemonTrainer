import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) { }

  //Called when the component is initialized. Checks if a user is already logged in. If so, redirects to the Catalog page.
  ngOnInit(): void {
    if (this.userService.user) {
      this.router.navigateByUrl('/catalog');

    }
  }

  //Called when the login button is clicked. Navigates to the Catalog page.
  handleLogin(): void {
    this.router.navigateByUrl('/catalog');

  }
}
