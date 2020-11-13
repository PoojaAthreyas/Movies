import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie/moviemodule';
import { MovieService } from '../service/movie.service';
import "@angular/compiler";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;

  constructor(private movieservice: MovieService,
   private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('movieid')
    this.loadMovie(id);
  }

  loadMovie(id: string): void {
    this.movie = this.movieservice.getMovie(id);
  }

}
