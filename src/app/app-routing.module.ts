import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReservasComponent } from './components/create-reservas/create-reservas.component';
import { ListReservasComponent } from './components/list-reservas/list-reservas.component';
import { CreateReservaComponent } from './components_1/create-reserva/create-reserva.component';
import { ListReservaComponent } from './components_1/list-reserva/list-reserva.component';


import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginAdministradorComponent } from './pages/login-administrador/login-administrador.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'login-screen', component: LoginScreenComponent},
  {path: 'login-administrador', component: LoginAdministradorComponent},
  {path: 'list-reserva', component:ListReservaComponent},
  {path: 'create-reserva', component: CreateReservaComponent},
  {path: 'list-reservas', component: ListReservasComponent},
  {path: 'create-reservas', component: CreateReservasComponent},
  {path: 'editReserva/:id', component: CreateReservasComponent},
  {path: '**',  pathMatch: 'full' , redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
