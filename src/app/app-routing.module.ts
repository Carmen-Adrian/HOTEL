import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { LoginComponent } from './pages/login/login.component';
import { MetodoPagoComponent } from './pages/metodo-pago/metodo-pago.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ReservacionComponent } from './pages/reservacion/reservacion.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'reservacion', component: ReservacionComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'metodo-pago', component: MetodoPagoComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'login-screen', component: LoginScreenComponent},

  {path: '**',  pathMatch: 'full' , redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
