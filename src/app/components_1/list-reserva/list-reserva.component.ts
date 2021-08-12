import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-list-reserva',
  templateUrl: './list-reserva.component.html',
  styleUrls: ['./list-reserva.component.css']
})
export class ListReservaComponent implements OnInit {
  reservas: any[] =[];
  
  constructor(private reservaService: ReservasService, private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.getReservas()
  }

  getReservas(){
    this.reservaService.getReservas().subscribe(data =>{
      this.reservas = [];
      data.forEach((element: any) => {
      
        this.reservas.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.reservas);
    })
  }
  eliminarReservas(id:string): Promise<any>{
    return this.reservaService.eliminarReservas(id).then(()=>{
      console.log('reserva eliminada con exito');
      this.toastr.error('La reserva fue eliminada exitosamente!', 'Reserva eliminada');
    }).catch(error =>{
      console.log(error);
    });
    
  }

}

