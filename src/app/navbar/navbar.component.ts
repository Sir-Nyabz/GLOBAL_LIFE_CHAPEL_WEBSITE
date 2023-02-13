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

  toHome(){
    document.getElementById('home')?.scrollIntoView({behavior:"smooth"})
  }

  toGlc(){
    document.getElementById('aboutglc')?.scrollIntoView({behavior:"smooth"})
  }

  toGeneralOverseer(){
    document.getElementById('generaloverseer')?.scrollIntoView({behavior:"smooth"})
  }

  toGive(){
    document.getElementById('give')?.scrollIntoView({behavior:"smooth"})
  }

  toGallery(){
    document.getElementById('gallery')?.scrollIntoView({behavior:"smooth"})
  }

  toContactUs(){
    document.getElementById('contact')?.scrollIntoView({behavior:"smooth"})
  }

  toChristForAll(){
    document.getElementById('forall')?.scrollIntoView({behavior:"smooth"})
  }

  toMorningDevotion(){
    document.getElementById('morningdevotion')?.scrollIntoView({behavior:"smooth"})
  }

  toSchedule(){
    document.getElementById('schedule')?.scrollIntoView({behavior:"smooth"})
  }

}
