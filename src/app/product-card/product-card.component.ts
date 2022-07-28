import { ProductService } from './../_services/product.service';
import { Product } from './../_interfaces/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input("productData") product!: Product

  @Output() getProductData: EventEmitter<Product> = new EventEmitter();

  constructor(private productsService: ProductService) { }



  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.productsService.addToCart(product);
  }

  getProductFromChild(product: Product) {
    this.getProductData.emit(product)
  }

}
