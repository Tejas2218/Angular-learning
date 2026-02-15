import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';
import { Counter } from './counter/counter';
import { CounterButton } from './counter-button/counter-button';

@Component({
  selector: 'app-root',
  imports: [Login, Signup, Profile, Counter, CounterButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // title = 'angular-Tejas';
  // name = 'Tejas';
  // a  = 10;
  // b = "raj";
  // name:string = ""
  // get(){
  //   this.name = 'Tejas'
  // }
  // set(val:string){
  //   this.name = val
  // }

  users = ['Anil', 'Sam', 'Tejas', 'Petter', 'Tony'];
}
