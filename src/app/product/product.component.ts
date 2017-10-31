import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../models/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product;
  @Input() selectedOnParent;

  @Output() selectedProductEvent = new EventEmitter<Product>();

  selectedProduct: Product;

  constructor() {

  }

  ngOnInit() {
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
    this.selectedProductEvent.emit(this.selectedProduct);
  }
}
