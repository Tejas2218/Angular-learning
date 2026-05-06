import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // click(){
  //   console.log("button clicked");
  // }

  @Input() Pname!: string;
  @Input() Page!: number;
}
