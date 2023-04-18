import { Component, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import * as AOS from 'aos';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GLOBAL_LIFE_CHAPEL_WEBSITE';

  imageUrl = '/assets/09.png';

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  listener: any;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    AOS.init({
      offset: 150,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      once: false,
    });
  }
  
  
}
