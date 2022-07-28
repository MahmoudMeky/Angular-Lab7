import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Routes/product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SlicerPipe } from './_pipes/slicer.pipe';
import { FilterPipe } from './_pipes/filter.pipe';
import { HighlightDirective } from './_directives/highlight.directive';
import { RepeatDirective } from './_directives/repeat.directive';
import { ProductDetailsComponent } from './Routes/product-details/product-details.component';
import { HttpClientModule } from "@angular/common/http";
import { UsersComponent } from './Routes/users/users.component';
import { UserdetailsComponent } from './Routes/userdetails/userdetails.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { AddProductComponent } from './forms/add-product/add-product.component'



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    CartComponent,
    FavoriteComponent,
    SlicerPipe,
    FilterPipe,
    HighlightDirective,
    RepeatDirective,
    ProductDetailsComponent,
    UsersComponent,
    UserdetailsComponent,
    LoginFormComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
