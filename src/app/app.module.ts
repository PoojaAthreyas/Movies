import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
//import { MovieTrailerComponent } from './movie-trailer/movie-trailer.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FormsModule } from '@angular/forms';
import { MylistComponent } from './mylist/mylist.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
   // MovieTrailerComponent,
    MovieDetailsComponent,
    MylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
