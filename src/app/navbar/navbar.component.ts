import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title : string = "<Bryan Paredes/>";
  scrollPos : number = 0;
  constructor() {

    document.addEventListener('scroll', () => {
      this.prueba();
    })
   }
  
  ngOnInit(): void {
    
  }

  prueba(): void {
    this.scrollPos = document.documentElement.scrollTop;

    /* console.log(document.documentElement.scrollTop); */
    //document.body.scrollTop ver que onda
    //https://stackoverflow.com/questions/7435843/window-top-document-body-scrolltop-not-working-in-chrome-or-firefox
  }

  toTop():void { 
    
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
}
