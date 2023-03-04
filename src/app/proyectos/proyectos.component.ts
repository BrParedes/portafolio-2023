import { Component, OnInit } from '@angular/core';
import { ScrollRevealService } from '../services/scrollreveal.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private scrollRevealService: ScrollRevealService) { }

  ngOnInit(): void {
    this.scrollRevealService.proyectos('.proyecto1', 1000);
    this.scrollRevealService.proyectos('.proyecto2', 1500);
    this.scrollRevealService.proyectos('.proyecto3', 2000);
    this.scrollRevealService.proyectos('.proyecto4', 2500);
    this.scrollRevealService.proyectos('.proyecto5', 3000);
    this.scrollRevealService.proyectos('.proyecto6', 3500);

  }

  toNextSection():void { 
    
    const x : any = document.getElementById( 'contact' );

    x.scrollIntoView({
      behavior: 'smooth', 

    }); 
  };

}
