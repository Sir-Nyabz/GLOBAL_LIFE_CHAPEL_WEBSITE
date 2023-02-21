import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // toSchedule(){
  //   document.getElementById('schedule')?.scrollIntoView({behavior:"smooth"})
  // }

  toSchedule(toggle : string){
    document.getElementById(toggle)?.scrollIntoView({behavior:"smooth"})
  }

}
