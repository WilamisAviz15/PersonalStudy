import { Product } from './../product.model';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent  {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';
}
