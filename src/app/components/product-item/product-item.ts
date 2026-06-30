import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input, output } from '@angular/core';
import { Product } from '../../models/product/product';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  product = input.required<Product>();
  productClicked = output<Product>();
  displayProductViewModal = output<Product>();

  onProductClick(): void {
    const selectedProduct = this.product();
    if (selectedProduct) {
      this.productClicked.emit(selectedProduct);
      this.displayProductViewModal.emit(selectedProduct);
    }
  }

  closeModal = output<void>();

  onCloseClick(): void {
    this.closeModal.emit();
  }
}
