import { Component, OnInit } from '@angular/core';
import{AuthService} from 'src/app/Services/auth.Service'
import { CartService } from 'src/app/Services/Cart.Service'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
AllProductsCount:string="0";
  constructor(public _AuthService:AuthService,public _CartService:CartService) { 
    //this.AllProductsCount=this._CartService.AllProductsCount;
    //alert(this.AllProductsCount);

  }
  ngOnInit(): void { 
   this._CartService.currentMessage.subscribe(res=> this.AllProductsCount=res);
  
  }
  
  InCart()
  {
    if(this.AllProductsCount=="0")
    {
      return false ;
      
    }
    else
    return true;
  }  
  
}
