import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title : string = "<Bryan Paredes/>";
  scrollPos : number = 0;
  sectionPosition: number = 0;
  
  sectionPositionArray : Array<number> = [];


  constructor() {

    document.addEventListener('scroll', () => {
      this.prueba();
    })
   }
  
  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      var currentPosition = window.pageYOffset;
      var x  = document.getElementById('boton') as HTMLDivElement ;

      console.log(currentPosition)
      const posicionInicial = x.getBoundingClientRect().top + window.pageYOffset;
      const posicionDeseada = window.innerHeight - x.offsetHeight ;
      const desplazamiento = posicionInicial - posicionDeseada;

      /* x.style.bottom = currentPosition+"px"; */
      if (desplazamiento > 0) {
        x.style.top = (parseInt(x.style.top) - desplazamiento) + 'px';
      }
      
      
      const seccion1: any = document.getElementById('top');
      const seccion2: any = document.getElementById('info');
      const seccion3: any = document.getElementById('conocimientos');
      const seccion4: any = document.getElementById('proyectos');
      const seccion5: any = document.getElementById('contact');
      
      
      this.sectionPositionArray = [seccion1.offsetTop,seccion2.offsetTop,seccion3.offsetTop,seccion4.offsetTop,seccion5.offsetTop];
      this.setArrowButton( currentPosition );
    });
    
  }

  setArrowButton( currentPosition : number) : void{
   
    this.sectionPosition = this.sectionPositionArray.findIndex(n => n > currentPosition) -1 ;
    console.log(this.sectionPositionArray)
    console.log(this.sectionPosition)

  }

  prueba(): void {
    this.scrollPos = document.documentElement.scrollTop;

    /* console.log(document.documentElement.scrollTop); */
    //document.body.scrollTop ver que onda
    //https://stackoverflow.com/questions/7435843/window-top-document-body-scrolltop-not-working-in-chrome-or-firefox
  }

  toTop():void { 
    this.sectionPosition =0
    const x : any = document.getElementById( 'top' );
    console.log('object')
    x.scrollIntoView({
      behavior: 'smooth', 
      duration: 2000,
      block: 'start'
    }); 


  };

  toInfo():void { 
    
    const x : any = document.getElementById( 'info' );

    x.scrollIntoView({
      behavior: 'smooth', 
      duration: 2000,
      block: 'start'
    }); 


  };
  toProjects():void { 
    
    const x : any = document.getElementById( 'proyectos' );

    x.scrollIntoView({
      behavior: 'smooth' 
    }); 


  };
  toKnowledge():void { 
    
    const x : any = document.getElementById( 'conocimientos' );

    x.scrollIntoView({
      behavior: 'smooth' 
    }); 


  };


  toContact():void { 
    
    const x : any = document.getElementById( 'contact' );

    x.scrollIntoView({
      behavior: 'smooth' 
    }); 


  };


  toNextSection():void { 
    
    const sectionArray = ['top', 'info','conocimientos','proyectos','contact']
    this.sectionPosition += 1;
    
    if( this.sectionPosition == 5){this.sectionPosition =0} 
    console.log(sectionArray[this.sectionPosition])
    console.log(this.sectionPosition)
    const x : any = document.getElementById( sectionArray[this.sectionPosition] );

    x.scrollIntoView({
      behavior: 'smooth', 

    }); 
    
    
  };
}
