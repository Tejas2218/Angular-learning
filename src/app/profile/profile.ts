import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  // template: `<h1>Profile Component</h1>`
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
//   constructor() {
//     effect(() => {
//       if (this.count() == 15 || this.count2() == 15) {
//         this.display = !this.display;
//       }
//     });
//   }

//   count = signal(10);
//   count2 = signal(10);
//   display = false;
//   update() {
//     this.count.set(this.count() + 1);
//   }
//   update2() {
//     this.count2.set(this.count2() + 1);
//   }


    arr = ["tejas", "pithva", "mayank"]

}
