import { Component, OnInit } from '@angular/core';
import{ProductService} from 'src/app/Services/Product.Service'
import{Iproduct} from 'src/app/Interfaces/iproduct';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{CategoryService} from 'src/app/Services/category.service';
import{Icategory} from 'src/app/Interfaces/icategory';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  Product:Iproduct;

  productImage:File;
  categoriesList:Icategory[];
  CatId:string;
  constructor(private _ProductService:ProductService,private _Router:Router
  ,private _CategoryService:CategoryService) { }

  ngOnInit(): void {
    this.Product={
      Id:null,
      Name:null,
      Description:'',
      Price:null,
      Quantity:null,
      Image:null,
      CatId:null
    }
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
  addProduct(){
    //this.Product.CatId=parseInt(this.CatId);
    alert(this.Product.CatId);
    this._ProductService.insertProduct(this.Product,this.productImage).subscribe(
      res=>this._Router.navigate(['/Home']),
      err=>console.log(err)
    )
   }
   
    
   

}
