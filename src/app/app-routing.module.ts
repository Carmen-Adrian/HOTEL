import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionReservasComponent } from './pages/administracion-reservas/administracion-reservas.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginAdministradorComponent } from './pages/login-administrador/login-administrador.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ReservacionComponent } from './pages/reservacion/reservacion.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'reservacion', component: ReservacionComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'administracion-reservas', component: AdministracionReservasComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'login-screen', component: LoginScreenComponent},
  {path: 'login-administrador', component: LoginAdministradorComponent},
  {path: '**',  pathMatch: 'full' , redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
