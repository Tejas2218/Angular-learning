import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  constructor(private http:HttpClient){}
  getProductList(){
    const url = "http://localhost:3000/user/userData"
    return this.http.get(url)
  }
}
