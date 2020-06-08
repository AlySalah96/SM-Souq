import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';

import { Location } from '@angular/common'
import { Iproduct } from 'src/app/Interfaces/iproduct';
import { ICart } from 'src/app/Interfaces/ICart';
import { ProductService } from 'src/app/Services/Product.Service'
import { CartService } from 'src/app/Services/Cart.Service'
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ProductID: number;
  Product: Iproduct;
  add: number = -1;
 
  AllProductsCount :string='0';
  constructor(private _ProductService: ProductService, private _ActivatedRoute: ActivatedRoute
    , private _Location: Location, private _CartService:CartService) { }

  ngOnInit(): void {
    this.ProductID = this._ActivatedRoute.snapshot.params["ProductID"];
    this._ProductService.getProductByID(this.ProductID)
      .subscribe(
        res => {

          this.Product = res,
            console.log(res)
        },
        err => console.log(err)


      )

  }
  Back() {
    this._Location.back();
  }

  ADDTOCARD(Id: number) {
    this.add = Id;
  }
  Buy(Productcount: number) {
    let seleectedProduct = this.Product;
    let data:ICart = {
      Product : this.Product,
      Quantity : Productcount ,   //+ to convert to number
      CustomerId :1}

    
    
    this.AllProductsCount=this._CartService.AddToCart(data).toString();
    alert(Productcount +" item(s) Added sucessfully" )

     //this._CartService.currentMessage.subscribe(response=>{ this.AllProductsCount =response});
    //alert( this.AllProductsCount + "from cart ")

     this._CartService.changeCart( this.AllProductsCount);
     this._CartService.currentMessage.subscribe(response=>{ this.AllProductsCount =response.toString(); });

 
  }
   
}
