import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-create-reservas',
  templateUrl: './create-reservas.component.html',
  styleUrls: ['./create-reservas.component.css']
})
export class CreateReservasComponent implements OnInit {
 createReserva: FormGroup;
  submitted = false;
  loading= false;
  id: string | null;
  titulo= 'Crear Reserva';

  constructor(private fb: FormBuilder, private reservaService: ReservasService, private router : Router,
    private toastr: ToastrService, private aRoute: ActivatedRoute) { 
  this.createReserva = this.fb.group({
    nombre: ['', Validators.required],
    correo: ['', Validators.required],
    telefono: ['', Validators.required],
    p_adultas: ['', Validators.required],
    ninos: ['', Validators.required],
    D_llegada: ['', Validators.required],
    D_salida: ['', Validators.required],
    T_habitacion: ['', Validators.required],
    Pago: ['', Validators.required],
  })
  this.id= this.aRoute.snapshot.paramMap.get('id');
  console.log(this.id)
}



  ngOnInit(): void {
    this.esEditar();
  }
agregarEditarReserva(){
  this.submitted=true;
  if(this.createReserva.invalid){
    return;
  }
  if(this.id == null){
    this.agregarReserva();
  }else{
    this.editarReserva(this.id);
  }
 
}

agregarReserva(){
  const reservas :any ={
    nombre: this.createReserva.value.nombre,
    correo: this.createReserva.value.correo,
    telefono: this.createReserva.value.telefono,
    p_adultas: this.createReserva.value.p_adultas,
    ninos: this.createReserva.value.ninos,
    D_llegada: this.createReserva.value.D_llegada,
    D_salida: this.createReserva.value.D_salida,
    T_habitacion: this.createReserva.value.T_habitacion,
    Pago:this.createReserva.value.Pago,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date()
  }
  this.loading=true;
  this.reservaService.agregarReserva(reservas).then(()=>{
    this.toastr.success('La reserva fue registrada exitosamente!', 'Reserva registrada');
    this.loading = false;
    this.router.navigate(['/list-reservas']);
  }).catch(error=>{
  console.log(error);
  this.loading= false;
  })
}

editarReserva(id:string){

const reservas :any ={
  nombre: this.createReserva.value.nombre,
  correo: this.createReserva.value.correo,
  telefono: this.createReserva.value.telefono,
  p_adultas: this.createReserva.value.p_adultas,
  ninos: this.createReserva.value.ninos,
  D_llegada: this.createReserva.value.D_llegada,
  D_salida: this.createReserva.value.D_salida,
  T_habitacion: this.createReserva.value.T_habitacion,
  Pago:this.createReserva.value.Pago,
  fechaCreacion: new Date(),
  fechaActualizacion: new Date()
}
this.loading = true;
this.reservaService.actualizarReserva(id,reservas).then(()=>{
  this.loading= false;
  this.toastr.info('La reserva fue modificada exitosamente!', 'Reserva modificada');
})
this.router.navigate(['/list-reservas']);
}

esEditar(){
  this.titulo= 'Editar Reserva'
  if(this.id !==null){
    this.loading = true;
    this.reservaService.getReserva(this.id).subscribe(data =>{
      this.loading=false;
      console.log(data.payload.data()['nombre']);
      this.createReserva.setValue({
        nombre :data.payload.data()['nombre'],
        correo :data.payload.data()['correo'],
        telefono :data.payload.data()['telefono'],
        p_adultas :data.payload.data()['p_adultas'],
        ninos :data.payload.data()['ninos'],
        D_llegada :data.payload.data()['D_llegada'],
        D_salida :data.payload.data()['D_salida'],
        T_habitacion :data.payload.data()['T_habitacion'],
        Pago :data.payload.data()['Pago']
      })
    })
  }
}
}
