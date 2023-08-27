import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class fileService {

  
  constructor() { }
  email='dharani@gmail.com';
  password = '2000';
  public GetText(){
    return 'file from service';
  }
   Movie=[
    {name:'RRR',hero:'Ramcharan'},
    {name:'PS',hero:'Jayam Ravi'},
    {name:'Baahubali',hero:'Prabhas'},
    {name:'KGF',hero:'Yash'},
  ]

   public movie(){
    return this.Movie;
   }
}