import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MoviesService } from '../../services/movies.service'

@Component({
  selector: 'app-my-movie-details',
  templateUrl: './my-movie-details.component.html',
  styleUrls: ['./my-movie-details.component.css']
})
export class MyMovieDetailsComponent implements OnInit {
movieId = null;
movie = null;
  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.movieId = Number(params['id']);
      console.log(this.movieId);
    });
    this.movie = this.moviesService.getMovie(this.movieId);
  }

}



