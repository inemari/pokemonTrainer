import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap, of } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';


const { apiUsers, apiKey } = environment;

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) { }

  //Handles the login process.
  public login(username: string): Observable<User> {
    return this.checkUsername(username).pipe( //Checks if the username exists.
      switchMap((user: User | undefined) => {
        if (user === undefined) { // If the user does not exist, create a new user.
          return this.createUser(username);
        }
        return of(user); // If the user exists, return the existing user.
      })
    );
  }

  //Checks if a user with the given username exists.
  private checkUsername(username: string): Observable<User | undefined> {
    //Makes an HTTP GET request to fetch users with the provided username.
    return this.http
      .get<User[]>(`${apiUsers}?username=${username}`)
      .pipe(map((response: User[]) => response.pop())); //Map the response to the last user found (if any) with the matching username.
  }

  //Creates a new user with the provided username.
  private createUser(username: string): Observable<User> {
    const user = {
      username,
      pokemon: [],
    };

    //Set the HTTP POST request to create the new user with the defined user object.
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    });

    return this.http.post<User>(apiUsers, user, { headers });
  }
}
