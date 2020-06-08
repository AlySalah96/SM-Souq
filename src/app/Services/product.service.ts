import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Iproduct} from 'src/app/Interfaces/iproduct';
import { environment } from './../../environments/environment';
import { tokenParamters } from 'src/app/classes/tokenParamters';
import { Http, Headers } from "@angular/http";
import { CartService } from 'src/app/Services/Cart.Service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public accessToken:string="";
  constructor(private _http:HttpClient,private _CartService:CartService) { }
  
  GetAllProducts():Observable<Iproduct[]>
  {
  
    if(sessionStorage.getItem('access_token')!=null)
    {
      var httpOptions1 =  new HttpHeaders({ 'Authorization':'Bearer '+sessionStorage.getItem('access_token')});
    
    } 
   
     return this._http.get<Iproduct[]>(`${environment.MyApiUrL}/products`,{headers:httpOptions1});
  }

  GetProductsByCatId(CatId:number)
  {
    if(sessionStorage.getItem('access_token')!=null)
    {
      var httpOptions1 =  new HttpHeaders({ 'Authorization':'Bearer '+sessionStorage.getItem('access_token')});
    
    }
    return this._http.get<Iproduct[]>(`${environment.MyApiUrL}/products/AllProductsByCatId/${CatId}`,{headers:httpOptions1});

  }
///////////////////////////////////////////////////////
DecreaseProducts():any
{
  if(sessionStorage.getItem('access_token') !=null)
    {
      var httpOptions1 =  new HttpHeaders({ 'Authorization':'Bearer '+sessionStorage.getItem('access_token')});
    
    } 
    
  for(let p of this._CartService.selectedProducts)
  {
    let apiURL=`http://localhost:57985/api/account/${p.Product.Id}`;

    const fd = new FormData();
    fd.append('Quantity',p.Quantity.toString());
  //alert(p.Quantity.toString());
    return this._http.put<any>(apiURL,fd,{headers:httpOptions1});

  }
}

  ///////////////////////
  getProductByID(ProductID):any{
    if(sessionStorage.getItem('access_token') !=null)
    {
      var httpOptions1 =  new HttpHeaders({ 'Authorization':'Bearer '+sessionStorage.getItem('access_token')});
    
    }   
    return this._http.get(`${environment.MyApiUrL}/products/${ProductID}`,{headers:httpOptions1});
    
  }

insertProduct(Product:Iproduct,productImage:File):Observable<Iproduct>{
  if(sessionStorage.getItem('access_token') !=null)
    {
      var httpOptions1 =  new HttpHeaders({ 'Authorization':'Bearer '+sessionStorage.getItem('access_token')});
    
    }   
const fd = new FormData();
fd.append('Name',Product.Name);
fd.append('Price',Product.Price.toString());
fd.append('Quantity',Product.Quantity.toString());
fd.append('Description',Product.Description);  
fd.append("Image",productImage);
fd.append("CatId",Product.CatId.toString());
    
   return this._http.post<Iproduct>(`${environment.MyApiUrL}/products`,fd,{headers:httpOptions1})
}

updateProduct(Product:Iproduct,productImage:File):Observable<Iproduct>
{
  if(sessionStorage.getItem('access_token') !=null)
    {
      var httpOptions1 =  new HttpHeaders({ 'Authorization':'Bearer '+sessionStorage.getItem('access_token')});
    
    }   
  const fd = new FormData();
  fd.append('Name',Product.Name);
  fd.append('Price',Product.Price.toString());
  fd.append('Quantity',Product.Quantity.toString());
  fd.append('Description',Product.Description);  
  fd.append("Image",productImage);
  fd.append("CatId",Product.CatId.toString());


  return this._http.put<Iproduct>(`${environment.MyApiUrL}/products/${Product.Id}`,fd,{headers:httpOptions1})

}

DeleteProduct(ProductID:number)
{
  if(sessionStorage.getItem('access_token') !=null)
    {
      var httpOptions1 =  new HttpHeaders({ 'Authorization':'Bearer '+sessionStorage.getItem('access_token')});
    
    } 
  return this._http.delete<Iproduct>(`${environment.MyApiUrL}/products/${ProductID}`,{headers:httpOptions1})

}





 apiLoginURL="http://localhost:57985/login";

Login(userName:string,password:string):Observable<tokenParamters>
{
   var httpOptions =  new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    //'Accept': '*/*'
    // ,'Authorization': 'my-auth-token'
    });
    var data="grant_Type=password&username="+userName+"&password="+password;
   
    const fd=new FormData();
    
   
    return this._http.post<tokenParamters>(this.apiLoginURL,data,{headers:httpOptions})
  
}

////////////////////////////

}



