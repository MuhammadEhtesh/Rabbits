import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../../Services/product-service.service";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.onGetAllProducts().subscribe((products) => {
      this.products = products as Product[];
    });
  }
}
