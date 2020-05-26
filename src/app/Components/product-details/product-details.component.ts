import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common'
import{Iproduct} from 'src/app/Interfaces/iproduct';
import{ProductService} from 'src/app/Services/Product.Service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ProductID: number;
  Product: Iproduct;
  constructor(private _ProductService :ProductService,private _ActivatedRoute:ActivatedRoute 
    ,  private _Location:Location ) { }

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
  Back()
{
  this._Location.back();
}

}
