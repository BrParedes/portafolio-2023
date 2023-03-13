import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocimientos2',
  templateUrl: './conocimientos2.component.html',
  styleUrls: ['./conocimientos2.component.css']
})
export class Conocimientos2Component implements OnInit {
  lenguajes: String[] = [];
  estilos: String[] =[];
  frameworks : String[] = [];
  cursos : String[] = [];
  otros : String[] = [];
  items : String[] = [];
  option : number = 0;
  constructor() { }

  ngOnInit(): void {
    this.lenguajes = ['html','js','ts','java','php','csharp'];
    this.estilos = ['css','bootstrap','tailwind'];
    this.frameworks = ['net','laravel','angular'];
    this.cursos = [''];
    this.otros = ['git','mysql'];
    this.conocimientosMenu(1);
  }

  conocimientosMenu( option : number){
    this.option = option;
    if(option == 1 ){
      return this.items = this.lenguajes;
    }
    if(option == 2 ){
      return this.items = this.estilos;
    }
    if(option == 3 ){
      return this.items = this.frameworks;
    }
    if(option == 4 ){
      return this.items = this.cursos;
    }
    if(option == 5 ){
      return this.items = this.otros;
    }
    return null;
  }


  mostrarInfo(){
    console.log("hola")
  }

}
