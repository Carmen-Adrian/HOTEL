import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  public email: string = "";
  public pass: string = "";
  constructor(  public auth : AuthService, private router: Router) { }
 
 
 
  ngOnInit() {
    
  }
  OnSubmitIniciar(){
    this.auth.iniciarConEmailPass(this.email, this.pass).then(auth =>{
      console.log(auth)
    
        
    }).catch(err => console.log(err))
   
  }

}
  




  
 
  
