//This is application module for the PokemonTrainer Angular app.
//It defines the root module, imports necessary dependencies, and declares components.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CatalogPage } from './pages/pokemon-catalog/pokemon-catalog.page';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './components/pokemon-list-item/pokemon-list-item.component';
import { CollectButtonComponent } from './components/collect-button/collect-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrainerPage } from './pages/trainer/trainer.page';
import { RemoveButtonComponent } from './components/remove-button/remove-button.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [AppComponent, LoginPage, LoginFormComponent, CatalogPage, PokemonListComponent, PokemonListItemComponent, NavbarComponent, CollectButtonComponent, TrainerPage, RemoveButtonComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
