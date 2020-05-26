import { Component, OnInit } from '@angular/core';
import{ProductService} from 'src/app/Services/Product.Service'
import{Iproduct} from 'src/app/Interfaces/iproduct';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _ProductService:ProductService,private route:Router) { }
  productsList:Iproduct[];
  ngOnInit(): void {
   this._ProductService.GetAllProducts().subscribe(
      res=>this.productsList=res,
      err=>{console.log(err) ;}
    )

  }

  /*viewDetais(ProductID)
  {
    return  this.route.navigate(['/Product',ProductID]);

  }*/
   
}
