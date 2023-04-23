import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morning-devotion',
  templateUrl: './morning-devotion.component.html',
  styleUrls: ['./morning-devotion.component.css']
})
export class MorningDevotionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll',this.reveal);
}

reveal() {
  var reveals=document.querySelectorAll('.reveal');

  for(var i=0 ; i< reveals.length; i++){
    var windowheight= window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=-150;

    if(revealtop<windowheight-revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}
}

