import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Movie } from '../appModels/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://localhost:3000/movie';
  constructor(private http: HttpClient) { }
  
  addMovie(mv: Movie){
    return this.http.post(this.url, mv);
  }

  getAllMovie(){
    return this.http.get(this.url);
  }

  deleteMovie(_id: any){
    return this.http.delete(`${this.url}/${_id}`);
  }

  updateMovie(mv: Movie){
    return this.http.put(`${this.url}/${mv._id}`, mv);
  }
}
