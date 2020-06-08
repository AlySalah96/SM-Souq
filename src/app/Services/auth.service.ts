import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenParamters } from 'src/app/classes/tokenParamters';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import{ProductService} from 'src/app/Services/Product.Service'

import { CartService } from 'src/app/Services/Cart.Service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public accessToken:string="";
  public logedUserName:string="";
  constructor(private _http:HttpClient, private _ProductService:ProductService,private _Router:Router
  , private _CartService:CartService,) { }


 apiLoginURL="http://localhost:57985/login";
 apiRegisterURL="http://localhost:57985/api/account";


 RegisterUser(user)
 {  
   console.log(user);
  var httpOptions =  new HttpHeaders({
    'Content-Type': 'application/json',
    //'Accept': '*/*'
    // ,'Authorization': 'my-auth-token'
    });
  return this._http.post<any>(this.apiRegisterURL,user,{headers:httpOptions})

 }

 Login(userName:string,password:string):Observable<tokenParamters>
 {
    var httpOptions =  new HttpHeaders({
     'Content-Type': 'application/x-www-form-urlencoded',
     //'Accept': '*/*'
     // ,'Authorization': 'my-auth-token'
     });
     var data="grant_Type=password&username="+userName+"&password="+password;
     //var httpOptions =  new HttpHeaders().append( 'Content-Type','application/x-www-form-urlencoded')
     const fd=new FormData();
     
    
     return this._http.post<tokenParamters>(this.apiLoginURL,data,{headers:httpOptions})
     //.map(res=>res.json())
 }
 

 loggedIn()
 {
    return !! this._ProductService.accessToken ;
 }


 logout()
 {
  //this._ProductService.accessToken="";
  sessionStorage.key["access_token"]="";
  this._CartService.AllProductsCount=0;
  this._CartService.changeCart( this._CartService.AllProductsCount.toString());
  //this._CartService.currentMessage.subscribe(response=>{ this._CartService.AllProductsCount =response; });
this.logedUserName="";
  this._Router.navigate(["/Login"]);
 }
}
