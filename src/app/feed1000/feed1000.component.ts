import { Component, ElementRef, HostListener, Renderer2, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed1000',
  templateUrl: './feed1000.component.html',
  styleUrls: ['./feed1000.component.css']
})
export class Feed1000Component implements OnInit {
  private screenWidth: number = 0;

  constructor(private renderer: Renderer2) {
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
