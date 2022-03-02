import { Component, OnInit } from '@angular/core';
import {IProduct, ICategory, DiscountOffers} from 'SharedClassesandtypes.ts/SharedClassesandtypes'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() {
    this.Discount= DiscountOffers.NoDiscount ;
    this.StoreName= "Fashion Store"
    this.StoreLogo='assets/img/images 1.jpeg';
    this.ProductList= [
      {ID: 1, Name:"salma",Quantity:10, Price: 100, img:'assets/img/images 1.jpeg'},
      {ID: 2, Name:"mai",Quantity:5, Price: 200, img:'assets/img/images 1.jpeg'}


    ];
    
    this.CategoryList=[
      {ID:1, Name:'first category'},
      {ID:2, Name:'second category'},
      {ID:3, Name:'third category'}
    ];
    this.ClientName="salma";
    this.IsPurshased=true;
   }

  Discount: DiscountOffers ;
  StoreName: string;
  StoreLogo: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  ClientName: string;
  IsPurshased: boolean;
  
  ngOnInit(): void {
  }

  isNoDescount=DiscountOffers['NoDiscount'];

  isPurchasedChange()
  {
      if(this.IsPurshased==true){
        this.IsPurshased=false;
      }
  }

}
