import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
public movies:any;
  constructor(private service :MovieServiceService) { }

  ngOnInit() {

  }
 
@Output() movieList= new EventEmitter<any>();
  searchMovies(movie : string){
     
     this.service.getMovies(movie).subscribe((res)=>{
       console.log(res.results);
         this.movies=res.results;
         this.movieList.emit(this.movies);
     })
  }

}
