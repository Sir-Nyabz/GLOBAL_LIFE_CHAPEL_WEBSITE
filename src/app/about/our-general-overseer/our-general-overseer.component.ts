import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-general-overseer',
  templateUrl: './our-general-overseer.component.html',
  styleUrls: ['./our-general-overseer.component.css']
})
export class OurGeneralOverseerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll',this.reveal);
  }

  reveal() {
    var reveals=document.querySelectorAll('.reveal');

    for(var i=0 ; i< reveals.length; i++){
      var windowheight= window.innerHeight;
      var revealtop=reveals[i].getBoundingClientRect().top;
      var revealpoint=150;

      if(revealtop<windowheight-revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }
}
