import { Injectable } from '@angular/core';
import { ICart } from 'src/app/Interfaces/ICart';

import{BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  selectedProducts:ICart[]=[];

  AllProductsCount:number=0;
  totalPrice:number=0;

  private messageSource=new BehaviorSubject('');
  currentMessage=this.messageSource.asObservable();

  changeCart(Message:string)
  {
    this.messageSource.next(Message);
    //alert("in change Cart "+this.messageSource.value);
  }

  constructor() { }
  AddToCart(cart:ICart):number
  {
    for(let i in this.selectedProducts )
    {
      if(this.selectedProducts[i].Product.Id==cart.Product.Id)
      {
        this.selectedProducts[i].Quantity  = +cart.Quantity +  +this.selectedProducts[i].Quantity;
         this.AllProductsCount += +cart.Quantity ;
        
            this.totalPrice=0;
            for(let p of this.selectedProducts)
            {
              this.totalPrice += +(p.Quantity * p.Product.Price);
            }
           
             return this.AllProductsCount;
           
            
      }

      
    }

    this.selectedProducts.push(cart);
   
    this.AllProductsCount += +cart.Quantity;
   
    this.totalPrice=0;
   for(let p of this.selectedProducts)
   {

     this.totalPrice += +(p.Quantity * p.Product.Price);
   }
    return this.AllProductsCount;
  }

  GetCartInfo()
  {
    return this.selectedProducts;
  }

  IncreaseProduct(index)
  {
  this.selectedProducts[index].Quantity ++;
   this.AllProductsCount++;
   this.totalPrice=0;
   for(let p of this.selectedProducts)
   {

     this.totalPrice += +(p.Quantity * p.Product.Price);
   }
    return this.totalPrice ;
  }

  decreaseProduct(index)
  {
    this.selectedProducts[index].Quantity --;
    this.AllProductsCount--;
    this.totalPrice=0;
    for(let p of this.selectedProducts)
    {
 
      this.totalPrice += +(p.Quantity * p.Product.Price);
    }
     return this.totalPrice ;
  }

  deleteProduct(index)
  {
    let deletedQuantity=this.selectedProducts[index].Quantity;
    this.selectedProducts.splice(index,1);
    this.AllProductsCount=+this.AllProductsCount - deletedQuantity ;

    this.totalPrice=0;
    for(let p of this.selectedProducts)
    {
 
      this.totalPrice += +(p.Quantity * p.Product.Price);
    }
     return this.totalPrice ;
  }

}
