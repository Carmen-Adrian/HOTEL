import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signinForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
   
  constructor() { }

  ngOnInit(): void {
  }

  onSignin(){
    console.timeLog('Form->', this.signinForm.value);
  }
 

}




