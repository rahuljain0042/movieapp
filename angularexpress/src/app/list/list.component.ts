import { Component, OnInit,Input } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() movieList:any;
favourite:any;
  constructor(private searchservice: MovieServiceService) { }

   ngOnInit() {
  }

  add(detail:any){
		this.favourite={
			"poster_path": detail.poster_path,
			"original_title":detail.original_title,
			"release_date" : detail.release_date,
			 "popularity": detail.popularity,
			 "vote_average": detail.vote_average
		}

		this.searchservice.add(this.favourite).subscribe((data)=>{
			console.log(data);
		})
	}

}
