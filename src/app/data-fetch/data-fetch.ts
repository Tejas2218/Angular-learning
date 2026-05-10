import { Component } from '@angular/core';
import { Products } from '../services/products';

@Component({
  selector: 'app-data-fetch',
  imports: [],
  templateUrl: './data-fetch.html',
  styleUrl: './data-fetch.css',
})
export class DataFetch {

  productList:any[] = []

  constructor(private productServices:Products){}

  ngOnInit(){

    this.productServices.getProductList()
    .subscribe((data:any)=>{

      this.productList = data

      console.log(this.productList)

    })

  }

}