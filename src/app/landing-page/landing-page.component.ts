import { Component, OnInit } from '@angular/core';
import { ScrollRevealService } from '../services/scrollreveal.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private scrollRevealService: ScrollRevealService) { }

  ngOnInit(): void {
    this.scrollRevealService.reveal('.scrollT1');
    this.scrollRevealService.reveal2('.scrollT2' );
    this.scrollRevealService.revealButton('.revealButton' );
  }

  toInfo():void { 
    
    const x : any = document.getElementById( 'info' );

    x.scrollIntoView({
      behavior: 'smooth', 

    }); 
  };


}
