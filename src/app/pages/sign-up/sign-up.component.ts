import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/shared/user.interface';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers : [AuthService],
})
export class SignUpComponent implements OnInit {
  
  signinForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
   
  constructor( private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

 

  async onSignin() {
    const { email, password } = this.signinForm.value;
    this.authSvc.signin(email,password)
  }

  private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {
      this.router.navigate(['/login']);
    }
  }
}
