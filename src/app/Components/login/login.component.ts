import { Component, OnInit } from '@angular/core';
import { tokenParamters } from 'src/app/classes/tokenParamters';

import{ProductService} from 'src/app/Services/Product.Service'
import { Router } from '@angular/router';
import{AuthService} from 'src/app/Services/auth.Service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenParamters:tokenParamters;
  UserName:string;
  password:string;
  error:boolean=false;
  showspinner:boolean=true;
  constructor(private _ProductService:ProductService,private _Router:Router
  ,private _AuthService:AuthService) { }

  ngOnInit(): void {
    
  }

  DoLogin():void {
    this.showspinner=false; 
   this._ProductService.Login(this.UserName,this.password)
   .subscribe(
     data=>{
       this.tokenParamters=data;
       this._ProductService.accessToken=this.tokenParamters.access_token;
      
       sessionStorage.setItem('access_token', this.tokenParamters.access_token);
       
       this._AuthService.logedUserName=this.UserName;
       this._Router.navigate(["/Home"]);
       
     }
     ,
     err=>
     {
      this.error=true;
     }
   );

  }


}
