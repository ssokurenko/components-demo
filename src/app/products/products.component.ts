import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../models/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products;
  @Output() selectedProductEvent = new EventEmitter<Product>();
  selectedProduct?: Product;
  constructor() { }

  ngOnInit() {
    
  }
  handleSelectedProductEvent (product: Product) {
    this.selectedProduct = product;
    this.selectedProductEvent.emit(product);
  }
}
