import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../services/products';
import { user } from '../interfaces/user';

@Component({
  selector: 'app-data-fetch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-fetch.html',
  styleUrl: './data-fetch.css',
})
export class DataFetch {
  userList: user[] = [];

  constructor(private productServices: Products, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.productServices.getUserList().subscribe((data: any) => {
      // If the API returns an array directly, `data` is the array. 
      // If it returns an object with a `users` property, use `data.users`.
      this.userList = Array.isArray(data) ? data : (data.users || []);
      console.log('userList:', this.userList);
      
      // Manually trigger change detection
      this.cdr.detectChanges();
    });
  }
}
