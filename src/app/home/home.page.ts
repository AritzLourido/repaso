import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
async segmentChanged($event: Event) {
throw new Error('Method not implemented.');
    await this.segment;
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
  
  this.titulo = 'Bienvenido a BIRTRIVIA';
  this.descripcion = 'Aquí va la descripcion del juego';
  this.imagenUrl = 'assets/icon/trivia.jpg';

  //Gestionamos el cambio de segmentos

  }
}
