import { Component, OnInit,Input } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
 
  constructor(private searchservice: MovieServiceService) { }
favourites:any;
deleteData:any;
  ngOnInit() {
  	//console.log('hello');
  	this.showFavourites();
  }

  showFavourites(){
  	//console.log("In fav comp")
  	// this.favourites={
  	// 	"poster_path": display.poster_path,
  	// 	"original_title": display.original_title,
  	// 	"release_date": display.release_date,
  	// 	"popularity": display.popularity,
  	// 	"vote_average": display.vote_average
  	// }

  	this.searchservice.showFavourites().subscribe((display) => {

  		console.log(display)
  		this.favourites=display;
  	})
  }
deleteMovie(id:any){
  this.searchservice.deleteMovie(id).subscribe(res=>{this.deleteData=res})
  console.log(this.deleteData)
}


}
