import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stu-data',
  imports: [],
  templateUrl: './stu-data.html',
  styleUrl: './stu-data.css',
})
export class StuData {

  user:any

  constructor(private router: Router){}
  ngOnInit(){
    this.user = history.state.data
    if(!this.user){
      this.router.navigate(['/profile'])
    }
  }


}
