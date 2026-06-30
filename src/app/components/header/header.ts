import { Component } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  favoritesCount = input(0);
}
