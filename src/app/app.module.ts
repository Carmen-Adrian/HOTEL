import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReservacionComponent } from './pages/reservacion/reservacion.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MetodoPagoComponent } from './pages/metodo-pago/metodo-pago.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { CrudComponent } from './pages/crud/crud.component'
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';

import { FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReservacionComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
   
    MetodoPagoComponent,
    UbicacionComponent,
    CrudComponent,
    LoginScreenComponent,
    RegistroComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



