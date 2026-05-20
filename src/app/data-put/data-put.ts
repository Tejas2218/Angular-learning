import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { user } from '../interfaces/user';
import { Products } from '../services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-put',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './data-put.html',
  styleUrl: './data-put.css',
})
export class DataPut {
  
  constructor(private product:Products, private cdr: ChangeDetectorRef){}

  userData:user[]=[]

  ngOnInit(){
    this.product.getUserList().subscribe((data:any)=>{
      this.userData = Array.isArray(data) ? data : (data.users || []);
      console.log('userList:', this.userData);
      this.cdr.detectChanges();
    })
  }

  onSubmit(userFormValue:any, userForm:any){
    
  }

  openData(data:user){}

}
