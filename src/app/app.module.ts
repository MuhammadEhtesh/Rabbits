import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from "@angular/material/input";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductsComponent } from "./Components/Product/products/products.component";
import { CreateProductComponent } from "./Components/Product/create-product/create-product.component";
import { CreateMasterCategoryComponent } from "./Components/Category/create-master-category/create-master-category.component";

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductsComponent,
    CreateMasterCategoryComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
