import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  products = this.ProductService.getProducts()


  // newId!: number;
  // newId = this.products[this.products.length - 1].id + 1;


  addProductForm = new FormGroup({
    "id": new FormControl(''),
    "title": new FormControl('', Validators.required),
    "price": new FormControl('', Validators.required),
    "description": new FormControl('', Validators.required),
    "category": new FormControl('', Validators.required),
    "image": new FormControl('', Validators.required),
    rating: new FormGroup({
      "rate": new FormControl(0),
      "count": new FormControl(1)
    }
    )
  }
  )


  get id() {
    return (this.addProductForm.get("id") as FormControl)
  }
  get title() {
    return (this.addProductForm.get("title") as FormControl)
  }
  get price() {
    return (this.addProductForm.get("price") as FormControl)
  }
  get description() {
    return (this.addProductForm.get("description") as FormControl)
  }
  get category() {
    return (this.addProductForm.get("category") as FormControl)
  }
  get image() {
    return (this.addProductForm.get("image") as FormControl)
  }

  saveProduct() {
    this.ProductService.addProduct(this.addProductForm.value);

    this.router.navigate(["/"])

  }


  clearInputs() {
    this.addProductForm.patchValue({
      "title": '',
      "price": '',
      "description": '',
      "category": '',
      "image": ''
    })
  }
}