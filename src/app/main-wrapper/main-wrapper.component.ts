import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.interface';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {

  productsService = new ProductsService;
  products: Array<Product> = this.productsService.getProducts();
  selectedProduct: Product;
  
  constructor() {

  }

  ngOnInit() {
  }

  handleSelectedProductEvent(product: Product) {
    this.selectedProduct=product;
  }
}
