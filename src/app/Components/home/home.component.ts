import { Component, OnInit } from '@angular/core';
import{ProductService} from 'src/app/Services/Product.Service'
import{Iproduct} from 'src/app/Interfaces/iproduct';
import { Router } from '@angular/router';
import{Icategory} from 'src/app/Interfaces/icategory';

import{CategoryService} from 'src/app/Services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _ProductService:ProductService,private route:Router,private _CategoryService:CategoryService) { }
  productsList:Iproduct[];
  categoriesList:Icategory[];
  displayToken:string;
  ngOnInit(): void {
    this.displayToken=this._ProductService.accessToken;
   this._ProductService.GetAllProducts().subscribe(
      res=>this.productsList=res,
      err=>{console.log(err) ;}
    )
    this._CategoryService.GetAllCategories().subscribe(
      res=>this.categoriesList=res,
      err=>{console.log(err) ;}
    )

  }

  /*viewDetais(ProductID)
  {
    return  this.route.navigate(['/Product',ProductID]);

  }*/

  GetAllProductByCatId(Id:number)
  {
    if(Id==0)
    {
      alert(Id)
      this._ProductService.GetAllProducts().subscribe(
        res=>this.productsList=res,
        err=>{console.log(err) ;}
      )
    }
    else{
      this._ProductService.GetProductsByCatId(Id).subscribe(
        res=>this.productsList=res,
        err=>{console.log(err) ;}
      )
    }
  }
   
}
