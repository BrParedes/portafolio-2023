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
  estiloButton : boolean = false;
  controlButton : boolean = false;
  phpCard : any;

  ngOnInit(): void {

    this.scrollRevealService.proyectos('.revealInfo', 1000);

    
    this.langButton  = false;
    this.cursosButton  = false;
    this.frameButton  = false;
    this.estiloButton  = false;
    this.controlButton = false;
    
  }


  otrosBarProgress(){
    const texto = document.querySelector('#otrosText1');
    const barra = document.querySelector('#otrosBar1');

    const texto2 = document.querySelector('#otrosText2');
    const barra2 = document.querySelector('#otrosBar2');

    

    this.progressEffect( 10, texto, barra);
    this.progressEffect( 52, texto2, barra2);
    
  }


  cursosBarProgress(){
    const texto = document.querySelector('#cursosText1');
    const barra = document.querySelector('#cursosBar1');

    const texto2 = document.querySelector('#cursosText2');
    const barra2 = document.querySelector('#cursosBar2');

    

    this.progressEffect( 10, texto, barra);
    this.progressEffect( 1, texto2, barra2);
    
  }



  estiloBarProgress(){
    const texto = document.querySelector('#estiloText1');
    const barra = document.querySelector('#estiloBar1');

    const texto2 = document.querySelector('#estiloText2');
    const barra2 = document.querySelector('#estiloBar2');

    const texto3 = document.querySelector('#estiloText3');
    const barra3 = document.querySelector('#estiloBar3');

    this.progressEffect( 80, texto, barra);
    this.progressEffect( 80, texto2, barra2);
    this.progressEffect( 80, texto3, barra3);
  }

  frameworkBarProgress(){
    const texto = document.querySelector('#frameText1');
    const barra = document.querySelector('#frameBar1');

    const texto2 = document.querySelector('#frameText2');
    const barra2 = document.querySelector('#frameBar2');

    const texto3 = document.querySelector('#frameText3');
    const barra3 = document.querySelector('#frameBar3');

    this.progressEffect( 80, texto, barra);
    this.progressEffect( 80, texto2, barra2);
    this.progressEffect( 80, texto3, barra3);
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
        return this.estiloButtonChange();
      }
      case 5: {
        return this.controlButtonChange();
      }
    }
    

  }
 
  langButtonChange(): void {

    if(!this.langButton){
      this.langButton = true;
      this.cursosButton = false;
      this.estiloButton = false;
      this.frameButton = false;
      this.controlButton = false;
      this.LangBarProgress();
    }
    
  }

  cursosButtonChange(): void {
    if(!this.cursosButton){
      this.langButton = false;
      this.cursosButton = true;
      this.estiloButton = false;
      this.frameButton = false;
      this.controlButton = false;
      this.cursosBarProgress();
    }
  }

  estiloButtonChange(): void {
    if(!this.estiloButton){
      this.langButton = false;
      this.cursosButton = false;
      this.estiloButton = true;
      this.frameButton = false;
      this.controlButton = false;
      this.estiloBarProgress();
    }
  }

  frameButtonChange(): void {
    if(!this.frameButton){
      this.langButton = false;
      this.cursosButton = false;
      this.estiloButton = false;
      this.frameButton = true;
      this.controlButton = false;

      this.frameworkBarProgress();
    }
  }

  controlButtonChange(): void {
    if(!this.controlButton){
      this.langButton = false;
      this.cursosButton = false;
      this.estiloButton = false;
      this.frameButton = false;
      this.controlButton = true;
      this.otrosBarProgress();
    }
  }

  

}
