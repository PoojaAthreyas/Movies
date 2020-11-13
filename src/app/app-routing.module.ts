import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MovieComponent} from './movie/movie.component'; 
import { MylistComponent } from './mylist/mylist.component';

const routes: Routes = [
  {path:'', redirectTo:'/movie', pathMatch:'full'},
   {path:'movie', component: MovieComponent},  
  {path:'movie/:movieid', component: MovieDetailsComponent},
  {path: 'mylist', component: MylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
