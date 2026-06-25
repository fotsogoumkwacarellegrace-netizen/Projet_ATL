import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../../models/product/product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1, name: 'ROBE DE SOIREE',
      description: '',
      price: 2500,
      image: 'assets/images/products/j.jpeg'
    },
    {
      id: 2, name: 'VETEMENT DE JOUR',
      description: '',
      price: 3000,
      image: 'assets/images/products/ensemble1.jpg'
    },
    {
      id: 3, name: 'SAC',
      description: '',
      price: 2600,
      image: 'assets/images/products/arno.jpg'
    },
    {
      id: 4, name: 'ENSEMBLE',
      description: '',
      price: 1000,
      image: 'assets/images/products/ensemble.jpg'
    },
    {
      id: 5, name: 'CARDIGAN',
      description: '',
      price: 3000,
      image: 'assets/images/products/shelter.jpg'
    },
    {
      id: 6, name: 'BOUBOU',
      description: '',
      price: 10000,
      image: 'assets/images/products/bruno.jpeg'
    },
    {
      id: 7, name: 'KABAA',
      description: '',
      price: 3500,
      image: 'assets/images/products/delight.jpg'
    },
    {
      id: 8, name: 'CHEMISE',
      description: '',
      price: 2500,
      image: 'assets/images/products/robert.jpg'
    },
  ]

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
