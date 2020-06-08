import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/Interfaces/ICart';
import { ProductService } from 'src/app/Services/Product.Service';
import { Location } from '@angular/common'

import { CartService } from 'src/app/Services/Cart.Service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:ICart[]=[];
totalPrice:number=0;
AllProductsCount :string='0';
dataSource;
@ViewChild(MatPaginator)paginator :MatPaginator;
displayedColumns=["Id","ProductName","Quantity","Increase","Decrease","Delete"];
  constructor( private _CartService:CartService,private _Location: Location
  ,private _ProductService: ProductService ) { }

  ngOnInit(): void {
   this.cart=this._CartService.GetCartInfo();
   this.totalPrice=this._CartService.totalPrice;
   this.dataSource = new MatTableDataSource<ICart>(this.cart);
   this.dataSource.paginator =this.paginator;
  }
  Back() {
    this._Location.back();
  }

  IncreaseProduct(index)
  {
    this._CartService.IncreaseProduct(index);
    this.totalPrice= this._CartService.totalPrice;
    this.AllProductsCount=this._CartService.AllProductsCount.toString();
    
     this._CartService.changeCart( this.AllProductsCount);
     this._CartService.currentMessage.subscribe(response=>{ this.AllProductsCount =response.toString(); });


  }
  decreaseProduct(index)
  {
    this._CartService.decreaseProduct(index);
    this.totalPrice= this._CartService.totalPrice;
    this.AllProductsCount=this._CartService.AllProductsCount.toString();

    this._CartService.changeCart( this.AllProductsCount);
    this._CartService.currentMessage.subscribe(response=>{ this.AllProductsCount =response.toString(); });

  }

  deleteProduct(index)
  {
    this._CartService.deleteProduct(index);
    this.totalPrice= this._CartService.totalPrice;

    this.AllProductsCount=this._CartService.AllProductsCount.toString();

    this._CartService.changeCart( this.AllProductsCount);
    this._CartService.currentMessage.subscribe(response=>{ this.AllProductsCount =response.toString(); });

  }

  DecreaseProducts()
  {
   
    this._ProductService.DecreaseProducts().subscribe
    (
      res=>
      {
      this._CartService.AllProductsCount=0;
      this._CartService.selectedProducts=[];

      this._CartService.changeCart(this._CartService.AllProductsCount.toString());
      //this._CartService.currentMessage.subscribe(response=>{ this.AllProductsCount =response.toString(); });
      
      },
      err=>alert(err)
    ) 
  }

}
