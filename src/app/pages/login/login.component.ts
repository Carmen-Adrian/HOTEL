import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: any;
    pass: any;
    public iniciar=true;
  constructor(  public auth : AuthService, private router: Router) { }
 
 
 
  ngOnInit() {
  }

  ingresar() {
    this.router.navigateByUrl('/list-reserva');
  }
}
  




  
 
  
