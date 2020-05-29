import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  onSaveProduct(product) {
    return this.http.post("http://localhost:3000/api/v1/product", product);
  }

  onGetAllProducts() {
    this.http
      .get<{ products: Product[] }>("http://localhost:3000/api/v1/product")
      .subscribe((products) => {
        console.log(products);
      });
  }
}
