import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
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

  // taskTemp = [];

  todo = signal<any[]>([
    {
      idx: 1,
      task: 'workout',
      isDone: true,
    },
    {
      idx: 2,
      task: 'dinner',
      isDone: false,
    },
    {
      idx: 3,
      task: 'walking',
      isDone: false,
    },
  ]);

  len = computed(() => this.todo().length);

  doneLen = computed(() => this.todo().filter((task) => task.isDone === true).length);

  notDoneLen = computed(() => this.todo().filter((task) => task.isDone === false).length);

  constructor() {
    effect(() => {
      console.log(this.len());
      console.log(this.doneLen());
      console.log(this.notDoneLen());
    });
  }

  del(val: number) {
    this.todo.set(this.todo().filter((task) => task.idx !== val));
  }

  val: string = '';
  add() {
    if (this.val.trim() !== '') {
      this.todo.update((old) => [
        ...old,
        {
          idx: this.todo().length + 1,
          task: this.val,
          isDone: false,
        },
      ]);
    }
    this.val = '';
  }

  doneTog(idx: number){
    this.todo.update( val =>
      val.map(data =>
        data.idx === idx ? {...data, isDone: !data.isDone} : data
      )
    )
  }
}
