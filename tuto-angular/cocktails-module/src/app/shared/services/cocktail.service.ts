import { Injectable } from '@angular/core';

import {Cocktail } from '../models/cocktails.model';
import { BehaviorSubject } from 'rxjs';

import { Ingredient } from '../models/ingredients.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class CocktailService {
  
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { 
    this.initCocktails()
  }

  initCocktails(): void {
    this.http.get<Cocktail[]>('https://cocktails-40d51.firebaseio.com/cocktails-40d51.json').subscribe( (cocktails: Cocktail[]) => {
      this.cocktails.next(cocktails);
    });
  }

  getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails.pipe(
      filter((cocktails: Cocktail[]) => cocktails !== null ),
      map( (cocktails: Cocktail[]) => cocktails[index])
    )
  }
  addCocktail(cocktail: Cocktail): void {
    const cocktails = this.cocktails.value;
    cocktails.push(new Cocktail(cocktail.name, cocktail.img, cocktail.desc, cocktail.ingredients.map( ingredient => new Ingredient(ingredient.name, ingredient.quantity))))
    this.cocktails.next(cocktails);
  }
  editCocktail(editCocktail: Cocktail): void {
    const cocktails = this.cocktails.value.slice();
    const index = cocktails.map( c => c.name ).indexOf(editCocktail.name)
    cocktails[index] = editCocktail;
    this.cocktails.next(cocktails);
    this.save();
  }

    save(): void {
      this.http.put('https://cocktails-40d51.firebaseio.com/cocktails-40d51.json', this.cocktails.value).subscribe()
    } 
}
