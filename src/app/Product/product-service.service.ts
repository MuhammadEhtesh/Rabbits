import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  onSaveProduct(product) {
    return this.http.post("http://localhost:3000/api/v1/product", product);
  }

  onGetAllProducts() {
    return this.http.get("http://localhost:3000/api/v1/product");
  }
}
