import { Component, OnInit } from '@angular/core';
import {Project} from '../interfaces/project';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  projectList : Project[] = [];
  constructor() { }

  ngOnInit(): void {
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
        description:'Sitio web de la Empresa A-Sure Trim y su sucursal CM-Maderera, presenta Información del empresa y sus productos.',
        cardImage: 'asuretrim/asuretrim1.png',
        images:['asuretrim/asuretrim1.png','asuretrim/asuretrim2.png','asuretrim/asuretrim3.png'],
        tecnologias:['HTML 5','CSS 3','PHP 8', 'Tailwind', 'GIT'],
        habilitado: true,
        enlace: 'http://asuretrim.com/view/en/home',
        modalTarget:'Asuretrim'
      }

    ] 
    
  }

  
}
