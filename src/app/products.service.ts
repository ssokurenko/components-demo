import { Injectable } from '@angular/core';

import { Product } from './models/product.interface';

@Injectable()
export class ProductsService {

  constructor() { 

  }

  getProducts() {
    const products: Array<Product> = [
      {
        id: 1,
        model: 'iPad',
        brand: 'Apple',
        color: 'gold',
        imageUrl: 'https://www.mediaexpert.pl/temp/thumbs-new/2/products/834/tablet-apple-ipad-9-7-wifi-32-gb-mpgt2fd-a-zloty_832834_2260660_889x1024w50.jpg'
      },
      {
        id: 2,
        model: 'REDMI 4X',
        brand: 'Xiaomi',
        color: 'gold',
        imageUrl: 'https://9.allegroimg.com/original/03dd5d/35286f6f4132ba1bf2bd7cf826f9'
      },
      {
        id: 3,
        model: 'Galaxy Tab E',
        brand: 'Samsung',
        color: 'white',
        imageUrl: 'https://www.mediaexpert.pl/temp/thumbs-new/2/products/951/tablet-samsung-galaxy-tab-e-t561-3g-bialy_562951_1519138_1167x1836w50.jpg'
      }
    ];

    return products;
  }

}
