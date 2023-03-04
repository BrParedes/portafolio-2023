import { Component, OnInit } from '@angular/core';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
 
  emailSuccess : boolean = false;
  emailError : boolean = false;
  texto: string = "Enviar";
  constructor(){
   
  }
  ngOnInit(): void {
    
    
  }
  

  public sendEmail(e: Event) {
    
    e.preventDefault();
    emailjs.sendForm('service_3wx0dps', 'template_1nvdcfo', e.target as HTMLFormElement, '2UHzf8nt_0QCp_QEe')
      .then((result: EmailJSResponseStatus) => {
        this.emailSuccess = true;
        this.texto = "Mensaje enviado!"
      }, (error) => {
       
        this.emailError = true;
        this.texto = "No se pudo enviar el mensaje!"
      });
  }

 
}
