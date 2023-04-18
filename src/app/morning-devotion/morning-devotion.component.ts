import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-morning-devotion',
  templateUrl: './morning-devotion.component.html',
  styleUrls: ['./morning-devotion.component.css']
})
export class MorningDevotionComponent implements OnInit {
  private screenWidth: number = 0;

  constructor() { 
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
}

@HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  isLargeScreen(): boolean {
    return this.screenWidth > 768;
  }

}

