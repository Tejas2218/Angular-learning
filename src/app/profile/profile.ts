import { Component, effect, signal } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  // template: `<h1>Profile Component</h1>`
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  imports: [],
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

    constructor(private router: Router){}

    stuData = [
      {
        id: 1,
        name: "Tejas",
        email: "tejas@gmiaul.com"
      },
      {
        id: 2,
        name: "Mayank",
        email: "Mayank@gmiaul.com"
      },
      {
        id: 3,
        name: "Vishal",
        email: "vishal@gmiaul.com"
      },
      {
        id: 4,
        name: "John",
        email: "john@gmiaul.com"
      },
      {
        id: 5,
        name: "Mayur",
        email: "mayur@gmiaul.com"
      }
    ]

    openData(data:any){
      this.router.navigate(
        ['/stuData'],
        {state:{
          data:data
        }}
      )
    }
}
