import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { Plugins } from '@capacitor/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HOTEL';
  

  constructor (public  _infoPaginaService: InfoPaginaService
    ){

  }
  

  
}
