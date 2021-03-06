import { Injectable } from '@angular/core';

import {Cocktail } from '../models/cocktails.model';
import { BehaviorSubject } from 'rxjs';

import { Ingredient } from '../models/ingredients.model';

@Injectable()
export class CocktailService {
  
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    new Cocktail(
      'mojito',
      'https://static.cuisineaz.com/400x320/i14978-recette-de-mojito.jpeg', 
      'description',
      [
        new Ingredient('perrier',1),
        new Ingredient('citron',2),
        new Ingredient('sucre',3)
      ]
    ),
    new Cocktail('Margharita', 'http://images4.fanpop.com/image/polls/709000/709359_1304646612352_full.jpg?v=1304646620', 'description')
  ]);

  constructor() { }

  getCocktail(index: number): Cocktail {
    return this.cocktails.value[index];
  }
}
