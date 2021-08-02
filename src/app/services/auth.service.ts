import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth  } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { __await } from 'tslib';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isOk = false;

  constructor( private xauth: AngularFireAuth) { 
  this.xauth.authState.subscribe(user =>{
    if(user){
     this.isOk= true;
    }else{
      this.isOk=false;
    }
  });
  

  }

  iniciarConEmailPass( email:string,pass:string){
    return this.xauth.signInWithEmailAndPassword(email, pass).then ((user:any)=>{
    if(user.user.emailVerified==false){
    alert('Por favor Verifique su correo')
    this.cerrarSesion()
}
      console.log(user);
    }).catch(()=>{
 alert('error');
    });

  }

  registro(email:string, pass:string){
    return this.xauth.createUserWithEmailAndPassword(email,pass).then((user)=>{
      this.mandarCorreo();
      this.cerrarSesion();
      alert('Verifique su correo con el enlace enviado');
    })
  }

  mandarCorreo(){
    this.xauth.currentUser.then((user:any) => {
      return user.sendEmailVerification();
   
    }).then(() => {
      
    })
  }

  cerrarSesion(){
    return this.xauth.signOut().then((user)=>{
     console.log('salio');
    })
  }
}
