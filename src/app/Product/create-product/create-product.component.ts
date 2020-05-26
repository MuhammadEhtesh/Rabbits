import { mimeType } from "./mime-type.validator";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductServiceService } from "../product-service.service";
import { Product } from "../../models/product";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"],
})
export class CreateProductComponent implements OnInit {
  form: FormGroup;
  imagePreview: string;
  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      price: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required]),
    });
  }

  onSaveProduct() {
    const product = new Product();
    product.name = this.form.controls.name.value;
    product.price = this.form.controls.price.value;
    product.image = this.form.controls.image.value.name;
    this.productService.onSaveProduct(product).subscribe(() => {
      this.form.reset();
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
