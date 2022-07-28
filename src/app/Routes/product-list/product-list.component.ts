import { Router } from '@angular/router';
import { Product } from '../../_interfaces/product';
import { ProductService } from '../../_services/product.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  searchText!: string;
  searchProps: string[] = ['title', 'description'];

  favProduct!: Product;
  products!: Product[];

  @Output() getFavProduct: EventEmitter<Product> = new EventEmitter();


  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {

    this.products = this.ProductService.getProducts();

  }

  ngDoCheck() {
    // console.log(this.searchText)
  }

  searchPropsHandler(property: string) {
    this.searchProps = [property]

  }

  // getProduct(product: Product) {
  //   this.favProduct = product

  // }

  // passFavProductToParent() {
  //   this.getFavProduct.emit(this.favProduct)
  // }

  goLogin() {
    this.router.navigate(["/login"])
  }
  goAddProduct() {
    this.router.navigate(["/addproduct"])
    console.log(this.products[1])
  }
}

