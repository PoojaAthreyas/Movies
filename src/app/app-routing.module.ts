import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MovieComponent} from './movie/movie.component'; 
import { MovielistingComponent } from './movielisting/movielisting.component';

const routes: Routes = [
  {path:'', redirectTo:'/movie', pathMatch:'full'},
   {path:'movie', component: MovieComponent},  
  {path:'movie/:movieid', component: MovieDetailsComponent},
  {path: 'movielisting', component: MovielistingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
