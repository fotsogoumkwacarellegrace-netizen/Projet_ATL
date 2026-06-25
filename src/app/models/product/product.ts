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
  price:number;
  image:string;
}
