import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Injectable } from '@angular/core';
import { Movie } from './../models/Movie';
import { map, filter, switchMap } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {
  private url:any='http://localhost:3000/movies';

  constructor(private http:HttpClient) { }



  fetchData(){
  
    return this.http.get<Movie[]>(this.url).pipe(map(res=>
      {let results=res.map(item=>item.image=item.image.replace("C:\\fakepath\\","../assets/images/"))
    return res;
    
    })

    
  
    );
  }

  postData(values):Observable<Movie[]>{
    return this.http.post<Movie[]>(this.url,values);
  }

  deleteMovie(id:any){
    const url=this.url +'/' +id;
    return this.http.delete(url);
  }
  
  fetchDataFromOneRecord(id:any){
    const url=this.url +'/' +id;
  
     return this.http.get<Movie>(url);
      
    
    
    }

    updateData(id:any,value){
      const url=this.url+'/'+id;
    
       return this.http.put<Movie>(url,value);
        
      
      
      }
}
