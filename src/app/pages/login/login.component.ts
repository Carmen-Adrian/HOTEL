import { Component, OnInit} from '@angular/core';
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
  constructor(  public auth : AuthService) { }
 
 
 
  ngOnInit() {
  }

    OnsubmitIniciar(){
      return this.auth.iniciarConEmailPass(this.email, this.pass).then(auth =>{
        console.log(auth)
        this.iniciar=false;
      }).catch(err => console.log(err))
      
    }
  }
  




  
 
  
