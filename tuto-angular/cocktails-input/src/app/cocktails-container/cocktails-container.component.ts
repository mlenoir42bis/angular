import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktails.model';

@Component({
  selector: 'app-cocktails-container',
  templateUrl: './cocktails-container.component.html',
  styleUrls: ['./cocktails-container.component.css']
})
export class CocktailsContainerComponent implements OnInit {

  public cocktails: Cocktail[] = [
    new Cocktail('mojito','https://static.cuisineaz.com/400x320/i14978-recette-de-mojito.jpeg', 'description'),
    new Cocktail('Margharita', 'http://images4.fanpop.com/image/polls/709000/709359_1304646612352_full.jpg?v=1304646620', 'description')
  ];
  public cocktail: Cocktail;
  constructor() { }

  ngOnInit() {
    this.cocktail = this.cocktails[0];
  }

  updateCocktail(index: number) {
    this.cocktail = this.cocktails[index];
  }
}
