import { Component, OnInit, Input, Output } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movies= null;
  constructor(private moviesService: MoviesService) { }



  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }
  hello(){
    console.log(this.moviesService.getMovies());
  }
  hello2(){
    console.log(this.moviesService.getMovie(3));
  }
}
