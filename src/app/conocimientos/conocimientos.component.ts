import { Component, OnInit } from '@angular/core';
import { ScrollRevealService } from '../services/scrollreveal.service';

@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css']
})
export class ConocimientosComponent implements OnInit {

  constructor(private scrollRevealService: ScrollRevealService) { }

  dataImg : string[] = [];
  
 

  langButton : boolean = false;
  cursosButton : boolean = false;
  frameButton : boolean = false;
  bdButton : boolean = false;
  controlButton : boolean = false;
  phpCard : any;

  ngOnInit(): void {

    this.scrollRevealService.proyectos('.revealInfo', 1000);

    
    this.langButton  = false;
    this.cursosButton  = false;
    this.frameButton  = false;
    this.bdButton  = false;
    this.controlButton = false;
    
  }
  LangBarProgress(){
    const texto = document.querySelector('#percentText1');
    const barra = document.querySelector('#progressBar1');

    const texto2 = document.querySelector('#percentText2');
    const barra2 = document.querySelector('#progressBar2');

    const texto3 = document.querySelector('#percentText3');
    const barra3 = document.querySelector('#progressBar3');

    const texto4 = document.querySelector('#percentText4');
    const barra4 = document.querySelector('#progressBar4');

    const texto5 = document.querySelector('#percentText5');
    const barra5 = document.querySelector('#progressBar5');

    const texto6 = document.querySelector('#percentText6');
    const barra6 = document.querySelector('#progressBar6');




    this.progressEffect( 80, texto, barra);
    this.progressEffect( 40, texto2, barra2);
    this.progressEffect( 60, texto3, barra3);
    this.progressEffect( 40, texto4, barra4);
    this.progressEffect( 100, texto5, barra5);
    this.progressEffect( 70, texto6, barra6);
  }

   progressEffect(porcentaje : number , texto :any , barra : any ){
    let i = 0;
    barra.style.width = '0%';

    if (barra.style.width === '0%') {
      setInterval(speed, 10);
      
      function speed(){
  
      if (i < porcentaje) {
          i++;
          texto.innerHTML = i + '%';
          barra.style.width = i + '%';
        }
      }
    }
   }

  

  menuKnowledge(menuNumber: number): void{

    switch(menuNumber) {
      case 1: {
        return this.cursosButtonChange();
      }
      case 2: {
        return this.langButtonChange();
      }
      case 3: {
        return this.frameButtonChange();
      }
      case 4: {
        return this.bdButtonButtonChange();
      }
      case 5: {
        return this.controlButtonChange();
      }
    }
    

  }
 
  langButtonChange(): void {

    
    this.langButton = true;
    this.cursosButton = false;
    this.bdButton = false;
    this.frameButton = false;
    this.controlButton = false;
    this.LangBarProgress();
  }

  cursosButtonChange(): void {
    this.langButton = false;
    this.cursosButton = true;
    this.bdButton = false;
    this.frameButton = false;
    this.controlButton = false;

  }

  bdButtonButtonChange(): void {
    this.langButton = false;
    this.cursosButton = false;
    this.bdButton = true;
    this.frameButton = false;
    this.controlButton = false;

  }

  frameButtonChange(): void {
    this.langButton = false;
    this.cursosButton = false;
    this.bdButton = false;
    this.frameButton = true;
    this.controlButton = false;
  }

  controlButtonChange(): void {
    this.langButton = false;
    this.cursosButton = false;
    this.bdButton = false;
    this.frameButton = false;
    this.controlButton = true;
  }

  

}
