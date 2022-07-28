import { Product } from './../../_interfaces/product';
import { ProductService } from './../../_services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id!: number;
  product!: Product;
  constructor(private routing: ActivatedRoute, private productService: ProductService, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.routing.params.subscribe(params => this.id = params['id']);
    this.getProductByID()
  }


  getProductByID() {
    this.product = this.productService.getProductByID(this.id) as Product
  }

  goBack() {
    this.location.back()
  }

}
