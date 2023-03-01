import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glc',
  templateUrl: './glc.component.html',
  styleUrls: ['./glc.component.css']
})
export class GlcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll',this.show);
  }
  
  show() {
    var reveals=document.querySelectorAll('.show');

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
