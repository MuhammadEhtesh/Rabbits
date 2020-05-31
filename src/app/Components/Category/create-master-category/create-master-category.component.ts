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
  form: FormGroup;
  MasterCategory = new MasterCategory();
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
    const masterCategory = new MasterCategory(
      this.form.controls.name.value,
      this.MasterCategory._id
    );
    if (this.MasterCategory._id === null) {
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
    } else {
      this._masterCategoryService
        .onUpdateMasterCategory(masterCategory)
        .subscribe(() => {
          let masterCategories = [...this.MasterCategories];
          const indexToBeDeleted = masterCategories.findIndex((x) => {
            return x._id === this.MasterCategory._id;
          });
          masterCategories.splice(indexToBeDeleted, 1);
          this.MasterCategory.name = this.form.controls.name.value;
          masterCategories.splice(indexToBeDeleted, 0, this.MasterCategory);
          this.MasterCategories = masterCategories;
          this.form.markAsPristine();
          this.form.markAsUntouched();
          this.form.reset();
        });
    }
  }

  onEditMasterCategory(id: string) {
    let categories = [...this.MasterCategories];
    const category = categories.find((x) => {
      return x._id === id;
    });
    this.MasterCategory._id = category._id;
    this.form.patchValue({ name: category.name });
  }

  onDeleteMasterCategory(id: string) {
    this._masterCategoryService.onDeleteMasterCategory(id).subscribe(() => {
      let categories = [...this.MasterCategories];
      const index = categories.findIndex((x) => {
        return x._id === id;
      });
      categories.splice(index, 1);
      this.MasterCategories = categories;
    });
  }
}
