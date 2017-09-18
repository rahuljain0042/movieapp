import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieServiceService {
private url='http://api.themoviedb.org/3/search/movie?api_key=87401d5afd72cb3cf8a20f611290d12b&query='; 
private popularurl ='https://newsapi.org/v1/articles?source=the-economist&sortBy=top&apiKey=f9b785283e1d41f69bb484d5461653b9';
  constructor(private http:Http) { }
// get movies from TMDB api
  getMovies(movie :string){
   return this.http.get(this.url+movie).map(res=>res.json());
  }

  getPopularMovies(){
  	return this.http.get(this.popularurl).map(res=>res.json());
  }

  add(fav){
 	 	 	console.log(fav);
 	 	 	return this.http
 	 	 	                .post('http://localhost:3000/customer',fav)
 	 	 	                .map(res=>res.json());
 	 	 }

 	 	 showFavourites(){
 	 	 	return this.http.get('http://localhost:3000/customer')
 	 	 	.map(res=>res.json());
 	 	 }

 	 	 deleteMovie(id:any){
 	 	 	return this.http
 	 	 	               .delete('http://localhost:3000/customer/'+id._id)
 	 	 	               .map(res=>res.json());
 	 	 }

}
