import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/shared/user.interface';
import { Router } from '@angular/router';
import firebase from "firebase/app";
import "firebase/auth";


import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  constructor() { }


  ngOnInit() {

  }

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}

 
  
