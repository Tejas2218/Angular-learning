import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { user } from '../interfaces/user';
import { Products } from '../services/products';

@Component({
  selector: 'app-data-post',
  imports: [FormsModule],
  templateUrl: './data-post.html',
  styleUrl: './data-post.css',
})
export class DataPost {

  constructor(private products:Products){}

  onSubmit(userFormValue: user, userForm:any){
    console.log(userFormValue);
    this.products.postUserData(userFormValue).subscribe(()=>{
      alert("data add successfully")
      userForm.reset
    })
  }
}
