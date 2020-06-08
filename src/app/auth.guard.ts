import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import{ProductService} from 'src/app/Services/Product.Service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{AuthService} from 'src/app/Services/auth.Service'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _AuthService:AuthService , private _ProductService:ProductService,
     private _Router:Router) { }

  canActivate():boolean{
  if(this._AuthService.loggedIn())return true
  else 
  {
    this._Router.navigate(["/Login"]);
    return false;
  }

  }
  
}
