import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieapp',
  templateUrl: './movieapp.component.html',
  styleUrls: ['./movieapp.component.css']
})
export class MovieappComponent implements OnInit {
public movieList : any;
  constructor() { }

  ngOnInit() {
  }
 updateMovieList(event){
  	console.log(event)
    this.movieList=event
  }
}
