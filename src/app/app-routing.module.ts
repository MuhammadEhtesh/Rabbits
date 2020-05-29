import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateProductComponent } from "./Product/create-product/create-product.component";
import { ProductsComponent } from "./Product/products/products.component";

const routes: Routes = [
  { path: "create", component: CreateProductComponent },
  { path: "products", component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
