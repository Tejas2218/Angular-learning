import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-aip',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLink],
  templateUrl: './aip.html',
  styleUrl: './aip.css',
})
export class Aip {

  constructor(private router:Router){}

  

  showGet(){
    this.router.navigate(['../dataFetch'])
  }

  showPost(){}

  showPut(){}

  showDelete(){}
}
