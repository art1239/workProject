import { MovieServiceService } from './../services/movie-service.service';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,  Validators} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 imgSrc:String;
  myForm=new FormGroup({
    movieTitle:new FormControl('',Validators.required),
    dateAired:new FormControl(''),
    numberOfStars:new FormControl(''),
    description:new FormControl(''),
    image:new FormControl(''),
  });

  collectData(){

    this.fetching.postData(this.myForm.value).subscribe((result=>{
      alert("Sukses");
      this.myForm.reset();
    }));
   
  }
  constructor(private fetching:MovieServiceService) { }

  ngOnInit(): void {

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

