import { Component } from '@angular/core';
import { fileService } from '../file.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

constructor(public string:fileService)
{
  
}
}