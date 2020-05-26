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
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
