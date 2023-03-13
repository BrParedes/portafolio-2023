import { Component, OnInit } from '@angular/core';
import { ScrollRevealService } from '../services/scrollreveal.service';
import {Project} from '../interfaces/project';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private scrollRevealService: ScrollRevealService) { }

  
  projectList : Project[] = [];
  
 



  ngOnInit(): void {
    this.scrollRevealService.seccion('.seccionTitle' );
    

    this.projectList = [
      {
        id:0,
        nombre:'Joyeria Daliostra',
        description:'Sitio Web E-Commerce para la comercializacion de productos de la empresa Daliostra Ltda., cuenta con pasarela de pago FLOW.',
        cardImage: 'daliostra/inicio.png',
        images:['daliostra/inicio.png','daliostra/tienda.png','daliostra/vistaproducto.png'],
        tecnologias:['PHP','WordPress','Woocommerce','MySQL'],
        habilitado: true,
        enlace: 'https://www.joyasdaliostra.cl/',
        modalTarget:'Daliostra'
      },
      {
        id:1,
        nombre:"A-Sure Trim",
        description:'Sitio web de la Empresa A-Sure Trim y su sucursal CM-Maderera, con la información de la empresa y sus productos.',
        cardImage: 'asuretrim/asuretrim1.png',
        images:['asuretrim/asuretrim1.png','asuretrim/asuretrim2.png','asuretrim/asuretrim3.png'],
        tecnologias:['HTML 5','CSS 3','PHP 8', 'Tailwind', 'GIT'],
        habilitado: true,
        enlace: 'http://asuretrim.com/view/en/home',
        modalTarget:'Asuretrim'
      },
      {
        id:2,
        nombre:"Coming Soon",
        description:'Mis proximos proyectos seran publicados aqui.',
        cardImage:'coming-soon.jpg',
        images:[],
        tecnologias:[],
        habilitado: false,
        enlace: '',
        modalTarget:''
      }

    ] 
    
    

    /* this.scrollRevealService.proyectos('.proyecto1', 1000);
    this.scrollRevealService.proyectos('.proyecto2', 1500);
    this.scrollRevealService.proyectos('.proyecto3', 2000);
    this.scrollRevealService.proyectos('.proyecto4', 2500);
    this.scrollRevealService.proyectos('.proyecto5', 3000);
    this.scrollRevealService.proyectos('.proyecto6', 3500); */

  }

  sendData( id? : any){
    
   
    
  }

  toNextSection():void { 
    
    const x : any = document.getElementById( 'contact' );

    x.scrollIntoView({
      behavior: 'smooth', 

    }); 
  };













}
