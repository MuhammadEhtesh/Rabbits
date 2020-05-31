import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { MasterCategory } from "src/app/models/MasterCategory";
import { MasterCategoryService } from "src/app/Services/master-category.service";

@Component({
  selector: "app-create-master-category",
  templateUrl: "./create-master-category.component.html",
  styleUrls: ["./create-master-category.component.css"],
})
export class CreateMasterCategoryComponent implements OnInit {
  form;
  MasterCategories: MasterCategory[];

  constructor(private _masterCategoryService: MasterCategoryService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    });
  }

  onSaveMasterCategory() {
    const masterCategory = new MasterCategory(this.form.name);
    this._masterCategoryService
      .onSaveMasterCategory(masterCategory)
      .subscribe((response) => {
        this.form.reset();
      });
  }
}
