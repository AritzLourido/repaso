import { Component, OnInit } from '@angular/core';
import { GestionStorageService } from 'src/app/services/gestion-storage.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent  implements OnInit {

  // Crear variable para guardar los valores guardados en el storage con el nombre "respuestasSeleccionadas"
  respuestasSeleccionadas: string[] = [];
  // Crear variable para guardar los valores guardados en el storage con el nombre "respuestasCorrectas"
  respuestasCorrectas: string[] = [];
  // Crear variable para guardar los valores guardados en el storage con el nombre "contRespuestasCorrectas"
  contRespuestasCorrectas: string = '';

  constructor(private gestionStorage: GestionStorageService) {}

  ngOnInit() {
    this.cargarDatosDesdeStorage();
  }

  // Función para cargar datos desde el almacenamiento local
  async cargarDatosDesdeStorage() {
    // Cargar respuestas seleccionadas
        this.respuestasSeleccionadas = await this.gestionStorage.getArrayString('respuestasSeleccionadas') || [];

    // Cargar respuestas correctas
    this.respuestasCorrectas = await this.gestionStorage.getArrayString('respuestasCorrectas') || [];

    // Cargar contador de respuestas correctas
    const respuestaCorrectasData = await this.gestionStorage.getString('contRespuestasCorrectas');
    if (respuestaCorrectasData && respuestaCorrectasData.value) {
      this.contRespuestasCorrectas = respuestaCorrectasData.value;
    } else {
      this.contRespuestasCorrectas = '0'; // o cualquier otro valor predeterminado que desees
    }
  }

    
  }


