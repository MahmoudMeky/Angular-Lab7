import { Product } from './../_interfaces/product';
import { ProductService } from './../_services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productsService: ProductService) { }

  cartItems: Product[] = [];

  ngOnInit(): void {
    this.productsService.getCartItems().subscribe((data) => {
      this.cartItems = data
    })
  }

  removeItem(id: number) {
    this.productsService.removeCartItem(id)
  }

}
