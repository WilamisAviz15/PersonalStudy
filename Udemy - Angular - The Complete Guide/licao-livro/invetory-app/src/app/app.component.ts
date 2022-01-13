import { Product } from './product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {
  title = 'invetory-app';
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        "NICEHAT", 
        "A Nice Black Hat",
        "/assets/images/products/black-hat.jpg",
        ["Men", "Accessories", "Hats"],
        29.99
      ),
      new Product(
        "NEATOJACKET", 
        "Blue Jacket",
        "/assets/images/products/blue-jacket.jpg",
        ['Women', 'Apparel', 'Jackets & Vests'],
        269.99
      ),
      new Product(
        "LABAXURAS DECANTAS", 
        "aaa aaa",
        "/assets/images/products/blue-jacket.jpg",
        ['Women', 'Apparel', 'Jackets & Vests'],
        1269.99
      ),
    ];
  }

  productWasSelected(product: Product): void{
    console.log('Product Clicked: ', product);
  }
}
