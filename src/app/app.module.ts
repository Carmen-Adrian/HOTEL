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

import { HttpClientModule} from '@angular/common/http';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MetodoPagoComponent } from './pages/metodo-pago/metodo-pago.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReservacionComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    ContactoComponent,
    SignUpComponent,
    MetodoPagoComponent,
    UbicacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
