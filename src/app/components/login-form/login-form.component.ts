import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  @Output() login: EventEmitter<void> = new EventEmitter();
  loading = false; 

  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService
  ) {}

  // Function to handle the form submission when the user attempts to log in
  public loginSubmit(loginForm: NgForm): void {
    // Extract the username from the form input
    const { username } = loginForm.value;
    this.loading = true; // Set loading to true when submitting the form

    // Call the login method of LoginService to authenticate the user
    this.loginService.login(username).subscribe({
      // When the login is successful, update the user data and emit the login event
      next: (user: User) => {
        
        setTimeout(() => {
          this.userService.user = user;
          this.loading = false; // Once the process is complete, reset the loading state
          this.login.emit();
        }); 
      },
      error: (err: any) => {
        this.loading = false; // Reset loading state in case of an error
      },
    });
  }
}
