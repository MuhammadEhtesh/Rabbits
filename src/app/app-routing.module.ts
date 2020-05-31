import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateProductComponent } from "./Components/Product/create-product/create-product.component";
import { ProductsComponent } from "./Components/Product/products/products.component";
import { CreateMasterCategoryComponent } from "./Components/Category/create-master-category/create-master-category.component";

const routes: Routes = [
  { path: "create", component: CreateProductComponent },
  { path: "products", component: ProductsComponent },
  { path: "mastercategory", component: CreateMasterCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
