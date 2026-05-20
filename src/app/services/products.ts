import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class Products {
  constructor(private http:HttpClient){}

  getUserList():Observable<user[]>{
    const url = "http://localhost:3000/user/userData"
    return this.http.get<user[]>(url)
  }

  postUserData(userData:user):Observable<user>{
    const url = "http://localhost:3000/user/signup"
    return this.http.post<user>(url,userData)
  }



}
