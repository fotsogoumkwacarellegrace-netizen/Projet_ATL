import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-exemples',
  imports: [],
  templateUrl: './exemples.html',
  styleUrl: './exemples.css',
})
export class Exemples {


  // Type 1 — string (chaîne de caractères)
  title = signal<string>('My Shop');
// OU (TypeScript devine tout seul) :
// title = signal('My Shop');

// Avec une méthode :
greet(name: string): string {
  return 'Bonjour ' + name;
}

// Type 2 — number (nombres)
age = signal(25);
price = signal(15.99);
count = signal(0);

// Méthode :
double(n: number): number {
  return n * 2;
}
// Type 3 — boolean (vrai/faux)
isActive = signal(true);
isLoading = signal(false);
isLoggedIn = signal<boolean>(false);

// Méthode :
canEdit(): boolean {
  return this.isActive() && this.isLoggedIn();
}

// Type 4 — Array (tableaux)

// Tableau de strings
names = signal<string[]>(['Gildas', 'Jules', 'Mireille']);

// Tableau de numbers
ages = signal<number[]>([25, 30, 22, 18]);

// Tableau de booleans
flags = signal<boolean[]>([true, false, true]);

// Tableau VIDE (il faut typer explicitement)
products = signal<string[]>([]);


// Type 5 — any (à éviter ⚠️)

// ⚠️ À UTILISER EN DERNIER RECOURS
test = signal<any>('texte');
// test.set(42);          // OK, accepté
// test.set(true);        // OK, accepté
// test.set([1, 2, 3]);   // OK, accepté

// ❌ MAUVAISE PRATIQUE
// Vous perdez TOUS les avantages de TypeScript

product = signal({
  name: 'Robe pour femme',
  description: 'Jolie robe traditionnelle',
  soldPrice: 12.99,
  regularPrice: 19.99,
  isOnSale: true
});

products1 = signal([
  {
    name: 'Robe pour femme',
    description: 'Jolie robe traditionnelle',
    soldPrice: 12.99,
    regularPrice: 19.99,
    isOnSale: true
  },
  {
    name: 'Sac en raphia',
    description: 'Tressé à la main',
    soldPrice: 8.99,
    regularPrice: 12.99,
    isOnSale: false
  }
]);

}
