import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  bootstrap: any;

  ngOnInit(): void {
   



  }
  

  toSchedule(toggle : string){
    document.getElementById(toggle)?.scrollIntoView({behavior:"smooth"})
  }

}
