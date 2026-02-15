import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  imports: [],
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.css',
})
export class CounterButton {
  visible = true;
  color: string = 'black';
  sh() {
    this.visible = !this.visible;
  }
  colorChange(val: string) {
    this.color = val;
  }
}
