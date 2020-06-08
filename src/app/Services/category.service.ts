import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import{Iproduct} from 'src/app/Interfaces/iproduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tokenParamters } from 'src/app/classes/tokenParamters';
import { Http, Headers } from "@angular/http";
import { CartService } from 'src/app/Services/Cart.Service';
import{Icategory} from 'src/app/Interfaces/icategory';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public accessToken:string="";

  constructor(private _http:HttpClient,private _CartService:CartService) { }

  GetAllCategories():Observable<Icategory[]>
  {
  
    if(sessionStorage.getItem('access_token') !=null)
    {
      var httpOptions1 =  new HttpHeaders({ 'Authorization':'Bearer '+sessionStorage.getItem('access_token')});
    
    } 
   
     return this._http.get<Icategory[]>(`${environment.MyApiUrL}/Categories`,{headers:httpOptions1});
  }
}
