import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../appModels/movie.model';
import { MovieService } from '../appServices/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  mvForm!: FormGroup;
  showModal:boolean = false;
  editMode:boolean = false;
  mv: Movie[] = [];

  constructor(
     private fb: FormBuilder,
     private movieService: MovieService
  ) { }
 

  ngOnInit(): void {
    this.getAllMovies();
    this.mvForm = this.fb.group({
      _id: [''],
      title : ["Thor"],
      desc : ["It is made by Marvel studio. It is one of the most rated movie"],
      rating: ["8.5"],
      duration: ["182min"],
      genre: ["action"],
      likes: ["18222"],
      language: ["English"]
    })
  }
  getAllMovies(){
    this.movieService.getAllMovie().subscribe((res:any)=>{
      console.log(res);
      this.mv=res;
      console.log(this.mv[0])

    })
  }

  onDeleteMovie(_id: any){
    if(confirm('Do you want to Delete?')){

      this.movieService.deleteMovie(_id).subscribe((res)=>{
        console.log("Delete Successfully guys");
        this.getAllMovies();
      })
    }
  }
  onEditMovie(movie:Movie){
    this.showModal=true;
    this.editMode = true;
    this.mvForm.patchValue(movie);
  }

  onMvSubmit(){
    if(this.mvForm?.valid){
      if(this.editMode){
        this.movieService.updateMovie(this.mvForm.value).subscribe((res)=>{
          console.log(res);
          this.getAllMovies();
          this.showModal=false;
        })
      }else{
        this.movieService.addMovie(this.mvForm.value).subscribe((res)=>{
          console.log(res);
          this.getAllMovies();
          this.showModal=false;
        }
        )
      }

      this.mvForm.reset({
        title : "Thor",
        desc : "It is made by Marvel studio. It is one of the most rated movie",
        rating: "8.5",
        duration: "182min",
        genre: "action",
        likes: "18222",
        language: "English"
      });
      this.onCloseModal();

    } 
  }

  onAddMovie(){
    this.showModal=true;
  }

  

  onCloseModal(){
    this.showModal = false;
    this.editMode = false;
  }


}
