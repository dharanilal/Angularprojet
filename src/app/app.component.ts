import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){
}

  title = 'demo project';
  isDisabled: boolean = false;

  dynamicTxt:string = 'This is demo project for practice';

  btnClick(){
    console.log('I was clicked');
  }

  Login(){
      this.router.navigate(['login']);
  }

  Dashboard(){
    this.router.navigate(['dashboard']);
  }
}