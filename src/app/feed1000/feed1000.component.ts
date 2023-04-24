<<<<<<< HEAD
import { Component, ElementRef, HostListener, Renderer2, ViewChild, OnInit } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> dfe13eb999eacf4df21f0d47caadae146b72c598

@Component({
  selector: 'app-feed1000',
  templateUrl: './feed1000.component.html',
  styleUrls: ['./feed1000.component.css']
})
export class Feed1000Component implements OnInit {
<<<<<<< HEAD
  @ViewChild('myDiv') myDiv!: ElementRef;

  constructor(private renderer: Renderer2) { }
=======

  constructor() { }
>>>>>>> dfe13eb999eacf4df21f0d47caadae146b72c598

  ngOnInit(): void {
  }

<<<<<<< HEAD
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 768) {
      this.renderer.setStyle(this.myDiv.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.myDiv.nativeElement, 'display', 'none');
    }
  }
=======
>>>>>>> dfe13eb999eacf4df21f0d47caadae146b72c598
}
