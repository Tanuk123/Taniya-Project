import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { MoreCartComponent } from './more-cart/more-cart.component';
import { SigninComponent } from './signin/signin.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    MoreCartComponent,
    SigninComponent,
    CartpageComponent,
    AddCartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
