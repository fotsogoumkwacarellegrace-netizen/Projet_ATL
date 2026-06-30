import { Component, output } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { Product } from '../../models/product/product';
@Component({
  selector: 'app-container',
  imports: [ProductList],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  favoriteAdded = output<Product>();
  onFavoriteAdded(product: Product) {
    this.favoriteAdded.emit(product);
  }
}
