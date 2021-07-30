import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class AuthService  {
  
  constructor(private http: HttpClient) {
  }
  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  regisstro(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }
}