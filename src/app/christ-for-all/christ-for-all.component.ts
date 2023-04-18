import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-christ-for-all',
  templateUrl: './christ-for-all.component.html',
  styleUrls: ['./christ-for-all.component.css']
})
export class ChristForAllComponent implements OnInit {
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
