import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktails.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CocktailService {
  
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    new Cocktail('mojito','https://static.cuisineaz.com/400x320/i14978-recette-de-mojito.jpeg', 'description'),
    new Cocktail('Margharita', 'http://images4.fanpop.com/image/polls/709000/709359_1304646612352_full.jpg?v=1304646620', 'description')
  ]);

  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0])
  
  constructor() { }

  selectCocktail(index: number) : void {
    this.cocktail.next(this.cocktails.value[index]);
  }
  
}
