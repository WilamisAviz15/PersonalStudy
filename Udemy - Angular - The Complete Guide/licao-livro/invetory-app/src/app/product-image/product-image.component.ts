import { Product } from './../product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-image',
  template: `
    <img class="product-image" [src]="product.imageUrl">
  `
})
export class ProductImageComponent {
  @Input() product: Product;

}
