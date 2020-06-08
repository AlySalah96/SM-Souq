import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUSComponent } from './Components/about-us/about-us.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import {FormsModule} from '@angular/forms';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { LoginComponent } from './Components/login/login.component';
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

import{ProductService} from 'src/app/Services/product.Service';
import{AuthService} from 'src/app/Services/auth.Service';
import { CartComponent } from './Components/cart/cart.component'
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{MaterialsModule} from './Materials/Materials.Module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutUSComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    DashboardComponent,
    NewProductComponent,
    UpdateProductComponent,
    LoginComponent,
    SignUpComponent, 
    CartComponent
     
    //JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MaterialsModule
  
    //AngularFontAwesomeModule

  ],
  providers: [/*AuthService,ProductService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
