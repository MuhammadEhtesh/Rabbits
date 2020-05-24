import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  onSaveProduct(product) {
    return this.http.post("http://localhost:3000/api/v1/product", product);
  }
}
