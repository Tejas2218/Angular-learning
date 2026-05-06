import { Component } from '@angular/core';
import { Login } from "../login/login";

@Component({
  selector: 'app-signup',
  imports: [Login],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  name: string = "Tejas"
  age: number = 19
}
