import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  segmentChanged(event: any) {
    this.segment = event.detail.value;
  }

  segment: string;
  titulo: string;
  descripcion: string;
  imagenUrl: string;


onClick() {
  
throw new Error('Method not implemented.');
}


  // Declaramos las variables necesarias

  constructor() {

  //inicializamos el segmento con su valor inicial
  this.segment = 'introduccion';
  
  this.titulo = 'Bienvenido a Trivia App';
  this.descripcion = 'Explora pregutnas divertidas y desafiantes. ¡Pon a prueba tu conocimiento!';
  this.imagenUrl = 'assets/icon/trivia.jpg';

  //Gestionamos el cambio de segmentos

  }
}
