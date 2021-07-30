import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MetodoPagoComponent } from './pages/metodo-pago/metodo-pago.component';
import { ReservacionComponent } from './pages/reservacion/reservacion.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'reservacion', component: ReservacionComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'metodo-pago', component: MetodoPagoComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: '**',  pathMatch: 'full' , redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
