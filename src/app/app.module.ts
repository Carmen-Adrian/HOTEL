import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
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
import { ListReservaComponent } from './components_1/list-reserva/list-reserva.component';
import { CreateReservaComponent } from './components_1/create-reserva/create-reserva.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    ListReservaComponent,
    CreateReservaComponent,
  

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



