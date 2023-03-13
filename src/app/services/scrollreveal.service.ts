import { Injectable } from '@angular/core';
declare var ScrollReveal: any;

@Injectable({
  providedIn: 'root'
})
export class ScrollRevealService {
  sr: any;

  constructor() {
    this.sr = ScrollReveal();
  }

  reveal(element: string) {
    this.sr.reveal(element, {
      duration: 1000,
      delay: 0,
      distance: '100px',
      easing: 'ease-in-out',
      
      reset: false,
      viewFactor: 0.2
    });
  }

  reveal2(element: string) {
    this.sr.reveal(element, {
      duration: 1500,
      delay: 0,
      distance: '50px',
      easing: 'ease-out',
      origin: 'top',
      reset: false,
      viewFactor: 0.2
    });
  }

  revealButton(element: string) {
    this.sr.reveal(element, {
      duration: 2000,
      delay: 0,
      distance: '50px',
      easing: 'ease-out',
      origin: 'top',
      reset: false,
      viewFactor: 0.2
    });
  }

  proyectos(element: string,duration: number) {
    
    this.sr.reveal(element, {
      duration: duration,
      delay: 0,
      distance: '500px',
      easing: 'ease-out',
      origin: 'right',
      reset: true,
      viewFactor: 0.2
    });
  }

  seccion(element: string) {
    
    this.sr.reveal(element, {
      duration: 1500,
      delay: 100,
      distance: '100px',
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false,
      viewFactor: 0.2
    });
  }




}