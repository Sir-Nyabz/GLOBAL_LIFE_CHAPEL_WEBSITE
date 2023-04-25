import { Component, ElementRef, HostListener, Renderer2, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed1000',
  templateUrl: './feed1000.component.html',
  styleUrls: ['./feed1000.component.css']
})
export class Feed1000Component implements OnInit {
  @ViewChild('myDiv') myDiv!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 768) {
      this.renderer.setStyle(this.myDiv.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.myDiv.nativeElement, 'display', 'none');
    }
  }
}
