import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  

  constructor(private spinner: NgxSpinnerService) {
    
  }
  
  
  
  
  title = 'Bryan Paredes';
  logo = '</> Bryan Paredes';

  /* ngAfterViewInit(): void {
    this.spinner.show(); // Mostrar spinner
    
  }

  @HostListener('document:DOMContentLoaded', ['$event'])
  onDOMContentLoaded(event: Event) {
    
    this.spinner.hide();
    
    
  } */

}




