import { Component, OnInit } from '@angular/core';
import {IProduct, ICategory, DiscountOffers} from 'SharedClassesandtypes/SharedClassesandtypes';
import {ProductServiceService} from '../Services/product-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private ProductService : ProductServiceService) {
    this.Discount= DiscountOffers.NoDiscount ;
    this.StoreName= "Fashion Store"
    this.StoreLogo='assets/img/images 1.jpeg';
    this.ProductList= [
      {ID: 1, Name:"product 1",Quantity:10, Price: 100, img:'assets/img/images 1.jpeg'},
      {ID: 2, Name:"product 2",Quantity:5, Price: 200, img:'assets/img/images 1.jpeg'},
      {ID: 3, Name:"product 3",Quantity:5, Price: 200, img:'assets/img/images 1.jpeg'}

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
  

  isNoDescount=DiscountOffers['NoDiscount'];
  

  isPurchasedChange()
  {
      if(this.IsPurshased==true){
        this.IsPurshased=false;
      }
  }

  productList:any;  
   ProductID:any;  
  ngOnInit(): void {
    this.productList=this.ProductService.GetAllProducts();
    this.ProductID=this.ProductService.GetProductById(2);

  }

  renderValues(){
    return this.productList=this.ProductService.GetAllProducts();
  }

}
