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
  email!: string;
  password!: string;  
  constructor( ) { }

  ngOnInit(): void {
  }

  registro(){
    console.log(this.email);
    console.log(this.password);
  }


}
