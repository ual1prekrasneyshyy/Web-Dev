import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IgxCarouselModule } from 'igniteui-angular';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgxCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
