import { Injectable } from '@angular/core';
import {IProduct, ICategory, DiscountOffers} from 'SharedClassesandtypes/SharedClassesandtypes'


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() {   }

  
  ProductList:Array<IProduct>=[
      {ID: 1, Name:"product 1",Quantity:10, Price: 100, img:'assets/img/images 1.jpeg'},
      {ID: 2, Name:"product 2",Quantity:5, Price: 200, img:'assets/img/images 1.jpeg'},
      {ID: 3, Name:"product 3",Quantity:5, Price: 200, img:'assets/img/images 1.jpeg'}

    ];

  
  
  GetAllProducts()
  {
  return this.ProductList
  }
  
  ProductListByID!:any;
  
  GetProductById(prdId:any) {
  
  if(typeof prdId  != 'number')
  {
    return null;
  }
  else{
    this.ProductList.filter((p)=>{
      if(p.ID===prdId){
       this.ProductListByID=p;
      }
      
    });
    return this.ProductListByID;
  
  
  }
  }
}
