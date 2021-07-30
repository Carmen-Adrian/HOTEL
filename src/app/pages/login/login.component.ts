import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/shared/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
loginForm= new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
});
  constructor( private authSvc: AuthService, private router: Router) { }

  ngOnInit(){
    
  }

  async onlogin() {
    const { email, password } = this.loginForm.value;
    this.authSvc.login(email, password);
      
  }

  private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {
      this.router.navigate(['/reservacion']);
    } 
  }
}
