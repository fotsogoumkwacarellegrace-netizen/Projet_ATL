import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product/product';

@Component({
  selector: 'app-modal-product-view',
  imports: [CommonModule],
  templateUrl: './modal-product-view.html',
  styleUrl: './modal-product-view.css',
})
export class ModalProductView {
  product = input<Product>();
  isFavorite = input(false);
  close = output<void>();
  favoriteAdded = output<Product>();

  onCloseClick(): void {
    this.close.emit();
  }

  onAddToFavorites(): void {
    const selectedProduct = this.product();
    if (selectedProduct) {
      this.favoriteAdded.emit(selectedProduct);
    }
  }
}
