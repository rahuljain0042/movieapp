import { Component, OnInit } from '@angular/core';
import { MovieServiceService} from '../movie-service.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 public movie:any=[]
 favourite:any;
  constructor(private service: MovieServiceService) { }

  ngOnInit() {
  	console.log('dashboard')
  	this.getPopularMovies();
  }

  getPopularMovies(){
  	this.service.getPopularMovies().subscribe((movie=>{
  		this.movie=movie.articles;
  		console.log(this.movie);
  	}))
  }

  add(detail:any){
		this.favourite={
			"poster_path": detail.poster_path,
			"original_title":detail.original_title,
			"release_date" : detail.release_date,
			 "popularity": detail.popularity,
			 "vote_average": detail.vote_average
		}

		this.service.add(this.favourite).subscribe((data)=>{
			console.log(data);
		})
	}

}
