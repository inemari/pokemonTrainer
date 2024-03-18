import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';
import { StorageKeys } from '../consts/storage-keys.enum';
import { RouterLinkActive } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user?: User;
  public _page?: string = RouterLinkActive.toString(); //Page information to determine the active page.

  public get page() {
    return this._page;
  }

  public get user() {
    return this._user;
  }

  //Setter for updating the user and storing it in local storage.
  public set user(user: User | undefined) {
    StorageUtil.localStorageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor() {
    this._user = StorageUtil.localStorageRead<User>(StorageKeys.User); //Initialize the user from local storage.
  }

  //Check if a Pokémon is collected by the user.
  public isCollected(pokemon: string): boolean {
    if (this._user) {
      return Boolean(this._user?.pokemon.find((p) => p === pokemon));
    }
    return false;
  }

  //Release a Pokémon collected by the user.
  public releasePokemon(pokemon: string): void {
    if (this._user) {
      this._user.pokemon = this._user.pokemon.filter((p) => p !== pokemon);
    }
  }

  //Collect a Pokémon and add it to the user's collection.
  public collectPokemon(pokemon: string): void {
    if (this._user) {
      this._user.pokemon.push(pokemon);
    }
  }
}
