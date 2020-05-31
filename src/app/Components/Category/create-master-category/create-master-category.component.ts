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

    this._masterCategoryService
      .onGetAllMasterCategories()
      .subscribe((resposne) => {
        this.MasterCategories = resposne as MasterCategory[];
      });
  }

  onSaveMasterCategory() {
    const masterCategory = new MasterCategory(this.form.controls.name.value);

    this._masterCategoryService
      .onSaveMasterCategory(masterCategory)
      .subscribe((response) => {
        let masterCategories = [...this.MasterCategories];
        masterCategories.push(response as MasterCategory);
        this.MasterCategories = masterCategories;
        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.form.reset();
      });
  }
}
