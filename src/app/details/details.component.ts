import { MovieServiceService } from './../services/movie-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import{ActivatedRoute} from '@angular/router';
import { Movie } from '../models/Movie';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
public desc:any;
public imgSrc:any;
public title:any;
public numberOfStars:any;
public date:Date;


  myForm=new FormGroup({
    movieTitle:new FormControl('',Validators.required),
    dateAired:new FormControl(''),
    numberOfStars:new FormControl(''),
    description:new FormControl(''),
    image:new FormControl(''),
  });
 
constructor(private route:ActivatedRoute,private movie:MovieServiceService){}


  ngOnInit(): void {
    this.movie.fetchDataFromOneRecord(this.route.snapshot.params.id).subscribe((response)=>{
      this.desc=response['description'];
      this.imgSrc=response['image'].replace("C:\\fakepath\\","../assets/images/");
      this.title=response['movieTitle'],
      this.numberOfStars=response['numberOfStars']
      this.date=response['dateAired'];
      
      
        this.myForm=new FormGroup({
          movieTitle:new FormControl(response['movieTitle']),
         numberOfStars:new FormControl(response['numberOfStars']),
          dateAired:new FormControl(response['dateAired']),
          description:new FormControl(response['description']),
          image:new FormControl(''),
         
      })});
     
  
}
  collectData(){
    

//const b=this.myForm.get('movieTitle').value;

const b=this.myForm.value;
b.image=this.imgSrc;



   this.movie.updateData(this.route.snapshot.params.id,b).subscribe((result=>{
     console.warn(result);
    }));
   
  }

  showImage(event:any){
    if(event.target.files && event.target.files[0]){
 const reader= new FileReader();
 reader.onload =(e:any)=>this.imgSrc=e.target.result;
 reader.readAsDataURL(event.target.files[0]);
 this.imgSrc=event.target.files[0];
 
 
   }
  }

}
