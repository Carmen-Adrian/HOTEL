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
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginAdministradorComponent } from './pages/login-administrador/login-administrador.component';
import { ListReservasComponent } from './components/list-reservas/list-reservas.component';
import { CreateReservasComponent } from './components/create-reservas/create-reservas.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReservacionComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    UbicacionComponent,
    LoginScreenComponent,
    RegistroComponent,
    LoginAdministradorComponent,
    ListReservasComponent,
    CreateReservasComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



