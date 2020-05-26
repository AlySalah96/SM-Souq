import { Component, OnInit } from '@angular/core';
import{ProductService} from 'src/app/Services/Product.Service'
import{Iproduct} from 'src/app/Interfaces/iproduct';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _ProductService:ProductService,private _Router:Router) { }

  productsList:Iproduct[];
  ngOnInit(): void {
   this._ProductService.GetAllProducts().subscribe(
      res=>this.productsList=res,
      err=>{console.log(err) ;}
    )

  }

  DeleteProduct(ProductID)
  {
    this._ProductService.DeleteProduct(ProductID).subscribe(
      res=>{this._Router.navigate(['/Dashboard']) ;alert("deleted successfully !")},
      err=>{console.log(err) ;}
    )
  }

}
