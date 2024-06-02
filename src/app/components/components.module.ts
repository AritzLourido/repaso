import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { RankingComponent } from './ranking/ranking.component';
import { IonApp, IonicModule} from '@ionic/angular';




@NgModule({
  declarations: [
    IntroduccionComponent,
    PreguntasComponent,
    RankingComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    IntroduccionComponent,
    PreguntasComponent,
    RankingComponent
  ]
})
export class ComponentsModule { }
