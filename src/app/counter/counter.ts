import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [FormsModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number = 0;
  // handleCount(val: string) {
  //   if (val == '-' && this.count > 0) this.count--;
  //   if (val == '+') this.count++;
  //   if (val == '0') this.count = 0;
  // }
  /*increment(){
    this.count++;
  }
  reset(){
    this.count = 0;
  }
  decrement(){
    this.count--;
  }*/

  taskTemp = [];

  todo = [
    {
      idx: 1,
      task: 'workout',
      isDone: true,
    },
  ];

  del(val: number) {
    this.todo = this.todo.filter((task) => task.idx !== val);
  }

  val:string = ""
  add() {
    if (this.val.trim() !== '') {
      this.todo.push({
        idx: this.todo.length + 1,
        task: this.val,
        isDone: false,
      });
    }
    this.val = ""
  }
}
