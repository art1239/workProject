import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  myForm=new FormGroup({
    movieTitle:new FormControl('',Validators.required),
    dateAired:new FormControl(''),
    numberOfStars:new FormControl(''),
    description:new FormControl(''),
    image:new FormControl(''),
  });

  ngOnInit(): void {
  }

}
