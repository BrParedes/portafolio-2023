import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { FooterComponent } from './footer/footer.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Conocimientos2Component } from './conocimientos2/conocimientos2.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    InformacionComponent,
    ConocimientosComponent,
    FooterComponent,
    ProyectosComponent,
    ContactoComponent,
    CarouselComponent,
    Conocimientos2Component
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
