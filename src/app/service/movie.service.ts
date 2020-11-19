import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MOVIE } from '../movie/movielist';
import { Movie } from '../movie/moviemodule';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( ) { }

  getMovies(): Movie[] {
    return MOVIE;
  }

  getMovie(id: string): Movie {
    return MOVIE.find(movie => movie.id === id);
  }
}