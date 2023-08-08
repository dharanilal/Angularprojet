import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){
}

  title = 'Task1';
  isDisabled: boolean = false;

  dynamicTxt:string = 'This is demo project for practice';

  btnClick(){
    console.log('I was Clicked');
  }
  LClicked(){
    this.router.navigate(['login']);
  }
  DClicked(){
    this.router.navigate(['dashboard']);
  }
}
