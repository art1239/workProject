import { Movie } from './../models/Movie';
import { MovieServiceService } from './../services/movie-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   movies:Movie[];
    modifiedArray:Movie[];
 
  constructor(private fetching:MovieServiceService ) { }

  ngOnInit(): void {
  
    
 this.fetching.fetchData().subscribe(result=>{

 this.movies=result}
 );

                
  }


 
  removeMovie(id:number){
 const a= this.movies.filter(movie=> 
   
    id!==movie.id);
    this.movies=a;
  

 
  
 this.fetching.deleteMovie(id).subscribe((result)=>{
console.log('deleted');
  });
  

 
  }
  
}
  


