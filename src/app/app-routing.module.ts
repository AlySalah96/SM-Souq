import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUSComponent } from './Components/about-us/about-us.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { LoginComponent } from './Components/login/login.component';
import {SignUpComponent } from './Components/sign-up/sign-up.component';
import{AuthGuard} from 'src/app/auth.guard';
import { CartComponent } from './Components/cart/cart.component'

const routes: Routes = [
  {path:'Home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'Aboutus',component:AboutUSComponent },
  {path:'Dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'NewProduct',component:NewProductComponent,canActivate:[AuthGuard]},
  {path:'Products/:ProductID',component:ProductDetailsComponent,canActivate:[AuthGuard] },
  {path:'UpdateProduct/:ProductID',component:UpdateProductComponent,canActivate:[AuthGuard]},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'Login',component:LoginComponent},
  {path:'SignUp',component:SignUpComponent},
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}    
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
