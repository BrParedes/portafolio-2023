import { Component, OnInit } from '@angular/core';
import { ScrollRevealService } from '../services/scrollreveal.service';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  constructor(private scrollRevealService: ScrollRevealService) { }

  ngOnInit(): void {
    this.scrollRevealService.seccionTitle('.seccionTitle' );
    this.scrollRevealService.reveal('.text' );
    this.scrollRevealService.reveal2('.img' );

  }

  toNextSection():void { 
    
    const x : any = document.getElementById( 'conocimientos' );

    x.scrollIntoView({
      behavior: 'smooth', 

    }); 
  };

}
