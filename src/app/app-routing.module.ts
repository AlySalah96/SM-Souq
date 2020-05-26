import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUSComponent } from './Components/about-us/about-us.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';


const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Aboutus',component:AboutUSComponent },
  {path:'Dashboard',component:DashboardComponent},
  {path:'NewProduct',component:NewProductComponent},
  {path:'Products/:ProductID',component:ProductDetailsComponent },
  {path:'UpdateProduct/:ProductID',component:UpdateProductComponent},
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
