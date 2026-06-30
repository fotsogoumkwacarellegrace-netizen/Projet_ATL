import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../../models/product/product';
import { ModalProductView } from '../modal-product-view/modal-product-view';
import { signal  } from '@angular/core';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItem, ModalProductView],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = signal<Product[]>([
    {
      id: 1, name: 'Robe de soirée',
      description: 'pour tout evenement en soirée,en soie',
      soldPrice: 22000,
      regularPrice: 28000,
      createdAt: new Date('2026-01-15'),
      categories: ['vêtement', 'femme', 'traditionnel'],
      image: 'images/products/j.jpeg'
    },
    {
      id: 2, name: 'Robe traditionnelle',
      description: 'Tissée à la main, motifs Bamiléké',
      soldPrice: 22000,
      regularPrice: 28000,
      createdAt: new Date('2026-02-10'),
      categories: ['accessoire', 'artisanat'],
      image: 'images/products/robe.jpg'
    },
    {
      id: 3, name: 'Sac en raphia',
      description: 'Tressé en fibre de raphia, original',
      soldPrice: 10000,
      regularPrice: 12000,
      createdAt: new Date('2026-02-10'),
      categories: ['accessoire', 'artisanat'],
      image: 'images/products/arno.jpg'
    },
    {
      id: 4, name: 'Ensemble traditionnel',
      description: 'en pagne traditionnel, motifs Bamiléké',
      soldPrice: 20000,
      regularPrice: 22000,
      createdAt: new Date('2026-02-10'),
      categories: ['accessoire', 'artisanat'],
      image: 'images/products/ensemble (2).jpg'
    },
    {
      id: 5, name: 'Cardigan',
      description: 'Tissée à la main, motifs Bamiléké',
      soldPrice: 3000,
      regularPrice: 5000,
      createdAt: new Date('2026-02-10'),
      categories: ['accessoire', 'artisanat'],
      image: 'images/products/shelter.jpg'
    },
    {
      id: 6, name: 'Boubou traditionnel',
      description: 'Tissée à la main, motifs Bamiléké',
      soldPrice: 13000,
      regularPrice: 15000,
      createdAt: new Date('2026-02-10'),
      categories: ['accessoire', 'artisanat'],
      image: 'images/products/bruno.jpeg'
    },
    {
      id: 7, name: 'Kabaa camerounais',
      description: 'Tissée à la main, motifs Bamiléké',

      soldPrice: 2500,
      regularPrice: 4000,
      createdAt: new Date('2026-02-10'),
      categories: ['accessoire', 'artisanat'],
      image: 'images/products/delight.jpg'
    },
    {
      id: 8, name: 'Chemise homme',
      description: 'Tissée à la main, motifs Bamiléké',
      soldPrice: 3000,
      regularPrice: 4000,
      createdAt: new Date('2026-02-10'),
      categories: ['accessoire', 'artisanat'],
      image: 'images/products/robert.jpg'
    },
  ])

  products1 = [
{ id: 1, name: 'Robe traditionnelle', price: 25000, image: '/...' },
{ id: 2, name: 'Sac en raphia', price: 12000, image: '/...' },
// ... 8 produits
];

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
  // Le constructor — la méthode de construction
  constructor() {
    console.log('Composant ProductList créé !');
    // Tout ce qui doit s'exécuter AU MOMENT de la création va ici
  }

  onProductClicked(product: Product) {
    console.log('Produit cliqué :', product);
    this.onDisplayProductViewModal(product);
  }
     // données J6

  // État du modal
  isDisplayModal = signal(false);
  modalProduct = signal<Product | undefined>(undefined);

  // Méthode appelée quand un produit est cliqué
  onDisplayProductViewModal(product: Product) {
    this.modalProduct.set(product);
    this.isDisplayModal.set(true);
  }

  // Méthode appelée quand le modal demande à être fermé
  onCloseModal() {
    this.isDisplayModal.set(false);
    this.modalProduct.set(undefined);
  }

  // ... état existant ...

  // NOUVEAU output : retransmet vers App
  favoriteAdded = output<Product>();

  // Méthode appelée quand le modal ajoute aux favoris
  onFavoriteAdded(product: Product) {
    console.log('Favori ajouté :', product.name);
    this.favoriteAdded.emit(product);
  }
}

