//Import necessary modules from Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import page components and AuthGuard.
import { LoginPage } from './pages/login/login.page';
import { CatalogPage } from './pages/pokemon-catalog/pokemon-catalog.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { AuthGuard } from './guards/auth.guard';

//Defines the routes for the application.
const routes: Routes = [
  {
    //Redirect the root path to the login page
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'trainer', 
    component: TrainerPage,
    canActivate: [AuthGuard], //The AuthGuard is used to protect routes, ensuring that only authenticated users can access them.
  },
  {
    path: 'catalog',  
    component: CatalogPage,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  //Configure the routing module with the defined routes.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
