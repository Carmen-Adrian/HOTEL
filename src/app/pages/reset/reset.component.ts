import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  public email : string = "";

  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }
send(){
  if( this.email != ""){
    this.auth.resetpassword(this.email).then(()=>{
      console.log('enviado');
    }).catch(()=>{
      console.log('error');
    })  
  }else{
    alert('Restablecimiento de contraseña');
  }
 
}

}
