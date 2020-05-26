import { Component, OnInit } from '@angular/core';
import{ProductService} from 'src/app/Services/Product.Service'
import{Iproduct} from 'src/app/Interfaces/iproduct';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  Product:Iproduct;

  productImage:File;
  constructor(private _ProductService:ProductService,private _Router:Router) { }

  ngOnInit(): void {
    this.Product={
      Id:null,
      Name:null,
      Description:'',
      Price:null,
      Quantity:null,
      Image:null
    }
  }
  readURL(event): void 
  {
   
    
    if (event.target.files && event.target.files[0])
     {
      this.productImage= event.target.files[0];
    }
  
  }
  addProduct(){
    this._ProductService.insertProduct(this.Product,this.productImage).subscribe(
      res=>this._Router.navigate(['/Home']),
      err=>console.log(err)
    )
   }


}
