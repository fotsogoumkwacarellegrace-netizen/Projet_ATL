import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { signal }  from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  hello(): void {
    console.log('Bonjour !');
     // void = ne retourne rien
  }
  getMessage(): string {
  return 'Bonjour le monde';
  // string = retourne une chaîne de caractères
}

getCount(): number {
  return 42;
  // number = retourne un nombre
}
isAvailable(): boolean {
  return true;
// boolean = retourne true ou false
}
  greet(name: string) {
    console.log('Bonjour ' + name + ' !');
  }

  afficherTitre() {
    console.log(this.title());      // Affiche : "My Shop"
    console.log(this.count());      // Affiche : 0
  }
  changerTitre() {
  this.title.set('My New Shop');
  this.count.set(10);
}
incrementer() {
  this.count.update(c => c + 1);
  // c = valeur actuelle, on retourne la nouvelle
}

product = signal({
  name: 'Robe pour femme',
  price: 12.99
});

currentDate = signal(new Date());

  title = signal('My Shop');
  age = signal(45);
  isVerified = signal(true);
  isActive = signal(true);
  count = signal(0);
  names = signal<string[]>(['Gildas', 'Jules', 'Mireille']);
  price = signal(25000);
}
