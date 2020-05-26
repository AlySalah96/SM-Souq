import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Iproduct} from 'src/app/Interfaces/iproduct';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }
  GetAllProducts():Observable<Iproduct[]>
  {
    
     return this._http.get<Iproduct[]>(`${environment.MyApiUrL}/products`)
  }

  getProductByID(ProductID):any{
    //console.log(this._http.get(`${environment.MyApiUrL}/products/${ProductID}`));   
    return this._http.get(`${environment.MyApiUrL}/products/${ProductID}`);
    
  }

insertProduct(Product:Iproduct,productImage:File):Observable<Iproduct>{
  const httpOptions =  new HttpHeaders({
    //'Content-Type': 'application/json',
    //'Accept': '*/*'
    // ,'Authorization': 'my-auth-token'
    });
const fd = new FormData();
fd.append('Name',Product.Name);
fd.append('Price',Product.Price.toString());
fd.append('Quantity',Product.Quantity.toString());
fd.append('Description',Product.Description);  
fd.append("Image",productImage);
    
   return this._http.post<Iproduct>(`${environment.MyApiUrL}/products`,fd,{headers:httpOptions})
}

updateProduct(Product:Iproduct,productImage:File):Observable<Iproduct>
{
  const fd = new FormData();
  fd.append('Name',Product.Name);
  fd.append('Price',Product.Price.toString());
  fd.append('Quantity',Product.Quantity.toString());
  fd.append('Description',Product.Description);  
  fd.append("Image",productImage);

  return this._http.put<Iproduct>(`${environment.MyApiUrL}/products/${Product.Id}`,fd)

}

DeleteProduct(ProductID:number)
{
  return this._http.delete<Iproduct>(`${environment.MyApiUrL}/products/${ProductID}`)

}


}
////////////////////////////


