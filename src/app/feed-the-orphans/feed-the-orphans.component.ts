import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-the-orphans',
  templateUrl: './feed-the-orphans.component.html',
  styleUrls: ['./feed-the-orphans.component.css']
})
export class FeedTheOrphansComponent implements OnInit {
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
