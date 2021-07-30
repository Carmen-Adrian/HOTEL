import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth'
import { first } from 'rxjs/operators';
import { User } from 'src/app/shared/user.interface';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {AngularFirestore,AngularFirestoreDocument,} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


@Injectable({ providedIn: 'root' })
export class AuthService  {
  user$: Observable<User | null | undefined >;
  
  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  async login(email: string, password: string){
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return user;
  }

  async signin(email: string, password: string) {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return user;
  }

  async sendVerificationEmail():Promise<void>{
    try{
      //return (await this.afAuth.currentUser).sendEmailVerification;
    } catch (error){
      console.log('Error ', error)
    }
  }
  isEmailVerified(user: User): boolean{
    return user.emailVerified=== true ? true : false;
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
    };

    return userRef.set(data, { merge: true });
  }
}