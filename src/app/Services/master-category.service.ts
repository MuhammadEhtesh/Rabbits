import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MasterCategory } from "../models/MasterCategory";

@Injectable({
  providedIn: "root",
})
export class MasterCategoryService {
  constructor(private http: HttpClient) {}

  onSaveMasterCategory(masterCategory: MasterCategory) {
    return this.http.post(
      "http://localhost:3000/api/v1/mastercategory",
      masterCategory
    );
  }

  onGetAllMasterCategories() {
    return this.http.get("http://localhost:3000/api/v1/mastercategory");
  }
}
