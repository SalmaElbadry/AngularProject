import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab1';


  isClicked:boolean=false;
  productsList:any;

  @ViewChild(ProductComponent) product?: ProductComponent;

  viewItems(){

    this.product?.renderValues();
    this.productsList=this.product?.ProductList;

    if(!this.isClicked)
    this.isClicked=true;
    else
    this.isClicked=false;
    
   
   }
}
