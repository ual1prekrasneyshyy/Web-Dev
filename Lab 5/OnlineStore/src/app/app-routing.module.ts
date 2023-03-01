import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductItemComponent} from "./components/product-item/product-item.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'products/category/:id', component: ProductListComponent},
  {path: 'products/item/:id', component: ProductItemComponent},
  {path: '', component: AppComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
