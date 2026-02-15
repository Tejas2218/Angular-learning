import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number = 0;
  handleCount(val: string) {
    if (val == '-' && this.count > 0) this.count--;
    if (val == '+') this.count++;
    if (val == '0') this.count = 0;
  }
  /*increment(){
    this.count++;
  }
  reset(){
    this.count = 0;
  }
  decrement(){
    this.count--;
  }*/
}
