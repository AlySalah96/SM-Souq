import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common'
import{Iproduct} from 'src/app/Interfaces/iproduct';
import{ProductService} from 'src/app/Services/Product.Service'
import { ActivatedRoute, Router } from '@angular/router';
import{CategoryService} from 'src/app/Services/category.service';
import{Icategory} from 'src/app/Interfaces/icategory';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  ProductID: number;
  Product: Iproduct;
  productImage:File;
  categoriesList:Icategory[];

  constructor(private _ProductService :ProductService,private _ActivatedRoute:ActivatedRoute 
    ,  private _Location:Location ,private _Router:Router
    ,private _CategoryService:CategoryService) { }


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

     this._CategoryService.GetAllCategories().subscribe(
      res=>{this.categoriesList=res;},
      err=>{console.log(err) ;}
    )

  }
  readURL(event): void 
  {
   
    
    if (event.target.files && event.target.files[0])
     {
      this.productImage= event.target.files[0];
    }
  
  }
  updateProduct()
  {
    this._ProductService.updateProduct(this.Product,this.productImage).subscribe(
      res=>this._Router.navigate(['/Home']),
      err=>console.log(err)
    )
  }

}
