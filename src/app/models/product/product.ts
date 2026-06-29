import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {}
export interface Product{
  id: number;
  name: string;
  description: string;
  image:string;
  soldPrice: number;
  regularPrice: number;
  createdAt: Date;
  updatedAt?: Date;          // Le ? = optionnel
  categories: string[];      // Tableau de strings
}
